const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { chromium, request } = require(
  process.env.PLAYWRIGHT_MODULE || 'playwright-core',
)
const input =
  process.env.SEO_CRAWL_RESULTS || '/tmp/didi-seo-crawl/results.json'
const r = JSON.parse(fs.readFileSync(input, 'utf8'))
const base = process.env.TEST_BASE_URL || r.site
const output = process.env.TEST_OUTPUT || path.dirname(input)
const site = 'https://www.didi-audio.com'
const checks = [],
  report = { startedAt: new Date().toISOString(), checks, errors: [] }
const save = () =>
  fs.writeFileSync(
    path.join(output, 'validation.json'),
    JSON.stringify(report, null, 2),
  )
function check(name, run) {
  try {
    run()
    checks.push(name)
    console.log('PASS', name)
    save()
  } catch (error) {
    report.failure = { check: name, message: error.stack }
    save()
    throw error
  }
}
const urls = new Set(r.raw.map((p) => new URL(p.route, site).href))
const graph = new Map()
check(
  'crawl completed with 58 HTML pages, three bot samples, 12 browser samples and no collection errors',
  () => {
    assert.ok(r.finishedAt)
    assert.ok(!r.failure)
    assert.deepEqual(r.errors, [])
    assert.equal(r.raw.length, 58)
    assert.equal(r.googlebot.length, 3)
    assert.equal(r.browser.length, 12)
    for (const sample of r.browser) {
      assert.equal(sample.status, 200)
      assert.deepEqual(sample.errors, [])
    }
  },
)
check(
  'JSON-LD serialization preserves Vietnamese text and escapes script-breaking markup',
  () => {
    const ts = require('typescript')
    const module = { exports: {} }
    const source = ts.transpileModule(
      fs.readFileSync('src/lib/seo.ts', 'utf8'),
      {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          esModuleInterop: true,
        },
      },
    ).outputText
    vm.runInNewContext(source, {
      module,
      exports: module.exports,
      require: () => ({ __esModule: true, default: { src: '/test-logo.png' } }),
    })
    const value = { text: 'ĐiĐi Audio </script><script>alert(1)</script>' }
    const encoded = module.exports.jsonLd(value)
    assert.ok(!encoded.includes('<'))
    assert.deepEqual(JSON.parse(encoded), value)
  },
)
check(
  'all 57 preserved URLs and the new user guide return200, self-canonical, unique title and one H1 in raw HTML',
  () => {
    assert.equal(r.raw.length, 58)
    const titles = new Set()
    for (const p of r.raw) {
      assert.equal(p.status, 200, p.route)
      assert.equal(p.canonical.length, 1)
      assert.equal(
        new URL(p.canonical[0]).href,
        new URL(p.route, site).href,
        p.route,
      )
      assert.equal(
        p.headings.filter((h) => h.level === 'H1').length,
        1,
        p.route,
      )
      assert.ok(p.description[0])
      assert.ok(p.title)
      assert.ok(!p.title.includes('�'))
      assert.match(p.headers['content-type'], /charset=utf-8/i)
      assert.ok(!p.description[0].includes('�'))
      assert.ok(!p.robots.some((x) => /noindex/i.test(x)))
      assert.equal(p.lang, 'vi')
      assert.ok(!titles.has(p.title), p.route)
      titles.add(p.title)
      assert.ok(
        p.og.some(
          (m) =>
            m.property === 'og:url' &&
            new URL(m.content).href === new URL(p.route, site).href,
        ),
      )
    }
  },
)
check(
  'raw JSON-LD has one verified LocalBusiness, no fabricated ratings/hours/stock or FAQ rich-result markup',
  () => {
    for (const p of r.raw) {
      assert.ok(
        p.schema.every((s) => !s.parseError),
        p.route,
      )
      const entities = p.schema.flatMap((s) => s['@graph'] || [s])
      const business = entities.filter((s) => s['@type'] === 'LocalBusiness')
      assert.equal(business.length, 1, p.route)
      assert.equal(business[0].address.streetAddress, '41 Tống Duy Tân')
      assert.equal(business[0].telephone, '0339197917')
      assert.ok(!entities.some((s) => s['@type'] === 'FAQPage'))
      assert.ok(
        !/ratingValue|reviewCount|aggregateRating|inventoryLevel|availability|openingHours|priceRange/.test(
          JSON.stringify(p.schema),
        ),
        p.route,
      )
      for (const article of entities.filter((s) => s['@type'] === 'Article'))
        assert.ok(
          article.image.every((image) =>
            image.startsWith('https://www.didi-audio.com/'),
          ),
        )
    }
    const product = r.inventory.products[0]
    const service = r.raw
      .find((p) => p.route === '/products/' + product.id)
      .schema.find((s) => s['@type'] === 'Service')
    assert.equal(service.offers.priceSpecification.price, product.price * 1000)
    assert.equal(
      service.offers.priceSpecification.referenceQuantity.unitCode,
      'DAY',
    )
    assert.equal(
      service.offers.businessFunction,
      'http://purl.org/goodrelations/v1#LeaseOut',
    )
  },
)
check(
  'video library exposes six visible, attributed VideoObjects with verified YouTube dates and durations in raw HTML',
  () => {
    const page = r.raw.find(
      (entry) => entry.route === '/video-jbl-partybox-320',
    )
    assert.ok(page)
    const videos = page.schema
      .flatMap((node) => node['@graph'] || [node])
      .filter((node) => node['@type'] === 'VideoObject')
    const sources = JSON.parse(
      fs.readFileSync('public/images/stage-320-videos/sources.json', 'utf8'),
    )
    assert.equal(videos.length, 6)
    assert.equal(new Set(videos.map((video) => video['@id'])).size, 6)
    for (const video of videos) {
      const source = sources.find((entry) => entry.sourcePage === video.url)
      assert.ok(source && source.public && source.playableInEmbed)
      assert.equal(video.uploadDate, source.uploadDate)
      assert.equal(video.duration, `PT${source.durationSeconds}S`)
      assert.equal(video.author.name, source.channel)
      assert.ok(page.ids.includes(`video-${source.id}`))
      assert.ok(page.links.includes(source.sourcePage))
      assert.ok(
        page.headings.some(
          (heading) => heading.level === 'H3' && heading.text === video.name,
        ),
      )
    }
  },
)
check(
  'guide has six crawlable topics, official references, safe microphone scope and TechArticle/Breadcrumb in raw HTML',
  () => {
    const page = r.raw.find(
      (entry) => entry.route === '/huong-dan-su-dung-jbl-partybox-320',
    )
    assert.ok(page)
    const entities = page.schema.flatMap((node) => node['@graph'] || [node])
    const article = entities.filter((node) => node['@type'] === 'TechArticle')
    assert.equal(article.length, 1)
    assert.equal(article[0].inLanguage, 'vi')
    assert.ok(
      article[0].citation.some((url) => url.includes('JBL_PARTYBOX_STAGE_320')),
    )
    assert.equal(
      entities.filter((node) => node['@type'] === 'BreadcrumbList').length,
      1,
    )
    for (const topic of [
      'bluetooth',
      'microphone',
      'controls',
      'auracast',
      'charging',
      'troubleshooting',
    ])
      assert.ok(page.ids.includes('guide-' + topic))
    assert.ok(page.links.includes('tel:0339197917'))
    assert.ok(page.links.includes('https://zalo.me/0339197917'))
    assert.ok(
      page.headings.some(
        (heading) =>
          heading.text === 'Cách xử lý' || heading.text.includes('Micro bị hú'),
      ),
    )
    assert.ok(
      !entities.some(
        (node) => node['@type'] === 'FAQPage' || node['@type'] === 'HowTo',
      ),
    )
  },
)
check(
  'all internal page/anchor links resolve and all58 URLs are reachable from homepage raw link graph',
  () => {
    for (const p of r.raw) {
      const edges = new Set()
      for (const href of p.links) {
        const u = new URL(href)
        if (![new URL(base).origin, site].includes(u.origin)) continue
        if (/^\/_next\//.test(u.pathname) || /\.[a-z0-9]+$/i.test(u.pathname))
          continue
        const target = r.raw.find((p) => p.route === u.pathname)
        assert.ok(target, `${p.route}: ${href}`)
        edges.add(target.route)
        if (u.hash)
          assert.ok(
            target.ids.includes(decodeURIComponent(u.hash.slice(1))),
            `${p.route}: missing ${href}`,
          )
      }
      graph.set(p.route, edges)
    }
    const visited = new Set(['/']),
      queue = ['/']
    while (queue.length)
      for (const to of graph.get(queue.shift()) || [])
        if (!visited.has(to)) {
          visited.add(to)
          queue.push(to)
        }
    assert.equal(visited.size, 58)
  },
)
check(
  'sitemap only includes the canonical58 pages and robots allows crawl without redirect/noindex/error URLs',
  () => {
    const xml = r.endpoints.find((e) => e.route === '/sitemap-0.xml')
    assert.equal(xml.status, 200)
    const locs = [...xml.body.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
    assert.equal(locs.length, 58)
    assert.equal(new Set(locs).size, 58)
    assert.ok(locs.every((url) => urls.has(new URL(url).href)))
    assert.ok(!xml.body.includes('<lastmod>'))
    const robots = r.endpoints.find((e) => e.route === '/robots.txt')
    assert.equal(robots.status, 200)
    assert.ok(/Allow: \//.test(robots.body))
    assert.ok(!/Disallow:\s*\/\S*/.test(robots.body))
    assert.ok(robots.body.includes(site + '/sitemap.xml'))
  },
)
check('unknown product and unknown slug return real404 with noindex', () => {
  for (const route of [
    '/products/not-a-real-speaker',
    '/not-a-real-seo-page',
  ]) {
    const e = r.endpoints.find((e) => e.route === route)
    assert.equal(e.status, 404)
    assert.ok(e.robots.some((x) => x.includes('noindex')))
  }
})
check(
  'Googlebot-UA simulation receives same title/canonical/H1 without crawler-only content',
  () => {
    for (const bot of r.googlebot) {
      const page = r.raw.find((p) => p.route === bot.route)
      assert.equal(bot.status, page.status)
      assert.equal(bot.title, page.title)
      assert.deepEqual(bot.canonical, page.canonical)
      assert.deepEqual(bot.headings, page.headings)
    }
  },
)
check('no-JS home exposes visible H1 and non-transparent current price', () => {
  for (const sample of r.browser.filter((p) => p.route === '/' && !p.js)) {
    assert.equal(sample.dom.h1.length, 1)
    assert.ok(sample.dom.priceVisible.length)
    assert.ok(
      sample.dom.priceVisible.every((p) => p.ancestorOpacity.length === 0),
    )
  }
})
;(async () => {
  const api = await request.newContext()
  const redirect = await api.get(
    base + '/products/' + r.inventory.products[0].id + '?utm_source=seo-test',
    { maxRedirects: 0, headers: { Host: 'didi-audio.com' } },
  )
  check(
    'application non-www redirect is permanent and preserves path/query in one hop',
    () => {
      assert.equal(redirect.status(), 308)
      assert.equal(
        redirect.headers().location,
        `${site}/products/${r.inventory.products[0].id}?utm_source=seo-test`,
      )
    },
  )
  await api.dispose()
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  })
  try {
    for (const width of [360, 390, 768, 1440]) {
      const context = await browser.newContext({
        viewport: { width, height: width < 768 ? 844 : 900 },
        reducedMotion: 'reduce',
      })
      await context.route('**/*', (r) =>
        r.request().url().startsWith(base) ? r.continue() : r.abort(),
      )
      const page = await context.newPage()
      page.on('pageerror', (e) =>
        report.errors.push({ width, message: e.message }),
      )
      for (const route of [
        '/',
        '/about-didiaudio',
        '/products/' + r.inventory.products[0].id,
        '/' + r.inventory.articles[0].slug,
        '/speaker-rental-da-nang',
        '/speaker-rental-da-nang-ko',
        '/speaker-rental-da-nang-ru',
        '/speaker-rental-da-nang-zh',
      ]) {
        await page.goto(base + route, { waitUntil: 'networkidle' })
        assert.equal(
          await page.evaluate(() => document.documentElement.scrollWidth),
          width,
          `${width} ${route}`,
        )
        assert.equal(await page.locator('h1').count(), 1)
        assert.ok(
          !/43 Tống Duy Tân/.test(await page.locator('body').innerText()),
        )
        if (width < 768 && route === '/') {
          const more = page.getByRole('button', { name: 'Khác', exact: true })
          await more.focus()
          await page.keyboard.press('Enter')
          assert.ok(
            await page
              .getByText('41 Tống Duy Tân, Đà Nẵng', { exact: true })
              .count(),
          )
          assert.ok(
            !/43 Tống Duy Tân/.test(await page.locator('body').innerText()),
          )
          await more.click()
        }
        assert.ok(
          (await page.locator('body').innerText()).includes('41 Tống Duy Tân'),
        )
        if (route === '/') {
          const priceQuestion = page.getByRole('button', {
            name: 'Giá thuê loa kéo tại Đà Nẵng là bao nhiêu?',
            exact: true,
          })
          await priceQuestion.click()
          const answer = await page.locator('#faq').innerText()
          assert.ok(answer.includes(`${r.inventory.products[0].price}k/ngày`))
          assert.ok(!answer.includes('390k/ngày'))
          await priceQuestion.click()
        }
        if (route.startsWith('/products/')) {
          assert.ok(
            (await page.locator('main').innerText()).includes(
              `${r.inventory.products[0].price}k/ngày`,
            ),
          )
          for (const href of [
            'tel:0339197917',
            'https://zalo.me/0339197917',
            'https://m.me/thueloakeodanang.didiaudio',
          ])
            assert.ok(await page.locator(`main a[href="${href}"]`).count())
          // Current gallery has 48 photos plus its separate interactive slide.
          // Read the active panel, not the thumbnail strip's first <img>.
          const gallery = page.getByRole('region', {
            name: 'Gallery Loa JBL PartyBox Stage 320',
            exact: true,
          })
          const buttons = gallery
            .getByRole('tab')
            .filter({ has: page.locator('img') })
          assert.equal(await buttons.count(), 48)
          const image = gallery.getByRole('tabpanel').getByRole('img')
          const before = await image.getAttribute('src')
          await buttons.nth(1).focus()
          await page.keyboard.press('Enter')
          assert.notEqual(await image.getAttribute('src'), before)
        }
      }
      check(
        `responsive, current NAP, contact hrefs and gallery regression ${width}`,
        () => {},
      )
      await context.close()
    }
    assert.deepEqual(report.errors, [])
    check('no browser runtime errors', () => {})
    report.finishedAt = new Date().toISOString()
    save()
  } finally {
    await browser.close()
  }
})().catch((e) => {
  report.failure = e.stack
  save()
  console.error(e)
  process.exitCode = 1
})
