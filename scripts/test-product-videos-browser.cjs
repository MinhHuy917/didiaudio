// Production browser checks. Supply Playwright from the test environment.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4187'
const output = process.env.TEST_OUTPUT || '/tmp/didi-video-browser'
const library = '/video-jbl-partybox-320'
const browserOptions = {
  executablePath:
    process.env.CHROME_PATH ||
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--enable-unsafe-swiftshader'],
}
async function isolate(context, mockPlayer = true) {
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
  if (mockPlayer)
    await context.addInitScript(() => {
      window.__players = []
      window.YT = {
        Player: class {
          constructor(mount, options) {
            this.frame = document.createElement('iframe')
            this.frame.src =
              'https://www.youtube-nocookie.com/embed/' + options.videoId
            mount.replaceWith(this.frame)
            window.__players.push(options)
            window.__playerError = (code) =>
              options.events.onError({ data: code })
            setTimeout(() => options.events.onReady(), 0)
          }
          destroy() {
            window.__destroyed = (window.__destroyed || 0) + 1
            this.frame.remove()
          }
        },
      }
      Object.defineProperty(navigator, 'share', {
        configurable: true,
        value: undefined,
      })
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async (url) => {
            window.__copied = url
          },
        },
      })
    })
}
;(async () => {
  fs.mkdirSync(output, { recursive: true })
  const browser = await chromium.launch(browserOptions)
  try {
    for (const width of [360, 390, 768, 1440]) {
      const context = await browser.newContext({
        viewport: { width, height: 950 },
        reducedMotion: 'reduce',
      })
      await isolate(context)
      const page = await context.newPage(),
        errors = [],
        requests = []
      page.on('pageerror', (error) => errors.push(error.message))
      page.on('request', (request) => {
        if (/youtube|ytimg|googlevideo/.test(request.url()))
          requests.push(request.url())
      })
      assert.equal(
        (
          await page.goto(base + library, { waitUntil: 'networkidle' })
        ).status(),
        200,
      )
      const section = page.locator('#video-stage-320')
      assert.equal(await section.locator('article').count(), 6)
      assert.equal(await page.locator('h1').count(), 1)
      assert.equal(await page.locator('main main').count(), 0)
      assert.equal(
        await page.locator('link[rel="canonical"]').getAttribute('href'),
        'https://www.didi-audio.com' + library,
      )
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth),
        width,
      )
      const columns = await section
        .locator('div.grid')
        .evaluate(
          (node) =>
            getComputedStyle(node).gridTemplateColumns.split(' ').length,
        )
      assert.equal(columns, width >= 1024 ? 3 : width >= 768 ? 2 : 1)
      for (const image of await section.locator('article img').all()) {
        await image.scrollIntoViewIfNeeded()
        await image.evaluate((node) => node.decode())
        assert.equal(await image.getAttribute('loading'), 'lazy')
      }
      assert.equal(await section.locator('iframe').count(), 0)
      assert.deepEqual(
        requests,
        [],
        'No YouTube player/API/thumbnail requests before Play',
      )
      const filters = [
        ['Review JBL PartyBox Stage 320', 3],
        ['Test bass & chất lượng âm thanh', 4],
        ['Test karaoke với micro', 4],
        ['Hướng dẫn kết nối Bluetooth', 3],
        ['Hướng dẫn sử dụng', 2],
        ['Ngoài trời & tiệc tùng', 2],
      ]
      for (const [name, count] of filters) {
        const button = section.getByRole('button', {
          name: `${name} (${count})`,
          exact: true,
        })
        await button.click()
        assert.equal(await button.getAttribute('aria-pressed'), 'true')
        assert.equal(await section.locator('article').count(), count)
      }
      await section
        .getByRole('button', { name: 'Tất cả (9)', exact: true })
        .click()
      await section
        .getByRole('button', { name: 'Xem thêm video', exact: true })
        .click()
      assert.equal(await section.locator('article').count(), 9)
      // Finish newly revealed thumbnails before closing the browser context.
      for (const image of await section.locator('article img').all()) {
        await image.scrollIntoViewIfNeeded()
        await image.evaluate((node) => node.decode())
      }
      assert.equal(
        await section
          .getByRole('button', { name: 'Xem thêm video', exact: true })
          .count(),
        0,
      )
      const schema = await section
        .locator('script[type="application/ld+json"]')
        .evaluate((node) => JSON.parse(node.textContent))
      assert.equal(schema['@graph'].length, 9)
      assert.equal(new Set(schema['@graph'].map((node) => node['@id'])).size, 9)
      for (const node of schema['@graph']) {
        assert.equal(node['@type'], 'VideoObject')
        assert.ok(node.uploadDate && node.thumbnailUrl.length && node.duration)
      }
      const opener = section
        .getByRole('button', { name: /^Phát video:/ })
        .first()
      await opener.focus()
      await page.keyboard.press('Enter')
      const dialog = page.getByRole('dialog')
      await dialog.waitFor()
      await dialog.locator('iframe').waitFor()
      assert.equal(
        await dialog.evaluate((node) => node.matches(':modal')),
        true,
      )
      assert.equal(
        await dialog.locator('iframe').getAttribute('title'),
        'Review Stage 320 cùng Tân Một Cú',
      )
      assert.equal(
        await dialog.locator('iframe').getAttribute('referrerpolicy'),
        'strict-origin-when-cross-origin',
      )
      assert.equal(
        await page.evaluate(() => document.body.style.overflow),
        'hidden',
      )
      await dialog
        .getByRole('link', { name: 'Mở trên YouTube', exact: true })
        .last()
        .focus()
      await page.keyboard.press('Tab')
      assert.equal(
        await dialog.evaluate((node) => node.contains(document.activeElement)),
        true,
      )
      await page.keyboard.press('Escape')
      await dialog.waitFor({ state: 'detached' })
      assert.equal(
        await opener.evaluate((node) => node === document.activeElement),
        true,
      )
      assert.equal(await section.locator('iframe').count(), 0)
      assert.ok(await page.evaluate(() => window.__destroyed > 0))
      assert.equal(await page.evaluate(() => document.body.style.overflow), '')
      // Runtime errors from YouTube must leave an actionable direct link.
      for (const code of [100, 101, 150, 153]) {
        await opener.click()
        await page.getByRole('dialog').locator('iframe').waitFor()
        await page.evaluate((error) => window.__playerError(error), code)
        await page.getByRole('dialog').getByRole('alert').waitFor()
        assert.equal(
          await page.getByRole('dialog').locator('iframe').count(),
          0,
          'Remove failed player so it cannot play audio in the background',
        )
        assert.equal(
          await page
            .getByRole('dialog')
            .getByRole('alert')
            .getByRole('link')
            .getAttribute('href'),
          'https://www.youtube.com/watch?v=nkdQlX2FOCM',
        )
        await page
          .getByRole('button', { name: 'Đóng video', exact: true })
          .click()
      }
      await section
        .getByRole('button', { name: /^Chia sẻ video:/ })
        .first()
        .click()
      assert.equal(
        await page.evaluate(() => window.__copied),
        'https://www.youtube.com/watch?v=nkdQlX2FOCM',
      )
      await section
        .getByText('Đã sao chép liên kết video.', { exact: true })
        .first()
        .waitFor()
      await page.evaluate(() => {
        navigator.clipboard.writeText = async () => {
          throw new Error('Denied')
        }
      })
      await section
        .getByRole('button', { name: /^Chia sẻ video:/ })
        .first()
        .click()
      const manual = section.getByRole('textbox', {
        name: 'Liên kết video',
        exact: true,
      })
      assert.equal(
        await manual.inputValue(),
        'https://www.youtube.com/watch?v=nkdQlX2FOCM',
      )
      await manual.focus()
      assert.equal(
        await manual.evaluate(
          (node) =>
            node.selectionStart === 0 &&
            node.selectionEnd === node.value.length,
        ),
        true,
      )
      assert.equal(
        await section
          .getByRole('link', { name: 'Thuê JBL 320 ngay', exact: true })
          .getAttribute('href'),
        '/products/loa-jbl-partyBox-stage-320#dat-thue',
      )
      if ([390, 1440].includes(width)) {
        await page.evaluate(() => window.scrollTo(0, 0))
        await page.screenshot({ path: `${output}/library-${width}.png` })
      }
      assert.deepEqual(errors, [])
      console.log(
        `PASS ${width}px: grid, filters, pagination, lazy thumbnails/player, schema, modal/focus/Escape, playback errors, share/fallback, CTA and overflow`,
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
    page.on('pageerror', (error) => errors.push(error.message))
    const localized = [
      ['en', '/speaker-rental-da-nang', 'JBL PartyBox Stage 320 videos'],
      ['ko', '/speaker-rental-da-nang-ko', 'JBL PartyBox Stage 320 실제 영상'],
      ['ru', '/speaker-rental-da-nang-ru', 'Видео JBL PartyBox Stage 320'],
      [
        'zh',
        '/speaker-rental-da-nang-zh',
        'JBL PartyBox Stage 320 实际体验视频',
      ],
    ]
    for (const [locale, route, title] of [
      ['vi', '/', 'Video thực tế JBL PartyBox Stage 320'],
      ...localized,
    ]) {
      await page.goto(base + route, { waitUntil: 'networkidle' })
      const section = page.locator('#video-stage-320')
      assert.equal(await section.getAttribute('lang'), locale)
      assert.equal(
        await section.locator('h2').innerText(),
        title.toLocaleUpperCase(),
      )
      assert.equal(await section.locator('article').count(), 3)
      const href = locale === 'vi' ? library : `${library}?lang=${locale}`
      assert.equal(await section.locator(`a[href="${href}"]`).count(), 1)
      assert.equal(await section.locator('iframe').count(), 0)
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth),
        390,
      )
      await page.goto(base + href, { waitUntil: 'networkidle' })
      assert.equal(
        await page.locator('h1').innerText(),
        title.toLocaleUpperCase(),
      )
      assert.equal(
        await page.locator('link[rel="canonical"]').getAttribute('href'),
        'https://www.didi-audio.com' + library,
      )
      assert.equal(
        await page.locator('#video-stage-320').getAttribute('lang'),
        locale,
      )
    }
    await page.locator('button[title="English"]:visible').click()
    await page.waitForURL(base + library + '?lang=en')
    assert.equal(
      await page.locator('#video-stage-320').getAttribute('lang'),
      'en',
    )
    await page.goto(base + '/products/loa-jbl-partyBox-stage-320#dat-thue', {
      waitUntil: 'networkidle',
    })
    assert.ok((await page.locator('body').innerText()).includes('500k/ngày'))
    assert.equal(
      await page.locator('#dat-thue a[href="tel:0339197917"]').count(),
      1,
    )
    assert.equal(
      await page
        .locator('#dat-thue a[href="https://m.me/thueloakeodanang.didiaudio"]')
        .count(),
      1,
    )
    assert.deepEqual(errors, [])
    console.log(
      'PASS all five localized sections/libraries, header language switch and existing rental/contact links',
    )
    await context.close()
    const blocked = await browser.newContext({
      viewport: { width: 390, height: 950 },
    })
    await isolate(blocked, false)
    const bp = await blocked.newPage()
    await bp.goto(base + library)
    assert.equal(await bp.locator('#video-stage-320 iframe').count(), 0)
    await bp
      .getByRole('button', { name: /^Phát video:/ })
      .first()
      .click()
    await bp.getByRole('dialog').getByRole('alert').waitFor({ timeout: 25000 })
    assert.ok(
      await bp
        .getByRole('dialog')
        .getByRole('alert')
        .getByRole('link')
        .getAttribute('href'),
    )
    await bp.getByRole('button', { name: 'Đóng video', exact: true }).click()
    console.log(
      'PASS blocked YouTube API falls back to direct link and dialog can close',
    )
    await blocked.close()
  } finally {
    await browser.close()
  }
})().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
