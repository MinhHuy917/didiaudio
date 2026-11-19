const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core')
const assert = require('node:assert/strict')
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4195'
;(async () => {
  const browser = await chromium.launch({
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  })
  try {
    for (const width of [360, 390, 768]) {
      const page = await browser.newPage({
        viewport: { width, height: 850 },
        reducedMotion: width === 390 ? 'no-preference' : 'reduce',
      })
      const errors = []
      page.on('pageerror', (error) => errors.push(error.message))
      await page.route('**/*', (route) =>
        route.request().url().startsWith(base)
          ? route.continue()
          : route.abort(),
      )
      await page.goto(base)
      const trigger = page.getByRole('button', { name: 'Mở menu', exact: true })
      const dialog = page.getByRole('dialog', { name: 'ĐiĐi Audio' })
      const open = async () => {
        await trigger.click()
        await dialog.waitFor({ state: 'visible' })
        await page.waitForFunction(() => {
          const panel = document
            .querySelector('#mobile-navigation nav')
            .parentElement.getBoundingClientRect()
          return Math.abs(panel.right - innerWidth) < 1
        })
      }
      await open()
      const panel = await dialog
        .getByRole('navigation')
        .locator('..')
        .boundingBox()
      assert.ok(Math.abs(panel.width - Math.min(width * 0.8, 384)) < 1)
      assert.equal(
        await page.evaluate(() => document.body.style.overflow),
        'hidden',
      )
      assert.equal(await dialog.getByRole('link').count(), 6)
      await dialog
        .getByRole('button', { name: 'Đóng menu', exact: true })
        .focus()
      await page.keyboard.press('Shift+Tab')
      assert.equal(
        await page.evaluate(() => document.activeElement.getAttribute('href')),
        'tel:0339197917',
      )
      if (width === 390)
        await page.screenshot({ path: '/tmp/didi-mobile-menu.png' })
      await page.keyboard.press('Escape')
      await dialog.waitFor({ state: 'hidden' })
      assert.equal(
        await trigger.evaluate((node) => document.activeElement === node),
        true,
      )
      assert.notEqual(
        await page.evaluate(() => document.body.style.overflow),
        'hidden',
      )
      await open()
      await dialog
        .getByRole('button', { name: 'Đóng menu bằng vùng bên ngoài' })
        .click({ position: { x: 8, y: 300 } })
      await dialog.waitFor({ state: 'hidden' })
      await open()
      await dialog
        .getByRole('link', { name: 'Bảng giá thuê', exact: true })
        .click()
      await dialog.waitFor({ state: 'hidden' })
      await page.waitForURL('**/#products')
      await open()
      await page.setViewportSize({ width: 1200, height: 850 })
      await dialog.waitFor({ state: 'hidden' })
      assert.deepEqual(errors, [])
      console.log(
        'PASS',
        width,
        'drawer width, focus trap/return, Escape, backdrop, scroll lock, anchor and desktop resize',
      )
      await page.close()
    }
  } finally {
    await browser.close()
  }
})().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
