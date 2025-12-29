'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Truck, Gift, Music } from 'lucide-react'

export default function PromoBanner() {
  const promos = [
    {
      icon: GraduationCap,
      title: 'Ưu đãi sinh viên Đà Nẵng',
      desc: 'Giảm 10% cho sinh viên',
      tag: 'SALE',
      gradient: 'from-cyan-500 to-purple-600',
    },
    {
      icon: Truck,
      title: 'Có giao hàng tận nơi',
      desc: 'Miễn phí giao trong bán kính 5km từ 43 Tống Duy Tân - Ngoài 5km: hỗ trợ 1 chiều, chiều còn lại tính phí theo Grab Express.',
      tag: 'SUPPORT',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Gift,
      title: 'Không phụ thu mùa lễ',
      desc: 'Ngày lễ không tính phụ thu',
      tag: 'FREE',
      gradient: 'from-pink-500 to-cyan-500',
    },
  ]

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {promos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
          >
            {/* Ribbon */}
            <div className={`absolute top-0 right-0 bg-gradient-to-r ${p.gradient} text-white text-xs font-bold px-3 py-1 rounded-bl-2xl shadow-lg`}>
              {p.tag}
            </div>

            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${p.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>

            {/* Hover Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
