'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Rotate3d } from 'lucide-react'
import { canUseAR, canView3D, type Product3DConfig } from '@/lib/product-3d'

const Viewer = dynamic(() => import('./Product3DViewer'), {
  ssr: false,
  loading: () => (
    <p role="status" className="p-4 text-sm text-gray-300">
      Đang mở trình xem 3D…
    </p>
  ),
})

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
  const trigger = useRef<HTMLButtonElement>(null)
  if (!canView3D(config)) return null
  const ar = canUseAR(config)
  return (
    <div className={preview ? '' : 'mt-4'}>
      {!opened ? (
        <button
          ref={trigger}
          type="button"
          aria-label="Bấm để xoay loa 360°"
          onClick={() => setOpened(true)}
          className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-black/30 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          <Image
            src={image}
            alt={name}
            fill
            priority={preview}
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 560px, calc(100vw - 64px)"
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
          />
          <span className="absolute bottom-3 left-3 right-3 flex min-h-14 items-center justify-center gap-2 rounded-full bg-cyan-300 px-3 py-3 text-gray-950 shadow-lg transition-colors group-hover:bg-cyan-200">
            <Rotate3d aria-hidden="true" className="h-6 w-6 shrink-0" />
            <span className="text-sm font-bold sm:text-base">
              Bấm để xoay loa
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 border-l border-gray-950/20 pl-2 text-sm font-semibold"
            >
              360°
            </span>
          </span>
        </button>
      ) : (
        <Viewer
          embedded
          initiallyActivated
          config={config}
          name={name}
          image={image}
          ar={ar}
          onClose={() => {
            setOpened(false)
            requestAnimationFrame(() => trigger.current?.focus())
          }}
        />
      )}
    </div>
  )
}
