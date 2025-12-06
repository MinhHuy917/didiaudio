'use client'

import { CheckCircle, Star, Users, Heart, Smile, MapPin, Package, Headphones, Truck, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const featureList = [
  {
    icon: MapPin,
    title: 'Vị trí thuận tiện tại Đà Nẵng',
    desc: 'Cửa hàng nằm ngay trung tâm, dễ dàng đến lấy và trả loa.',
    color: 'from-music-purple to-music-pink',
  },
  {
    icon: Package,
    title: 'Loa kéo, micro, phụ kiện đầy đủ',
    desc: 'Không cần mang theo gì – mọi thiết bị âm thanh đã sẵn sàng.',
    color: 'from-music-pink to-music-cyan',
  },
  {
    icon: Headphones,
    title: 'Đa dạng loại loa cho mọi nhu cầu',
    desc: 'Tiệc nhỏ, sự kiện lớn, karaoke – có đủ lựa chọn.',
    color: 'from-music-cyan to-music-blue',
  },
  {
    icon: Truck,
    title: 'Hỗ trợ lắp đặt và vận chuyển',
    desc: 'Giao tận nơi, set-up nhanh chóng, hỗ trợ tận tình.',
    color: 'from-music-blue to-music-purple',
  },
  {
    icon: MessageCircle,
    title: 'Tư vấn thiết bị miễn phí',
    desc: 'Tư vấn chọn loa phù hợp với nhu cầu và không gian sự kiện.',
    color: 'from-music-purple to-music-cyan',
  },
]

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Khách Hàng',
    gradient: 'from-music-purple to-music-pink',
  },
  {
    icon: Star,
    value: '5.0',
    label: 'Đánh Giá',
    gradient: 'from-music-pink to-music-cyan',
  },
  {
    icon: Smile,
    value: '100%',
    label: 'Hài Lòng',
    gradient: 'from-music-cyan to-music-blue',
  },
  {
    icon: Heart,
    value: '7+',
    label: 'Năm Kinh Nghiệm',
    gradient: 'from-music-blue to-music-purple',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-24 px-6 sm:px-12 bg-music-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-music-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-music-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Tại Sao Chọn{' '}
            <span className="bg-gradient-to-r from-music-purple via-music-pink to-music-cyan bg-clip-text text-transparent">
              ĐiĐi Audio?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white text-lg mb-1">{item.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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
                className="relative bg-music-light/30 backdrop-blur-sm border border-music-purple/20 rounded-2xl p-6 text-center hover:border-music-purple/40 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
