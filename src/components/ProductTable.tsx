'use client'

import { products } from '@/data/products'
import { motion } from 'framer-motion'
import { Battery, Bluetooth, Music, Volume2, ShieldCheck, Zap, MapPin } from 'lucide-react'
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
    product.image12
  ].filter(Boolean) as string[]


  return (
    <section id="products" className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {product.name}
            </span>
          </h2>
          
        </motion.div>

        {/* Featured Product Layout */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#111111]/80 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/5"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left: Image Showcase */}
              <div className="lg:w-1/2 relative bg-black/50 p-6 sm:p-10 flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              
              </div>

              {/* Right: Content & Pricing */}
              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Music className="w-32 h-32 text-white" />
                </div>

               
                <p className="text-gray-400 text-lg mb-8 leading-relaxed relative z-10">
                  {product.catalogue}
                </p>

                {/* Pricing Card */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 sm:p-8 border border-cyan-500/20 mb-8 relative z-10">
                  <div className="text-sm font-medium text-cyan-400 mb-2 uppercase tracking-wider">Giá Thuê Ưu Đãi</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {product.price}k
                    </span>
                    <span className="text-xl text-gray-400 font-medium">/ ngày</span>
                  </div>
                  {product.originalPrice && (
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-gray-500 line-through text-lg">
                        {product.originalPrice}k
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-400 border border-pink-500/20">
                        Giảm giá {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-10 relative z-10">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span>Bao gồm 2 micro không dây, dây sạc & pin</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span>Hỗ trợ setup nhanh chóng, tận nơi</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={"/products/" + product.id}
                  className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98]"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Hình ảnh thực tế</h3>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
              }}
              className="rounded-2xl pb-12"
            >
              {sliderImages.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group bg-[#111111]">
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

        {/* Policy Section */}
        <motion.div
          id="chinh-sach"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <ShieldCheck className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Chính sách thuê loa
            </h2>
          </div>

          <div className="space-y-8 text-white grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">1</span>
                Thủ tục thuê loa
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <p><span className="font-semibold text-cyan-400">Khách xuất trình CCCD gốc hoặc VNeID mức 2</span> để shop xác minh khi nhận loa.</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <p>Thanh toán: <span className="font-semibold text-cyan-400">Tiền thuê</span> trước khi nhận loa.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">2</span>
                Giao hàng & Đền bù
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <p className="font-bold text-cyan-400 uppercase mb-2 flex items-center gap-2">
                    <span>🚚</span> FREE SHIP 2 CHIỀU trong bán kính 5km
                  </p>
                  <ul className="space-y-1 text-gray-400 mb-4">
                    <li className="flex justify-between"><span>0–5km:</span> <span>Miễn phí</span></li>
                    <li className="flex justify-between"><span>6–10km:</span> <span>+50.000đ</span></li>
                    <li className="flex justify-between"><span>11–15km:</span> <span>+100.000đ</span></li>
                    <li className="flex justify-between"><span>Trên 16km:</span> <span>Báo phí riêng</span></li>
                  </ul>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=43+Tống+Duy+Tân,+Liên+Chiểu,+Đà+Nẵng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#4285F4] hover:bg-[#3367D6] text-white rounded-lg text-sm font-medium transition-colors w-full justify-center"
                  >
                    <MapPin className="w-4 h-4" />
                    Kiểm tra khoảng cách của bạn tới cửa hàng
                  </a>
                </div>
                <div className="bg-pink-500/5 rounded-xl p-4 border border-pink-500/10">
                  <h4 className="font-bold text-pink-400 mb-1 flex items-center gap-2">
                    <span>⚠️</span> Đền bù thiệt hại
                  </h4>
                  <p className="text-sm">Nếu thiết bị hư hỏng, shop sẽ tính phí sửa chữa hoặc yêu cầu bồi thường theo giá trị thị trường hiện tại.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductList
