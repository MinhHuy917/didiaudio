'use client'

import { motion } from 'framer-motion'
import { Plane, Tent, Cake, Users, Waves, Music } from 'lucide-react'

export default function InternationalUseCase({ content }: { content: any }) {
  const icons = [Waves, Cake, Tent, Users]
  const gradients = [
    'from-cyan-500 to-purple-600',
    'from-purple-500 to-pink-600',
    'from-pink-500 to-cyan-500',
    'from-cyan-500 to-pink-600'
  ]

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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
            <span className="text-cyan-400 font-semibold">{content.title}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {content.items.map((item: string, i: number) => {
            const Icon = icons[i % icons.length]
            const gradient = gradients[i % gradients.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">{item}</h3>
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
