const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const ts = require('typescript')
const vm = require('node:vm')
const mod = { exports: {} }
const links = []
const document = {
  baseURI: 'https://www.didi-audio.com/',
  querySelectorAll: () => links,
  createElement: () => ({
    dataset: {},
    setAttribute(key, value) {
      this[key] = value
    },
    remove() {
      links.splice(links.indexOf(this), 1)
    },
  }),
  head: { appendChild: (node) => links.push(node) },
}
vm.runInNewContext(
  ts.transpileModule(fs.readFileSync('src/lib/model-prefetch.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
  { module: mod, exports: mod.exports, document, URL },
)
const { mayPrefetchModel, hintModelDownload } = mod.exports
test('skip speculative downloads on data saver and slow connections, not explicit 360 use', () => {
  assert.equal(mayPrefetchModel(), true)
  assert.equal(mayPrefetchModel({ effectiveType: '4g' }), true)
  for (const effectiveType of ['slow-2g', '2g', '3g'])
    assert.equal(mayPrefetchModel({ effectiveType }), false)
  assert.equal(mayPrefetchModel({ saveData: true, effectiveType: '4g' }), false)
})
test('warm only network resources at low priority; deduplicate and clean up hints', () => {
  const dispose = hintModelDownload('/models/stage-320/stage-320.glb')
  const disposeDuplicate = hintModelDownload('/models/stage-320/stage-320.glb')
  assert.equal(links.length, 1)
  assert.equal(links[0].rel, 'prefetch')
  assert.equal(links[0].as, 'fetch')
  assert.equal(links[0].crossOrigin, 'anonymous')
  assert.equal(links[0].fetchpriority, 'low')
  assert.equal(
    links[0].href,
    'https://www.didi-audio.com/models/stage-320/stage-320.glb',
  )
  disposeDuplicate()
  assert.equal(links.length, 1)
  dispose()
  assert.equal(links.length, 0)
})
