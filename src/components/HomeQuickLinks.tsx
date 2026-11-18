import Link from 'next/link'
import { BookOpen, PlayCircle, PartyPopper, ArrowUpRight } from 'lucide-react'
import dynamic from 'next/dynamic'
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const card = 'rounded-2xl border border-white/10 bg-white/[0.03] p-5'
const link =
  'group flex min-h-11 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan-400/50 hover:bg-cyan-500/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300'

export function HomeResources() {
  return (
    <section
      aria-label="Video và hướng dẫn"
      className="mx-auto grid max-w-6xl gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6"
    >
      {[
        {
          title: 'Video thực tế JBL 320',
          subtitle: 'Nghe thử · Karaoke · Trải nghiệm',
          href: '/video-jbl-partybox-320',
          Icon: PlayCircle,
        },
        {
          title: 'Hướng dẫn sử dụng',
          subtitle: 'Bluetooth · Micro · Xử lý lỗi',
          href: '/huong-dan-su-dung-jbl-partybox-320',
          Icon: BookOpen,
        },
      ].map(({ title, subtitle, href, Icon }) => (
        <Link key={href} href={href} className={link}>
          <Icon aria-hidden="true" className="h-8 w-8 shrink-0 text-cyan-300" />
          <div className="flex-1">
            <h2 className="font-bold">{title}</h2>
            <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
          </div>
          <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-cyan-300" />
        </Link>
      ))}
    </section>
  )
}

export function HomeExplore({
  articles,
}: {
  articles: { slug: string; title: string }[]
}) {
  return (
    <section
      aria-label="Khám phá thêm"
      className="mx-auto grid max-w-6xl items-start gap-3 px-4 py-6 sm:px-6 lg:grid-cols-3"
    >
      <div className={card}>
        <PartyPopper
          aria-hidden="true"
          className="mb-3 h-6 w-6 text-cyan-300"
        />
        <h2 className="font-bold">Phù hợp cho buổi vui của bạn</h2>
        <p className="mt-3 text-sm leading-7 text-gray-300">
          Sinh nhật · Karaoke · Cắm trại · Team building
        </p>
        <p className="mt-2 text-xs leading-5 text-gray-400">
          Trao đổi địa điểm và nhu cầu để được tư vấn trước khi thuê.
        </p>
      </div>
      <details id="blog" className={`${card} scroll-mt-28`}>
        <summary className="min-h-11 cursor-pointer font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
          Blog & kinh nghiệm thuê loa
        </summary>
        <ul className="mt-3 space-y-3">
          {articles.slice(0, 3).map((a) => (
            <li key={a.slug}>
              <Link
                className="inline-flex min-h-11 items-center text-sm text-cyan-200 underline underline-offset-4"
                href={`/${a.slug}`}
              >
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </details>
      <details className={card}>
        <summary className="min-h-11 cursor-pointer font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
          Đánh giá từ khách hàng
        </summary>
        <Testimonials />
      </details>
    </section>
  )
}
