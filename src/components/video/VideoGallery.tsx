'use client'

import { useCallback, useId, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ExternalLink, Play, Share2, Youtube } from 'lucide-react'
import { Button } from '@/components/Button'
import { videoMessages } from '@/data/video-messages'
import { jsonLd } from '@/lib/seo'
import { videoSchema } from '@/lib/video-schema'
import {
  filterVideos,
  formatVideoDuration,
  videoCategories,
  youtubeWatchUrl,
  type ProductVideo,
  type VideoCategory,
  type VideoLocale,
} from '@/lib/product-videos'

const Player = dynamic(() => import('./VideoPlayerDialog'), { ssr: false })
const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300'
export function VideoGallery({
  videos,
  locale = 'vi',
  featured = false,
}: {
  videos: ProductVideo[]
  locale?: VideoLocale
  featured?: boolean
}) {
  const m = videoMessages[locale]
  const [category, setCategory] = useState<VideoCategory | 'all'>('all')
  const [limit, setLimit] = useState(6)
  const [selected, setSelected] = useState<ProductVideo | null>(null)
  const [announcement, setAnnouncement] = useState('')
  const [manualLink, setManualLink] = useState('')
  const [sharingId, setSharingId] = useState('')
  const close = useCallback(() => setSelected(null), [])
  const listId = useId()
  const inputId = useId()
  const filtered = filterVideos(videos, category)
  const visible = featured ? videos : filtered.slice(0, limit)
  async function share(video: ProductVideo) {
    const url = youtubeWatchUrl(video.id)
    setSharingId(video.id)
    setManualLink('')
    setAnnouncement('')
    try {
      if (navigator.share) {
        await navigator.share({ title: video.copy[locale].title, url })
        setAnnouncement(m.shared)
      } else {
        if (!navigator.clipboard) throw new Error('Clipboard unavailable')
        await navigator.clipboard.writeText(url)
        setAnnouncement(m.copied)
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      setManualLink(url)
      setAnnouncement(m.copyFailed)
    }
  }
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(videoSchema(visible, locale)),
        }}
      />
      {!featured && (
        <div
          role="group"
          aria-label={m.filterLabel}
          className="mb-6 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible"
        >
          {(['all', ...videoCategories] as const).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={category === value}
              aria-controls={listId}
              onClick={() => {
                setCategory(value)
                setLimit(6)
              }}
              className={`min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-left text-sm transition-colors ${focus} ${category === value ? 'border-cyan-300 bg-cyan-300 font-semibold text-black' : 'border-white/15 bg-white/5 text-gray-200 hover:border-cyan-300/60 hover:bg-white/10'}`}
            >
              {value === 'all' ? m.all : m.categories[value]}{' '}
              <span className="tabular-nums">
                ({filterVideos(videos, value).length})
              </span>
            </button>
          ))}
        </div>
      )}
      {!featured && (
        <p
          role="status"
          aria-live="polite"
          className="mb-5 text-sm text-gray-400"
        >
          {m.showing} {visible.length} {m.of} {filtered.length} {m.videos}
        </p>
      )}
      <div
        id={listId}
        className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((video) => (
          <article
            key={video.id}
            id={`video-${video.id}`}
            className="group flex min-w-0 scroll-mt-32 flex-col overflow-hidden rounded-2xl border border-white/10 bg-audio-light/60 transition-colors hover:border-cyan-300/40"
          >
            <button
              type="button"
              onClick={() => setSelected(video)}
              aria-label={`${m.play}: ${video.copy[locale].title}`}
              className={`relative block aspect-video w-full overflow-hidden bg-black text-white ${focus} focus-visible:outline-offset-[-4px]`}
            >
              <Image
                src={video.thumbnail}
                alt={video.copy[locale].title}
                fill
                sizes="(min-width: 1280px) 390px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, calc(100vw - 48px)"
                className="object-contain motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.025]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-black/70 shadow-lg backdrop-blur-sm motion-safe:transition-transform motion-safe:group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-white" />
                </span>
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 rounded bg-black/85 px-2 py-1 text-xs font-medium tabular-nums"
              >
                {formatVideoDuration(video.durationSeconds)}
              </span>
              {video.official && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/85 px-2.5 py-1 text-xs font-medium text-cyan-200">
                  <Youtube aria-hidden="true" className="h-3.5 w-3.5" />
                  {m.official}
                </span>
              )}
            </button>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <p className="mb-2 text-xs leading-5 text-gray-400">
                {video.channel} · {m.languages[video.language]}
              </p>
              <h3 className="mb-2 text-lg font-semibold leading-7 text-white">
                {video.copy[locale].title}
              </h3>
              <p className="mb-4 text-sm leading-6 text-gray-300">
                {video.copy[locale].description}
              </p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-1 border-t border-white/10 pt-2">
                <a
                  href={youtubeWatchUrl(video.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-11 items-center gap-1.5 rounded-sm text-xs text-cyan-200 underline underline-offset-4 hover:text-white ${focus}`}
                  aria-label={`${m.youtube}: ${video.copy[locale].title}`}
                >
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                  YouTube
                </a>
                <button
                  type="button"
                  onClick={() => share(video)}
                  aria-label={`${m.share}: ${video.copy[locale].title}`}
                  className={`inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-xs text-gray-200 hover:bg-white/10 ${focus}`}
                >
                  <Share2 aria-hidden="true" className="h-4 w-4" />
                  {m.share}
                </button>
              </div>
              {sharingId === video.id && announcement && (
                <p className="mt-3 text-sm text-cyan-200">{announcement}</p>
              )}
              {sharingId === video.id && manualLink && (
                <div className="mt-3">
                  <label
                    htmlFor={`${inputId}-${video.id}`}
                    className="mb-1 block text-sm text-gray-300"
                  >
                    {m.copyLink}
                  </label>
                  <input
                    id={`${inputId}-${video.id}`}
                    type="url"
                    readOnly
                    value={manualLink}
                    onFocus={(event) => event.currentTarget.select()}
                    className={`min-h-11 w-full rounded-lg border border-white/20 bg-black px-3 text-sm text-white ${focus}`}
                  />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      {!visible.length && (
        <p className="rounded-2xl border border-white/15 p-6 text-gray-300">
          {m.empty}
        </p>
      )}
      {!featured && visible.length < filtered.length && (
        <div className="mt-8 text-center">
          <Button
            type="button"
            invert
            onClick={() => setLimit((count) => count + 6)}
            aria-controls={listId}
            className={`min-h-11 px-6 ${focus}`}
          >
            {m.more}
          </Button>
        </div>
      )}
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>
      {selected && (
        <Player
          key={selected.id}
          video={selected}
          locale={locale}
          onClose={close}
        />
      )}
    </div>
  )
}
