'use client'

import { motion } from 'framer-motion'
import { Music2, Sparkles, Volume2, Headphones } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="relative py-24 px-6 bg-audio-darker overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-audio-electricBlue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-audio-neonPurple/10 rounded-full blur-3xl" />
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
            <Sparkles className="w-6 h-6 text-audio-electricBlue" />
            <span className="text-audio-electricBlue font-semibold">Về Chúng Tôi</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-audio-electricBlue via-audio-neonPurple to-audio-neonOrange bg-clip-text text-transparent">
              ĐiĐi Audio
            </span>
            <br />
            <span className="text-white">Âm Thanh Chất Lượng</span>
          </h2>
          
          <p className="text-white text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Chuyên cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, hướng dẫn sử dụng tận tâm, 
            hỗ trợ kỹ thuật 24/7. Đồng hành cùng bạn trong mọi sự kiện và tiệc tùng.
          </p>
        </motion.div>

        {/* Features Grid */}
     
      </div>
    </section>
  )
}
