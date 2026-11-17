const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')
function load(file) {
  const module = { exports: {} }
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText, {module,exports:module.exports,URL})
  return module.exports
}
const { product3D } = load('src/data/product-3d.ts')
const { canView3D, canUseAR } = load('src/lib/product-3d.ts')
for (const [id, config] of Object.entries(product3D)) {
  if (!config.enabled) continue
  if (!canView3D(config)) throw Error(`${id}: invalid model URL`)
  for (const url of [config.modelUrl, config.usdzUrl, config.posterUrl].filter(Boolean)) {
    if (!url.startsWith('/')) continue
    const asset = path.resolve('public', '.' + new URL(url, 'https://www.didi-audio.com').pathname)
    if (!asset.startsWith(path.resolve('public') + path.sep) || !fs.statSync(asset).isFile()) throw Error(`${id}: missing asset ${url}`)
    if (asset.endsWith('.glb')) {
      const bytes = fs.readFileSync(asset)
      if (bytes.readUInt32LE(0) !== 0x46546c67 || bytes.readUInt32LE(4) !== 2 || bytes.readUInt32LE(8) !== bytes.length) throw Error(`${id}: invalid GLB header`)
      JSON.parse(bytes.subarray(20,20+bytes.readUInt32LE(12)).toString('utf8').trim())
      console.log(`${id}: GLB ${(bytes.length/1048576).toFixed(2)}MiB valid`)
    }
  }
  if (config.arEnabled && !canUseAR(config)) throw Error(`${id}: AR enabled without verified scale, dimensions or valid USDZ`)
  console.log(`${id}: 360 ON; AR ${canUseAR(config) ? 'ON' : 'OFF'}`)
}
