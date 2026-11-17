'use client'

import { motion } from 'framer-motion'
import { Music2, Sparkles, Volume2, Headphones, Radio, Mic } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            <span className="font-semibold text-cyan-400">Về Chúng Tôi</span>
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thuê loa kẹo kéo tại Đà Nẵng - ĐiĐi Audio
            </span>
            <br />
          </h1>

          <p className="text-blod mx-auto max-w-3xl text-base leading-relaxed text-white sm:text-lg lg:text-xl">
            ĐiĐi Audio cho thuê loa kéo, loa di động JBL PartyBox tại Đà Nẵng.
            Xem mẫu loa hiện có, giá theo ngày và trao đổi thời gian, địa điểm
            sử dụng trước khi xác nhận thuê.
          </p>
        </motion.div>

        {/* Features Grid */}
      </div>
    </section>
  )
}
