'use client'

import type { GalleryPhoto } from '@/lib/product-gallery-types'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import ProductMediaGallery from '@/components/product-gallery/ProductMediaGallery'
import { canView3D, type Product3DConfig } from '@/lib/product-3d'

type HeroSpeaker = {
  name: string
  image: string
  images?: GalleryPhoto[]
  href: string
  model?: Product3DConfig
}

export default function AboutSection({ speaker }: { speaker?: HeroSpeaker }) {
  const hasPreview = speaker && canView3D(speaker.model)
  return (
    <section
      aria-label="Dịch vụ thuê loa tại Đà Nẵng"
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 pb-12 pt-32 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <div
        className={`relative mx-auto max-w-6xl ${hasPreview ? 'grid items-center gap-8 lg:grid-cols-2 lg:gap-12' : 'text-center'}`}
      >
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
            <Sparkles aria-hidden="true" className="h-5 w-5" />
            ĐiĐi Audio · Đà Nẵng
          </div>
          <h1 className="mb-5 text-3xl font-black leading-tight sm:text-5xl lg:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thuê loa kẹo kéo tại Đà Nẵng - ĐiĐi Audio
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg">
            ĐiĐi Audio cho thuê loa kéo, loa di động JBL PartyBox tại Đà Nẵng.
            Xem mẫu loa hiện có, giá theo ngày và trao đổi thời gian, địa điểm
            sử dụng trước khi xác nhận thuê.
          </p>
          <div
            className={`mt-6 flex flex-wrap gap-3 ${hasPreview ? '' : 'justify-center'}`}
          >
            <Link
              href="/#products"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-cyan-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-5 sm:text-base"
            >
              Xem loa & giá thuê
            </Link>
            <a
              href="tel:0339197917"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-5 sm:text-base"
            >
              Tư vấn chọn loa
            </a>
          </div>
        </motion.div>
        {hasPreview && (
          <div className="min-w-0 rounded-3xl border border-white/15 bg-white/[0.03] p-4 shadow-2xl shadow-cyan-950/20 sm:p-5">
            <ProductMediaGallery
              config={speaker.model}
              name={speaker.name}
              images={speaker.images || [speaker.image]}
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-sm">
              <span className="font-semibold text-gray-100">
                {speaker.name}
              </span>
              <Link
                href={speaker.href}
                className="inline-flex min-h-[44px] items-center text-cyan-300 underline underline-offset-4 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
              >
                Xem thông tin thuê
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
