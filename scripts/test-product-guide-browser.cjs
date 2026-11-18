const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4188'
const output = process.env.TEST_OUTPUT || '/tmp/didi-guide-browser'
const guide = '/huong-dan-su-dung-jbl-partybox-320'
function load(file) {
  const mod = { exports: {} }
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText,
    { module: mod, exports: mod.exports },
  )
  return mod.exports
}
const { guideContent } = load('src/data/guide-content.ts')
const { guideMessages } = load('src/data/guide-messages.ts')
async function isolate(context) {
  await context.route('**/*', (route) => {
    const url = route.request().url()
    if (url.startsWith(base)) return route.continue()
    if (url.startsWith('https://www.youtube-nocookie.com/embed/'))
      return route.fulfill({
        contentType: 'text/html',
        body: '<button>Player fixture</button>',
      })
    return route.abort()
  })
  await context.addInitScript(() => {
    window.YT = {
      Player: class {
        constructor(mount, options) {
          this.frame = document.createElement('iframe')
          this.frame.src =
            'https://www.youtube-nocookie.com/embed/' + options.videoId
          mount.replaceWith(this.frame)
          setTimeout(() => options.events.onReady(), 0)
        }
        destroy() {
          this.frame.remove()
        }
      },
    }
  })
}
async function openNativeDetails(article) {
  for (const details of await article.locator('details').all()) {
    if (!(await details.evaluate((el) => el.open))) {
      await details.locator('summary').first().focus()
      await details.page().keyboard.press('Enter')
      assert.equal(await details.evaluate((el) => el.open), true)
    }
  }
}
;(async () => {
  fs.mkdirSync(output, { recursive: true })
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--enable-unsafe-swiftshader'],
  })
  try {
    for (const width of [360, 390, 768, 1440]) {
      const context = await browser.newContext({
        viewport: { width, height: 950 },
        reducedMotion: 'reduce',
      })
      await isolate(context)
      const page = await context.newPage(),
        errors = [],
        yt = []
      page.on('pageerror', (e) => errors.push(e.message))
      page.on('request', (r) => {
        if (/youtube|ytimg|googlevideo/.test(r.url())) yt.push(r.url())
      })
      assert.equal(
        (await page.goto(base + guide, { waitUntil: 'networkidle' })).status(),
        200,
      )
      assert.equal(await page.locator('h1').count(), 1)
      assert.equal(await page.locator('main main').count(), 0)
      assert.equal(await page.locator('article').count(), 6)
      assert.equal(
        await page.locator('link[rel="canonical"]').getAttribute('href'),
        'https://www.didi-audio.com' + guide,
      )
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth),
        width,
      )
      assert.equal(await page.getByRole('checkbox').count(), 4)
      await page.getByRole('checkbox').first().check()
      await page.reload({ waitUntil: 'networkidle' })
      assert.equal(await page.getByRole('checkbox').first().isChecked(), true)
      for (const checkbox of await page.getByRole('checkbox').all())
        await checkbox.check()
      for (const topic of guideContent.vi.topics) {
        const article = page.locator('#guide-' + topic.id)
        await openNativeDetails(article)
        const allSteps = [
          ...topic.steps,
          ...(topic.issues || []).flatMap((issue) => issue.steps),
        ]
        for (const step of allSteps) {
          await article.getByText(step.body, { exact: false }).waitFor()
          const button = article.getByRole('button', {
            name: guideMessages.vi.complete + ': ' + step.title,
            exact: true,
          })
          await button.click()
          assert.equal(
            await article
              .getByRole('button', {
                name: guideMessages.vi.completed + ': ' + step.title,
                exact: true,
              })
              .getAttribute('aria-pressed'),
            'true',
          )
        }
        assert.ok(
          (await article.innerText()).includes(
            guideMessages.vi.progress +
              ' ' +
              allSteps.length +
              '/' +
              allSteps.length,
          ),
        )
        await article.locator('img').evaluate((img) => img.decode())
        assert.equal(
          await article
            .getByRole('link', { name: /Gọi hỗ trợ/ })
            .getAttribute('href'),
          'tel:0339197917',
        )
        assert.equal(
          await article
            .getByRole('link', { name: 'Liên hệ Zalo', exact: true })
            .getAttribute('href'),
          'https://zalo.me/0339197917',
        )
        assert.equal(
          await article
            .getByRole('link', {
              name: 'Trang thuê JBL PartyBox Stage 320',
              exact: true,
            })
            .getAttribute('href'),
          '/products/loa-jbl-partyBox-stage-320#dat-thue',
        )
      }
      await page.waitForFunction(
        () =>
          JSON.parse(sessionStorage.getItem('didi:stage320-guide:v2'))
            .length === 50,
      )
      assert.deepEqual(yt, [], 'No YouTube requests before Play')
      const mic = page.locator('#guide-microphone')
      assert.ok((await mic.innerText()).includes('Bộ micro Alpha Works D2'))
      assert.ok(
        !(await mic.innerText()).includes('Cần xác nhận bộ micro được giao'),
      )
      const search = page.getByRole('searchbox', {
        name: 'Tìm trong hướng dẫn',
        exact: true,
      })
      await search.fill('micro bi hu')
      assert.ok(await page.locator('#guide-troubleshooting').count())
      await search.fill('zzzz-no-such-topic')
      assert.equal(await page.locator('article').count(), 0)
      await page
        .getByRole('button', { name: 'Xem tất cả hướng dẫn', exact: true })
        .click()
      assert.equal(await page.locator('article').count(), 6)
      await search.fill('zzzz-no-such-topic')
      await page
        .getByRole('navigation', { name: 'Truy cập nhanh theo chủ đề' })
        .getByRole('link', { name: /Kết nối Bluetooth với điện thoại/ })
        .click()
      assert.equal(await search.inputValue(), '')
      await page.waitForFunction(
        () => document.activeElement?.id === 'guide-bluetooth',
      )
      const position = await page.locator('#guide-bluetooth').boundingBox()
      const header = await page.getByRole('banner').boundingBox()
      assert.ok(
        position.y >= header.y + header.height - 1,
        'Anchor must clear the header',
      )
      const play = page.getByRole('button', {
        name: 'Xem video hướng dẫn: Kết nối Bluetooth với điện thoại',
        exact: true,
      })
      await play.click()
      await page.getByRole('dialog').locator('iframe').waitFor()
      assert.ok(
        (
          await page.getByRole('dialog').locator('iframe').getAttribute('src')
        ).includes('wx5IPeEge4g'),
      )
      await page.keyboard.press('Escape')
      await page.getByRole('dialog').waitFor({ state: 'detached' })
      assert.equal(
        await play.evaluate((el) => el === document.activeElement),
        true,
      )
      const d2Link = page
        .locator('#guide-microphone')
        .getByRole('link', {
          name: 'Xem video hướng dẫn: Kết nối micro và hát karaoke (YouTube)',
          exact: true,
        })
      assert.equal(
        await d2Link.getAttribute('href'),
        'https://www.youtube.com/watch?v=ZhCmbAet46M',
      )
      assert.equal(await d2Link.getAttribute('target'), '_blank')
      assert.equal(await page.getByRole('dialog').count(), 0)
      await page.reload({ waitUntil: 'networkidle' })
      await page.waitForFunction(() =>
        document.querySelector('#guide-bluetooth button[aria-pressed="true"]'),
      )
      const firstDone = page.locator('#guide-bluetooth').getByRole('button', {
        name:
          guideMessages.vi.completed +
          ': ' +
          guideContent.vi.topics[0].steps[0].title,
        exact: true,
      })
      await firstDone.click()
      assert.equal(
        await page
          .locator('#guide-bluetooth')
          .getByRole('button', {
            name:
              guideMessages.vi.complete +
              ': ' +
              guideContent.vi.topics[0].steps[0].title,
            exact: true,
          })
          .getAttribute('aria-pressed'),
        'false',
      )
      if ([390, 1440].includes(width)) {
        await page.evaluate(() => window.scrollTo(0, 0))
        await page.screenshot({ path: `${output}/guide-${width}.png` })
      }
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth),
        width,
      )
      assert.deepEqual(errors, [])
      console.log(
        `PASS ${width}px: all46 instructions/checklists, keyboard/native accordion, progress restore/undo, accent search/empty state, quick anchors, images, support links, lazy video and focus`,
      )
      await context.close()
    }
    const context = await browser.newContext({
      viewport: { width: 390, height: 950 },
      reducedMotion: 'reduce',
    })
    await isolate(context)
    const page = await context.newPage(),
      errors = []
    page.on('pageerror', (e) => errors.push(e.message))
    for (const locale of ['vi', 'en', 'ko', 'ru', 'zh']) {
      const path = locale === 'vi' ? guide : guide + '?lang=' + locale
      const response = await page.goto(base + path, {
        waitUntil: 'networkidle',
      })
      const html = await response.text()
      const rawHeading = await page.evaluate(
        (source) =>
          new DOMParser()
            .parseFromString(source, 'text/html')
            .querySelector('h1')?.textContent,
        html,
      )
      assert.equal(
        rawHeading,
        guideMessages[locale].title,
        'Localized H1 must be in server HTML',
      )
      assert.equal(
        await page.locator('h1').innerText(),
        guideMessages[locale].title,
      )
      assert.equal(await page.locator('article').count(), 6)
      assert.equal(
        await page.locator('link[rel="canonical"]').getAttribute('href'),
        'https://www.didi-audio.com' + guide,
      )
      const schema = await page
        .locator('script[type="application/ld+json"]')
        .evaluateAll((nodes) =>
          nodes.flatMap((n) => {
            const s = JSON.parse(n.textContent)
            return s['@graph'] || [s]
          }),
        )
      assert.equal(schema.filter((n) => n['@type'] === 'TechArticle').length, 1)
      assert.equal(
        schema.find((n) => n['@type'] === 'TechArticle').inLanguage,
        locale,
      )
      assert.equal(
        schema.filter((n) => n['@type'] === 'BreadcrumbList').length,
        1,
      )
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth),
        390,
      )
    }
    await page
      .getByRole('navigation', { name: guideMessages.zh.language, exact: true })
      .getByRole('link', { name: 'English', exact: true })
      .click()
    await page.waitForURL(base + guide + '?lang=en')
    assert.equal(await page.locator('h1').innerText(), guideMessages.en.title)
    await page.locator('button[title="한국어"]:visible').click()
    await page.waitForURL(base + guide + '?lang=ko')
    assert.equal(await page.locator('h1').innerText(), guideMessages.ko.title)
    const routes = [
      ['/', 'vi'],
      ['/speaker-rental-da-nang', 'en'],
      ['/speaker-rental-da-nang-ko', 'ko'],
      ['/speaker-rental-da-nang-ru', 'ru'],
      ['/speaker-rental-da-nang-zh', 'zh'],
      ['/products/loa-jbl-partyBox-stage-320', 'vi'],
    ]
    for (const [route, locale] of routes) {
      await page.goto(base + route, { waitUntil: 'networkidle' })
      const teaser = page.getByRole('region', {
        name: guideMessages[locale].teaserTitle,
        exact: true,
      })
      assert.equal(await teaser.count(), 1)
      assert.equal(
        await teaser
          .getByRole('link', {
            name: guideMessages[locale].openGuide,
            exact: true,
          })
          .getAttribute('href'),
        locale === 'vi' ? guide : guide + '?lang=' + locale,
      )
    }
    assert.deepEqual(errors, [])
    console.log(
      'PASS five SSR translations, localized schema/canonical, inline/header language switch and six home/product teaser integrations',
    )
    await context.close()
    const noJS = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 950 },
    })
    await noJS.route('**/*', (r) =>
      r.request().url().startsWith(base) ? r.continue() : r.abort(),
    )
    const np = await noJS.newPage()
    await np.goto(base + guide)
    assert.equal(await np.locator('article').count(), 6)
    const details = np.locator('#guide-bluetooth details').nth(1)
    await details.locator('summary').click()
    assert.equal(await details.evaluate((el) => el.open), true)
    assert.equal(
      await np
        .locator(
          'article a[href="https://www.youtube.com/watch?v=wx5IPeEge4g"]',
        )
        .count(),
      5,
    )
    assert.equal(
      await np
        .locator(
          'article a[href="https://www.youtube.com/watch?v=ZhCmbAet46M"]',
        )
        .count(),
      1,
    )
    console.log(
      'PASS no-JavaScript: all guide HTML, native accordions and direct video links remain usable',
    )
    await noJS.close()
    const blocked = await browser.newContext({
      viewport: { width: 390, height: 950 },
    })
    await isolate(blocked)
    await blocked.addInitScript(() =>
      Object.defineProperty(window, 'sessionStorage', {
        value: {
          getItem() {
            throw new Error('Blocked')
          },
          setItem() {
            throw new Error('Blocked')
          },
        },
      }),
    )
    const bp = await blocked.newPage(),
      be = []
    bp.on('pageerror', (e) => be.push(e.message))
    await bp.goto(base + guide, { waitUntil: 'networkidle' })
    await bp.getByRole('checkbox').first().check()
    assert.equal(await bp.getByRole('checkbox').first().isChecked(), true)
    assert.deepEqual(be, [])
    console.log(
      'PASS blocked session storage: checklist and guide remain usable with no runtime error',
    )
    await blocked.close()
    const migrated = await browser.newContext({
      viewport: { width: 390, height: 950 },
      reducedMotion: 'reduce',
    })
    await isolate(migrated)
    await migrated.addInitScript(() => {
      if (!sessionStorage.getItem('didi:stage320-guide:v1'))
        sessionStorage.setItem(
          'didi:stage320-guide:v1',
          JSON.stringify([
            'bluetooth-power',
            'controls-music',
            'microphone-power',
            'issue-no-mic-1',
            'prep-mic',
          ]),
        )
    })
    const mp = await migrated.newPage()
    await mp.goto(base + guide, { waitUntil: 'networkidle' })
    await mp.waitForFunction(
      () => sessionStorage.getItem('didi:stage320-guide:v2') !== null,
    )
    const progress = await mp.evaluate(() =>
      JSON.parse(sessionStorage.getItem('didi:stage320-guide:v2')),
    )
    assert.deepEqual(progress, ['bluetooth-power', 'controls-music'])
    assert.equal(
      await mp.locator('#guide-microphone button[aria-pressed="true"]').count(),
      0,
    )
    assert.equal(
      await mp.evaluate(
        () =>
          JSON.parse(sessionStorage.getItem('didi:stage320-guide:v1')).length,
      ),
      5,
    )
    console.log(
      'PASS D2 update migrates progress: preserve other topics, require rereading microphone steps, keep original session data',
    )
    await migrated.close()
  } finally {
    await browser.close()
  }
})().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
