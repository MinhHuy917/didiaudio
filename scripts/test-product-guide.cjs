const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
function load(file) {
  const mod = { exports: {} }
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    }).outputText,
    { module: mod, exports: mod.exports },
  )
  return mod.exports
}
const lib = load('src/lib/product-guide.ts')
const { guideContent: content } = load('src/data/guide-content.ts')
const { guideMessages: messages } = load('src/data/guide-messages.ts')
const { guideSources: sources } = load('src/data/guide-sources.ts')
const { rentalMicrophone } = load('src/data/rental-microphone.ts')
const locales = ['vi', 'en', 'ko', 'ru', 'zh']
test('all five locales have six topics, seven cause/recovery cases, 46 steps and the same stable progress IDs', () => {
  const expected = lib.guideProgressIds(content.vi).sort().join('|')
  assert.equal(lib.guideProgressIds(content.vi).length, 50)
  for (const locale of locales) {
    const data = content[locale]
    assert.equal(data.topics.length, 6)
    assert.equal(data.checklist.length, 4)
    const ids = lib.guideProgressIds(data)
    assert.equal(new Set(ids).size, ids.length)
    assert.equal(ids.sort().join('|'), expected)
    assert.equal(
      Object.keys(messages[locale]).sort().join('|'),
      Object.keys(messages.vi).sort().join('|'),
    )
    for (const value of Object.values(messages[locale]))
      assert.ok(value.trim().length)
    for (const topic of data.topics) {
      assert.ok(topic.title && topic.summary && topic.sources.length)
      for (const source of topic.sources) assert.ok(sources[source])
      const steps = [
        ...topic.steps,
        ...(topic.issues || []).flatMap((issue) => issue.steps),
      ]
      for (const step of steps) {
        assert.ok(step.id && step.title)
        assert.ok(step.body.trim(), `${locale}: ${step.id}`)
      }
    }
    const issues = data.topics.find(
      (topic) => topic.id === 'troubleshooting',
    ).issues
    assert.equal(issues.length, 7)
    for (const issue of issues) {
      assert.ok(issue.title && issue.cause)
      assert.equal(issue.steps.length, 3)
    }
  }
})
test('Vietnamese search ignores accents/case/whitespace and supports all search terms without inventing results', () => {
  assert.equal(lib.normalizeGuideSearch('  ĐIỆN  THOẠI  '), 'dien thoai')
  assert.equal(
    lib.matchesGuideSearch(
      'Kết nối Bluetooth với điện thoại',
      'ket noi bluetooth',
    ),
    true,
  )
  assert.equal(lib.matchesGuideSearch('Pin loa', 'bluetooth'), false)
  assert.ok(
    content.vi.topics.some((topic) => lib.topicMatches(topic, 'micro bi hu')),
  )
  assert.ok(
    content.vi.topics.some((topic) =>
      lib.topicMatches(topic, 'khong co tieng'),
    ),
  )
  assert.ok(content.vi.topics.every((topic) => lib.topicMatches(topic, '')))
  assert.equal(
    content.vi.topics.filter((topic) =>
      lib.topicMatches(topic, 'zzzz-no-such-topic'),
    ).length,
    0,
  )
})
test('session progress accepts only known IDs and safely rejects corrupt/untrusted values', () => {
  const allowed = lib.guideProgressIds(content.vi)
  for (const input of [null, 'bad JSON', '{}', 'true', '42', 'null'])
    assert.equal(lib.readGuideProgress(input, allowed).length, 0)
  const values = lib.readGuideProgress(
    JSON.stringify([
      allowed[0],
      allowed[0],
      allowed[1],
      'unknown',
      null,
      {},
      '__proto__',
    ]),
    allowed,
  )
  assert.equal(values.join('|'), allowed.slice(0, 2).join('|'))
  assert.equal(lib.guideHref('vi'), '/huong-dan-su-dung-jbl-partybox-320')
  assert.equal(
    lib.guideHref('zh'),
    '/huong-dan-su-dung-jbl-partybox-320?lang=zh',
  )
})
test('technical sources are primary HTTPS sources and microphone facts cannot silently be invented', () => {
  for (const source of Object.values(sources)) {
    const url = new URL(source.url)
    assert.equal(url.protocol, 'https:')
    assert.ok(
      [
        'support.jbl.com',
        'support.apple.com',
        'support.google.com',
        'www.shure.com',
        'www.alphaworksaudio.com',
      ].includes(url.hostname),
    )
  }
  assert.ok(sources.manual.url.includes('PARTYBOX_STAGE_320'))
  assert.ok(sources.quickstart.url.includes('Stage_320'))
  for (const key of [
    'model',
    'powerMethod',
    'receiverConnection',
    'pairingMethod',
  ]) {
    if (rentalMicrophone.verified) assert.ok(rentalMicrophone[key])
    else assert.equal(rentalMicrophone[key], null)
  }
  if (!rentalMicrophone.verified)
    for (const locale of locales)
      assert.ok(messages[locale].micPending && messages[locale].microphoneNote)
})

test('D2 setup facts and progress migration follow owner confirmation and manufacturer documentation', () => {
  assert.equal(rentalMicrophone.verified, true)
  assert.equal(rentalMicrophone.model, 'Alpha Works D2')
  assert.equal(rentalMicrophone.ownerConfirmedModel, true)
  assert.equal(rentalMicrophone.handheldBatteries.count, 2)
  assert.equal(rentalMicrophone.handheldBatteries.size, 'AA')
  assert.equal(rentalMicrophone.receiver.chargePort, 'USB-C')
  assert.equal(rentalMicrophone.receiver.outputJackMm, 6.35)
  assert.equal(rentalMicrophone.prepairedAtHandover, null)
  assert.equal(rentalMicrophone.hardwareTested, false)
  for (const locale of locales) {
    const topic = content[locale].topics.find(
      (topic) => topic.id === 'microphone',
    )
    assert.ok(topic.summary.includes('D2'))
    assert.ok(topic.sources.includes('d2manual'))
    assert.ok(messages[locale].microphoneSetup.includes('D2'))
    assert.ok(
      topic.steps
        .map((step) => step.body)
        .join(' ')
        .includes('CH-A'),
    )
  }
  const allowed = lib.guideProgressIds(content.vi)
  const old = JSON.stringify([
    'bluetooth-power',
    'controls-music',
    'microphone-power',
    'issue-no-mic-1',
    'prep-mic',
    'unknown',
  ])
  assert.equal(
    lib.migrateGuideProgress(old, allowed).join('|'),
    'bluetooth-power|controls-music',
  )
  assert.notEqual(lib.guideProgressKey, lib.guideLegacyProgressKey)
})

test('D2 tutorial remains a direct link after live YouTube error150; original JBL catalog is unchanged', () => {
  const { rentalMicrophoneVideo: video } = load(
    'src/data/rental-microphone-video.ts',
  )
  const { productVideos } = load('src/data/product-videos.ts')
  assert.equal(video.id, 'ZhCmbAet46M')
  assert.equal(video.channel, 'Alpha Works')
  assert.equal(video.durationSeconds, 182)
  assert.equal(video.embeddable, false)
  assert.equal(productVideos.length, 9)
  assert.ok(!productVideos.some((entry) => entry.id === video.id))
  for (const locale of locales)
    assert.ok(video.copy[locale].title && video.copy[locale].description)
})
