'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
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
    comment: 'Loa chất lượng tốt, âm thanh rõ ràng, bass mạnh. Anh chủ support nhiệt tình, giao hàng nhanh. Sẽ ủng hộ lần tới!',
    image: reviewanh1,
    rating: 5,
  },
  {
    name: 'Thao Le',
    comment: 'Giá cả hợp lý, loa JBL chính hãng như mô tả. Phù hợp cho tiệc sinh nhật của mình.',
    image: reviewanh2,
    rating: 5,
  },
  {
    name: 'Trình Flute',
    comment: 'Loa karaoke công suất lớn, hát rất hay. Shop nhiệt tình chu đáo, setup giúp luôn.',
    image: reviewanh3,
    rating: 5,
  },
  {
    name: 'Oanh Phạm Hoàng',
    comment: 'Chủ shop nhiệt tình, dễ thương. Loa chất lượng tốt, pin lâu, phù hợp cắm trại.',
    image: reviewanh4,
    rating: 5,
  },
  {
    name: 'Mạnh Nguyễn Huy',
    comment: 'Dịch vụ chu đáo, nhiệt tình. Giao hàng đúng giờ, loa hoạt động tốt suốt buổi tiệc.',
    image: reviewanh5,
    rating: 5,
  },
  {
    name: 'Phương Anh Lê',
    comment: 'Anh chủ dễ thương, nhiệt tình, có tâm. Loa bluetooth kết nối ổn định, âm thanh hay.',
    image: reviewanh6,
    rating: 5,
  },
  {
    name: 'Anh Hiền',
    comment: 'Loa karaoke rất to và chất lượng, check-in đẹp. Phù hợp cho team building.',
    image: reviewanh7,
    rating: 5,
  },
  {
    name: 'Loan Trần',
    comment: 'Anh chủ nhiệt tình, loa sạch chất lượng ok. Giao nhanh trong 30 phút như hứa.',
    image: reviewanh8,
    rating: 5,
  },
  {
    name: 'Khuyên Phạm',
    comment: 'Loa sạch, giá rẻ, nhiệt tình. Pin dùng được cả ngày, phù hợp du lịch.',
    image: reviewanh9,
    rating: 5,
  },
  {
    name: 'Anh Đức Nguyễn',
    comment: 'Giá thuê rẻ, đồ tốt, đáng để thuê. Loa JBL chính hãng, âm thanh sống động.',
    image: reviewanh10,
    rating: 5,
  },
  {
    name: 'Luân Nguyễn',
    comment: 'Loa xịn và đẹp, shop tâm lí hỗ trợ setup. Anh chủ hỗ trợ nhiệt tình. Nên thuê nha mọi người!',
    image: reviewanh11,
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-audio-darker overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-audio-electricBlue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-audio-neonOrange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-audio-neonOrange fill-audio-neonOrange" />
            <span className="text-audio-electricBlue font-semibold">Đánh Giá Khách Hàng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-audio-electricBlue via-audio-neonPurple to-audio-neonOrange bg-clip-text text-transparent">
              Cảm Nhận Thực Tế
            </span>
          </h2>
          <p className="text-audio-textMuted text-sm sm:text-base lg:text-lg px-4">
            Hơn 1000+ khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {reviews.slice(0, 6).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-2xl p-6 hover:border-audio-electricBlue/40 hover:shadow-2xl hover:shadow-audio-electricBlue/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-12 h-12 text-audio-electricBlue" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 text-audio-neonOrange fill-audio-neonOrange"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-white text-sm leading-relaxed mb-4 relative z-10">
                &quot;{review.comment}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-audio-electricBlue/10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-audio-electricBlue/20 border border-audio-electricBlue/30">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-audio-textMuted text-xs">Khách hàng đã thuê</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Reviews Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 rounded-full text-audio-electricBlue hover:border-audio-electricBlue/40 transition-all cursor-pointer">
            <span className="text-sm font-semibold">Xem thêm {reviews.length - 6} đánh giá</span>
            <Star className="w-4 h-4 fill-audio-neonOrange text-audio-neonOrange" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
