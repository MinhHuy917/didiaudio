import type { VideoLocale } from './product-videos'
export type GuideLocale = VideoLocale
export const guidePath = '/huong-dan-su-dung-jbl-partybox-320'
export const guideProgressKey = 'didi:stage320-guide:v2'
export const guideLegacyProgressKey = 'didi:stage320-guide:v1'
export type GuideStep = { id: string; title: string; body: string }
export type GuideIssue = {
  id: string
  title: string
  cause: string
  steps: GuideStep[]
}
export type GuideTopic = {
  id:
    | 'bluetooth'
    | 'microphone'
    | 'controls'
    | 'auracast'
    | 'charging'
    | 'troubleshooting'
  title: string
  summary: string
  image: 'top' | 'connections' | 'back'
  sources: string[]
  steps: GuideStep[]
  issues?: GuideIssue[]
}
export type GuideContent = {
  checklist: { id: string; label: string }[]
  topics: GuideTopic[]
}
export function guideHref(locale: GuideLocale = 'vi') {
  return locale === 'vi' ? guidePath : `${guidePath}?lang=${locale}`
}
export function normalizeGuideSearch(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
}
export function matchesGuideSearch(text: string, query: string) {
  const value = normalizeGuideSearch(text)
  return normalizeGuideSearch(query)
    .split(' ')
    .filter(Boolean)
    .every((term) => value.includes(term))
}
export function topicMatches(topic: GuideTopic, query: string) {
  return matchesGuideSearch(
    [
      topic.title,
      topic.summary,
      ...topic.steps.flatMap((step) => [step.title, step.body]),
      ...(topic.issues || []).flatMap((issue) => [
        issue.title,
        issue.cause,
        ...issue.steps.flatMap((step) => [step.title, step.body]),
      ]),
    ].join(' '),
    query,
  )
}
export function guideProgressIds(content: GuideContent) {
  return [
    ...content.checklist.map((item) => item.id),
    ...content.topics.flatMap((topic) => [
      ...topic.steps.map((step) => step.id),
      ...(topic.issues || []).flatMap((issue) =>
        issue.steps.map((step) => step.id),
      ),
    ]),
  ]
}
export function readGuideProgress(
  raw: string | null,
  validIds: string[],
): string[] {
  try {
    const parsed: unknown = JSON.parse(raw || '[]')
    if (!Array.isArray(parsed)) return []
    return Array.from(
      new Set(
        parsed.filter(
          (id): id is string => typeof id === 'string' && validIds.includes(id),
        ),
      ),
    )
  } catch {
    return []
  }
}

/** Preserve unrelated progress, but require rereading the newly specified D2 steps. */
export function migrateGuideProgress(raw: string | null, validIds: string[]) {
  return readGuideProgress(raw, validIds).filter(
    (id) =>
      id !== 'prep-mic' &&
      !id.startsWith('microphone-') &&
      !id.startsWith('issue-no-mic-'),
  )
}
