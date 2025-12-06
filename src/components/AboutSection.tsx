'use client'

import { motion } from 'framer-motion'
import { Music2, Sparkles } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="relative py-24 px-6 bg-music-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-music-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-music-pink/10 rounded-full blur-3xl" />
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
            <Sparkles className="w-6 h-6 text-music-purple" />
            <span className="text-music-purple font-semibold">Về Chúng Tôi</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-music-purple via-music-pink to-music-cyan bg-clip-text text-transparent">
              ĐiĐi Audio
            </span>
            <br />
            <span className="text-white">Âm Thanh Chất Lượng</span>
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Dịch vụ cho thuê loa kéo chuyên nghiệp tại Đà Nẵng, đồng hành cùng bạn trong mọi sự kiện và tiệc tùng. 
            Chúng tôi cam kết mang đến trải nghiệm âm thanh tuyệt vời nhất.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: Music2,
              title: 'Thiết Bị Chất Lượng',
              desc: 'Loa kéo, loa karaoke từ các thương hiệu uy tín, được bảo dưỡng thường xuyên',
            },
            {
              icon: Sparkles,
              title: 'Dịch Vụ Tận Tâm',
              desc: 'Giao tận nơi, hỗ trợ lắp đặt, tư vấn chọn loa phù hợp với nhu cầu',
            },
            {
              icon: Music2,
              title: 'Giá Cả Hợp Lý',
              desc: 'Bảng giá minh bạch, không phụ thu mùa lễ, ưu đãi cho sinh viên',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-music-light/50 backdrop-blur-sm border border-music-purple/20 rounded-2xl p-6 hover:border-music-purple/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-music-purple to-music-pink rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

