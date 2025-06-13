"use client"

import React, { useState } from "react"
import Head from "next/head"
import { products } from "@/data/products"
import { useRouter } from "next/navigation"

type Product = {
  id: number
  name: string
  catalogue: string
  image: string
  image1?: string
  image2?: string
  image3?: string
  image4?: string
  image5?: string
  image6?: string
  image7?: string
  price: number
  quantity: number
  detail1?: string
  detail2?: string
  detail3?: string
  detail4?: string
  videoId?: string
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  const product = products.find((p: any) => p.id.toString() === params.id) ?? null

  const images = [
    product?.image,
    product?.image1,
    product?.image2,
    product?.image3,
    product?.image4,
    product?.image5,
    product?.image6,
    product?.image7,
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
                <img
                  src={mainImage}
                  alt={product.name}
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
                      <img src={img} alt={`${product.name} ${idx}`} className="w-20 h-20 object-cover" />
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
                {product.videoId && (
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
    </>
  )
}
