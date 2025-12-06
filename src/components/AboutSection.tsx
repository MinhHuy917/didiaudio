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
          
          <p className="text-audio-textMuted text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Chuyên cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, setup miễn phí, 
            hỗ trợ kỹ thuật 24/7. Đồng hành cùng bạn trong mọi sự kiện và tiệc tùng.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: Volume2,
              title: 'JBL Chính Hãng',
              desc: '100% loa JBL chính hãng, chất lượng đảm bảo, bảo hành đầy đủ',
              gradient: 'from-audio-electricBlue to-audio-neonPurple',
            },
            {
              icon: Headphones,
              title: 'Giao Siêu Nhanh',
              desc: 'Giao hàng trong 30-60 phút tại nội thành Đà Nẵng, setup miễn phí',
              gradient: 'from-audio-neonPurple to-audio-neonOrange',
            },
            {
              icon: Music2,
              title: 'Hỗ Trợ 24/7',
              desc: 'Tư vấn chọn loa, hỗ trợ setup và xử lý sự cố kỹ thuật mọi lúc',
              gradient: 'from-audio-neonOrange to-audio-electricBlue',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-2xl p-6 hover:border-audio-electricBlue/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{feature.title}</h3>
              <p className="text-audio-textMuted">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
