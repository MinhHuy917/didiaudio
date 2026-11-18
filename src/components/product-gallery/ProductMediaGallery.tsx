'use client'

import Image from 'next/image'
import type { GalleryPhoto } from '@/lib/product-gallery-types'
import dynamic from 'next/dynamic'
import { useEffect, useId, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ImageIcon, Rotate3d } from 'lucide-react'
import { canUseAR, canView3D, type Product3DConfig } from '@/lib/product-3d'

const Viewer = dynamic(
  () => import('@/components/product-3d/Product3DViewer'),
  {
    ssr: false,
    loading: () => (
      <div
        role="status"
        className="flex aspect-square items-center justify-center text-sm text-gray-300"
      >
        Đang mở trình xem 360°…
      </div>
    ),
  },
)
const control =
  'inline-flex h-11 min-w-11 shrink-0 scroll-mb-28 scroll-mt-28 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300'

type Slide =
  | {
      type: 'photo'
      image: string
      alt: string
      photo: number
      source?: GalleryPhoto['source']
    }
  | { type: 'interactive' }
export default function ProductMediaGallery({
  name,
  images,
  config,
}: {
  name: string
  images: (string | GalleryPhoto)[]
  config?: Product3DConfig
}) {
  const id = useId()
  const [active, setActive] = useState(0)
  const [warm, setWarm] = useState(false)
  useEffect(() => {
    if (!canView3D(config)) return
    let cancelled = false
    let idle: number | undefined
    let timer: ReturnType<typeof setTimeout> | undefined
    const start = () => {
      const load = () => {
        if (!cancelled) setWarm(true)
      }
      if ('requestIdleCallback' in window)
        idle = window.requestIdleCallback(load, { timeout: 800 })
      else timer = setTimeout(load, 100)
    }
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
    return () => {
      cancelled = true
      window.removeEventListener('load', start)
      if (idle !== undefined) window.cancelIdleCallback(idle)
      if (timer !== undefined) clearTimeout(timer)
    }
  }, [config])
  const start = useRef<{ x: number; y: number } | null>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const stripRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const strip = stripRef.current
    const tab = tabs.current[active]
    if (!strip || !tab) return
    const parent = strip.getBoundingClientRect()
    const child = tab.getBoundingClientRect()
    if (child.left < parent.left) strip.scrollLeft += child.left - parent.left
    else if (child.right > parent.right)
      strip.scrollLeft += child.right - parent.right
  }, [active])
  const photos = images
    .map((image, i) =>
      typeof image === 'string'
        ? { src: image, alt: `${name} — ảnh ${i + 1}` }
        : image,
    )
    .filter((image) => !!image?.src)
  const slides: Slide[] = photos.map((image, photo) => ({
    type: 'photo',
    image: image.src,
    alt: image.alt,
    source: 'source' in image ? image.source : undefined,
    photo,
  }))
  const interactive = canView3D(config)
  if (interactive)
    slides.splice(Math.min(1, slides.length), 0, { type: 'interactive' })
  if (!slides.length)
    return (
      <div className="flex aspect-square items-center justify-center rounded-2xl border border-white/15 text-sm text-gray-300">
        Ảnh sản phẩm đang được bổ sung.
      </div>
    )
  const index = Math.min(active, slides.length - 1)
  const slide = slides[index]
  const ar = interactive && canUseAR(config)
  function select(next: number, focus = false) {
    const selected = (next + slides.length) % slides.length
    if (slides[selected]?.type === 'interactive') setWarm(true)
    setActive(selected)
    if (focus)
      requestAnimationFrame(() => {
        tabs.current[selected]?.focus({ preventScroll: true })
        tabs.current[selected]?.scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
        })
      })
  }
  const label = (item: Slide) =>
    item.type === 'interactive' ? '360° · Tương tác' : `Ảnh ${item.photo + 1}`
  return (
    <section
      aria-label={`Gallery ${name}`}
      className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.05] to-black/40 text-white"
    >
      <div className="flex min-h-[68px] flex-wrap items-center justify-between gap-2 border-b border-white/10 px-3 py-3 sm:px-4">
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          {slide.type === 'interactive' ? (
            <Rotate3d aria-hidden="true" className="h-4 w-4 text-cyan-300" />
          ) : (
            <ImageIcon aria-hidden="true" className="h-4 w-4 text-gray-300" />
          )}
          {slide.type === 'interactive'
            ? '360° · Kéo để xoay'
            : slide.source
              ? 'Ảnh chụp tham khảo'
              : 'Ảnh sản phẩm'}
        </span>
        <span aria-hidden="true" className="text-xs tabular-nums text-gray-400">
          {index + 1}/{slides.length}
        </span>
      </div>
      <div className="order-2 flex items-center gap-2 border-t border-white/10 p-3">
        <button
          type="button"
          aria-label="Media trước"
          onClick={() => select(index - 1)}
          className={control}
          disabled={slides.length < 2}
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <div
          ref={stripRef}
          role="tablist"
          aria-label="Chọn ảnh hoặc nội dung tương tác"
          className="flex min-w-0 flex-1 gap-2 overflow-x-auto py-1"
          onKeyDown={(event) => {
            if (
              ['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)
            ) {
              event.preventDefault()
              select(
                event.key === 'Home'
                  ? 0
                  : event.key === 'End'
                    ? slides.length - 1
                    : index + (event.key === 'ArrowRight' ? 1 : -1),
                true,
              )
            }
          }}
        >
          {slides.map((item, i) => (
            <button
              key={
                item.type === 'photo' ? `photo-${item.photo}` : 'interactive'
              }
              ref={(node) => {
                tabs.current[i] = node
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-controls={`${id}-panel`}
              aria-selected={i === index}
              tabIndex={i === index ? 0 : -1}
              aria-label={label(item)}
              title={item.type === 'photo' ? item.alt : 'Kéo xoay loa 360°'}
              onClick={() => select(i)}
              className={`relative flex h-14 min-w-14 shrink-0 scroll-mb-28 scroll-mt-28 items-center justify-center overflow-hidden rounded-xl border-2 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${i === index ? 'border-cyan-300 bg-cyan-950 text-cyan-100' : 'border-white/10 bg-black/30 text-gray-300 hover:border-white/40'}`}
            >
              {item.type === 'photo' ? (
                <Image
                  src={item.image}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain p-1"
                />
              ) : (
                <span className="flex flex-col items-center gap-0.5 px-2">
                  <Rotate3d aria-hidden="true" className="h-5 w-5" />
                  360°
                </span>
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Media sau"
          onClick={() => select(index + 1)}
          className={control}
          disabled={slides.length < 2}
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${index}`}
        tabIndex={0}
        className="order-1 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300"
      >
        {slide.type === 'photo' && (
          <div
            className="relative aspect-square touch-pan-y"
            onPointerDown={(event) => {
              start.current = { x: event.clientX, y: event.clientY }
              event.currentTarget.setPointerCapture(event.pointerId)
            }}
            onPointerCancel={() => {
              start.current = null
            }}
            onPointerUp={(event) => {
              const origin = start.current
              start.current = null
              if (
                origin &&
                Math.abs(event.clientX - origin.x) > 50 &&
                Math.abs(event.clientY - origin.y) < 40
              )
                select(index + (event.clientX < origin.x ? 1 : -1))
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 576px, calc(100vw - 32px)"
              className="select-none object-contain p-5 sm:p-8"
              draggable={false}
            />
            <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-xs text-gray-200">
              {slide.source ? 'Ảnh tham khảo' : 'Ảnh tĩnh'} · {slide.photo + 1}/
              {photos.length}
            </span>
          </div>
        )}
        {interactive && (warm || slide.type === 'interactive') && (
          <div
            hidden={slide.type !== 'interactive'}
            aria-hidden={slide.type !== 'interactive'}
          >
            <Viewer
              key={`${id}-viewer`}
              embedded
              active={slide.type === 'interactive'}
              config={config}
              name={name}
              image={photos[0]?.src || config.posterUrl || ''}
              ar={ar}
              showARHelp={false}
              onClose={() => select(0, true)}
            />
          </div>
        )}
      </div>
      {slide.type === 'photo' && (
        <div className="order-1 px-4 pb-3 pt-2 text-xs leading-relaxed text-gray-300">
          {slide.source && (
            <p className="mb-2">
              Ảnh tham khảo từ{' '}
              <a
                href={slide.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-sm text-cyan-200 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                {slide.source.name}
              </a>
              . Credit: {slide.source.credit}. Không phải ảnh ĐiĐi Audio tự
              chụp.
            </p>
          )}
          <p>
            {interactive
              ? 'Chọn slide 2 để kéo xoay loa 360°. AR là chế độ đặt loa vào không gian thật.'
              : 'Vuốt ảnh hoặc dùng các nút bên dưới để xem thêm góc chụp.'}
          </p>
        </div>
      )}
      <p
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {label(slide)}. Slide {index + 1} trên {slides.length}.
      </p>
    </section>
  )
}
