'use client'

import type { GalleryPhoto } from '@/lib/product-gallery-types'
import ProductMediaGallery from '@/components/product-gallery/ProductMediaGallery'

export default function AboutSection({
  speaker,
}: {
  speaker?: { name: string; image: string; images?: GalleryPhoto[] }
}) {
  return (
    <section
      aria-label="Dịch vụ thuê loa tại Đà Nẵng"
      className="bg-gradient-to-b from-black via-gray-900 to-black px-4 pb-8 pt-4 sm:px-6 sm:pt-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            ĐIĐI AUDIO
          </span>
        </h1>
        <p className="mt-3 text-xl font-semibold text-white sm:text-3xl">
          Thuê Loa Kẹo Kéo Đà Nẵng
        </p>
        <p className="mb-6 mt-2 text-sm text-gray-300">
          JBL PartyBox Stage 320 · 2 micro không dây
        </p>
        {speaker && (
          <div className="mx-auto max-w-md text-left">
            <ProductMediaGallery
              name={speaker.name}
              images={(speaker.images || [speaker.image]).slice(0, 5)}
            />
          </div>
        )}
        <a
          href="#products"
          className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
        >
          Xem 360° & giá thuê ↓
        </a>
      </div>
    </section>
  )
}
