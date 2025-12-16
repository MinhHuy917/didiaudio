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
                  Cọc bằng <span className="font-semibold text-cyan-400">CCCD hoặc GPLX</span> và kèm hợp đồng thuê loa.
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
