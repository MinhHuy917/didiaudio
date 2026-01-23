'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import img2 from '/src/images/img/img1.png'
import img3 from '/src/images/img/img2.png'
import img4 from '/src/images/img/img3.jpg'
import img5 from '/src/images/img/img4.png'
import img6 from '/src/images/img/img5.png'
import img7 from '/src/images/img/img6.png'

const images = [
   img2, img3, img4, img5, img6, img7,
]

export default function ImageSlider() {
  return (
    <div className="w-full px-4 mt-2">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-3xl overflow-hidden border border-audio-electricBlue/20 shadow-2xl shadow-audio-electricBlue/10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[16/9] w-full lg:w-[1280px] relative mx-auto">
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
