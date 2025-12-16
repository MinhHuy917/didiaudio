'use client'

import { motion } from 'framer-motion'
import { Music2, Sparkles, Volume2, Headphones, Radio, Mic } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Về Chúng Tôi</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ĐiĐi Audio
            </span>
            <br />
            <span className="text-white">Âm Thanh Chất Lượng</span>
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Chuyên cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, hướng dẫn sử dụng tận tâm, 
            hỗ trợ kỹ thuật 24/7. Đồng hành cùng bạn trong mọi sự kiện và tiệc tùng.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: Music2, label: 'JBL Chính Hãng', color: 'cyan' },
            { icon: Volume2, label: 'Bass Mạnh', color: 'purple' },
            { icon: Headphones, label: 'Hỗ Trợ 24/7', color: 'pink' },
            { icon: Radio, label: 'Giao Nhanh', color: 'cyan' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-white font-medium">{feature.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
