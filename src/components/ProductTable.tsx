'use client'

import { products } from '@/data/products'
import { getProductGallery } from '@/lib/product-gallery'
import { HomeSection } from '@/components/HomeSection'
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
    <HomeSection
      tone="photos"
      id="hinh-anh-thuc-te"
      aria-labelledby="real-photos-title"
    >
      <h2
        id="real-photos-title"
        className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl"
      >
        Hình ảnh loa thực tế
      </h2>
      <div>
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
      </div>
    </HomeSection>
  )
}

export default ProductPhotos
