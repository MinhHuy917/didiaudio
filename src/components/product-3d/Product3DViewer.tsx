'use client'

import { createElement, useEffect, useRef, useState } from 'react'
import type { ModelViewerElement } from '@google/model-viewer'
import { Maximize, Minimize, Minus, Plus, X } from 'lucide-react'
import { ARButton } from './ARButton'
import DragHint from '@/components/product-gallery/DragHint'
import type { Product3DConfig } from '@/lib/product-3d'

let engine: Promise<unknown> | undefined
function loadEngine() {
  return (engine ??= import('@google/model-viewer')
    .then((module) => {
      module.ModelViewerElement.modelCacheSize = 0
      return module
    })
    .catch((error) => {
      engine = undefined
      throw error
    }))
}
const button =
  'min-h-[44px] scroll-mb-28 scroll-mt-28 rounded-lg border border-white/30 bg-gray-900 px-3 py-2 text-sm text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-50'
const iconButton =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300'

type ViewerProps = {
  config: Product3DConfig
  name: string
  image: string
  ar: boolean
  onClose: () => void
  active?: boolean
  embedded?: boolean
  initiallyActivated?: boolean
}

export default function Product3DViewer(props: ViewerProps) {
  const [attempt, setAttempt] = useState(0)
  return (
    <ViewerSession
      key={attempt}
      {...props}
      // A fragment changes model-viewer's failed-load cache key without altering
      // the HTTP URL or signed CDN query parameters.
      config={
        attempt
          ? {
              ...props.config,
              modelUrl: `${props.config.modelUrl}#didi-retry-${attempt}`,
            }
          : props.config
      }
      onRetry={() => setAttempt((n) => n + 1)}
    />
  )
}

function ViewerSession({
  config,
  name,
  image,
  ar,
  onClose,
  embedded = false,
  active = true,
  initiallyActivated = false,
  onRetry,
}: ViewerProps & { onRetry: () => void }) {
  const [interacted, setInteracted] = useState(false)
  const [hintVisible, setHintVisible] = useState(true)
  const [arActivated, setArActivated] = useState(initiallyActivated)
  const [ready, setReady] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [rotate, setRotate] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const timeout = useRef<number>()
  const viewer = useRef<ModelViewerElement>(null)
  const frame = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!embedded) title.current?.focus()
    else if (initiallyActivated) frame.current?.focus({ preventScroll: true })
  }, [embedded, initiallyActivated])
  useEffect(() => {
    let cancelled = false
    setLoaded(false)
    setReady(false)
    setError('')
    const canvas = document.createElement('canvas')
    const probe = canvas.getContext('webgl2')
    if (!probe) {
      setError(
        'Thiết bị không hỗ trợ WebGL 2. Bạn vẫn có thể xem ảnh loa ở phía trên.',
      )
      return
    }
    probe.getExtension('WEBGL_lose_context')?.loseContext()
    // Start paused for reduced motion; otherwise slow auto rotation is enabled.
    setRotate(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const timer = (timeout.current = window.setTimeout(() => {
      if (!cancelled)
        setError(
          'Tải mô hình quá lâu. Kiểm tra kết nối rồi thử lại hoặc tiếp tục xem ảnh loa.',
        )
    }, 45000))
    loadEngine()
      .then(() => {
        if (!cancelled) setReady(true)
      })
      .catch(() => {
        if (!cancelled) {
          window.clearTimeout(timer)
          setError(
            'Không tải được trình xem 3D. Vui lòng thử lại hoặc xem ảnh loa.',
          )
        }
      })
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const node = viewer.current
    if (!ready || !node) return
    const load = () => {
      window.clearTimeout(timeout.current)
      node.dismissPoster()
      setLoaded(true)
      setError('')
    }
    const fail = () => {
      window.clearTimeout(timeout.current)
      setLoaded(false)
      setError(
        'Không tải được mô hình. Vui lòng thử lại hoặc tiếp tục xem ảnh loa.',
      )
    }
    const arStatus = (event: Event) => {
      if ((event as CustomEvent).detail.status === 'failed')
        setNotice(
          'Không mở được AR trên thiết bị này. Bạn có thể tiếp tục xoay loa trong trình xem 3D.',
        )
    }
    node.addEventListener('load', load)
    node.addEventListener('error', fail)
    node.addEventListener('ar-status', arStatus)
    if (node.loaded) load()
    return () => {
      node.removeEventListener('load', load)
      node.removeEventListener('error', fail)
      node.removeEventListener('ar-status', arStatus)
      node.removeAttribute('src')
    }
  }, [ready])

  useEffect(() => {
    const change = () =>
      setFullscreen(document.fullscreenElement === frame.current)
    document.addEventListener('fullscreenchange', change)
    return () => document.removeEventListener('fullscreenchange', change)
  }, [])

  useEffect(() => {
    if (!loaded || !active) return
    setHintVisible(true)
    const timer = window.setTimeout(() => setHintVisible(false), 6000)
    return () => window.clearTimeout(timer)
  }, [loaded, active])

  async function launchAR() {
    const node = viewer.current
    if (!node?.canActivateAR) {
      setNotice(
        'AR chưa khả dụng trên thiết bị hoặc trình duyệt này. Hãy thử Safari trên iPhone/iPad hoặc Chrome trên Android; bạn vẫn có thể xem 3D tại đây.',
      )
      return
    }
    try {
      await node.activateAR()
    } catch {
      setNotice(
        'Không mở được AR. Kiểm tra quyền truy cập hoặc tiếp tục xem 3D.',
      )
    }
  }
  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement === frame.current)
        await document.exitFullscreen()
      else if (frame.current?.requestFullscreen)
        await frame.current.requestFullscreen()
      else
        setNotice(
          'Trình duyệt chưa hỗ trợ toàn màn hình. Bạn vẫn có thể xoay và phóng to trong khung xem.',
        )
    } catch {
      setNotice(
        'Không mở được toàn màn hình. Trình xem 3D vẫn hoạt động trong khung hiện tại.',
      )
    }
  }

  return (
    <div
      ref={frame}
      tabIndex={-1}
      className={
        embedded
          ? 'overflow-y-auto bg-black/20 text-white outline-none'
          : 'space-y-3 overflow-y-auto rounded-2xl border border-white/20 bg-black p-4 text-white'
      }
      onKeyDown={(event) => {
        if (event.key === 'Escape' && !document.fullscreenElement) {
          event.stopPropagation()
          onClose()
        }
      }}
    >
      {!embedded && (
        <div className="flex items-start justify-between gap-3">
          <h2
            ref={title}
            tabIndex={-1}
            className="text-lg font-semibold outline-none"
          >
            Xem {name} 360°
          </h2>
          <button type="button" className={button} onClick={onClose}>
            Đóng 3D
          </button>
        </div>
      )}
      <div
        className={
          embedded
            ? fullscreen
              ? 'relative h-[65vh]'
              : 'relative aspect-square'
            : 'relative'
        }
        onPointerDownCapture={() => {
          if (loaded) {
            setInteracted(true)
            setRotate(false)
          }
        }}
        onKeyDownCapture={(event) => {
          if (event.key.startsWith('Arrow')) {
            setInteracted(true)
            setRotate(false)
          }
        }}
      >
        {!loaded && !error && (
          <p
            role="status"
            className={`animate-pulse text-sm text-gray-300 motion-reduce:animate-none ${embedded ? 'absolute inset-0 z-10 flex items-center justify-center bg-black/70' : ''}`}
          >
            Đang tải mô hình…
          </p>
        )}
        {error ? (
          <div
            role="alert"
            className={`space-y-3 rounded-xl border border-amber-400/50 p-4 text-sm text-amber-100 ${embedded ? 'absolute inset-2 z-10 flex flex-col items-start justify-center bg-black' : ''}`}
          >
            <p>{error}</p>
            <button type="button" className={button} onClick={onRetry}>
              Thử lại
            </button>
          </div>
        ) : (
          ready &&
          createElement(
            'model-viewer',
            {
              ref: viewer,
              src: config.modelUrl,
              poster: config.posterUrl || image,
              alt: `Mô hình 3D ${name}. Kéo để xoay, cuộn hoặc chụm hai ngón để phóng to.`,
              'aria-label': `Mô hình 3D ${name}`,
              'camera-controls': '',
              loading: 'eager',
              'touch-action': 'pan-y',
              'camera-orbit': '0deg 75deg 105%',
              'rotation-per-second': '8deg',
              'interaction-prompt': 'none',
              ...(rotate && active ? { 'auto-rotate': '' } : {}),
              ...(ar
                ? {
                    ar: '',
                    'ar-modes': 'scene-viewer webxr quick-look',
                    'ar-scale': 'fixed',
                    'ar-placement': 'floor',
                    ...(config.usdzUrl ? { 'ios-src': config.usdzUrl } : {}),
                  }
                : {}),
              style: {
                cursor: 'grab',
                width: '100%',
                height: fullscreen
                  ? '65vh'
                  : embedded
                    ? '100%'
                    : 'min(70vw, 400px)',
                minHeight: embedded ? undefined : '280px',
                position: embedded ? 'absolute' : 'relative',
                inset: embedded ? 0 : undefined,
              },
            },
            createElement('span', { slot: 'ar-button' }),
          )
        )}
        {loaded && !error && !interacted && hintVisible && <DragHint />}
        {loaded && !error && (
          <>
            {initiallyActivated && (
              <button
                type="button"
                className={`absolute left-3 top-3 z-20 ${iconButton}`}
                aria-label="Đóng 3D"
                title="Đóng 3D"
                onClick={onClose}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            )}
            <button
              type="button"
              className={`absolute right-3 top-3 z-20 ${iconButton}`}
              aria-label={fullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
              title={fullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
              onClick={toggleFullscreen}
            >
              {fullscreen ? (
                <Minimize aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Maximize aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 rounded-full border border-white/20 bg-black/60 p-1 backdrop-blur-md">
              <button
                type="button"
                className={`${iconButton} border-0 bg-transparent`}
                aria-label="Thu nhỏ"
                title="Thu nhỏ"
                onClick={() => viewer.current?.zoom(-1)}
              >
                <Minus aria-hidden="true" className="h-5 w-5" />
              </button>
              <span aria-hidden="true" className="h-5 w-px bg-white/20" />
              <button
                type="button"
                className={`${iconButton} border-0 bg-transparent`}
                aria-label="Phóng to"
                title="Phóng to"
                onClick={() => viewer.current?.zoom(1)}
              >
                <Plus aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </>
        )}
        {embedded && loaded && !error && (
          <ARButton
            active={arActivated}
            label={ar ? 'AR · Thử trong phòng' : 'AR · Kích hoạt xem 360°'}
            onClick={() => {
              setArActivated(true)
              if (ar) void launchAR()
            }}
          />
        )}
      </div>
      {notice && (
        <p role="status" className="text-sm leading-relaxed text-cyan-100">
          {notice}
        </p>
      )}
    </div>
  )
}
