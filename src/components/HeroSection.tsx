'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Volume2, Zap, Truck } from 'lucide-react'

const SoundWave = ({ delay = 0, height = 20 }: { delay?: number; height?: number }) => (
  <motion.div
    className="w-1 bg-gradient-to-t from-audio-electricBlue via-audio-neonPurple to-audio-neonOrange rounded-full"
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-speaker opacity-50" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-audio-light/50 backdrop-blur-sm border border-audio-electricBlue/30 mb-6"
            >
              <Volume2 className="w-4 h-4 text-audio-electricBlue" />
              <span className="text-sm text-white">JBL Chính Hãng • Giao Nhanh 30-60 Phút</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-audio-electricBlue via-audio-neonPurple to-audio-neonOrange bg-clip-text text-transparent">
                Cho Thuê Loa Kéo
              </span>
              <br />
              <span className="text-white">JBL Chính Hãng</span>
              <br />
              <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Đà Nẵng</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Bass mạnh • Pin lâu • Bluetooth • Phù hợp du lịch, cắm trại, sinh nhật, team building
            </motion.p>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              {[
                { icon: Truck, text: 'Giao 30-60 phút' },
                { icon: Zap, text: 'Setup miễn phí' },
                { icon: Phone, text: 'Hỗ trợ 24/7' },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-audio-light/30 backdrop-blur-sm rounded-full border border-audio-electricBlue/20">
                  <feature.icon className="w-4 h-4 text-audio-electricBlue" />
                  <span className="text-sm text-white">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#products"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple rounded-full font-bold text-white hover:shadow-lg hover:shadow-audio-electricBlue/50 transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
              >
                Thuê Ngay
              </Link>
              <Link
                href="tel:0339197917"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-audio-neonOrange rounded-full font-bold text-white hover:bg-audio-neonOrange/90 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Gọi Ngay: </span>0339197917
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 sm:gap-6 mt-8 sm:mt-12 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple bg-clip-text text-transparent">
                  5.0
                </div>
                <div className="text-[10px] sm:text-xs text-white mt-1">⭐ Đánh Giá</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-audio-gray" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-audio-neonPurple to-audio-neonOrange bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-[10px] sm:text-xs text-white mt-1">Khách Hàng</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-audio-gray" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-audio-neonOrange to-audio-electricBlue bg-clip-text text-transparent">
                  30-60p
                </div>
                <div className="text-[10px] sm:text-xs text-white mt-1">Giao Hàng</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Audio Visualizer */}
            <div className="relative bg-audio-light/30 backdrop-blur-md rounded-3xl p-8 border border-audio-electricBlue/20">
              <div className="flex items-end justify-center gap-1.5 h-48 mb-8">
                {[...Array(40)].map((_, i) => (
                  <SoundWave key={i} delay={i * 0.05} height={Math.random() * 40 + 20} />
                ))}
              </div>

              {/* Speaker Icon Grid */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { color: 'text-audio-electricBlue' },
                  { color: 'text-audio-neonPurple' },
                  { color: 'text-audio-neonOrange' },
                  { color: 'text-audio-electricBlue' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className={`${item.color} p-4 bg-audio-dark/50 rounded-xl border border-audio-electricBlue/10 hover:border-audio-electricBlue/30 transition-all`}
                  >
                    <Volume2 className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-audio-electricBlue to-audio-neonPurple rounded-full blur-xl opacity-50"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-audio-neonOrange to-audio-electricBlue rounded-full blur-2xl opacity-30"
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
          className="w-6 h-10 border-2 border-audio-electricBlue/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-audio-electricBlue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
