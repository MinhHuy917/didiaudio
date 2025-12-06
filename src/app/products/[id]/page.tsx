"use client"

import React, { useState } from "react"
import Head from "next/head"
import { products } from "@/data/products"
import { useRouter } from "next/navigation"
import Image from "next/image"
import PromoBanner from "@/components/SpecialNoticeBanner"

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

  const product = products.find((p: any) => p.id.toString() === params.id) as Product | undefined

  const images = [
    product?.image,
    product?.image1,
    product?.image2,
    product?.image3,
    product?.image4,
    product?.image5,
  ].filter(Boolean) as string[]

  const [mainImage, setMainImage] = useState(images[0] ?? "")

  return (
    <>
      <Head>
        <title>{product?.name ?? "Không tìm thấy"} | Chi tiết sản phẩm</title>
      </Head>

      <div className="max-w-5xl mx-auto p-4 mt-20">
        {!product ? (
          <div className="text-center text-red-500">Không tìm thấy sản phẩm 😞</div>
        ) : (
          <>
            <div className="flex items-center mb-6">
              <button
                onClick={() => router.back()}
                aria-label="Quay lại"
                className="p-2 rounded-full bg-white bg-opacity-80 shadow-md hover:bg-opacity-100 transition duration-300 flex items-center justify-center w-10 h-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: Ảnh chính + gallery */}
              <div className="flex-1">
                <Image
                  src={mainImage}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md object-contain"
                />
                <div className="flex mt-3 space-x-3 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImage(img)}
                      className={`border rounded-lg overflow-hidden focus:outline-none ${
                        mainImage === img ? "border-yellow-400" : "border-transparent"
                      }`}
                    >
                      <Image src={img} alt={`${product.name} ${idx}`} width={80} height={80} className="w-20 h-20 object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Thông tin sản phẩm */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-2xl text-green-600 font-semibold mt-4">{product.price}k</p>
                  <p className="text-gray-700 mt-2">Phân loại: {product.catalogue}</p>

                  <div className="mt-6 text-gray-600 leading-relaxed">
                    <p><strong>Chi tiết sản phẩm:</strong></p>
                    <ul className="list-disc list-inside mt-2">
                      {product.detail1 && <li>{product.detail1}</li>}
                      {product.detail2 && <li>{product.detail2}</li>}
                      {product.detail3 && <li>{product.detail3}</li>}
                      {product.detail4 && <li>{product.detail4}</li>}
                    </ul>
                  </div>
                </div>

                {/* Video demo */}
                {product && 'videoId' in product && product.videoId && (
                  <div className="mt-6">
                    <p className="font-semibold mb-2">Video hướng dẫn sử dụng:</p>
                    <iframe
                      width="100%"
                      height="360"
                      src={`https://www.youtube.com/embed/${product.videoId}`}
                      title="Video hướng dẫn sử dụng"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

     <div>
      <PromoBanner /> 
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-6">

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6 my-12">
        <h2 className="text-2xl font-bold text-gray-800">Chính sách thuê lều</h2>

        {/* 1. Đặt cọc & thanh toán */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">1. Đặt cọc & Thanh toán</h3>
          <p className="text-gray-700 leading-relaxed">
            Khi thuê lều, vui lòng mang theo <span className="font-medium">CCCD hoặc GPLX</span> để bên mình đối chiếu và <span className="font-medium">chụp ảnh làm cơ sở cọc</span> (chỉ lưu thông tin, <span className="italic">không giữ giấy tờ</span>).
            Đồng thời, bạn cần <span className="font-semibold">thanh toán đầy đủ trước khi nhận lều và đồ cắm trại</span>.
          </p>
        </div>

        {/* 2. Thời gian thuê */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">2. Thời gian thuê</h3>
          <p className="text-gray-700 leading-relaxed">
            Thời gian thuê được tính theo ngày (<span className="font-medium">24 tiếng</span>) kể từ lúc nhận lều và phụ kiện.
            Tuy nhiên, bên mình có thể <span className="font-medium">hỗ trợ linh hoạt</span> nếu bạn cần nhận sớm hoặc trả trễ.
          </p>
          <div className="bg-gray-50 border-l-4 border-blue-400 p-4 mt-3 rounded">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold">Ví dụ:</span> Nếu bạn đi cắm trại vào <span className="font-medium">thứ 7</span> và cần đi sớm, bạn có thể ghé lấy lều từ tối <span className="font-medium">thứ 6</span> mà không tính thêm phí.
              Khi trả lều, bạn có thể trả trong ngày <span className="font-medium">Chủ Nhật</span>.
              Nhưng nếu giữ lều qua đêm Chủ Nhật và trả vào <span className="font-medium">thứ 2</span> hoặc sau đó, shop sẽ tính thêm <span className="font-semibold">50% giá thuê cho mỗi ngày tiếp theo</span>.
            </p>
          </div>
        </div>

        {/* 3. Đền bù thiệt hại */}
        <div>
          <h4 className="text-base font-semibold text-red-700 mt-3 mb-1">📌 Đền bù thiệt hại</h4>
          <p className="text-gray-700 leading-relaxed">
            Khi trả lại, nếu <span className="font-medium">thiết bị hư hỏng, mất mát hoặc quá bẩn không thể chùi rửa được</span>,
            shop sẽ <span className="font-semibold">tính phí vệ sinh, sửa chữa hoặc yêu cầu bồi thường</span> theo <span className="font-semibold text-red-700">giá trị thị trường hiện tại</span> của sản phẩm.
          </p>
        </div>

        {/* 4. Những điều không nên */}
        <div>
          <h4 className="text-base font-semibold text-yellow-600 mt-3 mb-1">⚠️ Những điều không nên</h4>
          <p className="text-gray-700 leading-relaxed">
            Để tránh làm hỏng thiết bị và giữ đồ dùng luôn sạch sẽ, <span className="font-semibold text-red-700">vui lòng KHÔNG sử dụng</span> <span className="font-medium">tấm phủ lều</span> (tấm phủ bên trên lều) và <span className="font-medium">tấm tăng chữ A</span> (tấm che nắng, che mưa dựng kiểu chữ A) để <span className="font-semibold">ngồi, nằm, hoặc trải dưới nền đất</span>.
          </p>
        </div>
      </div>
      </div>
     </div>
      
    </>
  )
}
