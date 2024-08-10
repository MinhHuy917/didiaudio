import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'
import { loadCaseStudies } from '@/lib/mdx'

type CampLocation = {
  name: string
  icon: string
  colorClass: string
}

const campLocations: CampLocation[] = [
  { name: 'Bãi biển Sơn Trà', icon: '🏖️', colorClass: 'text-blue-500' },
  { name: 'Bãi Rạng', icon: '🏝️', colorClass: 'text-blue-500' },
  { name: 'Suối Lương', icon: '🌊', colorClass: 'text-blue-500' },
  { name: 'Bán đảo Sơn Trà', icon: '🌲', colorClass: 'text-green-500' },
  { name: 'Cù Lao Chàm', icon: '🛶', colorClass: 'text-blue-500' },
  { name: 'Hồ Hòa Trung', icon: '🚣‍♂️', colorClass: 'text-blue-500' },
  {
    name: 'Khu du lịch sinh thái Yên Retreat',
    icon: '🌿',
    colorClass: 'text-green-500',
  },
  { name: 'Rạn Nam Ô', icon: '🌅', colorClass: 'text-orange-500' },
  { name: 'Công viên Biển Đông', icon: '🐚', colorClass: 'text-blue-500' },
  { name: 'Bãi Bụt', icon: '🏞️', colorClass: 'text-green-500' },
  { name: 'Ghềnh Bàng', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: 'Đèo Hải Vân', icon: '🛤️', colorClass: 'text-red-500' },
  { name: 'Bãi Chuối', icon: '🌺', colorClass: 'text-orange-500' },
  { name: 'Hồ Phú Ninh', icon: '🏞️', colorClass: 'text-green-500' },
  { name: 'Làng Vân', icon: '🏖️', colorClass: 'text-blue-500' },
  { name: 'Suối Đá', icon: '🏞️', colorClass: 'text-blue-500' },
  { name: 'Bãi Bắc', icon: '🏝️', colorClass: 'text-blue-500' },
  { name: 'Đèo Le', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: 'Núi Bà Nà', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: 'Rừng Thần Tài', icon: '🌲', colorClass: 'text-green-500' },
]

export const metadata: Metadata = {
  title: 'Địa điểm cắm trại',
  description: 'Những Nơi Cắm Trại Được Yêu Thích Nhất',
}

export default async function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Địa điểm cắm trại"
        title="Những Nơi Cắm Trại Được Yêu Thích Nhất"
      >
        <p>
          Đà Nẵng, Quảng Nam, và Huế là thiên đường cắm trại với cảnh đẹp thiên
          nhiên tuyệt vời. 🌿 Tại đây, bạn có thể trải nghiệm biển hoang sơ,
          rừng núi xanh mát, và không khí trong lành. 🏕️ Những địa điểm này sẽ
          mang đến những khoảnh khắc thư giãn và kỷ niệm khó quên! ✨
        </p>
      </PageIntro>

      <div className="mx-auto mt-20 max-w-4xl rounded-lg bg-gray-100 p-6 shadow-lg md:mt-36 dark:bg-gray-900">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-gray-100">
          Top 20 Địa Điểm Cắm Trại Lý Tưởng ở Đà Nẵng
        </h2>
        <ul className="list-none space-y-4">
          {campLocations.map((location, index) => (
            <li
              key={index}
              className="flex items-center rounded-lg bg-white p-4 shadow-md dark:bg-gray-800"
            >
              <span className={`mr-4 text-lg ${location.colorClass}`}>
                {location.icon}
              </span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {location.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
