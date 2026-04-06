'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Calendar, CheckCircle2, ChevronDown, Clock3, Headphones, Phone, ShieldCheck, Sparkles, Truck, User, Zap } from 'lucide-react'

import { products } from '@/data/products'
import { articles } from '@/data/blog'

type BlogCategory = 'Tất cả' | 'Kinh nghiệm' | 'Bảng giá' | 'Setup'

const useCases = [
  'Du lịch',
  'Cắm trại',
  'Sinh nhật',
  'Team building',
  'Bãi biển',
]

const reviewData = [
  {
    name: 'Hoàng Minh',
    role: 'Team Leader',
    text: 'Đặt 1 cuộc gọi là có loa trong 40 phút. Âm thanh sạch, pin bền, nhân viên setup rất có tâm.',
  },
  {
    name: 'Trà My',
    role: 'Event Planner',
    text: 'Giao đúng giờ, hỗ trợ test mic trước sự kiện. Trải nghiệm chuyên nghiệp như thuê dịch vụ premium.',
  },
  {
    name: 'Ngọc Hà',
    role: 'Khách du lịch',
    text: 'Book qua điện thoại siêu nhanh, không rườm rà. Loa đẹp và mạnh hơn kỳ vọng.',
  },
]

const faqData = [
  {
    q: 'Bao lâu thì giao loa tại Đà Nẵng?',
    a: 'Thông thường 30–60 phút trong nội thành, tùy khung giờ và khu vực.',
  },
  {
    q: 'Có hỗ trợ setup miễn phí không?',
    a: 'Có. Đội ngũ sẽ hỗ trợ kết nối mic, Bluetooth và tinh chỉnh nhanh trước khi bàn giao.',
  },
  {
    q: 'Thuê theo ngày thứ 2 có ưu đãi không?',
    a: 'Có, nhiều model đang áp dụng mức giảm 50% từ ngày thuê thứ 2.',
  },
]

function inferCategory(title: string): BlogCategory {
  if (title.toLowerCase().includes('bảng giá')) return 'Bảng giá'
  if (title.toLowerCase().includes('setup')) return 'Setup'
  return 'Kinh nghiệm'
}

export default function PremiumLanding() {
  const [bookingForm, setBookingForm] = useState({
    productId: products[0]?.id ?? '',
    rentalDate: '',
    phone: '',
  })
  const [blogCategory, setBlogCategory] = useState<BlogCategory>('Tất cả')
  const [openFaq, setOpenFaq] = useState(0)

  const filteredArticles = useMemo(() => {
    const top = articles.slice(0, 9)
    if (blogCategory === 'Tất cả') return top
    return top.filter((item) => inferCategory(item.title) === blogCategory)
  }, [blogCategory])

  const submitQuickBooking = () => {
    const product = products.find((item) => item.id === bookingForm.productId)
    const message = encodeURIComponent(
      `Xin chào ĐiDi Audio, mình muốn đặt nhanh:\n- Loa: ${product?.name ?? ''}\n- Ngày thuê: ${bookingForm.rentalDate || 'Chưa chọn'}\n- SĐT: ${bookingForm.phone || 'Chưa nhập'}`,
    )
    window.open(`https://zalo.me/0339197917?text=${message}`, '_blank')
  }

  return (
    <div className="bg-[#0b0f14] text-white">
      <section className="relative overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute top-20 -left-16 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
              <Sparkles className="h-4 w-4" /> Premium Sound Rental
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Thuê loa JBL xịn tại Đà Nẵng
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              Nhanh – gọn – giá tốt – giao tận nơi. Trải nghiệm âm thanh cao cấp với quy trình đặt thuê siêu đơn giản.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#quick-booking" className="rounded-2xl bg-gradient-to-r from-[#ff6a00] to-[#ffb347] px-8 py-4 text-center text-base font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]">
                Thuê ngay
              </Link>
              <Link href="tel:0339197917" className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10">
                Gọi ngay
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
              {['⭐ 5.0', '1000+ khách', '30-60p giao'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-semibold text-slate-100 sm:text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-300">Audio Visualizer</p>
              <p className="text-xs text-orange-200">LIVE</p>
            </div>
            <div className="mb-8 flex h-44 items-end justify-center gap-1">
              {Array.from({ length: 36 }).map((_, index) => (
                <span
                  key={index}
                  className="w-1 rounded-full bg-gradient-to-t from-[#ff6a00] to-[#ffb347]"
                  style={{ height: `${20 + ((index * 17) % 90)}px` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">Bass mạnh</div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">Pin lâu</div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-3">Mic xịn</div>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-booking" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-orange-400/10 p-6 shadow-2xl shadow-orange-900/20 backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Zap className="h-5 w-5 text-orange-300" />
            <h2 className="text-2xl font-bold">Đặt nhanh trong 30 giây</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Chọn loại loa</span>
              <select
                value={bookingForm.productId}
                onChange={(e) => setBookingForm((prev) => ({ ...prev, productId: e.target.value }))}
                className="w-full rounded-xl border border-white/15 bg-[#111827] px-4 py-3 text-sm"
              >
                {products.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Ngày thuê</span>
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-[#111827] px-3 py-3">
                <Calendar className="h-4 w-4 text-orange-300" />
                <input
                  type="date"
                  value={bookingForm.rentalDate}
                  onChange={(e) => setBookingForm((prev) => ({ ...prev, rentalDate: e.target.value }))}
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Số điện thoại</span>
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-[#111827] px-3 py-3">
                <Phone className="h-4 w-4 text-orange-300" />
                <input
                  type="tel"
                  placeholder="Nhập SĐT"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm((prev) => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </label>
            <div className="flex items-end">
              <button onClick={submitQuickBooking} className="w-full rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ffb347] px-4 py-3 font-bold text-white transition hover:scale-[1.01]">
                Đặt nhanh
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black">Loa nổi bật</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item) => (
            <article key={item.id} className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-orange-300/40 hover:shadow-2xl hover:shadow-orange-900/20">
              <div className="mb-4 aspect-video overflow-hidden rounded-2xl bg-black/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-300">{item.catalogue}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-200">
                <Headphones className="h-4 w-4 text-orange-300" /> {item.price}k/ngày
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                <Clock3 className="h-4 w-4 text-orange-300" /> Ngày 2+: {Math.floor(item.price * 0.5)}k
              </div>
              <div className="mt-5 flex gap-2">
                <Link href={`/products/${item.id}`} className="flex-1 rounded-xl border border-white/20 px-4 py-2 text-center text-sm font-semibold hover:bg-white/10">Xem chi tiết</Link>
                <Link href="#quick-booking" className="flex-1 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ffb347] px-4 py-2 text-center text-sm font-bold text-white">Thuê ngay</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="usecases" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black">Ứng dụng thực tế</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {useCases.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm font-semibold text-slate-100 transition hover:border-orange-300/40 hover:bg-white/10">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black">Vì sao chọn DiDi Audio</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: ShieldCheck, title: 'JBL chính hãng', desc: 'Thiết bị chuẩn hãng, âm thanh ổn định.' },
            { icon: Truck, title: 'Giao nhanh', desc: '30–60 phút nội thành Đà Nẵng.' },
            { icon: CheckCircle2, title: 'Setup miễn phí', desc: 'Hỗ trợ kết nối và test nhanh tại chỗ.' },
            { icon: Phone, title: 'Hỗ trợ 24/7', desc: 'Có hotline hỗ trợ xuyên suốt buổi thuê.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ffb347] p-3">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black">Khách hàng nói gì</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reviewData.map((review) => (
            <article key={review.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ffb347] font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-200">“{review.text}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-black">Blog & kinh nghiệm</h2>
          <div className="flex flex-wrap gap-2">
            {(['Tất cả', 'Kinh nghiệm', 'Bảng giá', 'Setup'] as BlogCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setBlogCategory(category)}
                className={`rounded-full px-4 py-2 text-sm ${blogCategory === category ? 'bg-orange-500 text-white' : 'border border-white/20 text-slate-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link key={article.slug} href={`/${article.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4">
                <p className="mb-2 text-xs text-slate-400">{article.date}</p>
                <h3 className="line-clamp-2 text-lg font-bold">{article.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black">FAQ</h2>
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5">
              <button
                onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold">{item.q}</span>
                <ChevronDown className={`h-4 w-4 transition ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === index && <p className="px-5 pb-4 text-sm text-slate-300">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-200/20 bg-gradient-to-r from-[#1a1209] to-[#2a1b0f] p-8 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">Thuê loa ngay – có trong 30 phút</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">Nhắn nhanh để được tư vấn model phù hợp và báo giá tức thì.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="tel:0339197917" className="rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ffb347] px-6 py-3 font-bold text-white">Gọi ngay</Link>
            <Link href="https://zalo.me/0339197917" target="_blank" className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">Nhắn Zalo</Link>
          </div>
        </div>
      </section>

      <div className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-2xl border border-white/20 bg-black/70 p-2 backdrop-blur lg:hidden">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link href="tel:0339197917" className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-3 font-semibold"><Phone className="h-4 w-4" /> Gọi ngay</Link>
          <Link href="#quick-booking" className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ffb347] px-3 py-3 font-bold text-white"><User className="h-4 w-4" /> Thuê ngay</Link>
        </div>
      </div>
    </div>
  )
}
