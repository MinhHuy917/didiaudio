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
      assert.equal(await p.locator('h1').innerText(), 'ĐiĐi Audio')
      assert.equal(await p.locator('h1').count(), 1)
      assert.equal(await p.locator('model-viewer').count(), 0)
      const hero = p.getByRole('region', {
        name: 'Dịch vụ thuê loa tại Đà Nẵng',
        exact: true,
      })
      assert.equal(
        await p.evaluate(() => document.documentElement.scrollWidth),
        width,
      )
      const bands = await p
        .locator('main > section, footer')
        .evaluateAll((regions) =>
          regions.map((region) => {
            const box = region.getBoundingClientRect()
            const style = getComputedStyle(region)
            const heading = region.querySelector('h1, h2')
            return {
              color: style.backgroundColor,
              left: box.left,
              width: box.width,
              top: box.top + scrollY,
              bottom: box.bottom + scrollY,
              heading: heading?.textContent.trim(),
            }
          }),
        )
      assert.equal(bands.length, 8)
      for (let i = 0; i < bands.length; i++) {
        assert.equal(
          bands[i].left,
          0,
          'Section backgrounds must reach the left edge',
        )
        assert.equal(
          bands[i].width,
          width,
          'Section backgrounds must span the viewport',
        )
        assert.notEqual(bands[i].color, 'rgba(0, 0, 0, 0)')
        assert.ok(bands[i].heading, 'Each section needs a visible heading')
        if (i > 0) {
          assert.notEqual(
            bands[i].color,
            bands[i - 1].color,
            'Adjacent sections need distinct backgrounds',
          )
          assert.ok(
            Math.abs(bands[i].top - bands[i - 1].bottom) < 2,
            'Section backgrounds must meet without an empty gap',
          )
        }
      }
      assert.ok(
        await p
          .locator('h1')
          .evaluate(
            (h1) =>
              h1.getBoundingClientRect().top >=
              document.querySelector('header').getBoundingClientRect().bottom,
          ),
      )
      const faqQuestion = p.locator('#faq button').first()
      await faqQuestion.click()
      assert.equal(await faqQuestion.getAttribute('aria-expanded'), 'true')
      const answer = p.locator(
        '#' + (await faqQuestion.getAttribute('aria-controls')),
      )
      assert.equal(await answer.isVisible(), true)
      await faqQuestion.click()
      assert.equal(await answer.isVisible(), false)
      assert.match(await p.locator('#products').innerText(), /500.000đ/)
      const realPhotos = p.locator('#hinh-anh-thuc-te')
      assert.doesNotMatch(await realPhotos.innerText(), /500.000đ/)
      assert.equal(await realPhotos.locator('.swiper-slide').count(), 12)
      assert.ok(
        await p
          .locator('#products strong')
          .evaluate(
            (price) =>
              price.getBoundingClientRect().top >
              document
                .querySelector('#products img')
                .parentElement.getBoundingClientRect().bottom,
          ),
      )
      const filenames = await realPhotos
        .locator('.swiper-slide')
        .evaluateAll((slides) =>
          [...slides]
            .sort(
              (a, b) =>
                Number(a.dataset.swiperSlideIndex) -
                Number(b.dataset.swiperSlideIndex),
            )
            .map((slide) => {
              const src = new URL(
                slide.querySelector('img').src,
              ).searchParams.get('url')
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
      assert.equal(
        await p.locator('#rental-preview-title').innerText(),
        'Xem loa từ mọi góc',
      )
      const trigger = p
        .locator('#products')
        .getByRole('button', { name: 'Bấm để xoay loa 360°', exact: true })
      assert.equal(
        await trigger.evaluate((e) => getComputedStyle(e).opacity),
        '1',
      )
      assert.equal(
        await p
          .locator(
            '[title="한국어"], a[lang="ko"], a[href*="lang=ko"], a[href="/speaker-rental-da-nang-ko"]',
          )
          .count(),
        0,
      )
      assert.equal(
        await hero.evaluate((e) => e.nextElementSibling.id),
        'hinh-anh-thuc-te',
      )
      assert.equal(
        await p.locator('#products').evaluate((e) => e.nextElementSibling.id),
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
      await p.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
      await p.screenshot({ path: `${out}/home-${width}.png`, fullPage: true })
      await p
        .locator('#products')
        .screenshot({ path: `${out}/360-poster-${width}.png` })
      if (width === 390) {
        await trigger.locator('img').click()
        await p.waitForFunction(
          () => document.querySelector('model-viewer')?.loaded,
          undefined,
          { timeout: 60000 },
        )
        assert.equal(await trigger.count(), 0)
        const stage = p.locator('#products model-viewer').locator('..')
        assert.equal((await stage.innerText()).trim(), '360°')
        for (const name of [
          'Phóng to',
          'Thu nhỏ',
          'Toàn màn hình',
          'Đóng 3D',
        ]) {
          const control = stage.getByRole('button', { name, exact: true })
          assert.equal((await control.innerText()).trim(), '')
          assert.ok(await control.locator('svg').count())
        }
        const hint = stage.locator('[data-drag-hint]')
        assert.equal(await hint.count(), 1)
        await p
          .locator('#products')
          .screenshot({ path: `${out}/ar-active-${width}.png` })
        await hint.waitFor({ state: 'detached', timeout: 8000 })
        await p
          .locator('#products')
          .screenshot({ path: `${out}/ar-clean-${width}.png` })
        await p.keyboard.press('Escape')
        await trigger.waitFor({ state: 'visible' })
        assert.ok(await trigger.evaluate((e) => document.activeElement === e))
        const booking = p.getByRole('link', {
          name: 'Đặt thuê loa',
          exact: true,
        })
        await booking.click()
        await p.waitForURL('**/products/loa-jbl-partyBox-stage-320#dat-thue')
        await p.locator('#dat-thue').waitFor()
        for (const route of [
          '/video-jbl-partybox-320',
          '/huong-dan-su-dung-jbl-partybox-320',
        ]) {
          await p.goto(base + route, { waitUntil: 'domcontentloaded' })
          assert.equal(
            await p
              .locator(
                '[title="한국어"], a[lang="ko"], a[href*="lang=ko"], a[href="/speaker-rental-da-nang-ko"]',
              )
              .count(),
            0,
          )
        }
      }
      assert.deepEqual(errors, [])
      console.log(
        'PASS',
        width,
        'full-width section backgrounds, boundaries, headings, FAQ, slider, price and overflow',
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
