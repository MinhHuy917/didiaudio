import Image from 'next/image'
import Link from 'next/link'
import { Music, Calendar, ArrowLeft, Play, Phone } from 'lucide-react'

type Props = {
  title: string
  description: string
  content: string
  image: string
  date: string
}

export default function BlogArticlePage({ title, description, content, image, date }: Props) {
  return (
    <article className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Back + breadcrumb */}
        <div className="flex items-center gap-3 text-sm text-gray-300 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Trang chủ
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-cyan-400">Blog</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <Music className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-200">Blog • Audio & Sự kiện</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">{description}</p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{new Date(date).toLocaleDateString('vi-VN')}</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
              >
                <Play className="w-4 h-4" />
                Thuê loa ngay
              </Link>
              <Link
                href="tel:0339197917"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:border-cyan-500/50 transition-all"
              >
                <Phone className="w-4 h-4" />
                0339197917
              </Link>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src={image} alt={title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-md">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white prose-li:marker:text-cyan-400">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </article>
  )
}
