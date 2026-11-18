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
      className="bg-gradient-to-b from-black via-gray-900 to-black px-4 sm:px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            ĐiĐi Audio
          </span>
        </h1>
        <p className="mt-3 text-xl font-semibold text-white sm:text-3xl">
          Thuê Loa Đà Nẵng
        </p>
      </div>
    </section>
  )
}
