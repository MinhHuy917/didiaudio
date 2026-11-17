'use client'

import { products } from '@/data/products'
import { motion } from 'framer-motion'
import {
  Battery,
  Bluetooth,
  Music,
  Volume2,
  ShieldCheck,
  Zap,
  MapPin,
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ProductList: React.FC = () => {
  // Now we only have 1 product, JBL PartyBox Stage 320
  const product = products[0]

  const sliderImages = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
    product.image4,
    product.image5,
    product.image6,
    product.image7,
    product.image8,
    product.image9,
    product.image10,
    product.image11,
    product.image12,
  ].filter(Boolean) as string[]

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-16"
        >
          <h2 className="mb-6 text-4xl font-black sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {product.name}
            </span>
          </h2>
        </motion.div>

        {/* Featured Product Layout */}
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/80 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: Image Showcase */}
              <div className="relative flex min-h-[400px] items-center justify-center bg-black/50 p-6 sm:p-10 lg:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
                <div className="relative aspect-square w-full max-w-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(min-width: 1024px) 448px, calc(100vw - 80px)"
                  />
                </div>
              </div>

              {/* Right: Content & Pricing */}
              <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:w-1/2">
                <div className="absolute right-0 top-0 p-8 opacity-10">
                  <Music className="h-32 w-32 text-white" />
                </div>

                <p className="relative z-10 mb-8 text-lg leading-relaxed text-gray-400">
                  {product.catalogue}
                </p>

                {/* Pricing Card */}
                <div className="relative z-10 mb-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 sm:p-8">
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-cyan-400">
                    Giá Thuê Ưu Đãi
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-black text-transparent sm:text-6xl">
                      {product.price}k
                    </span>
                    <span className="text-xl font-medium text-gray-400">
                      / ngày
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mb-10 space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap className="h-5 w-5 text-purple-400" />
                    <span>Bao gồm 2 micro không dây, dây sạc & pin</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span>Hỗ trợ setup nhanh chóng, tận nơi</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={'/products/' + product.id}
                  className="relative z-10 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-[0.98] sm:w-auto"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slider Section */}
        {sliderImages.length > 0 && (
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-16 max-w-6xl"
          >
            <h3 className="mb-6 text-center text-xl font-bold text-white sm:text-2xl">
              Hình ảnh thực tế
            </h3>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="rounded-2xl pb-12"
            >
              {sliderImages.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                    <Image
                      src={imgSrc}
                      alt={`${product.name} hình ${index + 1}`}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProductList
