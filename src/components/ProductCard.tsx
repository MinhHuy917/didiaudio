'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Battery, Bluetooth, Volume2, Music } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: {
    id: string
    name: string
    catalogue: string
    image: string
    price: number
    originalPrice?: number
    [key: string]: any
  }
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(product.image)

  // Extract all images for the mini gallery (main + up to 12 additional)
  const galleryImages = [
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
  ].filter(Boolean)
  // Extract key info from catalogue
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

  // Calculate discount percentage
  const discountPercentage =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex-1 w-full max-w-md mx-auto group"
    >
      <div className="relative bg-[#111111] rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full">
        {/* Image Container */}
        <Link href={`/products/${product.id}`} className="block relative h-64 sm:h-72 overflow-hidden bg-black">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            loading={index < 3 ? 'eager' : 'lazy'}
          />

          {/* Gradient Overlay bottom for text/badges */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111111] to-transparent" />

          {/* Key Features Badges inside image, sitting on bottom */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
            {power && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-medium text-gray-200">{power}W</span>
              </div>
            )}
            {battery && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                <Battery className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-medium text-gray-200">{battery}h</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              <Bluetooth className="w-3.5 h-3.5 text-pink-400" />
              <span className="text-xs font-medium text-gray-200">BT</span>
            </div>
          </div>
        </Link>

        {/* Content Area */}
        <div className="p-6 sm:p-8 flex flex-col flex-1">
          <Link href={`/products/${product.id}`} className="block flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2 mb-6">
              {product.catalogue}
            </p>

            {/* Price Box */}
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {product.price}k
                </span>
                <span className="text-gray-400 text-sm sm:text-base font-medium mb-1">/ ngày</span>
              </div>

              {product.originalPrice && product.originalPrice > product.price && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-500 text-sm line-through">
                    {product.originalPrice}k
                  </span>
                  {discountPercentage && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-500/20 text-pink-400 border border-pink-500/20">
                      Tiết kiệm {discountPercentage}%
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>

          {/* Mini Gallery */}
          {galleryImages.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {galleryImages.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentImage(imgSrc)
                  }}
                  onMouseEnter={() => setCurrentImage(imgSrc)}
                  className={`relative w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
                    currentImage === imgSrc ? 'border-cyan-500 scale-110 z-10' : 'border-transparent hover:border-cyan-500/50'
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <Link
            href={`/products/${product.id}`}
            className="w-full relative inline-flex items-center justify-center px-6 py-3.5 font-bold text-white transition-all duration-300 bg-white/5 hover:bg-cyan-500 hover:text-white border border-white/10 hover:border-cyan-500 rounded-xl group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-[0.98]"
          >
            <span>Xem chi tiết</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
