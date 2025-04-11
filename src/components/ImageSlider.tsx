'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from '/src/images/img1.jpg'
import img12 from '/src/images/img12.jpg'
import img14 from '/src/images/img14.jpg'
import img2 from '/src/images/img2.jpg'
import img3 from '/src/images/img3.jpg'
import img4 from '/src/images/img4.jpg'
import img5 from '/src/images/img5.jpg'
import img6 from '/src/images/img6.jpg'
import img7 from '/src/images/img7.jpg'
import img8 from '/src/images/img8.jpg'

const images = [
  img1.src,img8.src, img14.src, img12.src, img2.src, img3.src, img4.src, img5.src, img6.src, img7.src,
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
    {images.map((src, index) => (
      <SwiperSlide key={index}>
        <div className="aspect-[16/9] w-full">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  )
}
