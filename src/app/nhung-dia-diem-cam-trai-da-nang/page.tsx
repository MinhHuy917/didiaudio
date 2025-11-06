import { type Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image' // <--- Imported Next.js Image component
import hodongxanhdongnghe from '/src/images/diemcamtrai/dong-xanh-dong-nghe.jpeg'
import baixep from '/src/images/diemcamtrai/bai-xep.png'
import dinhbachma from '/src/images/diemcamtrai/dinh-bach-ma.jpg'
import hohoatrung from '/src/images/diemcamtrai/ho-hoa-trung.jpg'
import hophuninh from '/src/images/diemcamtrai/ho-phu-ninh.jpeg'
import ocdaovanbuong from '/src/images/diemcamtrai/oc-dao-van-buong.jpg'
import dinhhaivan from '/src/images/diemcamtrai/dinh-hai-van.jpg'
import noctakpo from '/src/images/diemcamtrai/noctakpo.jpg'
import langrongchoitakpang from '/src/images/diemcamtrai/lang-rong-choi-TakPang.png'
import dinhque from '/src/images/diemcamtrai/dinh-que.jpg'
import rungthongbobo from '/src/images/diemcamtrai/rung-thong-bo-bo.png'
import dongsentraly from '/src/images/diemcamtrai/dong-sen-tra-ly.png'
import baikecan from '/src/images/diemcamtrai/baikecan.jpg'
import dinhhoavan from '/src/images/diemcamtrai/dinh-hoa-van.png'


type CampLocation = {
  name: string
  icon: string
  colorClass: string
  // The type of imported image modules is typically an object in Next.js/Webpack
  imageUrl?: any 
  subtitle?: string
}

const campLocations: CampLocation[] = [
  // ... (Your campLocations array remains the same)
  { name: 'Hồ Đồng Xanh Đồng Nghệ ', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: hodongxanhdongnghe },
  { name: 'Bãi xếp Sơn Trà', icon: '🏞️', colorClass: 'text-blue-500', imageUrl: baixep },
  { name: 'Đỉnh Bạch Mã', icon: '🛶', colorClass: 'text-blue-500', imageUrl: dinhbachma },
  { name: 'Hồ Hòa Trung', icon: '🚣‍♂️', colorClass: 'text-blue-500', imageUrl: hohoatrung },
  { name: 'Hồ Phú Ninh', icon: '🏞️', colorClass: 'text-green-500', imageUrl: hophuninh },
  {
    name: '  Ốc Đảo Vạn Buồng',
    icon: '🌿',
    colorClass: 'text-green-500',
    imageUrl: ocdaovanbuong
  },
  { name: 'Đỉnh Hải Vân', icon: '🛤️', colorClass: 'text-red-500', imageUrl: dinhhaivan },
  { name: 'Nóc takpo Nam Trà My ', icon: '🏞️', colorClass: 'text-green-500', imageUrl: noctakpo },
  { name: 'Làng Rong Chơi TakPang', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: langrongchoitakpang },
  { name: 'Đỉnh Quế', icon: '🌅', colorClass: 'text-orange-500', imageUrl: dinhque },
  { name: 'Rừng thông Bồ Bồ', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: rungthongbobo },
  { name: 'Đồng sen Trà Lý', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: dongsentraly },
  { name: 'Bãi Kè Cạn', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: baikecan },
  { name: 'Đỉnh Hòa Vân', icon: '🌲', colorClass: 'text-green-500', imageUrl: dinhhoavan },
]

export const metadata: Metadata = {
  title: 'Những địa điểm cắm trại ở Đà Nẵng',
  description: 'Những Nơi Cắm Trại Đà Nẵng Được Yêu Thích Nhất',
}

export default function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Những địa điểm cắm trại ở Đà Nẵng"
        title=''
      >
      <p>
  Đà Nẵng, Quảng Nam và Huế là những điểm đến lý tưởng để cắm trại với cảnh quan
  thiên nhiên tuyệt đẹp 🌿. Bạn có thể tận hưởng bãi biển hoang sơ, núi rừng
  xanh mát và bầu không khí trong lành 🏕️. Đây chắc chắn là lựa chọn hoàn hảo
  cho chuyến đi nghỉ dưỡng và khám phá ✨.
</p>
<br />
<p>
  Cần <strong>thuê lều và đồ cắm trại tại Đà Nẵng</strong>? Liên hệ ngay
  <strong> ĐiĐi Camping</strong> – cửa hàng chuyên cho thuê lều, bếp, bàn ghế và
  phụ kiện cắm trại, đảm bảo sạch sẽ và chất lượng cho mọi chuyến đi.
</p>

<ul>
  <li><strong>Địa chỉ:</strong> 86 Lê Thiệt, Liên Chiểu, Đà Nẵng (<a href="https://maps.google.com/?q=86+Le+Thiet,+Lien+Chieu,+Da+Nang" target="_blank">Google Maps</a>)</li>
  <li><strong>SĐT/Zalo:</strong> 0909.223.917</li>
  <li><strong>Giờ làm việc:</strong> Thứ 2 – CN: 7:00 – 18:00</li>
  <li><strong>Facebook:</strong> <a href="https://facebook.com/thueleucamtraidanang" target="_blank">/thueleucamtraidanang</a></li>
  <li><strong>Website:</strong> <a href="https://didicamping.com" target="_blank">didicamping.com</a></li>
</ul>


      </PageIntro>

      <div className="mx-auto mt-24 max-w-6xl rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 p-12 shadow-2xl dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <h2 className="mb-16 text-center text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          🌟 <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-lime-400 to-green-300">
            Top Địa Điểm Cắm Trại Lý Tưởng Ở Đà Nẵng
          </span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {campLocations.map((location, index) => (
            <Link
              key={index}
              href={`https://www.google.com/maps/search/$${encodeURIComponent(location.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-900/60"
            >
              {/* SỬ DỤNG NEXT.JS IMAGE COMPONENT */}
              {location.imageUrl && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={location.imageUrl} // The imported image object is passed here
                    alt={location.name}
                    // Next.js Image requires either 'fill' or 'width' and 'height'
                    fill // Use 'fill' to make the image take up the full size of its parent
                    // 'sizes' helps Next.js determine which image to load
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover brightness-75 group-hover:brightness-90 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              )}

              <div className="relative z-10 flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-lime-300 text-3xl text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {location.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-500 transition-colors duration-300">
                  {location.name}
                </h3>
              </div>

              <p className="relative z-10 mt-4 text-base text-gray-600 dark:text-gray-300">
                {location?.subtitle ?? "Khám phá ngay"} →
              </p>

              <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-1 bg-gradient-to-r from-green-500 via-lime-400 to-green-300 opacity-0 transform transition-all duration-300 group-hover:right-0 group-hover:left-0 group-hover:opacity-100"></span>
            </Link>
          ))}
        </div>
      </div>

    </>
  )
}