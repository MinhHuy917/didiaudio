'use client'

import React, { useState, useMemo } from 'react'
import { products } from '@/data/products'
import ProductCard from './ProductCard'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Volume2, X, Music, SlidersHorizontal } from 'lucide-react'

type Product = {
  id: any
  name: string
  catalogue: string
  image: any
  price: number
  originalPrice?: number
  quantity: number
}

const ProductList: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedPower, setSelectedPower] = useState<string>('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all')
  const [selectedBrand, setSelectedBrand] = useState<string>('all')

  // Extract power from catalogue
  const getProductPower = (catalogue: string): number => {
    const match = catalogue.match(/(\d+)W/)
    return match ? parseInt(match[1]) : 0
  }

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p: Product) => {
      // Text search
      const matchesText =
        searchText === '' ||
        p.name.toLowerCase().includes(searchText.toLowerCase()) ||
        p.catalogue.toLowerCase().includes(searchText.toLowerCase())

      // Power filter
      const power = getProductPower(p.catalogue)
      const matchesPower =
        selectedPower === 'all' ||
        (selectedPower === 'low' && power < 100) ||
        (selectedPower === 'medium' && power >= 100 && power < 500) ||
        (selectedPower === 'high' && power >= 500)

      // Price filter
      const matchesPrice =
        selectedPriceRange === 'all' ||
        (selectedPriceRange === 'budget' && p.price < 100) ||
        (selectedPriceRange === 'mid' && p.price >= 100 && p.price < 500) ||
        (selectedPriceRange === 'premium' && p.price >= 500)

      // Brand filter
      const matchesBrand =
        selectedBrand === 'all' ||
        (selectedBrand === 'jbl' && p.name.toLowerCase().includes('jbl')) ||
        (selectedBrand === 'other' && !p.name.toLowerCase().includes('jbl'))

      return matchesText && matchesPower && matchesPrice && matchesBrand
    })
  }, [searchText, selectedPower, selectedPriceRange, selectedBrand])

  const hasActiveFilters =
    selectedPower !== 'all' || selectedPriceRange !== 'all' || selectedBrand !== 'all'

  const clearFilters = () => {
    setSelectedPower('all')
    setSelectedPriceRange('all')
    setSelectedBrand('all')
  }

  return (
    <section id="products" className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Music className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            <span className="text-sm sm:text-base text-cyan-400 font-semibold">Sản Phẩm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Loa Kéo JBL Chính Hãng
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Chọn loa phù hợp với nhu cầu sự kiện của bạn
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm loa..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-6 py-3 sm:py-4 rounded-2xl border transition-all flex items-center justify-center gap-2 ${
                showFilters || hasActiveFilters
                  ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400'
                  : 'bg-white/5 border-white/10 text-white hover:border-cyan-500/50'
              }`}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Lọc</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              )}
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl space-y-4 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <Filter className="w-5 h-5 text-cyan-400" />
                    Bộ lọc
                  </h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                    >
                      <X className="w-4 h-4" />
                      Xóa bộ lọc
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Power Filter */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Công suất</label>
                    <select
                      value={selectedPower}
                      onChange={(e) => setSelectedPower(e.target.value)}
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    >
                      <option value="all">Tất cả</option>
                      <option value="low">Dưới 100W</option>
                      <option value="medium">100W - 500W</option>
                      <option value="high">Trên 500W</option>
                    </select>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Giá thuê</label>
                    <select
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    >
                      <option value="all">Tất cả</option>
                      <option value="budget">Dưới 100k/ngày</option>
                      <option value="mid">100k - 500k/ngày</option>
                      <option value="premium">Trên 500k/ngày</option>
                    </select>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Thương hiệu</label>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    >
                      <option value="all">Tất cả</option>
                      <option value="jbl">JBL</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        {filteredProducts.length > 0 && (
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">
              Tìm thấy <span className="text-cyan-400 font-semibold">{filteredProducts.length}</span> sản phẩm
            </p>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Volume2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-white text-lg mb-4">Không tìm thấy sản phẩm phù hợp.</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-colors"
              >
                Xóa bộ lọc
              </button>
            )}
          </motion.div>
        )}

        {/* Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-black text-white mb-6 flex items-center gap-3">
            <Music className="w-6 h-6 text-cyan-400" />
            Chính sách thuê loa
          </h2>

          <div className="space-y-6 text-white">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">1. Đặt cọc & hợp đồng</h3>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed text-sm sm:text-base text-gray-300">
                <li>
                  Cọc bằng <span className="font-semibold text-cyan-400">CCCD & GPLX</span> và kèm hợp đồng thuê loa.
                </li>
                <li>
                  Thanh toán <span className="font-semibold text-cyan-400">tiền thuê + phí ship (nếu có)</span> trước khi bàn giao loa.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">2. Thời gian thuê</h3>
              <p className="leading-relaxed text-sm sm:text-base text-gray-300">
                Thời gian thuê được tính theo ngày (24 giờ) kể từ thời điểm nhận loa; từ ngày thuê thứ hai trở đi, mỗi ngày tiếp theo được áp dụng mức phí bằng 50% giá thuê ngày đầu.
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-pink-400 mb-2">📌 Đền bù thiệt hại</h4>
              <p className="leading-relaxed text-sm sm:text-base text-gray-300">
                Nếu thiết bị hư hỏng, shop sẽ tính phí sửa chữa hoặc yêu cầu bồi thường theo giá trị thị trường hiện tại.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductList
