'use client'

import { ChevronRight } from 'lucide-react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import reviewanh1 from '/src/images/review/1.jpg'
import reviewanh2 from '/src/images/review/2.jpg'
import reviewanh3 from '/src/images/review/3.jpg'
import reviewanh4 from '/src/images/review/4.jpg'
import reviewanh5 from '/src/images/review/5.jpg'
import reviewanh6 from '/src/images/review/6.jpg'
import reviewanh7 from '/src/images/review/7.jpg'
import reviewanh8 from '/src/images/review/8.jpg'
import reviewanh9 from '/src/images/review/9.jpg'
import reviewanh10 from '/src/images/review/10.jpg'
import reviewanh11 from '/src/images/review/11.jpg'


const reviews = [
  {
    name: 'Linh Trần Thuý Hạnh',
    comment: 'Lều sạch sẽ thơm, lên hình sống ảo đẹp lúm mọi người, a chủ support nhiệt tình, sẽ ủng hộ lần tới',
    image: reviewanh1, 
  },
  {
    name: 'Thao Le',
    comment: 'Gíá cả ok, chất lượng tốt',
    image: reviewanh2, 
  },
  {
    name: ' Trình Flute',
    comment: 'Set đồ đẹp, shop nhiệt tình chu đáo.',
    image: reviewanh3, 
  },
  {
    name: 'Oanh Phạm Hoàng',
    comment: 'Chủ shop nhiệt tình, dễ thương. Lều xinh, chất lượng',
    image: reviewanh4, 
  },
  {
    name: ' Mạnh Nguyễn Huy',
    comment: 'Dịch vụ chu đáo, nhiệt tình',
    image: reviewanh5, 
  },
  {
    name: 'Phương Anh Lê',
    comment: 'Anh chủ dễ thương, nhiệt tình, có tâm',
    image: reviewanh6, 
  },
  {
    name: 'Anh Hiền',
    comment: 'Lều 6 rất to và sạch sẽ, check-in đẹp',
    image: reviewanh7, 
  },
  {
    name: ' Loan Trần',
    comment: 'Anh chủ nhiệt tình, lều sạch chất lượng ok',
    image: reviewanh8, 
  },

  {
    name: 'Khuyên Phạm',
    comment: 'Lều sạch, giá rẻ,nhiệt tình',
    image: reviewanh9, 
  },
  {
    name: 'Anh Đức Nguyễn',
    comment: 'Giá thuê rẻ, đồ tốt, đáng để thuê',
    image: reviewanh10, 
  },
  {
    name: ' Luân Nguyễn',
    comment: 'Lều xịn và đẹp, shop tâm lí tặng thêm cả gối và tấm cách nhiệt. Anh chủ hỗ trợ nhiệt tình. Nên thuê nha mọi người',
    image: reviewanh11, 
  },
 

]




export default function Testimonials() {

  return (
    <section className="py-20 px-6 sm:px-12 bg-[#F9FAFB] relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1F3329] mb-14">
        Cảm nhận thực tế từ khách hàng
        </h2>

        <div className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory px-1 sm:px-2 hide-scrollbar">
          <div className="flex gap-6 sm:gap-8">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="snap-start min-w-[300px] max-w-sm flex-shrink-0 bg-white shadow-lg rounded-2xl p-2 lg:p-6 border hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={r.image}
                  alt={`Đánh giá của ${r.name}`}
                  width={300}
                  height={208}
                  className="rounded-lg mb-4 w-full h-[320px] lg:h-52 object-cover object-top border border-gray-200"
                />
                <p className="text-gray-800 italic text-base leading-relaxed">“{r.comment}”</p>
                <p className="mt-3 text-right font-semibold text-[#1F3329]">– {r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

        <motion.div
          className="absolute right-6 top-[50%] translate-y-[-50%] z-10 text-[#1F3329] opacity-70"
          animate={{ x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" />


        </motion.div>
    </section>
  )
}


