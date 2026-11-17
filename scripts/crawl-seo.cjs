const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const crypto = require('node:crypto')
const zlib = require('node:zlib')
const { chromium, request } = require(
  process.env.PLAYWRIGHT_MODULE || 'playwright-core',
)
const root = process.cwd()
const out = process.env.TEST_OUTPUT || '/tmp/didi-seo-crawl'
const site = process.env.TEST_BASE_URL || 'https://www.didi-audio.com'
const ts = require(root + '/node_modules/typescript')
function load(file) {
  const module = { exports: {} }
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText
  vm.runInNewContext(
    code,
    {
      module,
      exports: module.exports,
      require: (name) => {
        if (!/\.(png|jpe?g|webp|svg)$/.test(name)) throw Error(name)
        return {
          __esModule: true,
          default: { src: '/mock/' + path.basename(name) },
        }
      },
    },
    { filename: file },
  )
  return module.exports
}
const { articles } = load(root + '/src/data/blog.ts')
const { products } = load(root + '/src/data/products.ts')
const routes = [
  '/',
  '/about-didiaudio',
  '/speaker-rental-da-nang',
  '/speaker-rental-da-nang-ko',
  '/speaker-rental-da-nang-ru',
  '/speaker-rental-da-nang-zh',
  ...products.map((p) => '/products/' + p.id),
  ...articles.map((a) => '/' + a.slug),
]
const report = {
  startedAt: new Date().toISOString(),
  site,
  canonicalOrigin: 'https://www.didi-audio.com',
  routeCount: routes.length,
  inventory: {
    products: products.map((p) => ({ id: p.id, name: p.name, price: p.price })),
    articles: articles.map((a) => ({
      slug: a.slug,
      title: a.title,
      date: a.date,
    })),
  },
  raw: [],
  googlebot: [],
  redirects: [],
  endpoints: [],
  browser: [],
  errors: [],
  notes: [
    'Read-only SEO crawl. Fetch origin is report.site; canonical origin is report.canonicalOrigin. No Google Search Console access or indexing claims.',
    'Raw HTML parsed in inert DOMParser; scripts not executed. Browser page routes use fresh contexts and block third-party requests.',
    'Lab metrics are 3-second snapshots with no CPU/network throttling; not field Core Web Vitals.',
  ],
}
const save = () =>
  fs.writeFileSync(out + '/results.json', JSON.stringify(report, null, 2))
const sha = (text) => crypto.createHash('sha256').update(text).digest('hex')
async function parse(parser, html, url) {
  return parser.evaluate(
    ({ html, url }) => {
      const d = new DOMParser().parseFromString(html, 'text/html')
      const all = (sel, attr) =>
        Array.from(d.querySelectorAll(sel)).map((n) =>
          attr ? n.getAttribute(attr) : n.textContent.trim(),
        )
      const schema = all('script[type="application/ld+json"]').map((t) => {
        try {
          return JSON.parse(t)
        } catch {
          return { parseError: true, raw: t.slice(0, 300) }
        }
      })
      const links = all('a[href]', 'href').map((href) => {
        try {
          return new URL(href, url).href
        } catch {
          return href
        }
      })
      const headings = Array.from(d.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(
        (n) => ({ level: n.tagName, text: n.textContent.trim() }),
      )
      return {
        lang: d.documentElement.lang,
        title: d.title,
        description: all('meta[name="description"]', 'content'),
        robots: all('meta[name="robots"],meta[name="googlebot"]', 'content'),
        canonical: all('link[rel="canonical"]', 'href'),
        hreflang: Array.from(
          d.querySelectorAll('link[rel="alternate"][hreflang]'),
        ).map((n) => ({ language: n.hreflang, href: n.href })),
        headings,
        images: Array.from(d.querySelectorAll('img')).map((n) => ({
          src: n.getAttribute('src'),
          alt: n.getAttribute('alt'),
          loading: n.getAttribute('loading'),
          sizes: n.getAttribute('sizes'),
        })),
        og: Array.from(d.querySelectorAll('meta[property^="og:"]')).map(
          (n) => ({ property: n.getAttribute('property'), content: n.content }),
        ),
        schema,
        links,
        ids: all('[id]', 'id'),
        visibleText: d.body.textContent
          .replace(/\s+/g, ' ')
          .trim()
          .slice(0, 3000),
        bodyTextLength: d.body.textContent.length,
      }
    },
    { html, url },
  )
}
;(async () => {
  fs.mkdirSync(out + '/raw', { recursive: true })
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  })
  report.browserVersion = await browser.version()
  const parser = await browser.newPage()
  const api = await request.newContext({
    ignoreHTTPSErrors: false,
    userAgent: 'Mozilla/5.0 DidiSEOAudit/1.0',
  })
  try {
    for (let i = 0; i < routes.length; i += 4) {
      await Promise.all(
        routes.slice(i, i + 4).map(async (route) => {
          try {
            const res = await api.get(site + route, {
              maxRedirects: 0,
              timeout: 45000,
            })
            const html = await res.text()
            const item = {
              route,
              status: res.status(),
              headers: res.headers(),
              bytes: Buffer.byteLength(html),
              sha256: sha(html),
              ...(await parse(parser, html, site + route)),
            }
            report.raw.push(item)
            fs.writeFileSync(
              out +
                '/raw/' +
                (route === '/' ? 'home' : route.slice(1).replaceAll('/', '_')) +
                '.html.gz',
              zlib.gzipSync(html),
            )
          } catch (e) {
            report.errors.push({ phase: 'crawl', route, error: e.message })
          }
        }),
      )
      save()
      console.log('RAW', Math.min(i + 4, routes.length), '/', routes.length)
    }
    for (const route of [
      '/robots.txt',
      '/sitemap.xml',
      '/sitemap-0.xml',
      '/products/not-a-real-speaker',
      '/not-a-real-seo-page',
    ]) {
      const res = await api.get(site + route, {
        maxRedirects: 0,
        timeout: 45000,
      })
      const body = await res.text()
      report.endpoints.push({
        route,
        status: res.status(),
        headers: res.headers(),
        body:
          route.endsWith('.txt') || route.endsWith('.xml') ? body : undefined,
        ...(route.includes('.') ? {} : await parse(parser, body, site + route)),
      })
      save()
    }
    for (const start of site === 'https://www.didi-audio.com'
      ? [
          'http://didi-audio.com/',
          'http://www.didi-audio.com/',
          'https://didi-audio.com/',
          'https://www.didi-audio.com/',
        ]
      : [site + '/']) {
      const chain = []
      let url = start
      for (let i = 0; i < 8; i++) {
        try {
          const res = await api.get(url, { maxRedirects: 0, timeout: 45000 })
          const location = res.headers().location
          chain.push({ url, status: res.status(), location })
          if (!location) break
          url = new URL(location, url).href
        } catch (e) {
          chain.push({ url, error: e.message })
          break
        }
      }
      report.redirects.push({ start, chain })
      save()
    }
    const google = await request.newContext({
      userAgent:
        'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    })
    for (const route of [
      '/',
      '/products/' + products[0].id,
      '/' + articles[0].slug,
    ]) {
      const res = await google.get(site + route, {
        maxRedirects: 0,
        timeout: 45000,
      })
      const html = await res.text()
      report.googlebot.push({
        route,
        status: res.status(),
        sha256: sha(html),
        ...(await parse(parser, html, site + route)),
      })
      save()
    }
    await google.dispose()
    for (const width of [1440, 390])
      for (const route of [
        '/',
        '/products/' + products[0].id,
        '/' + articles[0].slug,
      ])
        for (const js of [true, false]) {
          const context = await browser.newContext({
            viewport: { width, height: width === 390 ? 844 : 900 },
            javaScriptEnabled: js,
            locale: 'vi-VN',
            timezoneId: 'Asia/Ho_Chi_Minh',
          })
          await context.route('**/*', (r) =>
            r.request().url().startsWith(site) ? r.continue() : r.abort(),
          )
          if (js)
            await context.addInitScript(() => {
              window.__seoLab = { lcp: [], shifts: [], longTasks: [] }
              try {
                new PerformanceObserver((l) => {
                  for (const e of l.getEntries())
                    window.__seoLab.lcp.push({
                      startTime: e.startTime,
                      size: e.size,
                      tag: e.element?.tagName,
                      url: e.url,
                    })
                }).observe({ type: 'largest-contentful-paint', buffered: true })
                new PerformanceObserver((l) => {
                  for (const e of l.getEntries())
                    if (!e.hadRecentInput) window.__seoLab.shifts.push(e.value)
                }).observe({ type: 'layout-shift', buffered: true })
                new PerformanceObserver((l) => {
                  for (const e of l.getEntries())
                    window.__seoLab.longTasks.push(e.duration)
                }).observe({ type: 'longtask', buffered: true })
              } catch {}
            })
          const p = await context.newPage()
          const errors = []
          p.on('pageerror', (e) => errors.push(e.message))
          try {
            const response = await p.goto(site + route, {
              waitUntil: 'domcontentloaded',
              timeout: 60000,
            })
            await p.waitForTimeout(3000)
            const item = {
              width,
              route,
              js,
              status: response.status(),
              metrics: js
                ? await p.evaluate(() => ({
                    lab: window.__seoLab,
                    navigation: performance
                      .getEntriesByType('navigation')
                      .map((n) => ({
                        ttfb: n.responseStart - n.requestStart,
                        domContentLoaded: n.domContentLoadedEventEnd,
                        loadEventEnd: n.loadEventEnd,
                      })),
                    resourceCount:
                      performance.getEntriesByType('resource').length,
                    knownTransferBytes: performance
                      .getEntriesByType('resource')
                      .reduce((s, r) => s + r.transferSize, 0),
                  }))
                : null,
              dom: await p.evaluate(
                (price) => ({
                  h1: Array.from(document.querySelectorAll('h1')).map(
                    (n) => n.textContent,
                  ),
                  documentWidth: document.documentElement.scrollWidth,
                  viewportWidth: innerWidth,
                  links: Array.from(document.querySelectorAll('a[href]')).map(
                    (n) => n.getAttribute('href'),
                  ),
                  mainText: document
                    .querySelector('main')
                    ?.innerText.slice(0, 2500),
                  priceVisible: Array.from(document.querySelectorAll('main *'))
                    .filter((n) =>
                      new RegExp('^' + price + 'k\\s*\\/?\\s*(ngày)?$').test(
                        n.textContent.trim(),
                      ),
                    )
                    .slice(-5)
                    .map((n) => ({
                      text: n.textContent,
                      opacity: getComputedStyle(n).opacity,
                      ancestorOpacity: Array.from(
                        (function* (e) {
                          while (e) {
                            yield e
                            e = e.parentElement
                          }
                        })(n),
                      )
                        .filter((e) => getComputedStyle(e).opacity === '0')
                        .map((e) => e.tagName),
                    })),
                }),
                products[0].price,
              ),
              errors,
            }
            report.browser.push(item)
            const tag =
              (route === '/'
                ? 'home'
                : route.startsWith('/products')
                  ? 'product'
                  : 'article') +
              '-' +
              width +
              '-' +
              (js ? 'js' : 'no-js')
            await p.screenshot({ path: out + '/' + tag + '.png' })
            console.log('BROWSER', tag)
            save()
          } catch (e) {
            report.errors.push({
              phase: 'browser',
              route,
              width,
              js,
              error: e.message,
            })
            save()
          } finally {
            await context.close()
          }
        }
    report.finishedAt = new Date().toISOString()
    save()
  } finally {
    await api.dispose()
    await parser.close()
    await browser.close()
  }
})().catch((e) => {
  report.failure = e.stack
  save()
  console.error(e)
  process.exitCode = 1
})
