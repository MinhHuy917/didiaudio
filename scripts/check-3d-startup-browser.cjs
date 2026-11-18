// Lab observation, not field CWV. No third-party scripts; 4x CPU, Chrome390px.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core')
const assert = require('node:assert/strict'),
  fs = require('node:fs')
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4192'
const output = process.env.TEST_OUTPUT || '/tmp/didi-3d-startup'
const gated = process.env.EXPECT_GATED !== '0'
;(async () => {
  fs.mkdirSync(output, { recursive: true })
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--enable-unsafe-swiftshader'],
  })
  const results = []
  try {
    for (const route of ['/', '/products/loa-jbl-partyBox-stage-320']) {
      const context = await browser.newContext({
        viewport: { width: 390, height: 950 },
        reducedMotion: 'reduce',
      })
      await context.route('**/*', (r) =>
        r.request().url().startsWith(base) ? r.continue() : r.abort(),
      )
      await context.addInitScript(() => {
        Object.defineProperty(navigator, 'connection', {
          configurable: true,
          value: { saveData: false, effectiveType: '4g' },
        })
        window.__startup = { webgl: 0, longTasks: [], maxFrameGap: 0 }
        const original = HTMLCanvasElement.prototype.getContext
        HTMLCanvasElement.prototype.getContext = function (kind, ...args) {
          if (kind === 'webgl' || kind === 'webgl2') window.__startup.webgl++
          return original.call(this, kind, ...args)
        }
        if (PerformanceObserver.supportedEntryTypes.includes('longtask'))
          new PerformanceObserver((list) => {
            for (const e of list.getEntries())
              window.__startup.longTasks.push({
                start: e.startTime,
                duration: e.duration,
              })
          }).observe({ type: 'longtask', buffered: true })
        let last = performance.now()
        function frame(now) {
          window.__startup.maxFrameGap = Math.max(
            window.__startup.maxFrameGap,
            now - last,
          )
          last = now
          requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
      })
      const page = await context.newPage(),
        errors = []
      page.on('pageerror', (e) => errors.push(e.message))
      const cdp = await context.newCDPSession(page)
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
      await page.goto(base + route, {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      })
      await page.waitForTimeout(8000)
      const sample = await page.evaluate(() => ({
        webglCalls: window.__startup.webgl,
        rendererNodes: document.querySelectorAll('model-viewer').length,
        engineRegistered: !!customElements.get('model-viewer'),
        loaded: !!document.querySelector('model-viewer')?.loaded,
        maxFrameGapMs: window.__startup.maxFrameGap,
        longTasks: window.__startup.longTasks,
        networkHint: document.querySelectorAll('link[data-didi-model-prefetch]')
          .length,
        modelResources: performance
          .getEntriesByType('resource')
          .filter((e) => e.name.includes('.glb'))
          .map((e) => ({
            initiator: e.initiatorType,
            transferBytes: e.transferSize,
            durationMs: e.duration,
          })),
      }))
      const start = Date.now()
      await page.mouse.wheel(0, 720)
      await page.waitForFunction(() => window.scrollY > 100, undefined, {
        timeout: 10000,
      })
      sample.scrollObservedAfterMs = Date.now() - start
      sample.scrollY = await page.evaluate(() => window.scrollY)
      sample.route = route
      sample.errors = errors
      if (gated) {
        assert.equal(sample.webglCalls, 0)
        assert.equal(sample.rendererNodes, 0)
        assert.equal(sample.engineRegistered, false)
        assert.ok(sample.networkHint > 0)
        assert.deepEqual(errors, [])
      }
      results.push(sample)
      console.log(JSON.stringify(sample))
      await context.close()
    }
    fs.writeFileSync(
      output + '/startup.json',
      JSON.stringify(
        {
          cpuThrottle: 4,
          viewport: 390,
          observedBeforeSelection: true,
          expectedGated: gated,
          results,
        },
        null,
        2,
      ) + '\n',
    )
  } finally {
    await browser.close()
  }
})().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
