const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
const sharp = require('sharp')
const crypto = require('node:crypto')
function load(file, dependencies = {}) {
  const mod = { exports: {} }
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText,
    {
      module: mod,
      exports: mod.exports,
      URL,
      require: (id) => {
        if (!(id in dependencies)) throw new Error('Unexpected import: ' + id)
        return dependencies[id]
      },
    },
  )
  return mod.exports
}
const lib = load('src/lib/product-videos.ts')
const { productVideos: videos } = load('src/data/product-videos.ts')
const { videoMessages } = load('src/data/video-messages.ts')
const { videoSchema } = load('src/lib/video-schema.ts', {
  './seo': {
    absoluteUrl: (path) => new URL(path, 'https://www.didi-audio.com').href,
  },
  './product-videos': lib,
})
const manifest = JSON.parse(
  fs.readFileSync('public/images/stage-320-videos/sources.json'),
)
test('catalog uses unique verified public video IDs, source metadata and decodable thumbnails', async () => {
  assert.equal(videos.length, 9)
  assert.equal(new Set(videos.map((v) => v.id)).size, videos.length)
  assert.ok(videos.filter((v) => v.official).length >= 2)
  for (const video of videos) {
    assert.match(video.id, /^[a-zA-Z0-9_-]{11}$/)
    assert.match(video.channelId, /^UC[a-zA-Z0-9_-]{22}$/)
    const source = manifest.find((entry) => entry.id === video.id)
    assert.ok(source.public && source.playableInEmbed)
    assert.equal(source.originalTitle, video.originalTitle)
    assert.equal(source.channel, video.channel)
    assert.equal(source.uploadDate, video.uploadDate)
    assert.equal(source.durationSeconds, video.durationSeconds)
    assert.ok(Number.isFinite(Date.parse(video.uploadDate)))
    assert.ok(video.durationSeconds > 0)
    assert.equal(video.official, video.channelId === 'UCced_wdSslkOf7xc_0qyT8w')
    const bytes = fs.readFileSync('public' + video.thumbnail)
    assert.equal(
      crypto.createHash('sha256').update(bytes).digest('hex'),
      source.sha256,
    )
    const meta = await sharp(bytes).metadata()
    assert.ok(meta.width >= 480 && meta.width <= 960)
    assert.equal(meta.format, 'webp')
    await sharp(bytes).raw().toBuffer()
  }
})
test('all six categories have relevant videos and filters preserve curated order', () => {
  assert.equal(lib.filterVideos(videos, 'all').length, videos.length)
  for (const category of lib.videoCategories) {
    const filtered = lib.filterVideos(videos, category)
    assert.ok(filtered.length > 0, category)
    assert.ok(filtered.every((video) => video.categories.includes(category)))
    assert.equal(
      filtered.map((v) => videos.indexOf(v)).join(','),
      filtered
        .map((v) => videos.indexOf(v))
        .sort((a, b) => a - b)
        .join(','),
    )
  }
  assert.equal(lib.filterVideos([], 'all').length, 0)
  assert.equal(lib.filterVideos([], 'sound').length, 0)
})
test('all UI messages and video summaries cover the five supported languages', () => {
  const keys = Object.keys(videoMessages.vi).sort().join(',')
  for (const locale of lib.videoLocales) {
    assert.equal(Object.keys(videoMessages[locale]).sort().join(','), keys)
    for (const category of lib.videoCategories)
      assert.ok(videoMessages[locale].categories[category])
    for (const video of videos) {
      assert.ok(video.copy[locale].title && video.copy[locale].description)
      assert.ok(!video.copy[locale].description.includes('undefined'))
    }
    assert.equal(lib.videoLocale(locale), locale)
  }
  assert.equal(lib.videoLocale('invalid'), 'vi')
  assert.equal(lib.videoLibraryHref('vi'), '/video-jbl-partybox-320')
  assert.equal(lib.videoLibraryHref('ko'), '/video-jbl-partybox-320?lang=ko')
  assert.equal(lib.formatVideoDuration(60), '1:00')
  assert.equal(lib.formatVideoDuration(1937), '32:17')
})
test('VideoObject contains only verified facts for the supplied visible videos', () => {
  const schema = videoSchema(videos.slice(0, 3), 'vi')
  assert.equal(schema['@graph'].length, 3)
  for (const [index, node] of schema['@graph'].entries()) {
    const video = videos[index]
    assert.equal(node['@type'], 'VideoObject')
    assert.equal(node.name, video.copy.vi.title)
    assert.equal(node.uploadDate, video.uploadDate)
    assert.equal(node.duration, `PT${video.durationSeconds}S`)
    assert.ok(node.thumbnailUrl[0].startsWith('https://www.didi-audio.com/'))
    assert.equal(node.author.name, video.channel)
    assert.equal(
      node.embedUrl,
      `https://www.youtube-nocookie.com/embed/${video.id}`,
    )
    assert.equal(node.url, lib.youtubeWatchUrl(video.id))
    assert.equal(node.aggregateRating, undefined)
    assert.equal(node.interactionStatistic, undefined)
  }
  assert.equal(
    videoSchema([{ ...videos[0], uploadDate: '' }], 'vi')['@graph'].length,
    0,
  )
  assert.equal(
    videoSchema([{ ...videos[0], embeddable: false }], 'en')['@graph'][0]
      .embedUrl,
    undefined,
  )
})
