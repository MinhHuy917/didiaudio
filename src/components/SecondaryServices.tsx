'use client'

import { Code, Globe, LineChart } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Bán Source Code',
    description: 'Cung cấp mã nguồn web chất lượng, tối ưu.',
  },
  {
    icon: Globe,
    title: 'Thiết Kế Website',
    description: 'Thiết kế giao diện đẹp, chuẩn SEO, chuẩn mobile.',
  },
  {
    icon: LineChart,
    title: 'Dịch Vụ SEO',
    description: 'Tối ưu hóa công cụ tìm kiếm, tăng thứ hạng.',
  },
]

export default function SecondaryServices() {
  return (
    <section className="py-12 border-t border-white/5 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">
            Các dịch vụ khác của chúng tôi
          </p>
          <div className="w-12 h-0.5 bg-gray-800 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
