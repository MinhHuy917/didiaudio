import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 pb-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-[#0a3257]">Liên hệ thuê loa kéo Đà Nẵng</h1>
      <p className="mt-2 text-slate-600">Bên mình hỗ trợ nhanh cho khách địa phương và khách du lịch.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="tel:0339197917" className="rounded-2xl bg-[#16a34a] p-5 text-white">
          <p className="text-sm">Gọi trực tiếp</p>
          <p className="text-xl font-bold">0339 197 917</p>
        </Link>
        <Link href="https://zalo.me/0339197917" target="_blank" className="rounded-2xl bg-[#0f7ec7] p-5 text-white">
          <p className="text-sm">Zalo</p>
          <p className="text-xl font-bold">Chat trong 1 phút</p>
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-[#dceeff] bg-white">
        <iframe
          title="Google map Đà Nẵng"
          src="https://maps.google.com/maps?q=Da%20Nang&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-80 w-full"
          loading="lazy"
        />
      </div>
    </main>
  )
}
