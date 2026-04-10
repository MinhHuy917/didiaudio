'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import reviewanh1 from '/src/images/review/1.jpg'
import reviewanh4 from '/src/images/review/4.jpg'
import reviewanh8 from '/src/images/review/8.jpg'

const reviews = [
  {
    name: 'Linh Trần Thuý Hạnh',
    comment: 'Loa sạch, pin ổn, giao nhanh đúng giờ. Bữa tiệc ngoài trời chạy mượt.',
    image: reviewanh1,
  },
  {
    name: 'Oanh Phạm Hoàng',
    comment: 'Mình thuê đi camping, shop hướng dẫn kết nối rất dễ hiểu. Giá hợp lý.',
    image: reviewanh4,
  },
  {
    name: 'Loan Trần',
    comment: 'Nhắn Zalo là có loa liền. Anh chủ hỗ trợ tận nơi rất nhiệt tình.',
    image: reviewanh8,
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-[#0a3257] sm:text-3xl">Khách đã thuê nói gì?</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-2xl border border-[#dceeff] bg-white p-5">
            <div className="mb-3 flex items-center gap-1 text-[#ff8a00]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-6 text-slate-700">“{review.comment}”</p>
            <div className="mt-4 flex items-center gap-3 border-t border-[#eaf4ff] pt-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={review.image} alt={review.name} fill className="object-cover" sizes="40px" />
              </div>
              <p className="text-sm font-semibold text-[#0a3257]">{review.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
