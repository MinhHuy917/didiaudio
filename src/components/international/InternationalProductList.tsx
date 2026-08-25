'use client'

import { products } from '@/data/products'
import { motion } from 'framer-motion'
import { Music } from 'lucide-react'
import React from 'react'
import ProductCard from '../ProductCard'

export default function InternationalProductList({ content }: { content: any }) {
  // Let's just show top 3 products for the landing page
  const displayProducts = products.slice(0, 3)

  return (
    <section id="products" className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Music className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            <span className="text-sm sm:text-base text-cyan-400 font-semibold">{content.title}</span>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 sm:gap-8 max-w-5xl mx-auto">
          {displayProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
