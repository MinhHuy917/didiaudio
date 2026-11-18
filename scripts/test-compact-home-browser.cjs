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
      assert.equal(await hero.getByRole('tab').count(), 12)
      assert.equal(await hero.getByRole('tab', { name: /360/ }).count(), 0)
      assert.equal(
        await p.evaluate(() => document.documentElement.scrollWidth),
        width,
      )
      assert.doesNotMatch(await p.locator('#products').innerText(), /500.000đ/)
      const realPhotos = p.locator('#hinh-anh-thuc-te')
      assert.match(await realPhotos.innerText(), /500.000đ/)
      assert.equal(await realPhotos.locator('.swiper-slide').count(), 12)
      assert.ok(
        await realPhotos
          .locator('strong')
          .evaluate(
            (price) =>
              price.getBoundingClientRect().top >
              document
                .querySelector('#hinh-anh-thuc-te .swiper')
                .getBoundingClientRect().bottom,
          ),
      )
      const filenames = await hero
        .getByRole('tab')
        .locator('img')
        .evaluateAll((images) =>
          images.map((image) => {
            const src = new URL(image.src).searchParams.get('url')
            return src.split('/').pop().split('.')[0]
          }),
        )
      assert.deepEqual(filenames, [
        '01',
        '02',
        '03',
        '04',
        '05',
        '5',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
      ])
      const arButton = p
        .locator('#products')
        .getByRole('button', { name: 'AR · Kích hoạt xem 360°', exact: true })
      assert.equal(await arButton.getAttribute('aria-pressed'), 'false')
      assert.equal(
        await arButton.evaluate((e) => getComputedStyle(e).opacity),
        '0.5',
      )
      assert.ok(
        await arButton.evaluate((e) => {
          const button = e.getBoundingClientRect()
          const frame = e.parentElement.getBoundingClientRect()
          return (
            Math.abs(frame.right - button.right - 12) < 1 &&
            button.top >= frame.top
          )
        }),
      )
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
      await realPhotos.scrollIntoViewIfNeeded()
      await realPhotos
        .locator('.swiper-slide-active img')
        .evaluate((image) => image.decode())
      await p.screenshot({ path: `${out}/home-${width}.png`, fullPage: true })
      if (width === 390) {
        const trigger = p.getByRole('button', {
          name: 'AR · Kích hoạt xem 360°',
          exact: true,
        })
        await trigger.click()
        await p.waitForFunction(
          () => document.querySelector('model-viewer')?.loaded,
          undefined,
          { timeout: 60000 },
        )
        const activated = p
          .locator('#products')
          .getByRole('button', { name: 'AR · Kích hoạt xem 360°', exact: true })
        assert.equal(await activated.getAttribute('aria-pressed'), 'true')
        assert.equal(
          await activated.evaluate((e) => getComputedStyle(e).opacity),
          '1',
        )
        await p
          .locator('#products')
          .screenshot({ path: `${out}/ar-active-${width}.png` })
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
