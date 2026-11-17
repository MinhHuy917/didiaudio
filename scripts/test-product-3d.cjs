const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
const moduleUnderTest = { exports: {} }
vm.runInNewContext(
  ts.transpileModule(fs.readFileSync('src/lib/product-3d.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
  { module: moduleUnderTest, exports: moduleUnderTest.exports, URL },
)
const { canView3D, canUseAR, validAssetUrl } = moduleUnderTest.exports
const config = { enabled: true, modelUrl: '/models/test.glb' }
test('missing, disabled and invalid models keep the photo gallery', () => {
  for (const value of [
    undefined,
    {},
    { ...config, enabled: false },
    { ...config, modelUrl: '/photo.jpg' },
    { ...config, modelUrl: 'javascript:alert(1)' },
  ])
    assert.equal(canView3D(value), false)
  assert.equal(canView3D(config), true)
  assert.equal(
    canView3D({ ...config, modelUrl: 'https://cdn.example.com/test.gltf?v=1' }),
    true,
  )
})
test('reject insecure, credentialed and non-model URLs', () => {
  for (const url of [
    'http://cdn.example.com/a.glb',
    '//cdn.example.com/a.glb',
    'https://u:p@cdn.example.com/a.glb',
    'data:model/gltf-binary;base64,foo',
    '/a.glb#fragment',
  ])
    assert.equal(validAssetUrl(url, ['.glb']), false)
})
test('AR requires explicit approval, real dimensions and verified model scale', () => {
  const ar = {
    ...config,
    arEnabled: true,
    scaleVerified: true,
    dimensionSource: 'Test fixture only',
    dimensionsMeters: { width: 1, height: 2, depth: 1 },
  }
  assert.equal(canUseAR(config), false)
  assert.equal(canUseAR(ar), true)
  for (const change of [
    { scaleVerified: false },
    { arEnabled: false },
    { dimensionSource: '' },
    { dimensionsMeters: { width: 0, height: 2, depth: 1 } },
    { dimensionsMeters: { width: NaN, height: 2, depth: 1 } },
    { usdzUrl: '/a.txt' },
  ])
    assert.equal(canUseAR({ ...ar, ...change }), false)
  assert.equal(canUseAR({ ...ar, usdzUrl: '/a.usdz' }), true)
})
