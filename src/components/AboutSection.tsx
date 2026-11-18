'use client'

import type { GalleryPhoto } from '@/lib/product-gallery-types'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import ProductMediaGallery from '@/components/product-gallery/ProductMediaGallery'
import type { Product3DConfig } from '@/lib/product-3d'

type HeroSpeaker = {
  name: string
  price: number
  image: string
  images?: GalleryPhoto[]
  href: string
  model?: Product3DConfig
}

export default function AboutSection({ speaker }: { speaker?: HeroSpeaker }) {
  const hasPreview = !!speaker
  return (
    <section
      aria-label="Dịch vụ thuê loa tại Đà Nẵng"
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 pb-12 pt-4 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pt-12"
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
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
            <Sparkles aria-hidden="true" className="h-5 w-5" />
            ĐiĐi Audio · Đà Nẵng
          </div>
          <h1 className="mb-4 text-3xl font-black leading-tight sm:text-5xl lg:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thuê loa kẹo kéo tại Đà Nẵng
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Thuê JBL PartyBox Stage 320 tại Đà Nẵng. Liên hệ xác nhận thời gian
            và địa điểm sử dụng trước khi đặt thuê.
          </p>
          {speaker && (
            <div
              id="products"
              role="region"
              aria-labelledby="rental-price-label"
              className="mt-5 scroll-mt-32 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 sm:p-5"
            >
              <p
                id="rental-price-label"
                className="text-xs font-semibold uppercase tracking-wider text-cyan-300"
              >
                Giá thuê ưu đãi
              </p>
              <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
                  {new Intl.NumberFormat('vi-VN').format(speaker.price * 1000)}đ
                </span>
                <span className="text-base font-medium text-gray-200">
                  / ngày
                </span>
              </p>
              <p className="mt-2 text-sm leading-snug text-gray-200">
                Bao gồm 2 micro không dây · Hỗ trợ setup tận nơi
              </p>
            </div>
          )}
          <div
            className={`mt-4 flex flex-wrap gap-3 ${hasPreview ? '' : 'justify-center'}`}
          >
            <Link
              href={speaker ? `${speaker.href}#dat-thue` : 'tel:0339197917'}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 px-4 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-cyan-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-5 sm:text-base"
            >
              Đặt thuê ngay
            </Link>
            <a
              href="tel:0339197917"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-5 sm:text-base"
            >
              Liên hệ tư vấn
            </a>
          </div>
          {speaker && (
            <ul
              aria-label="Thông số nổi bật của loa"
              className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-200"
            >
              {['240W RMS', 'Pin lên đến 18 giờ', 'IPX4 · Auracast'].map(
                (spec) => (
                  <li
                    key={spec}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {spec}
                  </li>
                ),
              )}
            </ul>
          )}
        </motion.div>
        {speaker && (
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
