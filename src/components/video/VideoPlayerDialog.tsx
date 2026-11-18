'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ExternalLink, Loader2, X } from 'lucide-react'
import { videoMessages } from '@/data/video-messages'
import {
  youtubeWatchUrl,
  type ProductVideo,
  type VideoLocale,
} from '@/lib/product-videos'
import { loadYouTubeAPI, type YouTubePlayer } from '@/lib/youtube-player'

export default function VideoPlayerDialog({
  video,
  locale,
  onClose,
}: {
  video: ProductVideo
  locale: VideoLocale
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const host = useRef<HTMLDivElement>(null)
  const close = useRef<HTMLButtonElement>(null)
  const [failed, setFailed] = useState(!video.embeddable)
  const [loading, setLoading] = useState(video.embeddable)
  const titleId = useId()
  const m = videoMessages[locale]
  useEffect(() => {
    const element = dialog.current
    if (!element) return
    const opener = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    close.current?.focus()
    return () => {
      element.close()
      document.body.style.overflow = overflow
      if (opener?.isConnected) opener.focus({ preventScroll: true })
    }
  }, [])
  useEffect(() => {
    if (!video.embeddable || !host.current) return
    let disposed = false
    let player: YouTubePlayer | undefined
    const container = host.current
    // YouTube owns this child; React only owns the stable container around it.
    const mount = document.createElement('div')
    container.appendChild(mount)
    const failure = () => {
      if (!disposed) {
        disposed = true
        window.clearTimeout(timer)
        player?.destroy()
        player = undefined
        container.replaceChildren()
        setFailed(true)
        setLoading(false)
      }
    }
    const timer = window.setTimeout(failure, 20000)
    loadYouTubeAPI()
      .then((api) => {
        if (disposed) return
        player = new api.Player(mount, {
          videoId: video.id,
          host: 'https://www.youtube-nocookie.com',
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            playsinline: 1,
            origin: window.location.origin,
            hl: locale,
          },
          events: {
            onReady: () => {
              window.clearTimeout(timer)
              if (!disposed) setLoading(false)
            },
            onError: failure,
          },
        })
        if (disposed) {
          player.destroy()
          player = undefined
          container.replaceChildren()
          return
        }
        container
          .querySelector('iframe')
          ?.setAttribute('title', video.copy[locale].title)
        container
          .querySelector('iframe')
          ?.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')
      })
      .catch(failure)
    return () => {
      disposed = true
      window.clearTimeout(timer)
      player?.destroy()
      container.replaceChildren()
    }
  }, [video, locale])
  return createPortal(
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      lang={locale}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const controls = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], iframe, input:not([disabled]), [tabindex="0"]',
          ),
        ).filter((element) => element.getClientRects().length > 0)
        const target = event.shiftKey ? controls.at(-1) : controls[0]
        const boundary = event.shiftKey ? controls[0] : controls.at(-1)
        if (document.activeElement === boundary && target) {
          event.preventDefault()
          target.focus()
        }
      }}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="fixed inset-0 z-[100] m-auto max-h-[90dvh] w-[calc(100%-24px)] max-w-4xl overflow-y-auto rounded-2xl border border-white/20 bg-audio-dark p-0 text-white shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm"
    >
      <div>
        <div className="flex items-start justify-between gap-3 border-b border-white/10 p-4 sm:p-5">
          <div className="min-w-0">
            <p className="mb-1 text-xs font-medium text-cyan-200">
              {m.source}: {video.channel}
            </p>
            <h2 id={titleId} className="text-base font-semibold sm:text-xl">
              {video.copy[locale].title}
            </h2>
          </div>
          <button
            ref={close}
            type="button"
            onClick={onClose}
            aria-label={m.close}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <div className="relative aspect-video min-h-[200px] bg-black">
          <div
            ref={host}
            hidden={failed}
            className="absolute inset-0 [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full"
          />
          {loading && !failed && (
            <p
              role="status"
              className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-black text-sm text-gray-300"
            >
              <Loader2
                aria-hidden="true"
                className="h-5 w-5 motion-safe:animate-spin"
              />
              {m.loading}
            </p>
          )}
          {failed && (
            <div
              role="alert"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center text-sm text-gray-200"
            >
              <p>{m.unavailable}</p>
              <a
                href={youtubeWatchUrl(video.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cyan-300 px-5 font-semibold text-black hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {m.youtube}
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
        <div className="space-y-3 p-4 text-sm leading-relaxed text-gray-300 sm:p-5">
          <p lang={video.language}>{video.originalTitle}</p>
          <p>{video.copy[locale].description}</p>
          <a
            href={youtubeWatchUrl(video.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm text-cyan-200 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            {m.youtube}
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </dialog>,
    document.body,
  )
}
