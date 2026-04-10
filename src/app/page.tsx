import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock3, MapPinned, ShieldCheck, Sparkles } from 'lucide-react'

import { FAQ, FAQSchema } from '@/components/FAQ'
import MenuContact from '@/components/MenuContact'
import ProductList from '@/components/ProductTable'
import Testimonials from '@/components/Testimonials'

import heroImage from '@/images/img/img3.jpg'
import beachImage from '@/images/img/img4.png'
import campingImage from '@/images/img/img5.png'

export const metadata: Metadata = {
  title: 'Thuê loa kéo Đà Nẵng - Giao tận nơi nhanh, giá rõ ràng | ĐiĐi Audio',
  description:
    'Dịch vụ thuê loa kéo Đà Nẵng giao tận nơi 30 phút. Giá rõ ràng, hỗ trợ nhanh qua Zalo/điện thoại, phù hợp tiệc gia đình, du lịch, cắm trại.',
}

const serviceCards = [
  {
    title: 'Thuê theo giờ / theo ngày',
    description: 'Đi tiệc ngắn hay thuê cả chuyến du lịch đều có gói phù hợp, báo giá trước khi giao.',
  },
  {
    title: 'Combo loa + mic + đèn',
    description: 'Nhận nguyên bộ để dùng liền, không cần tự ghép thiết bị.',
  },
  {
    title: 'Hỗ trợ tận nơi tại Đà Nẵng',
    description: 'Shop hướng dẫn kết nối nhanh, chưa biết dùng vẫn hát được trong vài phút.',
  },
]

const trustPoints = [
  {
    icon: Clock3,
    title: 'Giao nhanh 30 phút',
    description: 'Ưu tiên khu vực trung tâm và bãi biển du lịch.',
  },
  {
    icon: ShieldCheck,
    title: 'Giá rõ ràng, dễ thuê',
    description: 'Báo giá trước, không phát sinh phí mập mờ.',
  },
  {
    icon: MapPinned,
    title: 'Phục vụ đúng địa phương',
    description: 'Nắm địa điểm Đà Nẵng, giao tận homestay - khách sạn - bãi biển.',
  },
]

export default function Home() {
  return (
    <>
      <main className="bg-[#f8fbff] text-slate-900 pb-20 md:pb-0">
        <section className="mx-auto max-w-6xl px-4 pt-6 pb-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#d9f0ff] px-4 py-1.5 text-sm font-semibold text-[#0d6ba8]">
                <Sparkles className="h-4 w-4" /> Local service tại Đà Nẵng
              </span>
              <h1 className="text-3xl font-black leading-tight text-[#0a3257] sm:text-4xl lg:text-5xl">
                Thuê loa kéo Đà Nẵng
                <br />
                Giao tận nơi trong 30 phút
              </h1>
              <p className="max-w-xl text-base text-slate-600 sm:text-lg">
                Thuê nhanh - không rườm rà. Phù hợp tiệc gia đình, sinh nhật, team building, camping và party bãi biển Mỹ Khê.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="tel:0339197917"
                  className="rounded-xl bg-[#ff8a00] px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-[#f07b00]"
                >
                  Thuê ngay
                </Link>
                <Link
                  href="https://zalo.me/0339197917"
                  target="_blank"
                  className="rounded-xl border border-[#0f7ec7] bg-white px-6 py-3 text-base font-bold text-[#0f7ec7] transition hover:bg-[#e8f5ff]"
                >
                  Zalo ngay
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative h-56 overflow-hidden rounded-2xl sm:h-64 sm:col-span-2">
                <Image src={heroImage} alt="Thuê loa kéo đi biển tại Đà Nẵng" fill className="object-cover" priority />
              </div>
              <div className="relative h-44 overflow-hidden rounded-2xl sm:h-48">
                <Image src={beachImage} alt="Loa kéo tại bãi biển Mỹ Khê" fill className="object-cover" />
              </div>
              <div className="relative h-44 overflow-hidden rounded-2xl sm:h-48">
                <Image src={campingImage} alt="Loa kéo cho cắm trại và picnic" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-[#0a3257]">Dịch vụ dễ chọn - thuê là có loa</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {serviceCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#dceeff] bg-white p-5 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-[#0c4472]">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-[#0a3257]">Vì sao khách địa phương hay khách du lịch đều chọn ĐiĐi Audio?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-[#0f7ec7] p-5 text-white">
                <point.icon className="mb-3 h-6 w-6" />
                <h3 className="mb-2 text-lg font-bold">{point.title}</h3>
                <p className="text-sm text-blue-50">{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        <ProductList />
        <Testimonials />

        <section id="contact" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#dceeff] bg-white p-5 sm:p-8">
            <h2 className="text-2xl font-bold text-[#0a3257]">Liên hệ thuê loa tại Đà Nẵng</h2>
            <p className="mt-2 text-slate-600">Gọi nhanh, nhắn Zalo hoặc xem đường đi trên Google Map.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="tel:0339197917" className="rounded-xl bg-[#16a34a] px-5 py-3 font-bold text-white">
                Gọi 0339 197 917
              </Link>
              <Link href="https://zalo.me/0339197917" target="_blank" className="rounded-xl bg-[#0f7ec7] px-5 py-3 font-bold text-white">
                Chat Zalo
              </Link>
              <Link
                href="https://maps.google.com/?q=Da+Nang"
                target="_blank"
                className="rounded-xl border border-[#0f7ec7] px-5 py-3 font-bold text-[#0f7ec7]"
              >
                Xem Google Map
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FAQ />
      <FAQSchema />
      <MenuContact />
    </>
  )
}
