'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { canUseAR, canView3D, type Product3DConfig } from '@/lib/product-3d'

const Viewer = dynamic(() => import('./Product3DViewer'), {
  ssr: false,
  loading: () => (
    <p role="status" className="p-4 text-sm text-gray-300">
      Đang mở trình xem 3D…
    </p>
  ),
})
const button =
  'min-h-[44px] rounded-xl border border-cyan-400/40 bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:opacity-50'

export default function Product3D({
  config,
  name,
  image,
  preview = false,
}: {
  config?: Product3DConfig
  name: string
  image: string
  preview?: boolean
}) {
  const [opened, setOpened] = useState(false)
  const [showARHelp, setShowARHelp] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  if (!canView3D(config)) return null
  const ar = canUseAR(config)
  return (
    <div className={preview ? 'space-y-4' : 'mt-4 space-y-3'}>
      {!opened ? (
        <div className={preview ? 'flex flex-col gap-4' : 'space-y-4'}>
          {preview && (
            <div className="relative order-2 aspect-square overflow-hidden rounded-2xl bg-black/30">
              <Image
                src={image}
                alt={name}
                fill
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 560px, calc(100vw - 64px)"
                className="object-contain p-4"
              />
              <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-semibold text-cyan-200">
                Xoay & phóng to 360°
              </span>
            </div>
          )}
          <div className={`${preview ? 'order-1 ' : ''}flex flex-wrap gap-3`}>
            <button
              ref={trigger}
              type="button"
              className={button}
              onClick={() => {
                setShowARHelp(false)
                setOpened(true)
              }}
            >
              360° Xem chi tiết
            </button>
            {ar && (
              <button
                type="button"
                className={button}
                onClick={() => {
                  setShowARHelp(true)
                  setOpened(true)
                }}
              >
                AR Thử trong phòng
              </button>
            )}
          </div>
        </div>
      ) : (
        <Viewer
          config={config}
          name={name}
          image={image}
          ar={ar}
          showARHelp={showARHelp}
          onClose={() => {
            setOpened(false)
            requestAnimationFrame(() => trigger.current?.focus())
          }}
        />
      )}
    </div>
  )
}
