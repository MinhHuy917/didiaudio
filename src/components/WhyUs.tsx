'use client'

import { CheckCircle, Star, Users, Heart, Smile, MapPin, Package, Headphones, Truck, MessageCircle, Music } from 'lucide-react'
import { motion } from 'framer-motion'

const featureList = [
  {
    icon: MapPin,
    title: 'JBL Chính Hãng',
    desc: '100% loa JBL chính hãng, chất lượng đảm bảo, bảo hành đầy đủ.',
    gradient: 'from-cyan-500 to-purple-600',
  },
  {
    icon: Truck,
    title: 'Giao 30-60 Phút',
    desc: 'Giao hàng siêu nhanh trong nội thành Đà Nẵng, setup miễn phí.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Headphones,
    title: 'Hỗ Trợ Kỹ Thuật',
    desc: 'Tư vấn chọn loa phù hợp, hỗ trợ setup và xử lý sự cố 24/7.',
    gradient: 'from-pink-500 to-cyan-500',
  },
  {
    icon: Package,
    title: 'Phụ Kiện Đầy Đủ',
    desc: 'Micro, dây kết nối, sạc pin - mọi thứ đã sẵn sàng.',
    gradient: 'from-cyan-500 to-pink-600',
  },
  {
    icon: MessageCircle,
    title: 'Giá Cả Minh Bạch',
    desc: 'Bảng giá rõ ràng, không phụ thu ẩn, ưu đãi cho sinh viên.',
    gradient: 'from-purple-500 to-cyan-500',
  },
]

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Khách Hàng',
    gradient: 'from-cyan-400 to-purple-500',
  },
  {
    icon: Star,
    value: '5.0',
    label: 'Đánh Giá',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smile,
    value: '100%',
    label: 'Hài Lòng',
    gradient: 'from-pink-500 to-cyan-400',
  },
  {
    icon: Heart,
    value: '30-60p',
    label: 'Giao Hàng',
    gradient: 'from-cyan-500 to-pink-500',
  },
]

export default function WhyUs() {
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
            <span className="text-cyan-400 font-semibold">Tại Sao Chọn Chúng Tôi</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Tại Sao Chọn{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ĐiĐi Audio?
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm âm thanh tốt nhất cho mọi sự kiện của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Features */}
          <div className="space-y-6">
            {featureList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-lg mb-1">{item.title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
