// Run against a production build; Playwright is supplied by the test environment.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core')
const assert = require('node:assert/strict'),
  fs = require('fs')
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4177'
const output = process.env.TEST_OUTPUT || '/tmp/didi-reference-photos-check'
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
    for (const route of ['/', '/products/loa-jbl-partyBox-stage-320']) {
      const page = await browser.newPage({
          viewport: { width: 390, height: 950 },
          reducedMotion: 'reduce',
        }),
        errors = []
      page.on('pageerror', (e) => errors.push(e.message))
      await page.route('**/*', (r) =>
        r.request().url().startsWith(base) ? r.continue() : r.abort(),
      )
      await page.goto(base + route, { waitUntil: 'networkidle' })
      const g = page.getByRole('region', {
        name: 'Gallery Loa JBL PartyBox Stage 320',
        exact: true,
      })
      for (let i = 1; i <= 48; i++) {
        await g.getByRole('tab', { name: 'Ảnh ' + i, exact: true }).click()
        await g
          .getByRole('tabpanel')
          .getByRole('img')
          .evaluate((img) => img.decode())
        if (i > 28) {
          assert.ok((await g.innerText()).includes('Ảnh chụp tham khảo'))
          const link = g.getByRole('link')
          assert.equal(await link.count(), 1)
          assert.equal(await link.getAttribute('target'), '_blank')
          assert.match(await link.getAttribute('rel'), /noopener/)
          assert.ok((await link.getAttribute('href')).startsWith('https://'))
          if (i === 29) {
            await g.screenshot({
              path:
                output +
                '/' +
                (route === '/' ? 'hero' : 'product') +
                '-reference-390.png',
            })
            await link.focus()
            assert.equal(
              await link.evaluate((el) => el === document.activeElement),
              true,
            )
          }
        }
        assert.equal(
          await page.evaluate(() => document.documentElement.scrollWidth),
          390,
        )
      }
      assert.deepEqual(errors, [])
      console.log(
        'PASS ' +
          route +
          ': 48 main images decode; all 20 reference credits/links; mobile overflow; keyboard focus; zero runtime errors.',
      )
      await page.close()
    }
  } finally {
    await browser.close()
  }
})().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
