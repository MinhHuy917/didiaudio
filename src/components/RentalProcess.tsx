import { CalendarDays, MessageCircle, Speaker } from 'lucide-react'
export function RentalProcess() {
  return (
    <section
      id="promos"
      aria-labelledby="rental-process-title"
      className="mx-auto max-w-6xl scroll-mt-28 px-4 py-8 sm:px-6"
    >
      <h2
        id="rental-process-title"
        className="mb-5 text-center text-2xl font-bold"
      >
        Thuê loa trong 3 bước
      </h2>
      <ol className="grid gap-3 sm:grid-cols-3">
        {[
          {
            Icon: CalendarDays,
            title: '1. Chọn ngày thuê',
            text: 'Chuẩn bị ngày, địa điểm và thời gian sử dụng.',
          },
          {
            Icon: MessageCircle,
            title: '2. Liên hệ xác nhận',
            text: 'Gọi 0339 197 917 hoặc nhắn Zalo để chốt thông tin.',
          },
          {
            Icon: Speaker,
            title: '3. Nhận loa & sử dụng',
            text: 'Thống nhất giao nhận, kiểm tra loa và phụ kiện.',
          },
        ].map(({ Icon, title, text }) => (
          <li
            key={title}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
          >
            <Icon
              aria-hidden="true"
              className="mt-1 h-6 w-6 shrink-0 text-cyan-300"
            />
            <div>
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-gray-400">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
