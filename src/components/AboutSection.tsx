'use client'

import type { GalleryPhoto } from '@/lib/product-gallery-types'
import ProductMediaGallery from '@/components/product-gallery/ProductMediaGallery'
import { HomeSection } from '@/components/HomeSection'

export default function AboutSection({
  speaker,
}: {
  speaker?: { name: string; image: string; images?: GalleryPhoto[] }
}) {
  return (
    <HomeSection
      tone="hero"
      width="medium"
      aria-label="Dịch vụ thuê loa tại Đà Nẵng"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center sm:gap-x-4">
        <h1 className="whitespace-nowrap text-xl font-semibold tracking-tight text-white sm:text-2xl">
          ĐiĐi <span className="text-cyan-200">Audio</span>
        </h1>
        <p className="whitespace-nowrap border-l border-white/20 pl-3 text-sm font-normal text-slate-300 sm:pl-4 sm:text-base">
          Thuê loa Đà Nẵng
        </p>
      </div>
    </HomeSection>
  )
}
