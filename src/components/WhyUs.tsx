'use client'

import { CheckCircle, Star, Users, Heart, Smile, MapPin, Package, Headphones, Truck, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const featureList = [
  {
    icon: MapPin,
    title: 'JBL Chính Hãng',
    desc: '100% loa JBL chính hãng, chất lượng đảm bảo, bảo hành đầy đủ.',
    color: 'from-audio-electricBlue to-audio-neonPurple',
  },
  {
    icon: Truck,
    title: 'Giao 30-60 Phút',
    desc: 'Giao hàng siêu nhanh trong nội thành Đà Nẵng, setup miễn phí.',
    color: 'from-audio-neonPurple to-audio-neonOrange',
  },
  {
    icon: Headphones,
    title: 'Hỗ Trợ Kỹ Thuật',
    desc: 'Tư vấn chọn loa phù hợp, hỗ trợ setup và xử lý sự cố 24/7.',
    color: 'from-audio-neonOrange to-audio-electricBlue',
  },
  {
    icon: Package,
    title: 'Phụ Kiện Đầy Đủ',
    desc: 'Micro, dây kết nối, sạc pin - mọi thứ đã sẵn sàng.',
    color: 'from-audio-electricBlue to-audio-neonOrange',
  },
  {
    icon: MessageCircle,
    title: 'Giá Cả Minh Bạch',
    desc: 'Bảng giá rõ ràng, không phụ thu ẩn, ưu đãi cho sinh viên.',
    color: 'from-audio-neonPurple to-audio-electricBlue',
  },
]

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Khách Hàng',
    gradient: 'from-audio-electricBlue to-audio-neonPurple',
  },
  {
    icon: Star,
    value: '5.0',
    label: 'Đánh Giá',
    gradient: 'from-audio-neonPurple to-audio-neonOrange',
  },
  {
    icon: Smile,
    value: '100%',
    label: 'Hài Lòng',
    gradient: 'from-audio-neonOrange to-audio-electricBlue',
  },
  {
    icon: Heart,
    value: '30-60p',
    label: 'Giao Hàng',
    gradient: 'from-audio-electricBlue to-audio-neonOrange',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-24 px-6 sm:px-12 bg-audio-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-audio-electricBlue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-audio-neonPurple/5 rounded-full blur-3xl" />
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
            Tại Sao Chọn{' '}
            <span className="bg-gradient-to-r from-audio-electricBlue via-audio-neonPurple to-audio-neonOrange bg-clip-text text-transparent">
              ĐiĐi Audio?
            </span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
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
                  <p className="text-white text-sm leading-relaxed">{item.desc}</p>
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
                className="relative bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-2xl p-6 text-center hover:border-audio-electricBlue/40 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </p>
                <p className="text-sm text-white">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
