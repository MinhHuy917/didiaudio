'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import anh from '/src/images/huy.jpg'
import { articles } from '@/data/blog'

export default function BlogCamTrai() {
  const [visibleCount, setVisibleCount] = useState(6)
  const visibleArticles = articles.slice(0, visibleCount)
  const hasMore = visibleCount < articles.length

  return (
    <>
      {/* Banner */}
      {/* Articles */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="group rounded-3xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 border border-gray-100"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl" />
                <div className="absolute bottom-4 left-4 z-10">
                <h2 className="text-xl font-semibold text-white drop-shadow-lg font-serif">
  {article.title}
</h2>

                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                <span className="inline-block mt-5 text-green-700 font-medium text-sm hover:underline">
                  Đọc tiếp →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-3 text-white bg-green-700 rounded-full shadow hover:bg-green-800 transition-colors duration-300"
            >
              Xem thêm bài viết ↓
            </button>
          </div>
        )}
      </div>
    </>
  )
}
