// Gallery regression against a production build. Playwright is supplied by the test environment.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4177'
const output = process.env.TEST_OUTPUT || '/tmp/didi-gallery-check'
const product = '/products/loa-jbl-partyBox-stage-320'
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
      for (const route of ['/', product]) {
        const context = await browser.newContext({
          viewport: { width, height: 950 },
          reducedMotion: 'reduce',
        })
        await context.route('**/*', (r) =>
          r.request().url().startsWith(base) ? r.continue() : r.abort(),
        )
        const page = await context.newPage(),
          errors = [],
          models = []
        page.on('pageerror', (e) => errors.push(e.message))
        page.on('request', (r) => {
          if (r.url().endsWith('.glb')) models.push(r.url())
        })
        await page.goto(base + route, { waitUntil: 'networkidle' })
        const gallery = page.getByRole('region', {
          name: 'Gallery Loa JBL PartyBox Stage 320',
          exact: true,
        })
        const first = gallery.getByRole('tab', { name: 'Ảnh 1', exact: true })
        assert.equal(await first.getAttribute('aria-selected'), 'true')
        assert.equal(await gallery.getByRole('tab').count(), 29)
        await page.waitForFunction(
          () => document.querySelector('model-viewer')?.loaded,
          undefined,
          { timeout: 60000 },
        )
        assert.ok(models.length > 0, 'Model must preload before selecting360')
        const prefetchedRequests = models.length
        assert.equal(await gallery.locator('model-viewer').isVisible(), false)
        assert.equal(await page.locator('h1').count(), 1)
        assert.equal(
          await page.evaluate(() => document.documentElement.scrollWidth),
          width,
        )
        await first.focus()
        await page.keyboard.press('End')
        const last = gallery.getByRole('tab', { name: 'Ảnh 28', exact: true })
        assert.equal(await last.getAttribute('aria-selected'), 'true')
        await gallery
          .getByRole('tabpanel')
          .getByRole('img')
          .evaluate((img) => img.decode())
        assert.equal(
          await last.evaluate((node) => {
            const strip = node.parentElement.getBoundingClientRect()
            const box = node.getBoundingClientRect()
            return box.left >= strip.left - 1 && box.right <= strip.right + 1
          }),
          true,
        )
        await page.keyboard.press('Home')
        const tag = (route === '/' ? 'hero' : 'product') + '-' + width
        await gallery.screenshot({ path: output + '/' + tag + '-photo.png' })
        await first.focus()
        await page.keyboard.press('ArrowRight')
        await page.waitForFunction(
          () =>
            document.querySelector('model-viewer')?.loaded &&
            document.querySelector('model-viewer')?.modelIsVisible,
          { timeout: 60000 },
        )
        assert.equal(
          await gallery
            .getByRole('tab', { name: '360° · Tương tác', exact: true })
            .getAttribute('aria-selected'),
          'true',
        )
        assert.ok((await gallery.innerText()).includes('Chưa bật'))
        assert.equal(
          await gallery.getByRole('button', { name: /AR.*Thử/ }).count(),
          0,
        )
        assert.equal(
          await page.evaluate(() =>
            document.querySelector('model-viewer').hasAttribute('auto-rotate'),
          ),
          false,
        )
        const hint = gallery.locator('[data-drag-hint]')
        assert.equal(await hint.count(), 1)
        assert.equal(
          await hint
            .locator('div')
            .first()
            .evaluate((e) => getComputedStyle(e).animationName),
          'none',
        )
        const radius = await page.evaluate(
          () => document.querySelector('model-viewer').getCameraOrbit().radius,
        )
        await gallery
          .getByRole('button', { name: 'Phóng to', exact: true })
          .click()
        await page.waitForFunction(
          (r) =>
            document.querySelector('model-viewer').getCameraOrbit().radius < r,
          radius,
        )
        await gallery
          .getByRole('button', { name: 'Thu nhỏ', exact: true })
          .click()
        await gallery.getByRole('button', { name: 'Góc ban đầu' }).click()
        await gallery
          .getByRole('button', { name: 'Tự xoay', exact: true })
          .click()
        await page.waitForFunction(() =>
          document.querySelector('model-viewer').hasAttribute('auto-rotate'),
        )
        await gallery
          .getByRole('button', { name: 'Dừng xoay', exact: true })
          .click()
        await gallery
          .getByRole('button', { name: 'Toàn màn hình', exact: true })
          .click()
        await page.waitForFunction(() => !!document.fullscreenElement)
        await gallery
          .getByRole('button', { name: 'Thoát toàn màn hình', exact: true })
          .click()
        await page.waitForFunction(() => !document.fullscreenElement)
        assert.equal(
          await page.evaluate(() => document.documentElement.scrollWidth),
          width,
        )
        await gallery.screenshot({ path: output + '/' + tag + '-360.png' })
        await page.keyboard.press('Escape')
        await page.locator('model-viewer').waitFor({ state: 'hidden' })
        assert.equal(
          models.length,
          prefetchedRequests,
          'Switching back must keep the prefetched model',
        )
        await page.waitForFunction(
          () => document.activeElement?.getAttribute('aria-label') === 'Ảnh 1',
        )
        assert.equal(
          await first.evaluate((node) => {
            const box = node.getBoundingClientRect()
            const hit = document.elementFromPoint(
              box.x + box.width / 2,
              box.y + box.height / 2,
            )
            return hit === node || node.contains(hit)
          }),
          true,
          'Focused thumbnail must not be covered by floating contact buttons',
        )
        if (route === product) {
          await gallery.getByRole('tab', { name: 'Ảnh 2', exact: true }).click()
          assert.equal(
            await gallery
              .getByRole('tab', { name: 'Ảnh 2', exact: true })
              .getAttribute('aria-selected'),
            'true',
          )
          assert.ok(
            (await page.locator('main').innerText()).includes('500k/ngày'),
          )
          for (const href of [
            'tel:0339197917',
            'https://zalo.me/0339197917',
            'https://m.me/thueloakeodanang.didiaudio',
          ])
            assert.ok(await page.locator(`main a[href="${href}"]`).count())
        }
        assert.deepEqual(errors, [])
        console.log(
          'PASS',
          tag,
          'photo first, interactive second, background preload, retained viewer, AR state, reduced motion, controls, keyboard/focus, links, overflow and runtime errors',
        )
        await context.close()
      }
    }
    // Normal-motion hint and genuine interaction; never apply a fake rotation to photos.
    const c = await browser.newContext({
      viewport: { width: 390, height: 950 },
      reducedMotion: 'no-preference',
    })
    await c.route('**/*', (r) =>
      r.request().url().startsWith(base) ? r.continue() : r.abort(),
    )
    const p = await c.newPage()
    await p.goto(base + product)
    const g = p.getByRole('region', {
      name: 'Gallery Loa JBL PartyBox Stage 320',
    })
    const photoStage = g.getByRole('tabpanel').locator('div.relative').first()
    await photoStage.scrollIntoViewIfNeeded()
    const photoBox = await photoStage.boundingBox()
    await p.mouse.move(
      photoBox.x + photoBox.width * 0.75,
      photoBox.y + photoBox.height * 0.5,
    )
    await p.mouse.down()
    await p.mouse.move(
      photoBox.x + photoBox.width * 0.25,
      photoBox.y + photoBox.height * 0.5,
      { steps: 10 },
    )
    await p.mouse.up()
    await p.waitForFunction(
      () => document.querySelector('model-viewer')?.loaded,
      { timeout: 60000 },
    )
    assert.equal(
      await p.evaluate(() =>
        document.querySelector('model-viewer').hasAttribute('auto-rotate'),
      ),
      true,
    )
    assert.notEqual(
      await g
        .locator('[data-drag-hint] > div')
        .evaluate((e) => getComputedStyle(e).animationName),
      'none',
    )
    await g.locator('model-viewer').scrollIntoViewIfNeeded()
    const box = await g.locator('model-viewer').boundingBox()
    const before = await p.evaluate(
      () => document.querySelector('model-viewer').getCameraOrbit().theta,
    )
    await p.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.55)
    await p.mouse.down()
    await p.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.55, {
      steps: 12,
    })
    await p.mouse.up()
    await g.locator('[data-drag-hint]').waitFor({ state: 'detached' })
    assert.equal(
      await p.evaluate(() =>
        document.querySelector('model-viewer').hasAttribute('auto-rotate'),
      ),
      false,
    )
    await p.waitForFunction(
      (t) =>
        Math.abs(
          document.querySelector('model-viewer').getCameraOrbit().theta - t,
        ) > 0.05,
      before,
    )
    console.log(
      'PASS photo swipe, idle animation and real drag: hint hidden and auto rotation stopped after interaction',
    )
    await c.close()
    const failure = await browser.newContext({
      viewport: { width: 390, height: 950 },
    })
    await failure.route('**/*', (r) =>
      r.request().url().startsWith(base) ? r.continue() : r.abort(),
    )
    const broken = await failure.newPage()
    let calls = 0
    await broken.route('**/*.glb', (r) =>
      ++calls === 1
        ? r.fulfill({ status: 404, body: 'Missing test model' })
        : r.continue(),
    )
    await broken.goto(base + product)
    await broken.getByRole('tab', { name: '360° · Tương tác' }).click()
    await broken.getByRole('alert').waitFor({ timeout: 60000 })
    await broken.getByRole('button', { name: 'Thử lại', exact: true }).click()
    await broken.waitForFunction(
      () => document.querySelector('model-viewer')?.loaded,
      { timeout: 60000 },
    )
    await broken.getByRole('tab', { name: 'Ảnh 1', exact: true }).click()
    await broken.locator('model-viewer').waitFor({ state: 'hidden' })
    console.log('PASS missing model, retry and photo fallback')
    await failure.close()
    const noGL = await browser.newContext({
      viewport: { width: 390, height: 950 },
    })
    await noGL.route('**/*', (r) =>
      r.request().url().startsWith(base) ? r.continue() : r.abort(),
    )
    await noGL.addInitScript(() => {
      const getContext = HTMLCanvasElement.prototype.getContext
      HTMLCanvasElement.prototype.getContext = function (kind, ...args) {
        return kind === 'webgl2' ? null : getContext.call(this, kind, ...args)
      }
    })
    const noGLPage = await noGL.newPage()
    await noGLPage.goto(base + product)
    await noGLPage.getByRole('tab', { name: '360° · Tương tác' }).click()
    await noGLPage.getByRole('alert').filter({ hasText: 'WebGL' }).waitFor()
    await noGLPage.getByRole('tab', { name: 'Ảnh 1', exact: true }).click()
    assert.equal(await noGLPage.locator('model-viewer').count(), 0)
    console.log(
      'PASS WebGL unavailable: actionable error and photo gallery retained',
    )
    await noGL.close()
  } finally {
    await browser.close()
  }
})().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
