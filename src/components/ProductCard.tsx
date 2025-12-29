'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Battery, Bluetooth, Volume2, Music, Phone } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: {
    id: string
    name: string
    catalogue: string
    image: string
    price: number
    originalPrice?: number
  }
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
          {/* Image Container */}
          <Link href={`/products/${product.id}`}>
            <div className="relative h-64 sm:h-80 overflow-hidden bg-black">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              {/* Music Wave Effect on Hover */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"
                />
              )}

              {/* Price Badge */}
              <div className="absolute top-4 right-4 z-10">
                {product.originalPrice && product.originalPrice > product.price ? (
                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-gray-400 text-xs line-through">
                      {product.originalPrice}k
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-sm font-black shadow-lg">
                      {product.price}k/ngày
                    </span>
                  </div>
                ) : (
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-sm font-black shadow-lg">
                    {product.price}k/ngày
                  </span>
                )}
              </div>

              {/* Key Features Badges */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
                {power && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30">
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-semibold text-white">{power}W</span>
                  </div>
                )}
                {battery && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                    <Battery className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-xs font-semibold text-white">{battery}h</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-500/20 backdrop-blur-sm rounded-full border border-pink-500/30">
                  <Bluetooth className="w-3.5 h-3.5 text-pink-400" />
                  <span className="text-xs font-semibold text-white">BT</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Content */}
          <div className="p-6">
            <Link href={`/products/${product.id}`}>
              <div className="flex items-start gap-3 mb-4">
                <Music className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{product.catalogue}</p>
                </div>
              </div>
            </Link>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Link
                href="tel:0339197917"
                className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Thuê Ngay
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Link>
              <Link
                href={`/products/${product.id}`}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold text-sm hover:bg-white/10 hover:border-cyan-500/50 transition-all"
              >
                Chi tiết
              </Link>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none rounded-3xl" />
        </div>
      </motion.div>
    </>
  )
}
