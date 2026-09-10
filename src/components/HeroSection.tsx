'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Zap, Truck, Music, Play, MessageCircle } from 'lucide-react'
import speakerImg from '@/images/loajblpartyboxstage320/0.png'

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
              <span className="text-sm text-cyan-400 font-medium tracking-wide">✨ Về Chúng Tôi</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2">
                ĐiĐi Audio
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Cửa hàng cho thuê loa JBL PartyBox Đà Nẵng
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
            >
              <Link
                href="tel:0339197917"
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl font-bold text-white hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 text-center overflow-hidden flex items-center justify-center gap-2 border border-pink-500/50"
              >
                <Phone className="w-5 h-5" />
                <span>📞 Gọi ngay: 0339 197 917</span>
              </Link>
              <Link
                href="https://zalo.me/0339197917"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl font-bold text-white border border-white/20 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center overflow-hidden flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <span>💬 Chat Zalo: 0339 197 917</span>
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

          {/* Right: Speaker Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="relative lg:block mt-12 lg:mt-0"
          >
            {/* Glowing Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-pink-500/30 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

            {/* Glowing Particles / Aura */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[450px] sm:h-[450px] border border-cyan-400/20 rounded-full pointer-events-none"
            />

            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[500px] border border-pink-400/20 rounded-full pointer-events-none"
            />

            <div className="relative z-10 drop-shadow-[0_0_40px_rgba(6,182,212,0.5)] flex justify-center">
              <Image
                src={speakerImg}
                alt="Loa JBL PartyBox 320 Đà Nẵng"
                width={500}
                height={500}
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] object-contain hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Floating Elements (Notes/Stars) */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 right-10 w-4 h-4 bg-cyan-400 rounded-full blur-sm"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-20 left-10 w-6 h-6 bg-pink-400 rounded-full blur-sm"
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
