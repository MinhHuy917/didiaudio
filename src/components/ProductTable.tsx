'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { products } from "@/data/products"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Volume2, Battery, Bluetooth, Zap } from 'lucide-react'

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
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-audio-darker overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-audio-electricBlue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-audio-neonPurple/5 rounded-full blur-3xl" />
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
            <Volume2 className="w-5 h-5 text-audio-electricBlue" />
            <span className="text-audio-electricBlue font-semibold">Sản Phẩm</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-audio-electricBlue via-audio-neonPurple to-audio-neonOrange bg-clip-text text-transparent">
              Loa Kéo JBL Chính Hãng
            </span>
          </h2>
          <p className="text-audio-textMuted max-w-2xl mx-auto text-lg">
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
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-audio-textMuted" />
            <input
              type="text"
              placeholder="Tìm kiếm loa..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-audio-light/50 backdrop-blur-sm border border-audio-electricBlue/20 rounded-xl text-white placeholder-audio-textMuted focus:outline-none focus:border-audio-electricBlue/50 focus:ring-2 focus:ring-audio-electricBlue/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${product.id}`}>
                  <div className="group relative bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-3xl overflow-hidden hover:border-audio-electricBlue/40 transition-all duration-300 hover:shadow-2xl hover:shadow-audio-electricBlue/20">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden bg-audio-darker">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-audio-darker via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-6 right-6">
                        {product.price === 0 ? (
                          <span className="px-4 py-2 bg-audio-neonOrange/20 backdrop-blur-sm border border-audio-neonOrange/30 rounded-full text-audio-neonOrange text-sm font-bold">
                            Miễn phí
                          </span>
                        ) : product.originalPrice && product.originalPrice > product.price ? (
                          <div className="flex flex-col items-end gap-2">
                            <span className="px-3 py-1 bg-audio-gray/80 backdrop-blur-sm rounded-lg text-audio-textMuted text-xs line-through">
                              {product.originalPrice}k
                            </span>
                            <span className="px-4 py-2 bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple rounded-full text-white text-base font-black shadow-lg">
                              {product.price}k/ngày
                            </span>
                          </div>
                        ) : (
                          <span className="px-4 py-2 bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple rounded-full text-white text-base font-black shadow-lg">
                            {product.price}k/ngày
                          </span>
                        )}
                      </div>

                      {/* Highlights Badge */}
                      <div className="absolute bottom-6 left-6 flex gap-2">
                        <div className="px-3 py-1 bg-audio-dark/80 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1">
                          <Battery className="w-3 h-3 text-audio-electricBlue" />
                          Pin lâu
                        </div>
                        <div className="px-3 py-1 bg-audio-dark/80 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1">
                          <Bluetooth className="w-3 h-3 text-audio-neonPurple" />
                          Bluetooth
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-audio-electricBlue transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-audio-textMuted">
                          {product.catalogue}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-audio-electricBlue/20 text-audio-electricBlue rounded-full text-xs font-semibold">
                          Bass mạnh
                        </span>
                        <span className="px-3 py-1 bg-audio-neonPurple/20 text-audio-neonPurple rounded-full text-xs font-semibold">
                          Chống nước
                        </span>
                        <span className="px-3 py-1 bg-audio-neonOrange/20 text-audio-neonOrange rounded-full text-xs font-semibold">
                          LED đổi màu
                        </span>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-audio-electricBlue/10">
                        <div className="w-full px-6 py-3 bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple rounded-xl text-white font-bold text-center group-hover:shadow-lg group-hover:shadow-audio-electricBlue/50 transition-all">
                          Thuê Ngay →
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-audio-electricBlue/0 via-audio-neonPurple/0 to-audio-neonOrange/0 group-hover:from-audio-electricBlue/5 group-hover:via-audio-neonPurple/5 group-hover:to-audio-neonOrange/5 transition-all duration-500 pointer-events-none rounded-3xl" />
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
            <p className="text-audio-textMuted text-lg">Không tìm thấy sản phẩm phù hợp.</p>
          </motion.div>
        )}

        {/* Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-3xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-black text-white mb-6">Chính sách thuê loa</h2>

          <div className="space-y-4 text-audio-textMuted">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">1. Đặt cọc & Thanh toán</h3>
              <p className="leading-relaxed">
                Khi thuê loa, vui lòng mang theo <span className="font-semibold text-audio-electricBlue">CCCD hoặc GPLX</span> để đối chiếu và chụp ảnh làm cơ sở cọc (chỉ lưu thông tin, không giữ giấy tờ).
                Thanh toán đầy đủ trước khi nhận loa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">2. Thời gian thuê</h3>
              <p className="leading-relaxed">
                Thời gian thuê được tính theo ngày (<span className="font-semibold text-audio-electricBlue">24 tiếng</span>) kể từ lúc nhận loa.
                Hỗ trợ linh hoạt nếu cần nhận sớm hoặc trả trễ.
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-audio-neonOrange mb-2">📌 Đền bù thiệt hại</h4>
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
