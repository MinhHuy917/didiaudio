const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const crypto = require('node:crypto')
const ts = require('typescript')
const sharp = require('sharp')
const dataModule = { exports: {} }
vm.runInNewContext(
  ts.transpileModule(
    fs.readFileSync('src/data/product-real-photos.ts', 'utf8'),
    {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    },
  ).outputText,
  { module: dataModule, exports: dataModule.exports },
)
const photos = dataModule.exports.stage320ReferencePhotos
const root = 'public/images/stage-320-real/'
const manifest = JSON.parse(fs.readFileSync(root + 'sources.json', 'utf8'))
test('20 distinct reference photographs have working local files, source credits and bounded dimensions', async () => {
  assert.equal(photos.length, 20)
  assert.equal(manifest.length, photos.length)
  assert.equal(new Set(photos.map((p) => p.src)).size, photos.length)
  assert.equal(new Set(manifest.map((p) => p.sha256)).size, photos.length)
  assert.equal(
    new Set(manifest.map((p) => p.originalSha256)).size,
    photos.length,
  )
  let total = 0
  for (const photo of photos) {
    assert.ok(photo.alt.trim().length > 15)
    assert.equal(new URL(photo.source.url).protocol, 'https:')
    assert.ok(photo.source.name && photo.source.credit)
    const record = manifest.find((p) => photo.src.endsWith('/' + p.file))
    assert.ok(record)
    assert.equal(photo.source.url, record.sourcePage)
    assert.equal(photo.source.credit, record.credit)
    const buffer = fs.readFileSync('public' + photo.src)
    const meta = await sharp(buffer).metadata()
    assert.equal(meta.format, 'webp')
    assert.ok(meta.width <= 1200 && meta.height <= 1200)
    assert.equal(meta.width, record.width)
    assert.equal(meta.height, record.height)
    assert.equal(buffer.length, record.bytes)
    assert.equal(
      crypto.createHash('sha256').update(buffer).digest('hex'),
      record.sha256,
    )
    await sharp(buffer).raw().toBuffer() // Fully decode instead of checking headers only.
    total += buffer.length
  }
  assert.ok(
    total < 3 * 1024 * 1024,
    'Keep the complete additional photo set under 3 MiB',
  )
})
