'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Truck, Gift } from 'lucide-react'

export default function PromoBanner() {
  const promos = [
    {
      icon: GraduationCap,
      title: 'Ưu đãi sinh viên Đà Nẵng',
      desc: 'Giảm 10% cho sinh viên',
      tag: 'SALE',
      gradient: 'from-audio-electricBlue to-audio-neonPurple',
    },
    {
      icon: Truck,
      title: 'Có giao hàng tận nơi',
      desc: 'Phí giao hàng tuỳ khoảng cách',
      tag: 'SUPPORT',
      gradient: 'from-audio-neonPurple to-audio-neonOrange',
    },
    {
      icon: Gift,
      title: 'Không phụ thu mùa lễ',
      desc: 'Ngày lễ không tính phụ thu',
      tag: 'FREE',
      gradient: 'from-audio-neonOrange to-audio-electricBlue',
    },
    
    // {
    //   icon: '⛺️',
    //   title: 'Setup & trang trí lều (có phí)',
    //   desc: 'Nhận dựng và trang trí theo concept yêu cầu.',
    //   tag: 'HOT',
    // },
  ]

  return (
    <section className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 sm:py-12 bg-audio-darker">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {promos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 p-6 hover:border-audio-electricBlue/40 hover:shadow-lg hover:shadow-audio-electricBlue/20 transition-all duration-300 group"
          >
            {/* Ribbon */}
            <div className={`absolute top-0 right-0 bg-gradient-to-r ${p.gradient} text-white text-xs font-bold px-3 py-1 rounded-bl-2xl shadow-lg`}>
              {p.tag}
            </div>

            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${p.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>

            {/* Hover Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
