'use client'

import { Truck, ShieldCheck, Zap, Star, Users, Heart, Smile, Music } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Clients',
    gradient: 'from-cyan-400 to-purple-500',
  },
  {
    icon: Star,
    value: '5.0',
    label: 'Rating',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smile,
    value: '100%',
    label: 'Satisfaction',
    gradient: 'from-pink-500 to-cyan-400',
  },
  {
    icon: Heart,
    value: '30-60m',
    label: 'Delivery',
    gradient: 'from-cyan-500 to-pink-500',
  },
]

export default function InternationalWhyUs({ content }: { content: any }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return Truck;
      case 'ShieldCheck': return ShieldCheck;
      case 'Zap': return Zap;
      default: return Star;
    }
  }

  const gradients = [
    'from-cyan-500 to-purple-600',
    'from-purple-500 to-pink-600',
    'from-pink-500 to-cyan-500'
  ]

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            <span className="text-cyan-400 font-semibold">{content.title}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ĐiĐi Audio
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Features */}
          <div className="space-y-6">
            {content.items.map((item: any, i: number) => {
              const Icon = getIcon(item.icon)
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradients[i % gradients.length]} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg mb-1">{item.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
