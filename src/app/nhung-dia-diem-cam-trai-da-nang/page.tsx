import { type Metadata } from 'next'
import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'

type CampLocation = {
  name: string
  icon: string
  colorClass: string
  imageUrl?: string // Optional property for image URL
  subtitle?: string
}

const campLocations: CampLocation[] = [
 
  

  { name: 'Hồ Đồng Xanh Đồng Nghệ ', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: 'https://tourdanangcity.vn/wp-content/uploads/2022/12/dong-xanh-dong-nghe-1.jpeg' },
  { name: 'Bãi xếp Sơn Trà', icon: '🏞️', colorClass: 'text-blue-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqsxZ8_gRqo8MI5LcLbceVvkmnnBWN2iYHNekzRhOIxwAOXkwVyMhv3wjA6NBN2-PU926Vf81s9kTzYNWB-08jTvTfrZj-De_Rk3hsd_smAAXU2ainyoRrygtl1w_Ph_fTzD_rO=w533-h240-k-no' },
  { name: 'Đỉnh Bạch Mã', icon: '🛶', colorClass: 'text-blue-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr8-AQpjox262qngyXS67ewr3nDnWzC8Dkg1ZzOd9lUQTzzvuJVwnTs3_NcaunckSVNHdGqhPUyGnw2IAQjv7SyaKMW-gfY7ifdTAJ9KuFs6KVvpYOGjJMBxSmnGkEEtBV2p5W9=w408-h244-k-no' },
  { name: 'Đỉnh Am Thông', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrZ2LRAT7dVkTJCf6Dd_HWuoW33MJe21ZMXCHW_5xycmEn1SWwlLCgr0VBZbRGskdTinrXevKZU3x4NBeNgKT7RGw0gYzpludNT6JdWFUcxJy5O8CusrKZMehuk_7YmRZ1QUcDN_w=w243-h174-n-k-no-nu' },
  { name: 'Hồ Hòa Trung', icon: '🚣‍♂️', colorClass: 'text-blue-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npR2q-2gsui5a0fjvcGxvig4ZcMP4RckuAId53wH3NnQ4xdhTzLLq-8ole4K_M4-XYR-iP2bdYIRyX1aRiGxeGa0xxTAaeSjg9LpsMwT1QGPOrGVXvFhN4RPQKWWZM1Q2kCuE8=w408-h271-k-no' },
  { name: 'Hồ Phú Ninh', icon: '🏞️', colorClass: 'text-green-500', imageUrl: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90DvodnC-dUzvYyqanTycVxBHUqeK1ZgScDLUpFyGh3GTx3BdR3XpAUjlyuDtU1ISdaL7WvGoiXhi7Z3SU8pAHo-7zeq5P1xOStvluQIF08dqoU9nSiwSYYZLyI6S-58q3wcmDdQNw=w478-h269-p' },
  {
    name: '  Ốc Đảo Vạn Buồng',
    icon: '🌿',
    colorClass: 'text-green-500',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr6-eiVMGnv1HnWinTm0IxOmsu8cM0985WTVWFFB34mxpb3MKuHOFsfX850ZkUFjGJAEWl8XrwLIxL1qtGxPK6HqIM6bJI3nDepNylfpDFherS3VhXfTGuf8vKB9sCNBGZ-xEdw-Q=w243-h304-n-k-no-nu'
  },
  { name: 'Đỉnh Hải Vân', icon: '🛤️', colorClass: 'text-red-500', imageUrl: 'https://www.didicamping.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg12.abece8ea.jpg&w=828&q=75' },
  { name: 'Nóc takpo Nam Trà My ', icon: '🏞️', colorClass: 'text-green-500', imageUrl: 'https://cdn2.tuoitre.vn/thumb_w/1200/471584752817336320/2024/4/29/n2-1714355252656884216099-454-130-1340-1822-crop-1714355768345827660332.jpg' },
  { name: 'Làng Rong Chơi TakPang', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nowtcbmisOhNW2t_LeQkbrx9pG8FphvMkbaMqjH5IzRcGs7L3nZBDMNjtN3HZaDzVggME-N2WjDRnKgwWYlJVJanWvraPD9RRxwX_3cuJ7rhgrBNjyd1D-PvWA3vGjJK0pGz14=w243-h406-n-k-no-nu' },
  { name: 'Đỉnh Quế', icon: '🌅', colorClass: 'text-orange-500', imageUrl: 'https://statics.vinpearl.com/dinh-que-tay-giang-1_1634621616.jpg' },
  { name: 'Hòn Kẽm Đá Dừng ', icon: '🏞️', colorClass: 'text-blue-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrs4PTDMej3f9EE8PCjeP_hV_tBMVKB9oGTRQ4SKgds8eFxhwfyggQCLUw5_BCkpJWSwOnDCk066cFYUMP-dvW7s1RBtANDvSZIPWBg_iSWKgoRMgnj2veKWDOhNZYPwJcYSay6=w243-h174-n-k-no-nu' },
  { name: 'Rừng thông Bồ Bồ', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noXI1o8ERT1h5JC-wlXTbVl97j2uIAmauvaIiz9Dal3nJyjifHycAjInG1z6VNwLejn61PKssY0xe1n4okBvWaUHK8TPnrm-gGyAdJAzc4NC1L5PrwQwvlOzwdAJRLYnmyb_aLmLb12lR5B=w243-h203-n-k-no-nu' },
  { name: 'Đồng sen Trà Lý', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noHAvkcDs1w0iHv1pmZSmZVPQ9_gtiDXfncNJiEj4btQAKQGCtsRbVtqBU1Ccn8jC3pEeYXPjXz_opERO5rZabjkHatfaFNzdhar3NcDe77EONlcaYmmGChJZPKWT-eb3y2WQHy3xnxLRZO=w243-h174-n-k-no-nu' },
  { name: 'Bãi Kè Cạn', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrPShp7WVMcDxSNu_CoQ4Wv516NwQkHDPOBfM_LOaJoRZD8uZl04wzmTNFL649XnH4KNaI_ZfMBqK1emv2buKfP38zjCeVl0fm0ERpAo2YmGxg-u-irCpbq-ipjp3B0pNd5k7gr=w243-h174-n-k-no-nu' },
  { name: 'Mây Treo', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4norjfFKpDi86PRx3YnpbIHKrSXdqcZHRgMlA0E7lgVj2SqW4vyKCj1I1hw5PcKO09rpuu_k7FziPbLnZjqMrbvpRDAzdbeqOcVNQkayFRSegdO2okRErKdASXKtttU8j_F96CaV=w408-h542-k-no' },
  { name: 'Giếng trời', icon: '🏔️', colorClass: 'text-gray-500', imageUrl: 'https://static.vinwonders.com/2022/04/gieng-troi-da-nang-6.jpg' },
  { name: 'Đỉnh Hòa Vân', icon: '🌲', colorClass: 'text-green-500', imageUrl: 'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/485979646_1347944632904532_7631355104494035004_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=LgD-PjYMyLYQ7kNvwG41mMJ&_nc_oc=AdnlpkjrkxP9jkzxVjeK-DTjSw2oaVRb0bn6Trw-G-FMrFMBCVQhAAh8qRdfwH572FD9kqrIP_errdFUvR4L5qbP&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=xgOx3Gk2astqZHYDSs7jaw&oh=00_AfYKJSBho88UjLsQQJkHxiHH9EILKZGHyQQSQpjOUD_I_A&oe=68D592E9' },
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
              href={`https://www.google.com/maps/search/${encodeURIComponent(location.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-900/60"
            >
              {/* Thumbnail ảnh nền nếu có */}
              {location.imageUrl && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={location.imageUrl}
                    alt={location.name}
                    className="h-full w-full object-cover brightness-75 group-hover:brightness-90 transition duration-500"
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
