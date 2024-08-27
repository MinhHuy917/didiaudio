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
  { name: 'Bãi Đá Đen', icon: '🏝️', colorClass: 'text-blue-500' },
  { name: 'Suối Lương', icon: '🌊', colorClass: 'text-blue-500' },
  { name: 'Bán đảo Sơn Trà', icon: '🌲', colorClass: 'text-green-500' },
  { name: 'Đỉnh Bạch Mã', icon: '🛶', colorClass: 'text-blue-500' },
  { name: 'Hồ Hòa Trung', icon: '🚣‍♂️', colorClass: 'text-blue-500' },
  {
    name: '  Ốc Đảo Vạn Buồng',
    icon: '🌿',
    colorClass: 'text-green-500',
  },
  { name: 'Rạn Nam Ô', icon: '🌅', colorClass: 'text-orange-500' },
  { name: 'Sông cu đê Hoà Bắc', icon: '🐚', colorClass: 'text-blue-500' },
  { name: 'Suối mơ', icon: '🏞️', colorClass: 'text-green-500' },
  { name: 'Thác 5 tầng', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: 'Đỉnh Hải Vân', icon: '🛤️', colorClass: 'text-red-500' },
  { name: 'Bãi Chuối', icon: '🌺', colorClass: 'text-orange-500' },
  { name: 'Hồ Phú Ninh', icon: '🏞️', colorClass: 'text-green-500' },
  { name: 'Làng Vân', icon: '🏖️', colorClass: 'text-blue-500' },
  { name: 'Suối Mơ', icon: '🏞️', colorClass: 'text-blue-500' },
  { name: 'Bãi Bắc Hải Vân', icon: '🏝️', colorClass: 'text-blue-500' },
  { name: 'Mây Treo', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: 'Giếng trời', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: 'Đỉnh Hòa Vân', icon: '🌲', colorClass: 'text-green-500' },
  { name: '  Nóc takpo Nam Trà My ', icon: '🏞️', colorClass: 'text-green-500' },
  { name: 'Hồ Đồng Xanh Đồng Nghệ ', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: '  Cảng Tiên Sa Đà Nẵng', icon: '🌲', colorClass: 'text-green-500' },
  { name: 'Hồ Xanh Đà Nẵng', icon: '🏞️', colorClass: 'text-green-500' },
  { name: 'Đỉnh Quế', icon: '🌅', colorClass: 'text-orange-500' },
  { name: '  Hòn Kẽm Đá Dừng ', icon: '🏞️', colorClass: 'text-blue-500' },
  { name: 'Rừng thông Bồ Bồ', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: 'Bãi Cát Vàng Đà Nẵng', icon: '🌅', colorClass: 'text-orange-500' },
  { name: 'Cầu vòm Hải Vân', icon: '🏞️', colorClass: 'text-blue-500' },
  { name: 'Bãi thông Hải Vân ', icon: '🏝️', colorClass: 'text-blue-500' },
  { name: 'Nhà hoang Hải Vân', icon: '🌺', colorClass: 'text-orange-500' },
  { name: 'Bãi lô cốt Hải Vân', icon: '🏔️', colorClass: 'text-gray-500' },
  { name: 'Thác Grăng', icon: '🏞️', colorClass: 'text-blue-500' },
  { name: 'Đồng sen Trà Lý', icon: '🏔️', colorClass: 'text-gray-500' },

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
          Top Địa Điểm Cắm Trại Lý Tưởng ở Đà Nẵng
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
              <span className="font-[system-ui] font-medium text-gray-800 dark:text-gray-200">
                {location.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
