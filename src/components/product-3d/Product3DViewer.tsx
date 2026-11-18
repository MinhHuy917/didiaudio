'use client'

import { createElement, useEffect, useRef, useState } from 'react'
import type { ModelViewerElement } from '@google/model-viewer'
import { Box } from 'lucide-react'
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

type ViewerProps = {
  config: Product3DConfig
  name: string
  image: string
  ar: boolean
  showARHelp: boolean
  onClose: () => void
  active?: boolean
  embedded?: boolean
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
  showARHelp,
  onClose,
  embedded = false,
  active = true,
  onRetry,
}: ViewerProps & { onRetry: () => void }) {
  const [interacted, setInteracted] = useState(false)
  const [ready, setReady] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState(
    showARHelp
      ? 'Chờ mô hình tải xong, sau đó bấm “Thử đặt loa trong phòng” để mở AR trên thiết bị hỗ trợ.'
      : '',
  )
  const [rotate, setRotate] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const timeout = useRef<number>()
  const viewer = useRef<ModelViewerElement>(null)
  const frame = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!embedded) title.current?.focus()
  }, [embedded])
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
      className={
        embedded
          ? 'space-y-3 overflow-y-auto bg-black/20 text-white'
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
        {loaded && !error && !interacted && <DragHint animated={rotate} />}
        {embedded &&
          loaded &&
          !error &&
          (ar ? (
            <button
              type="button"
              onClick={launchAR}
              className="absolute bottom-3 right-3 z-20 inline-flex min-h-[44px] items-center gap-2 rounded-2xl border border-cyan-300 bg-white px-4 py-2 text-sm font-bold text-gray-950 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <Box aria-hidden="true" className="h-5 w-5" />
              AR · Thử trong phòng
            </button>
          ) : (
            <span className="pointer-events-none absolute bottom-3 right-3 z-20 inline-flex min-h-[44px] items-center gap-2 rounded-2xl border border-white/20 bg-black/80 px-3 py-2 text-xs text-gray-200">
              <Box aria-hidden="true" className="h-5 w-5" />
              <span>
                <strong className="block text-sm text-white">AR</strong>Chưa bật
              </span>
            </span>
          ))}
      </div>
      <p
        className={`text-xs leading-relaxed text-gray-300 ${embedded ? 'px-4' : ''}`}
      >
        Kéo hoặc dùng phím mũi tên để xoay. Cuộn chuột, chụm hai ngón hoặc dùng
        nút phóng to/thu nhỏ. Nhấn Escape để đóng.
      </p>
      <div className={`flex flex-wrap gap-2 ${embedded ? 'px-3 pb-3' : ''}`}>
        <button
          type="button"
          className={button}
          disabled={!loaded}
          aria-pressed={rotate}
          onClick={() => setRotate(!rotate)}
        >
          {rotate ? 'Dừng xoay' : 'Tự xoay'}
        </button>
        <button
          type="button"
          className={button}
          disabled={!loaded}
          onClick={() => viewer.current?.zoom(1)}
        >
          Phóng to
        </button>
        <button
          type="button"
          className={button}
          disabled={!loaded}
          onClick={() => viewer.current?.zoom(-1)}
        >
          Thu nhỏ
        </button>
        <button
          type="button"
          className={button}
          disabled={!loaded}
          onClick={() => {
            const node = viewer.current
            if (!node) return
            node.cameraOrbit = '0deg 75deg 105%'
            node.cameraTarget = 'auto auto auto'
            node.fieldOfView = 'auto'
            node.resetTurntableRotation()
            node.jumpCameraToGoal()
          }}
        >
          Góc ban đầu
        </button>
        <button type="button" className={button} onClick={toggleFullscreen}>
          {fullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
        </button>
        {ar && !embedded && (
          <button
            type="button"
            className={button}
            disabled={!loaded}
            onClick={launchAR}
          >
            AR · Thử trong phòng
          </button>
        )}
      </div>
      {embedded && !ar && (
        <p className="px-4 pb-3 text-xs leading-relaxed text-gray-400">
          AR chưa bật: tỷ lệ mô hình đang chờ xác nhận. Bạn vẫn có thể kéo xoay
          loa 360°.
        </p>
      )}
      {notice && (
        <p role="status" className="text-sm leading-relaxed text-cyan-100">
          {notice}
        </p>
      )}
    </div>
  )
}
