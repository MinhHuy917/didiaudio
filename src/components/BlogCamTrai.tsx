'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Music, Play, Calendar, ArrowLeft, ArrowRight } from 'lucide-react'

import { multilingualArticles } from '@/data/blog-i18n'
import { localeFromPath, localeMeta, withLocalePrefix } from '@/lib/i18n'
import { getBlogCopy } from '@/lib/ui-copy'

const ITEMS_PER_PAGE = 6

export default function BlogCamTrai() {
  const pathname = usePathname() || '/'
  const locale = localeFromPath(pathname)
  const copy = getBlogCopy(locale)
  const [currentPage, setCurrentPage] = useState(1)

  const localizedArticles = multilingualArticles.map((article) => ({
    ...article,
    localized: article.translations[locale],
  }))

  const totalPages = Math.ceil(localizedArticles.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentArticles = localizedArticles.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="blog" className="bg-gradient-to-b from-black via-gray-900 to-black text-white" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <Music className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-200">{copy.badge}</span>
            </div>
            <h2 id="blog-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {copy.heading}
              </span>
            </h2>
          </div>
          <Link
            href={withLocalePrefix(locale, '/#products')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
          >
            <Play className="w-4 h-4" />
            {copy.ctaBook}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <Link
              key={article.id}
              href={withLocalePrefix(locale, `/blog/${article.localized.slug}`)}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image src={article.image} alt={article.localized.title} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-200">
                    <Calendar className="w-4 h-4 text-cyan-300" />
                    <span>{new Date(article.date).toLocaleDateString(localeMeta[locale].languageTag)}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg leading-snug line-clamp-2">{article.localized.title}</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{article.localized.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                  {copy.readMore}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><ArrowLeft /></button>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><ArrowRight /></button>
          </div>
        )}
      </div>
    </section>
  )
}
