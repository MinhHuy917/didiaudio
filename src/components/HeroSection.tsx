'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Music, Volume2, Headphones, Radio } from 'lucide-react'

const WaveBar = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="w-1 bg-gradient-to-t from-music-purple via-music-pink to-music-cyan rounded-full"
    initial={{ height: 8 }}
    animate={{
      height: [8, 32, 8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      },
    }}
  />
)

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.2),transparent_50%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-music-light/50 backdrop-blur-sm border border-music-purple/30 mb-6"
            >
              <Music className="w-4 h-4 text-music-purple" />
              <span className="text-sm text-gray-300">ĐiĐi Audio - Cho thuê loa kéo Đà Nẵng</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-music-purple via-music-pink to-music-cyan bg-clip-text text-transparent">
                Âm Thanh
              </span>
              <br />
              <span className="text-white">Cho Mọi Sự Kiện</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Chuyên cho thuê loa kéo, loa karaoke chất lượng cao tại Đà Nẵng. 
              Giao tận nơi, hỗ trợ lắp đặt, giá cả hợp lý.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#products"
                className="px-8 py-4 bg-gradient-to-r from-music-purple to-music-pink rounded-full font-semibold text-white hover:shadow-lg hover:shadow-music-purple/50 transition-all duration-300 transform hover:scale-105"
              >
                Xem Sản Phẩm
              </Link>
              <Link
                href="tel:0909223917"
                className="px-8 py-4 bg-music-light/50 backdrop-blur-sm border border-music-purple/30 rounded-full font-semibold text-white hover:bg-music-light transition-all duration-300"
              >
                Liên Hệ Ngay
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { label: 'Sản Phẩm', value: '50+' },
                { label: 'Khách Hàng', value: '1000+' },
                { label: 'Đánh Giá', value: '5.0' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Music Visualizer */}
            <div className="relative bg-music-light/30 backdrop-blur-md rounded-3xl p-8 border border-music-purple/20">
              <div className="flex items-end justify-center gap-2 h-48 mb-8">
                {[...Array(20)].map((_, i) => (
                  <WaveBar key={i} delay={i * 0.1} />
                ))}
              </div>

              {/* Icons Grid */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { Icon: Volume2, color: 'text-music-purple' },
                  { Icon: Headphones, color: 'text-music-pink' },
                  { Icon: Radio, color: 'text-music-cyan' },
                  { Icon: Music, color: 'text-music-neon' },
                ].map(({ Icon, color }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className={`${color} p-4 bg-music-dark/50 rounded-xl border border-music-purple/10 hover:border-music-purple/30 transition-all`}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-music-purple to-music-pink rounded-full blur-xl opacity-50"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-music-cyan to-music-blue rounded-full blur-2xl opacity-30"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-music-purple/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-music-purple rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

