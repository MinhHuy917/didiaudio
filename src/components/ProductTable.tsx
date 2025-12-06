'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { products } from "@/data/products"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Music, Volume2 } from 'lucide-react'

type Product = {
  id: any
  name: string
  catalogue: string
  image: any
  price: number
  originalPrice?: number
  quantity: number
  isRental?: boolean
}

const ProductList: React.FC = () => {
  const [filterText, setFilterText] = useState('')

  const filteredProducts = products.filter((p: Product) => {
    const matchesText =
      filterText === '' ||
      p.name.toLowerCase().includes(filterText.toLowerCase()) ||
      p.catalogue.toLowerCase().includes(filterText.toLowerCase())
    return matchesText
  })

  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-music-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-music-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-music-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Volume2 className="w-5 h-5 text-music-purple" />
            <span className="text-music-purple font-semibold">Sản Phẩm</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-music-purple via-music-pink to-music-cyan bg-clip-text text-transparent">
              Bảng Giá Thuê
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chọn loa phù hợp với nhu cầu sự kiện của bạn
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm loa..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-music-light/50 backdrop-blur-sm border border-music-purple/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-music-purple/50 focus:ring-2 focus:ring-music-purple/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${product.id}`}>
                  <div className="group relative bg-music-light/30 backdrop-blur-sm border border-music-purple/20 rounded-2xl overflow-hidden hover:border-music-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-music-purple/20">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-music-darker">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-music-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4">
                        {product.price === 0 ? (
                          <span className="px-3 py-1 bg-music-neon/20 backdrop-blur-sm border border-music-neon/30 rounded-full text-music-neon text-sm font-semibold">
                            Miễn phí
                          </span>
                        ) : product.originalPrice && product.originalPrice > product.price ? (
                          <div className="flex flex-col items-end gap-1">
                            <span className="px-2 py-1 bg-red-500/80 backdrop-blur-sm rounded text-white text-xs line-through">
                              {product.originalPrice}k
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-music-purple to-music-pink rounded-full text-white text-sm font-bold">
                              {product.price}k/ngày
                            </span>
                          </div>
                        ) : (
                          <span className="px-3 py-1 bg-gradient-to-r from-music-purple to-music-pink rounded-full text-white text-sm font-bold">
                            {product.price}k/ngày
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-music-purple to-music-pink rounded-lg flex items-center justify-center flex-shrink-0">
                          <Music className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-music-purple transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-400 line-clamp-2">
                            {product.catalogue}
                          </p>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <div className="mt-4 pt-4 border-t border-music-purple/10">
                        <span className="text-sm text-music-purple font-medium group-hover:text-music-pink transition-colors">
                          Xem chi tiết →
                        </span>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-music-purple/0 via-music-pink/0 to-music-cyan/0 group-hover:from-music-purple/5 group-hover:via-music-pink/5 group-hover:to-music-cyan/5 transition-all duration-500 pointer-events-none rounded-2xl" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">Không tìm thấy sản phẩm phù hợp.</p>
          </motion.div>
        )}

        {/* Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-music-light/30 backdrop-blur-sm border border-music-purple/20 rounded-2xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Chính sách thuê loa</h2>

          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Đặt cọc & Thanh toán</h3>
              <p className="leading-relaxed">
                Khi thuê loa, vui lòng mang theo <span className="font-medium text-music-purple">CCCD hoặc GPLX</span> để đối chiếu và chụp ảnh làm cơ sở cọc (chỉ lưu thông tin, không giữ giấy tờ).
                Thanh toán đầy đủ trước khi nhận loa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Thời gian thuê</h3>
              <p className="leading-relaxed">
                Thời gian thuê được tính theo ngày (<span className="font-medium text-music-purple">24 tiếng</span>) kể từ lúc nhận loa.
                Hỗ trợ linh hoạt nếu cần nhận sớm hoặc trả trễ.
              </p>
            </div>

            <div>
              <h4 className="text-base font-semibold text-music-pink mb-2">📌 Đền bù thiệt hại</h4>
              <p className="leading-relaxed">
                Nếu thiết bị hư hỏng, mất mát hoặc quá bẩn, shop sẽ tính phí vệ sinh, sửa chữa hoặc yêu cầu bồi thường theo giá trị thị trường hiện tại.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductList
