'use client'

import { useEffect, useMemo, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import {
  ArrowUp,
  CheckCircle2,
  ChevronDown,
  Circle,
  ExternalLink,
  MessageCircle,
  Phone,
  Play,
  Search,
  X,
} from 'lucide-react'
import { guideMessages } from '@/data/guide-messages'
import { guideSources } from '@/data/guide-sources'
import { rentalMicrophone } from '@/data/rental-microphone'
import {
  guideProgressIds,
  guideProgressKey,
  guideLegacyProgressKey,
  migrateGuideProgress,
  readGuideProgress,
  topicMatches,
  type GuideContent,
  type GuideLocale,
  type GuideStep,
} from '@/lib/product-guide'
import {
  videoRentalHref,
  youtubeWatchUrl,
  type ProductVideo,
} from '@/lib/product-videos'
import topImage from '@/images/loajblpartyboxstage320/3.png'
import connectionsImage from '@/images/loajblpartyboxstage320/2.png'

const Player = dynamic(() => import('@/components/video/VideoPlayerDialog'), {
  ssr: false,
})
const ring =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300'
const assets = {
  top: topImage.src,
  connections: connectionsImage.src,
  back: '/images/stage-320-gallery/back.webp',
}
export function GuideCenter({
  content,
  locale,
  video,
  microphoneVideo,
}: {
  content: GuideContent
  locale: GuideLocale
  video?: ProductVideo
  microphoneVideo?: ProductVideo
}) {
  const m = guideMessages[locale]
  const [query, setQuery] = useState('')
  const [done, setDone] = useState<string[]>([])
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState<ProductVideo | null>(null)
  const close = useCallback(() => setPlaying(null), [])
  const validIds = useMemo(() => guideProgressIds(content), [content])
  useEffect(() => {
    try {
      const current = sessionStorage.getItem(guideProgressKey)
      setDone(
        current === null
          ? migrateGuideProgress(
              sessionStorage.getItem(guideLegacyProgressKey),
              validIds,
            )
          : readGuideProgress(current, validIds),
      )
    } catch {
      /* Storage is optional; controls still work. */
    }
    setReady(true)
  }, [validIds])
  useEffect(() => {
    if (!ready) return
    try {
      sessionStorage.setItem(guideProgressKey, JSON.stringify(done))
    } catch {
      /* Private/blocked storage must not prevent use. */
    }
  }, [done, ready])
  function toggle(id: string) {
    setDone((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    )
  }
  function jump(id: string) {
    setQuery('')
    requestAnimationFrame(() => {
      const element = document.getElementById(id)
      element?.scrollIntoView({ block: 'start' })
      element?.focus({ preventScroll: true })
      window.history.replaceState(null, '', `#${id}`)
    })
  }
  function completeButton(step: GuideStep) {
    const checked = done.includes(step.id)
    return (
      <button
        type="button"
        aria-pressed={checked}
        aria-label={`${checked ? m.completed : m.complete}: ${step.title}`}
        onClick={() => toggle(step.id)}
        className={`mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm ${ring} ${checked ? 'border-emerald-300/40 bg-emerald-950/30 text-emerald-200' : 'border-white/20 bg-white/5 text-gray-200 hover:bg-white/10'}`}
      >
        {checked ? (
          <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0" />
        ) : (
          <Circle aria-hidden="true" className="h-5 w-5 shrink-0" />
        )}
        <span>{checked ? m.completed : m.complete}</span>
      </button>
    )
  }
  const visible = content.topics.filter((topic) => topicMatches(topic, query))
  const imageAlt = {
    top: m.topImage,
    connections: m.connectionsImage,
    back: m.backImage,
  }
  return (
    <div>
      <section
        aria-labelledby="guide-checklist"
        className="mb-8 rounded-2xl border border-white/15 bg-white/[0.03] p-5 sm:p-6"
      >
        <h2 id="guide-checklist" className="text-xl font-semibold text-white">
          {m.checklist}
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-300">
          {m.checklistIntro}
        </p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {content.checklist.map((item) => (
            <label
              key={item.id}
              className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-3 text-sm leading-6 text-gray-200 hover:bg-white/5"
            >
              <input
                type="checkbox"
                checked={done.includes(item.id)}
                onChange={() => toggle(item.id)}
                className="mt-0.5 h-5 w-5 shrink-0 accent-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-400">{m.sessionNote}</p>
      </section>
      <div className="grid min-w-0 items-start gap-7 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="min-w-0 lg:sticky lg:top-32">
          <label
            htmlFor="guide-search"
            className="mb-2 block text-sm font-semibold text-white"
          >
            {m.search}
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            />
            <input
              id="guide-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={m.placeholder}
              autoComplete="off"
              className={`min-h-12 w-full rounded-xl border border-white/20 bg-audio-light py-3 pl-10 pr-12 text-sm text-white placeholder:text-gray-400 ${ring}`}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label={m.clearSearch}
                className={`absolute right-0 top-0 flex h-12 w-11 items-center justify-center rounded-r-xl text-gray-300 hover:text-white ${ring}`}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            )}
          </div>
          <nav
            aria-label={m.navigation}
            className="mt-4 flex gap-2 overflow-x-auto pb-3 lg:flex-col lg:overflow-visible"
          >
            {content.topics.map((topic, index) => (
              <a
                key={topic.id}
                href={`#guide-${topic.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  jump(`guide-${topic.id}`)
                }}
                className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-gray-200 hover:border-cyan-300/50 hover:text-cyan-200 lg:shrink ${ring}`}
              >
                <span
                  aria-hidden="true"
                  className="font-semibold text-cyan-300"
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="max-lg:whitespace-nowrap">{topic.title}</span>
              </a>
            ))}
          </nav>
        </aside>
        <div className="min-w-0">
          <p
            role="status"
            aria-live="polite"
            className="mb-5 text-sm text-gray-400"
          >
            {visible.length} / {content.topics.length} {m.topics}
          </p>
          {!visible.length && (
            <div className="rounded-2xl border border-white/15 p-6">
              <p className="text-gray-300">{m.noResults}</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className={`mt-4 min-h-11 rounded-full border border-cyan-300/40 px-5 text-sm text-cyan-200 ${ring}`}
              >
                {m.resetSearch}
              </button>
            </div>
          )}
          <div className="space-y-7">
            {visible.map((topic) => {
              const topicVideo =
                topic.id === 'microphone' ? microphoneVideo || video : video
              const allSteps = [
                ...topic.steps,
                ...(topic.issues || []).flatMap((issue) => issue.steps),
              ]
              return (
                <article
                  key={topic.id}
                  id={`guide-${topic.id}`}
                  tabIndex={-1}
                  aria-labelledby={`guide-heading-${topic.id}`}
                  className={`scroll-mt-32 rounded-2xl border border-white/15 bg-white/[0.02] p-4 sm:p-6 ${ring}`}
                >
                  <div className="mb-5">
                    <h2
                      id={`guide-heading-${topic.id}`}
                      className="text-xl font-bold text-white sm:text-2xl"
                    >
                      {topic.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-300">
                      {topic.summary}
                    </p>
                    <p className="mt-2 text-xs text-cyan-200">
                      {m.progress}{' '}
                      {allSteps.filter((step) => done.includes(step.id)).length}
                      /{allSteps.length}
                    </p>
                  </div>
                  {topic.id === 'microphone' && !rentalMicrophone.verified && (
                    <div
                      role="note"
                      className="mb-5 rounded-xl border border-amber-300/25 bg-amber-950/20 p-4 text-sm leading-7 text-amber-100"
                    >
                      <p className="font-semibold">{m.micPending}</p>
                      <p className="mt-2">{m.microphoneNote}</p>
                    </div>
                  )}
                  {topic.id === 'microphone' && rentalMicrophone.verified && (
                    <div
                      role="note"
                      className="mb-5 rounded-xl border border-cyan-300/25 bg-cyan-950/20 p-4 text-sm leading-7 text-gray-200"
                    >
                      <p className="font-semibold text-cyan-200">
                        {m.micConfirmed}
                      </p>
                      <p className="mt-2">{m.microphoneSetup}</p>
                    </div>
                  )}
                  <div className="grid min-w-0 gap-5 md:grid-cols-[180px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)]">
                    <figure className="mx-auto w-full max-w-[280px] md:max-w-none">
                      <a
                        href={assets[topic.image]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={imageAlt[topic.image]}
                        className={`relative block aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] ${ring}`}
                      >
                        <Image
                          src={assets[topic.image]}
                          alt={imageAlt[topic.image]}
                          fill
                          sizes="(min-width:1280px) 220px, (min-width:768px) 180px, 280px"
                          className="object-contain p-2"
                        />
                      </a>
                      <figcaption className="mt-2 text-xs leading-5 text-gray-400">
                        {m.imageNote}
                      </figcaption>
                    </figure>
                    <div className="min-w-0 space-y-3">
                      {topic.steps.map((step, index) => (
                        <details
                          key={step.id}
                          open={
                            !!query || (topic.id === 'bluetooth' && index === 0)
                          }
                          className="group/step overflow-hidden rounded-xl border border-white/10 bg-black/20"
                        >
                          <summary
                            className={`flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 p-4 text-white [&::-webkit-details-marker]:hidden ${ring} focus-visible:outline-offset-[-3px]`}
                          >
                            <h3 className="text-sm font-semibold leading-6">
                              <span className="mr-2 text-cyan-300">
                                {m.step} {index + 1}
                              </span>
                              {step.title}
                            </h3>
                            <ChevronDown
                              aria-hidden="true"
                              className="h-4 w-4 shrink-0 group-open/step:rotate-180 motion-safe:transition-transform"
                            />
                          </summary>
                          <div className="border-t border-white/10 p-4">
                            <p className="text-sm leading-7 text-gray-300">
                              {step.body}
                            </p>
                            {completeButton(step)}
                          </div>
                        </details>
                      ))}
                      {topic.issues?.map((issue) => (
                        <details
                          key={issue.id}
                          open={!!query}
                          className="group/issue rounded-xl border border-white/10 bg-black/20"
                        >
                          <summary
                            className={`flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 p-4 [&::-webkit-details-marker]:hidden ${ring} focus-visible:outline-offset-[-3px]`}
                          >
                            <h3 className="text-sm font-semibold leading-6 text-white">
                              {issue.title}
                            </h3>
                            <ChevronDown
                              aria-hidden="true"
                              className="h-4 w-4 shrink-0 text-gray-300 group-open/issue:rotate-180 motion-safe:transition-transform"
                            />
                          </summary>
                          <div className="space-y-4 border-t border-white/10 p-4">
                            <p className="text-sm leading-7 text-gray-300">
                              <strong className="font-semibold text-white">
                                {m.cause}:{' '}
                              </strong>
                              {issue.cause}
                            </p>
                            <p className="text-sm font-semibold text-white">
                              {m.solution}
                            </p>
                            <ol className="space-y-5">
                              {issue.steps.map((step, index) => (
                                <li
                                  key={step.id}
                                  className="border-l border-cyan-300/30 pl-3"
                                >
                                  <p className="text-sm leading-7 text-gray-300">
                                    <span className="mr-2 font-semibold text-cyan-200">
                                      {index + 1}.
                                    </span>
                                    {step.body}
                                  </p>
                                  {completeButton(step)}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {topicVideo?.embeddable && (
                      <button
                        type="button"
                        onClick={() => setPlaying(topicVideo)}
                        aria-label={`${m.video}: ${topic.title}`}
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-300/40 px-4 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10 ${ring}`}
                      >
                        <Play aria-hidden="true" className="h-4 w-4" />
                        {m.video}
                      </button>
                    )}
                    {topicVideo && !topicVideo.embeddable && (
                      <a
                        href={youtubeWatchUrl(topicVideo.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.video}: ${topic.title} (YouTube)`}
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-300/40 px-4 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10 ${ring}`}
                      >
                        <Play aria-hidden="true" className="h-4 w-4" />
                        {m.video} · YouTube
                        <ExternalLink aria-hidden="true" className="h-3 w-3" />
                      </a>
                    )}
                    {topicVideo?.embeddable && (
                      <a
                        href={youtubeWatchUrl(topicVideo.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-cyan-200 underline underline-offset-4 ${ring}`}
                      >
                        YouTube · {topicVideo.channel}
                        <ExternalLink aria-hidden="true" className="h-3 w-3" />
                      </a>
                    )}
                    <a
                      href="#guide-top"
                      onClick={(event) => {
                        event.preventDefault()
                        jump('guide-top')
                      }}
                      className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-gray-300 hover:text-white ${ring}`}
                    >
                      <ArrowUp aria-hidden="true" className="h-4 w-4" />
                      {m.top}
                    </a>
                  </div>
                  <details className="mt-3">
                    <summary
                      className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-sm text-xs text-gray-400 ${ring}`}
                    >
                      {m.source}
                    </summary>
                    <ul className="flex flex-wrap gap-x-4">
                      {topic.sources.map((key) => {
                        const source =
                          guideSources[key as keyof typeof guideSources]
                        return (
                          <li key={key}>
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex min-h-11 items-center gap-1 rounded-sm text-xs text-cyan-200 underline underline-offset-4 ${ring}`}
                            >
                              {source.name}
                              <ExternalLink
                                aria-hidden="true"
                                className="h-3 w-3"
                              />
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </details>
                  <div className="mt-5 rounded-xl border border-cyan-300/15 bg-cyan-950/15 p-4">
                    <p className="text-sm font-semibold text-white">{m.help}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href="tel:0339197917"
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full bg-cyan-300 px-4 text-sm font-semibold text-black hover:bg-cyan-200 ${ring}`}
                      >
                        <Phone aria-hidden="true" className="h-4 w-4" />
                        {m.call} · 0339 197 917
                      </a>
                      <a
                        href="https://zalo.me/0339197917"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm text-white hover:bg-white/10 ${ring}`}
                      >
                        <MessageCircle aria-hidden="true" className="h-4 w-4" />
                        {m.zalo}
                      </a>
                      <Link
                        href={videoRentalHref}
                        className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-cyan-200 underline underline-offset-4 ${ring}`}
                      >
                        {m.rental}
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
      <p role="status" aria-live="polite" className="sr-only">
        {m.progress} {done.length}/{validIds.length}
      </p>
      {playing && (
        <Player
          key={playing.id}
          video={playing}
          locale={locale}
          onClose={close}
        />
      )}
    </div>
  )
}
