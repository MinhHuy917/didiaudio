'use client'

import { products } from '@/data/products'
import { getProductGallery } from '@/lib/product-gallery'
import { RentalOffer } from '@/components/RentalOffer'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ProductPhotos: React.FC = () => {
  // Now we only have 1 product, JBL PartyBox Stage 320
  const product = products[0]

  const sliderImages = getProductGallery(product)

  return (
    <section
      id="hinh-anh-thuc-te"
      aria-labelledby="real-photos-title"
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Slider Section */}
        {sliderImages.length > 0 && (
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl"
          >
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
              {sliderImages.map((photo) => (
                <SwiperSlide key={photo.src}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
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
        <RentalOffer product={product} />
      </div>
    </section>
  )
}

export default ProductPhotos
