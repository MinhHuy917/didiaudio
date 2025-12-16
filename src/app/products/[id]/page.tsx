'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { products } from '@/data/products'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Calendar, Battery, Volume2, Bluetooth, Zap, Check } from 'lucide-react'
import BookingFlow from '@/components/BookingFlow'
import SpecialNoticeBanner from '@/components/SpecialNoticeBanner'

type Product = {
  id: string | number
  name: string
  catalogue: string
  image: string
  image1?: string
  image2?: string
  image3?: string
  image4?: string
  image5?: string
  originalPrice?: number
  price: number
  quantity: number
  detail1?: string
  detail2?: string
  detail3?: string
  detail4?: string
  detail5?: string
  videoId?: string
  isRental?: boolean
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [showBooking, setShowBooking] = useState(false)
  const [mainImage, setMainImage] = useState<string>('')

  const product = products.find((p: any) => p.id.toString() === params.id) as Product | undefined

  const images = [
    product?.image,
    product?.image1,
    product?.image2,
    product?.image3,
    product?.image4,
    product?.image5,
  ].filter(Boolean) as string[]

  if (!mainImage && images.length > 0) {
    setMainImage(images[0])
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Không tìm thấy sản phẩm</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-audio-electricBlue rounded-xl text-white hover:bg-audio-electricBlue/80 transition-colors"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    )
  }

  // Extract key info
  const extractPower = (text: string) => {
    const match = text.match(/(\d+)W/)
    return match ? match[1] : null
  }

  const extractBattery = (text: string) => {
    const match = text.match(/(\d+)\s*giờ/)
    return match ? match[1] : null
  }

  const power = extractPower(product.catalogue)
  const battery = extractBattery(product.catalogue)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-16 sm:mt-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          aria-label="Quay lại"
          className="flex items-center gap-2 text-audio-textMuted hover:text-audio-electricBlue transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Quay lại</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Images */}
          <div>
            <div className="relative aspect-square bg-audio-darker rounded-2xl overflow-hidden mb-4">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      mainImage === img
                        ? 'border-audio-electricBlue'
                        : 'border-audio-gray hover:border-audio-electricBlue/50'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              {product.name}
            </h1>

            <p className="text-lg text-audio-textMuted mb-6">{product.catalogue}</p>

            {/* Key Features - Quick View */}
            <div className="flex flex-wrap gap-3 mb-6">
              {power && (
                <div className="flex items-center gap-2 px-4 py-2 bg-audio-electricBlue/20 rounded-full">
                  <Volume2 className="w-4 h-4 text-audio-electricBlue" />
                  <span className="text-sm font-semibold text-audio-electricBlue">{power}W</span>
                </div>
              )}
              {battery && (
                <div className="flex items-center gap-2 px-4 py-2 bg-audio-neonPurple/20 rounded-full">
                  <Battery className="w-4 h-4 text-audio-neonPurple" />
                  <span className="text-sm font-semibold text-audio-neonPurple">{battery} giờ</span>
                </div>
              )}
              <div className="flex items-center gap-2 px-4 py-2 bg-audio-neonOrange/20 rounded-full">
                <Bluetooth className="w-4 h-4 text-audio-neonOrange" />
                <span className="text-sm font-semibold text-audio-neonOrange">Bluetooth</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8 p-6 bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-2xl">
              {product.originalPrice && product.originalPrice > product.price ? (
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl sm:text-3xl font-black text-audio-electricBlue">
                    {product.price}k/ngày
                  </span>
                  <span className="text-lg text-audio-textMuted line-through">
                    {product.originalPrice}k/ngày
                  </span>
                </div>
              ) : (
                <div className="text-2xl sm:text-3xl font-black text-audio-electricBlue mb-2">
                  {product.price}k/ngày
                </div>
              )}
              <p className="text-sm text-audio-textMuted">
                Từ ngày thứ 2: {Math.floor(product.price * 0.5)}k/ngày
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowBooking(true)}
              className="w-full px-8 py-4 bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-audio-electricBlue/50 transition-all mb-8"
            >
              Đặt Thuê Ngay
            </button>

            {/* Product Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-white mb-4">Chi tiết sản phẩm</h2>
              <ul className="space-y-3">
                {product.detail1 && (
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span>{product.detail1}</span>
                  </li>
                )}
                {product.detail2 && (
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span>{product.detail2}</span>
                  </li>
                )}
                {product.detail3 && (
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span>{product.detail3}</span>
                  </li>
                )}
                {product.detail4 && (
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span>{product.detail4}</span>
                  </li>
                )}
                {product.detail5 && (
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span>{product.detail5}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Video demo */}
            {product.videoId && (
              <div className="mt-8">
                <h2 className="text-2xl font-black text-white mb-4">Video hướng dẫn</h2>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${product.videoId}`}
                    title="Video hướng dẫn sử dụng"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-20 bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6">Chính sách thuê loa</h2>

          <div className="space-y-4 text-white">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">1. Đặt cọc & hợp đồng</h3>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed text-sm sm:text-base">
                <li>
                  Cọc bằng <span className="font-semibold text-audio-electricBlue">CCCD & GPLX</span> và kèm hợp đồng thuê loa.
                </li>
                <li>
                  Thanh toán <span className="font-semibold text-audio-electricBlue">tiền thuê + phí ship (nếu có)</span> trước khi bàn giao loa.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">2. Thời gian thuê</h3>
              <p className="leading-relaxed text-sm sm:text-base">
                Thời gian thuê được tính theo ngày (24 giờ) kể từ thời điểm nhận loa; từ ngày thuê thứ hai trở đi, mỗi ngày tiếp theo được áp dụng mức phí bằng 50% giá thuê ngày đầu.
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-audio-neonOrange mb-2">📌 Đền bù thiệt hại</h4>
              <p className="leading-relaxed text-sm sm:text-base">
                Nếu thiết bị hư hỏng, shop sẽ tính phí sửa chữa hoặc yêu cầu bồi thường theo giá trị thị trường hiện tại.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SpecialNoticeBanner />

      {showBooking && (
        <BookingFlow
          productId={product.id.toString()}
          productName={product.name}
          productPrice={product.price}
          onClose={() => setShowBooking(false)}
        />
      )}
    </>
  )
}
