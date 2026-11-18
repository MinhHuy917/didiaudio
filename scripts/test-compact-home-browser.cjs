const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4195'
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core')
const assert = require('node:assert/strict')
const fs = require('node:fs')
;(async () => {
  const b = await chromium.launch({
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--enable-unsafe-swiftshader'],
  })
  const out = process.env.TEST_OUTPUT || '/tmp/compact-home-results'
  fs.mkdirSync(out, { recursive: true })
  try {
    for (const width of [360, 390, 768, 1440]) {
      const c = await b.newContext({
        viewport: { width, height: 950 },
        reducedMotion: 'reduce',
      })
      await c.route('**/*', (r) =>
        r.request().url().startsWith(base) ? r.continue() : r.abort(),
      )
      const p = await c.newPage()
      const errors = []
      p.on('pageerror', (e) => errors.push(e.message))
      await p.goto(base, { waitUntil: 'load' })
      assert.equal(await p.locator('h1').innerText(), 'ĐIĐI AUDIO')
      assert.equal(await p.locator('h1').count(), 1)
      assert.equal(await p.locator('model-viewer').count(), 0)
      const hero = p.getByRole('region', {
        name: 'Dịch vụ thuê loa tại Đà Nẵng',
        exact: true,
      })
      assert.equal(await hero.getByRole('tab').count(), 5)
      assert.equal(await hero.getByRole('tab', { name: /360/ }).count(), 0)
      assert.equal(
        await p.evaluate(() => document.documentElement.scrollWidth),
        width,
      )
      assert.match(await p.locator('#products').innerText(), /500.000đ/)
      assert.equal(
        await hero.evaluate((e) => e.nextElementSibling.id),
        'products',
      )
      assert.equal(
        await p
          .locator('#hinh-anh-thuc-te')
          .evaluate((e) => e.nextElementSibling.id),
        'promos',
      )
      assert.equal(await p.locator('#promos li').count(), 3)
      for (const href of [
        '/video-jbl-partybox-320',
        '/huong-dan-su-dung-jbl-partybox-320',
      ]) {
        assert.ok((await p.locator(`a[href="${href}"]`).count()) > 0)
        const res = await p.request.get(base + href)
        assert.equal(res.status(), 200)
      }
      assert.equal(await p.locator('#blog').getAttribute('open'), null)
      await p.screenshot({ path: `${out}/home-${width}.png`, fullPage: true })
      if (width === 390) {
        const trigger = p.getByRole('button', {
          name: '360° Xem chi tiết',
          exact: true,
        })
        await trigger.click()
        await p.waitForFunction(
          () => document.querySelector('model-viewer')?.loaded,
          undefined,
          { timeout: 60000 },
        )
        await p.keyboard.press('Escape')
        await trigger.waitFor({ state: 'visible' })
        assert.ok(await trigger.evaluate((e) => document.activeElement === e))
        const booking = p.getByRole('link', {
          name: 'Đặt thuê ngay',
          exact: true,
        })
        await booking.click()
        await p.waitForURL('**/products/loa-jbl-partyBox-stage-320#dat-thue')
        await p.locator('#dat-thue').waitFor()
      }
      assert.deepEqual(errors, [])
      console.log(
        'PASS',
        width,
        'layout, slider, sections, resources, price, overflow',
        width === 390 ? '360 loaded/Escape/focus/booking' : '',
      )
      await c.close()
    }
  } finally {
    await b.close()
  }
})().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
