import React from 'react'

export default function PromoBanner() {
  const promos = [
    {
      icon: '🎓',
      title: 'Ưu đãi sinh viên Đà Nẵng',
      desc: 'Giảm 10% cho sinh viên học Đà Nẵng (vui lòng nhắn shop, khi thuê luề).',
      tag: 'SALE',
    },
    {
      icon: '🚚',
      title: 'Miễn phí giao nhận 5km',
      desc: 'Áp dụng cho đơn hàng từ 500k trở lên (vui lòng đặt trước 1 ngày shop sắp xếp).',
      tag: 'NEW',
    },
    {
      icon: '🛏️',
      title: 'Tặng gối hơi miễn phí',
      desc: 'Đơn hàng từ 300k trở lên được tặng kèm gối hơi tiện lợi khi thuê lều cắm trại.',
      tag: 'GIFT',
    },
    {
      icon: '🎪',
      title: 'Không phụ thu cuối tuần & lễ Tết',
      desc: 'Thứ 7, Chủ nhật, ngày lễ và Tết đều không tính phụ thu. Nên đặt trước để giữ lều.',
      tag: 'FREE',
    },
    {
      icon: '🔥',
      title: 'Hỗ trợ ship gấp khi cần',
      desc: 'Nếu khách cần gấp, chúng tôi có thể hỗ trợ đặt giùm grab/now để ship lều nhanh chóng (phí ship khách tự chịu).',
      tag: 'HOT',
    },
    {
      icon: '⛺️',
      title: 'Setup & trang trí lều (có phí)',
      desc: 'Nhận dựng và trang trí theo concept yêu cầu. Chi phí tuỳ địa điểm & mức độ, sẽ thoả thuận trước với khách.',
      tag: 'HOT',
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {promos.map((p, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 p-4 sm:p-6 shadow hover:shadow-lg hover:-translate-y-1 transition"
          >
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-md sm:rounded-bl-lg shadow">
              {p.tag}
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="text-3xl sm:text-5xl">{p.icon}</div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#D1410C]">
                  {p.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
