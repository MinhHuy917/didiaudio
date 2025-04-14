'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '/src/images/img1.jpg'
import img12 from '/src/images/img12.jpg'
import img2 from '/src/images/img2.jpg'
import img3 from '/src/images/img3.jpg'
import img4 from '/src/images/img4.jpg'
import img5 from '/src/images/img5.jpg'
import img6 from '/src/images/img6.jpg'
import img7 from '/src/images/img7.jpg'
import img8 from '/src/images/img8.jpg'

const images = [
  img1, img8, img12, img2, img3, img4, img5, img6, img7,
]

export default function ImageSlider() {
  return (
    <div className="w-full px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-2xl overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[16/9] w-full relative">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 768px"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
