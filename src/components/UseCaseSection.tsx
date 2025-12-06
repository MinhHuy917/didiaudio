'use client'

import { motion } from 'framer-motion'
import { Plane, Tent, Cake, Users, Waves } from 'lucide-react'

const useCases = [
  {
    icon: Plane,
    title: 'Du Lịch',
    desc: 'Loa nhỏ gọn, pin lâu, dễ mang theo trong mọi chuyến đi',
    gradient: 'from-audio-electricBlue to-audio-neonPurple',
  },
  {
    icon: Tent,
    title: 'Cắm Trại',
    desc: 'Bass mạnh, chống nước, phù hợp ngoài trời',
    gradient: 'from-audio-neonPurple to-audio-neonOrange',
  },
  {
    icon: Cake,
    title: 'Sinh Nhật',
    desc: 'LED đổi màu, karaoke, tạo không khí party',
    gradient: 'from-audio-neonOrange to-audio-electricBlue',
  },
  {
    icon: Users,
    title: 'Team Building',
    desc: 'Công suất lớn, phù hợp sự kiện nhóm đông',
    gradient: 'from-audio-electricBlue to-audio-neonOrange',
  },
  {
    icon: Waves,
    title: 'Bãi Biển',
    desc: 'Chống nước IPX7, pin lâu, âm thanh mạnh',
    gradient: 'from-audio-neonPurple to-audio-electricBlue',
  },
]

export default function UseCaseSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-audio-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-audio-neonOrange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-audio-electricBlue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-audio-electricBlue via-audio-neonPurple to-audio-neonOrange bg-clip-text text-transparent">
              Phù Hợp Cho Mọi Sự Kiện
            </span>
          </h2>
          <p className="text-audio-textMuted text-lg max-w-2xl mx-auto">
            Loa kéo JBL chính hãng - đồng hành cùng bạn trong mọi khoảnh khắc
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-2xl p-6 hover:border-audio-electricBlue/40 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-audio-textMuted leading-relaxed">{useCase.desc}</p>

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

