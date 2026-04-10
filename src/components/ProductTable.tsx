'use client'

import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#0a3257] sm:text-3xl">Loa kéo cho thuê nổi bật</h2>
          <p className="mt-1 text-sm text-slate-600">Giá rõ ràng - ảnh thật - gọi là có ngay.</p>
        </div>
        <a href="tel:0339197917" className="hidden rounded-xl bg-[#ff8a00] px-4 py-2 text-sm font-bold text-white sm:inline-block">
          Tư vấn nhanh
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-[#fff8ef] p-5 text-sm leading-6 text-[#8a4d0a]">
        <p className="font-semibold">Lưu ý thuê loa:</p>
        <p>• Có thể cọc CCCD/GPLX tùy dòng loa. • Giá từ ngày 2 trở đi giảm còn 50% so với ngày đầu.</p>
      </div>
    </section>
  )
}
