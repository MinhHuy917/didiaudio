import Link from 'next/link'
import { CircleCheck } from 'lucide-react'

export function RentalOffer({
  product,
}: {
  product: { name: string; id: string; price: number }
}) {
  const name = product.name.replace(/^Loa\s+/i, '')

  return (
    <div className="mx-auto mt-6 max-w-xl rounded-3xl bg-[#0b2a34] p-5 text-gray-100 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-200 sm:text-sm">
        Thuê loa kéo JBL
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
        {name}
      </h3>
      <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
        <strong className="text-4xl font-bold tracking-tight text-cyan-300">
          {new Intl.NumberFormat('vi-VN').format(product.price * 1000)}đ
        </strong>
        <span className="text-base text-gray-300">/ ngày</span>
      </p>
      <p className="mt-5 text-base font-medium">
        Bộ loa karaoke, tiệc tùng gồm:
      </p>
      <ul className="mt-4 space-y-3 text-sm leading-6 sm:text-base">
        {[`1 loa ${name}`, '2 micro không dây', 'Hỗ trợ lắp đặt tận nơi'].map(
          (item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CircleCheck
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300"
              />
              <span>{item}</span>
            </li>
          ),
        )}
      </ul>
      <p className="mt-4 text-xs leading-6 text-gray-400 sm:text-sm">
        Công suất 240W · Pin tối đa 18 giờ
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
        <Link
          href={`/products/${product.id}#dat-thue`}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-700 px-3 py-3 text-center text-sm font-semibold text-white hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:text-base"
        >
          Đặt thuê loa
        </Link>
        <a
          href="https://zalo.me/0339197917"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-3 py-3 text-center text-sm font-semibold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:text-base"
        >
          Nhắn tin tư vấn
        </a>
      </div>
    </div>
  )
}
