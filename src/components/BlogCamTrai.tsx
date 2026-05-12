'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { articles } from '@/data/blog'
import { Music, Play, Calendar, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

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
    <section
      id="blog"
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
      aria-labelledby="blog-heading"
    >
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="text-xs font-semibold text-cyan-100 sm:text-sm">Blog cao cấp • Mẹo thuê loa thực chiến</span>
              </div>
              <h2 id="blog-heading" className="text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Blog âm thanh xịn xò,
                </span>{' '}
                <span className="text-white">đọc là áp dụng được ngay</span>
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base sm:leading-7">
                Tổng hợp các bài hướng dẫn dễ hiểu cho người mới: chọn loa đúng nhu cầu, setup nhanh trong 10 phút, tối ưu karaoke ngoài trời và tránh lỗi hú mic.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Chọn loa', 'Setup nhanh', 'Karaoke', 'Dã ngoại', 'Party'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-200 sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:scale-[1.02] hover:shadow-cyan-500/50 sm:text-base"
            >
              <Play className="h-4 w-4" />
              Thuê loa ngay
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="relative h-52 w-full overflow-hidden sm:h-60">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-xs text-gray-200">
                    <Calendar className="h-3.5 w-3.5 text-cyan-300" />
                    <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <h3 className="line-clamp-2 text-base font-bold leading-snug text-white drop-shadow-lg sm:text-lg">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 p-5">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-300">{article.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  Đọc bài này
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                    currentPage === 1
                      ? 'cursor-not-allowed border border-white/10 bg-white/5 text-gray-500'
                      : 'border border-white/15 bg-white/10 text-white hover:border-cyan-500/50'
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Trước
                </button>

                <div className="flex items-center gap-1 overflow-x-auto">
                  {getPageNumbers().map((page, index) => {
                    if (page === '...') {
                      return (
                        <span key={`ellipsis-${index}`} className="px-1.5 text-sm text-gray-500">
                          ...
                        </span>
                      )
                    }

                    const pageNum = page as number
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`min-w-[38px] rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                            : 'border border-white/10 bg-white/5 text-white hover:border-cyan-500/50'
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
                  className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                    currentPage === totalPages
                      ? 'cursor-not-allowed border border-white/10 bg-white/5 text-gray-500'
                      : 'border border-white/15 bg-white/10 text-white hover:border-cyan-500/50'
                  }`}
                >
                  Sau
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              Trang {currentPage} / {totalPages} • {articles.length} bài viết
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
