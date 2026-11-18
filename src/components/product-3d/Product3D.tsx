'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { ARButton } from './ARButton'
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
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-black/30">
          <Image
            src={image}
            alt={name}
            fill
            priority={preview}
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 560px, calc(100vw - 64px)"
            className="object-contain p-4"
          />
          <ARButton
            buttonRef={trigger}
            active={false}
            onClick={() => setOpened(true)}
          />
        </div>
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
