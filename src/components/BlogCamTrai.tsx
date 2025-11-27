'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import anh from '/src/images/huy.jpg'
import { articles } from '@/data/blog'

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
      // Hiển thị tất cả các trang nếu tổng số trang <= 5
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Logic hiển thị trang với ellipsis
      if (currentPage <= 3) {
        // Trang đầu
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        // Trang cuối
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // Trang giữa
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <>
      {/* Banner */}
      {/* Articles */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-green-700 text-white hover:bg-green-800'
                }`}
              >
                ← Trước
              </button>

              {/* Page Numbers */}
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
                      className={`min-w-[40px] px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        currentPage === pageNum
                          ? 'bg-green-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-green-700 text-white hover:bg-green-800'
                }`}
              >
                Sau →
              </button>
            </div>

            {/* Page Info */}
            <p className="text-sm text-gray-600">
              Trang {currentPage} / {totalPages} ({articles.length} bài viết)
            </p>
          </div>
        )}
      </div>
    </>
  )
}
