'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { products } from '@/data/products'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Calendar, Battery, Volume2, Bluetooth, Zap, Check, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 mt-12 sm:mt-16 lg:mt-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          aria-label="Quay lại"
          className="flex items-center gap-2 text-audio-textMuted hover:text-audio-electricBlue transition-colors mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm sm:text-base">Quay lại</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left: Images */}
          <div className="min-w-0">
            <div className="relative aspect-square bg-audio-darker rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4">
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
              <div className="flex gap-2 sm:gap-3 overflow-x-auto overflow-y-hidden pb-2 scrollbar-hide snap-x snap-mandatory -mx-3 px-3" style={{ WebkitOverflowScrolling: 'touch' }}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all touch-manipulation snap-start ${
                      mainImage === img
                        ? 'border-audio-electricBlue'
                        : 'border-audio-gray hover:border-audio-electricBlue/50 active:border-audio-electricBlue/70'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-base sm:text-lg text-audio-textMuted mb-4 sm:mb-6 leading-relaxed break-words overflow-wrap-anywhere">{product.catalogue}</p>

            {/* Key Features - Quick View */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              {power && (
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-audio-electricBlue/20 rounded-full">
                  <Volume2 className="w-4 h-4 text-audio-electricBlue flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-audio-electricBlue whitespace-nowrap">{power}W</span>
                </div>
              )}
              {battery && (
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-audio-neonPurple/20 rounded-full">
                  <Battery className="w-4 h-4 text-audio-neonPurple flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-audio-neonPurple whitespace-nowrap">{battery} giờ</span>
                </div>
              )}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-audio-neonOrange/20 rounded-full">
                <Bluetooth className="w-4 h-4 text-audio-neonOrange flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-audio-neonOrange whitespace-nowrap">Bluetooth</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-xl sm:rounded-2xl">
              {product.originalPrice && product.originalPrice > product.price ? (
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-4 mb-2">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-audio-electricBlue">
                    {product.price}k/ngày
                  </span>
                  <span className="text-base sm:text-lg text-audio-textMuted line-through">
                    {product.originalPrice}k/ngày
                  </span>
                </div>
              ) : (
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-audio-electricBlue mb-2">
                  {product.price}k/ngày
                </div>
              )}
              <p className="text-xs sm:text-sm text-audio-textMuted">
                Từ ngày thứ 2: {Math.floor(product.price * 0.5)}k/ngày
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-6 sm:mb-8">
              
              {/* Contact Buttons */}
              <div className="flex gap-3">
                <Link
                  href="tel:0339197917"
                  className="flex-1 flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl text-white font-bold text-sm active:scale-95 transition-transform bg-green-500"
                >
             <Phone />
                  <span>Gọi Ngay</span>
                </Link>
               
                <Link
                  href="https://m.me/chothueloakeokeodanang"
                  target="_blank"
                  className="flex-1 flex flex-col items-center justify-center gap-1 px-2 sm:px-4 py-3 bg-audio-light/50 border border-audio-electricBlue/30 rounded-xl text-white font-semibold text-xs sm:text-sm active:scale-95 transition-transform hover:bg-audio-light/70 bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <radialGradient
                        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
                        cx="11.087"
                        cy="7.022"
                        r="47.612"
                        gradientTransform="matrix(1 0 0 -1 0 50)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#1292ff"></stop>
                        <stop offset=".079" stop-color="#2982ff"></stop>
                        <stop offset=".23" stop-color="#4e69ff"></stop>
                        <stop offset=".351" stop-color="#6559ff"></stop>
                        <stop offset=".428" stop-color="#6d53ff"></stop>
                        <stop offset=".754" stop-color="#df47aa"></stop>
                        <stop offset=".946" stop-color="#ff6257"></stop>
                      </radialGradient>
                      <path
                        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
                        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
                      ></path>
                      <path
                        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
                      ></path>
                    </svg>
                  <span className="text-center leading-tight">Messenger</span>
                </Link>
                 <Link
                  href="https://zalo.me/0339197917"
                  target="_blank"
                  className="flex-1 flex flex-col items-center justify-center gap-1 px-4 py-3  rounded-xl text-white font-semibold text-sm active:scale-95 transition-transform hover:bg-audio-light/70 bg-blue-500"
                >
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#2962ff"
                        d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
                      ></path>
                      <path
                        fill="#eee"
                        d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
                      ></path>
                    </svg>
                  <span>Zalo</span>
                </Link>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">Chi tiết sản phẩm</h2>
              <ul className="space-y-2 sm:space-y-3">
                {product.detail1 && (
                  <li className="flex items-start gap-2 sm:gap-3 text-white">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed break-words overflow-wrap-anywhere flex-1 min-w-0">{product.detail1}</span>
                  </li>
                )}
                {product.detail2 && (
                  <li className="flex items-start gap-2 sm:gap-3 text-white">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed break-words overflow-wrap-anywhere flex-1 min-w-0">{product.detail2}</span>
                  </li>
                )}
                {product.detail3 && (
                  <li className="flex items-start gap-2 sm:gap-3 text-white">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed break-words overflow-wrap-anywhere flex-1 min-w-0">{product.detail3}</span>
                  </li>
                )}
                {product.detail4 && (
                  <li className="flex items-start gap-2 sm:gap-3 text-white">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed break-words overflow-wrap-anywhere flex-1 min-w-0">{product.detail4}</span>
                  </li>
                )}
                {product.detail5 && (
                  <li className="flex items-start gap-2 sm:gap-3 text-white">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-audio-electricBlue flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed break-words overflow-wrap-anywhere flex-1 min-w-0">{product.detail5}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Video demo */}
            {product.videoId && (
              <div className="mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">Video hướng dẫn</h2>
                <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
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
          className="mt-8 sm:mt-12 lg:mt-20 bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 lg:space-y-6 min-w-0"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-4 lg:mb-6">Chính sách thuê loa</h2>

          <div className="space-y-3 sm:space-y-4 text-white">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">1. Đặt cọc & hợp đồng</h3>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 leading-relaxed text-sm sm:text-base">
                <li className="break-words overflow-wrap-anywhere">
                  Cọc bằng <span className="font-semibold text-audio-electricBlue">CCCD hoặc GPLX</span> và kèm hợp đồng thuê loa.
                </li>
                <li className="break-words overflow-wrap-anywhere">
                  Thanh toán <span className="font-semibold text-audio-electricBlue">tiền thuê + phí ship (nếu có)</span> trước khi bàn giao loa.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">2. Thời gian thuê</h3>
              <p className="leading-relaxed text-sm sm:text-base break-words overflow-wrap-anywhere">
                Thời gian thuê được tính theo ngày (24 giờ) kể từ thời điểm nhận loa; từ ngày thuê thứ hai trở đi, mỗi ngày tiếp theo được áp dụng mức phí bằng 50% giá thuê ngày đầu.
              </p>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-bold text-audio-neonOrange mb-2">📌 Đền bù thiệt hại</h4>
              <p className="leading-relaxed text-sm sm:text-base break-words overflow-wrap-anywhere">
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
