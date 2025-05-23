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
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
  </svg>
)

function Rating({ rating, reviewsCount }: { rating: number; reviewsCount: number }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(<StarIcon key={i} filled={i <= Math.floor(rating)} />)
  }
  return (
    <div className="flex items-center space-x-2 text-gray-700 mt-2">
      <div className="flex">{stars}</div>
      <span className="text-lg font-semibold">{rating.toFixed(1)}</span>
      <span className="text-sm text-gray-500">({reviewsCount} đánh giá)</span>
    </div>
  )
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p: Product) => p.id.toString() === params.id)
  const router = useRouter()

  if (!product) return <div className="p-4 text-center text-red-500">Không tìm thấy sản phẩm 😞</div>

  // Lấy các ảnh phụ (bỏ undefined)
  const images = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
    product.image4,
    product.image5,
    product.image6,
    product.image7,
  ].filter(Boolean) as string[]

  const [mainImage, setMainImage] = useState(images[0])

  // Demo video URL (bạn thay link video này sau nhé)
  const demoVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"

  // Rating giả định (bạn update sau)
  const ratingValue = 5
  const ratingCount = 124

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": images,
    "description": product.catalogue,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toString(),
      "reviewCount": ratingCount.toString()
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Chi tiết sản phẩm</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="max-w-5xl mx-auto p-4 mt-20">
      <div className="flex items-center mb-6">
      <button
  onClick={() => router.back()}
  aria-label="Quay lại"
  className="
    p-2 rounded-full 
    bg-white bg-opacity-80 
    shadow-md 
    hover:bg-opacity-100 
    transition 
    duration-300 
    flex items-center justify-center
    w-10 h-10
  "
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
              <Rating rating={ratingValue} reviewsCount={ratingCount} />
              <p className="text-2xl text-green-600 font-semibold mt-4">{product.price}k</p>
              <p className="text-gray-700 mt-2">Phân loại: {product.catalogue}</p>

              {/* Mô tả chi tiết (có thể thêm) */}
              <div className="mt-6 text-gray-600 leading-relaxed">
                <p><strong>Chi tiết sản phẩm:</strong></p>
                <ul className="list-disc list-inside mt-2">
                  <li>{product.detail1}</li>
                  <li>{product.detail2}</li>
                  <li>{product.detail3}</li>
                  <li>{product.detail4}</li>
                </ul>
              </div>
            </div>

            {/* Video demo */}
             {product.videoId && 
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
            }
          </div>
        </div>
      </div>
    </>
  )
}
