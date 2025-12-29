'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { articles } from '@/data/blog'
import { Music, Play, Calendar, ArrowLeft, ArrowRight } from 'lucide-react'

const ITEMS_PER_PAGE = 6

export default function BlogCamTrai() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentArticles = articles.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...')
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1, '...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
        pages.push('...', totalPages)
      }
    }
    return pages
  }

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <Music className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-200">Blog • Mẹo thuê loa & trải nghiệm</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Kinh nghiệm âm thanh & sự kiện
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
              Tips chọn loa, setup karaoke, đến các mẹo tổ chức tiệc ngoài trời tại Đà Nẵng. Tất cả gói gọn cho bạn thuê loa nhanh, nhẹ, chuẩn.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Chọn loa', 'Setup nhanh', 'Karaoke', 'Dã ngoại', 'Party'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10 text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="#products"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
          >
            <Play className="w-4 h-4" />
            Thuê loa ngay
          </Link>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-200">
                    <Calendar className="w-4 h-4 text-cyan-300" />
                    <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg leading-snug line-clamp-2">
                    {article.title}
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                  Đọc tiếp
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-xl font-semibold inline-flex items-center gap-2 transition-colors ${
                  currentPage === 1
                    ? 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/10'
                    : 'bg-white/5 text-white border border-white/10 hover:border-cyan-500/50'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Trước
              </button>

              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, index) => {
                  if (page === '...') {
                    return (
                      <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                        ...
                      </span>
                    )
                  }

                  const pageNum = page as number
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`min-w-[40px] px-3 py-2 rounded-xl font-semibold transition-colors ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                          : 'bg-white/5 text-white border border-white/10 hover:border-cyan-500/50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-xl font-semibold inline-flex items-center gap-2 transition-colors ${
                  currentPage === totalPages
                    ? 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/10'
                    : 'bg-white/5 text-white border border-white/10 hover:border-cyan-500/50'
                }`}
              >
                Sau
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-gray-400">
              Trang {currentPage} / {totalPages} ({articles.length} bài viết)
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
