'use client'

import { CheckCircle, Star, Users, Heart, Smile } from 'lucide-react'
import { motion } from 'framer-motion'

const featureList = [
  {
    title: 'Điểm địa trong thành phố Đà Nẵng',
    desc: 'Vị trí thuê thuận tiện đi Hoà Bắc, Hải Vân, Sơn Trà.',
  },
  {
    title: 'Lều trại, đèn, phụ kiện đầy đủ',
    desc: 'Không cần mang theo gì – mọi thứ đã sẵn sàng.',
  },
  {
    title: 'Combo cho mọi nhóm',
    desc: 'Cặp đôi, gia đình, nhóm bạn – có đủ lựa chọn.',
  },
  {
    title: 'Hỗ trợ dựng trại',
    desc: 'Set-up nhanh chóng, hỗ trợ tận nơi nếu cần.',
  },
  {
    title: 'Tư vấn địa điểm miễn phí',
    desc: 'Cập nhật các địa điểm cắm trại miễn phí.',
  },
]

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'Khách Hàng Tin Tưởng',
  },
  {
    icon: Star,
    value: '5.0',
    label: 'Đánh Giá Trung Bình',
  },
  {
    icon: Smile,
    value: '100%',
    label: 'Hài Lòng',
  },
  {
    icon: Heart,
    value: '7+',
    label: 'Năm Kinh Nghiệm',
  },
]

export default function WhyUs() {
  return (
    <section className="pb-24 pt-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Features */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1F3329] leading-snug">
            Tại Sao Chọn <span className="text-green-600">ĐiĐi Camping?</span>
          </h2>
          <ul className="space-y-5 mt-6">
            {featureList.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#1F3329] text-lg">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Stats */}
        <div className="grid grid-cols-2 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 border border-green-200 rounded-full w-fit mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-[#1F3329]">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
