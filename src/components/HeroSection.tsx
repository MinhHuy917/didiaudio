'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Volume2, Zap, Truck, Music, Radio, Play } from 'lucide-react'

// Audio Wave Animation Component
const AudioWave = ({ delay = 0, height = 20 }: { delay?: number; height?: number }) => (
  <motion.div
    className="w-1 bg-gradient-to-t from-cyan-400 via-purple-500 to-pink-500 rounded-full"
    initial={{ height: 8 }}
    animate={{
      height: [8, height, 8],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      },
    }}
  />
)

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Music Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      {/* Music Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm"
            >
              <Music className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white font-medium">JBL Chính Hãng • Giao Nhanh 30-60 Phút</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Cho Thuê Loa Kéo
              </span>
              <span className="block text-white mt-2">JBL Chính Hãng</span>
              <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                Đà Nẵng
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Bass mạnh • Pin lâu • Bluetooth • Phù hợp du lịch, cắm trại, sinh nhật, team building
            </motion.p>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Truck, text: 'Giao 30-60 phút', color: 'cyan' },
                { icon: Zap, text: 'Setup miễn phí', color: 'purple' },
                { icon: Phone, text: 'Hỗ trợ 24/7', color: 'pink' },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-cyan-500/50 transition-colors"
                >
                  <feature.icon className={`w-4 h-4 text-${feature.color}-400`} />
                  <span className="text-sm text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Link
                href="#products"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Thuê Ngay
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="tel:0339197917"
                className="px-8 py-4 bg-pink-600 rounded-2xl font-bold text-white hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Gọi: </span>0339197917
              </Link>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 sm:gap-8 pt-8 justify-center lg:justify-start"
            >
              {[
                { value: '5.0', label: '⭐ Đánh Giá', gradient: 'from-cyan-400 to-purple-500' },
                { value: '1000+', label: 'Khách Hàng', gradient: 'from-purple-500 to-pink-500' },
                { value: '30-60p', label: 'Giao Hàng', gradient: 'from-pink-500 to-cyan-400' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Audio Visualizer - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              {/* Audio Visualizer */}
              <div className="flex items-end justify-center gap-1.5 h-48 mb-8">
                {[...Array(50)].map((_, i) => (
                  <AudioWave key={i} delay={i * 0.03} height={Math.random() * 50 + 20} />
                ))}
              </div>

              {/* Speaker Grid */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Radio, color: 'text-cyan-400' },
                  { icon: Volume2, color: 'text-purple-400' },
                  { icon: Music, color: 'text-pink-400' },
                  { icon: Radio, color: 'text-cyan-400' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className={`${item.color} p-4 bg-black/30 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all`}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Music Notes */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-30"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full blur-3xl opacity-20"
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
          className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
