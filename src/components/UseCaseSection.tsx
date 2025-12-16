'use client'

import { motion } from 'framer-motion'
import { Plane, Tent, Cake, Users, Waves, Music } from 'lucide-react'

const useCases = [
  {
    icon: Plane,
    title: 'Du Lịch',
    desc: 'Loa nhỏ gọn, pin lâu, dễ mang theo trong mọi chuyến đi',
    gradient: 'from-cyan-500 to-purple-600',
  },
  {
    icon: Tent,
    title: 'Cắm Trại',
    desc: 'Bass mạnh, chống nước, phù hợp ngoài trời',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Cake,
    title: 'Sinh Nhật',
    desc: 'LED đổi màu, karaoke, tạo không khí party',
    gradient: 'from-pink-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Team Building',
    desc: 'Công suất lớn, phù hợp sự kiện nhóm đông',
    gradient: 'from-cyan-500 to-pink-600',
  },
  {
    icon: Waves,
    title: 'Bãi Biển',
    desc: 'Chống nước IPX7, pin lâu, âm thanh mạnh',
    gradient: 'from-purple-500 to-cyan-500',
  },
]

export default function UseCaseSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Music className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Ứng Dụng</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Phù Hợp Cho Mọi Sự Kiện
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Loa kéo JBL chính hãng - đồng hành cùng bạn trong mọi khoảnh khắc
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{useCase.desc}</p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
