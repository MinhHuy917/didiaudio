'use client'
import Image from 'next/image'
import Head from 'next/head'
import loakaraoke from '/src/images/loakaraoke/0.jpg'
import loakaraoke1 from '/src/images/loakaraoke/1.jpg'
import loakaraoke2 from '/src/images/loakaraoke/2.jpg'
import loakaraoke3 from '/src/images/loakaraoke/3.jpg'
import loakaraoke4 from '/src/images/loakaraoke/4.jpg'
import loakaraoke5 from '/src/images/loakaraoke/5.jpg'

export default function DichVuChoThueLoaKeoKeoDaNang() {
  return (
    <>
      <Head>
        <title>Dịch vụ Thuê Loa Kẹo Kéo Đà Nẵng - Âm Thanh Cực Hay, Giá Rẻ</title>
        <meta
          name="description"
          content="Dịch vụ cho thuê loa karaoke chuyên nghiệp tại Đà Nẵng. Loa âm thanh cực hay, giá thuê chỉ 250k/ngày. Phù hợp cho mọi sự kiện như tiệc cưới, sinh nhật, hội họp, và camping ngoài trời."
        />
        <meta
          name="keywords"
          content="thuê loa karaoke, loa karaoke Đà Nẵng, thuê loa giá rẻ, loa hát karaoke, loa chuyên nghiệp, dịch vụ cho thuê loa"
        />
        <meta name="author" content="Danang Campers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Thuê Loa Karaoke Đà Nẵng - Âm Thanh Cực Hay, Giá Rẻ" />
        <meta
          property="og:description"
          content="Loa karaoke chuyên nghiệp tại Đà Nẵng với âm thanh cực hay, giá thuê chỉ 250k/ngày. Phù hợp cho mọi sự kiện như tiệc cưới, sinh nhật, hội họp, và camping ngoài trời."
        />
        <meta property="og:image" content={loakaraoke.src} />
        <meta property="og:url" content="https://yourwebsite.com/thue-loa-keo-keo-da-nang" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg mb-12">
          <Image
            src={loakaraoke.src}
            alt="Loa karaoke chuyên nghiệp tại Đà Nẵng"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl font-bold">Dịch vụ Thuê Loa Kẹo Kéo Đà Nẵng</h1>
            <p className="mt-2 text-lg"></p>
          </div>
        </div>

        {/* Service Details */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700">Dịch Vụ Chuyên Nghiệp</h2>
            <p className="text-gray-700 mt-4">
              Chúng tôi cung cấp dịch vụ cho thuê loa karaoke chất lượng cao tại Đà Nẵng, phù hợp
              cho mọi sự kiện như tiệc cưới, sinh nhật, hội họp, và camping ngoài trời. Với nhiều mức giá
              thuê, bạn sẽ có ngay một thiết bị âm thanh chất lượng cao để khuấy động
              không khí.
            </p>
          </div>

          {/* Features */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Thông Số Nổi Bật</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <li>
                <strong>Âm thanh cực mạnh:</strong> Hệ thống 16 loa gồm 2 bass 20cm từ 176 coil 51
                sườn nhôm đúc, 12 loa trung, 2 treble – đáp ứng tốt cả nhạc nền nhẹ nhàng lẫn
                karaoke công suất lớn.
              </li>
              <li>
                <strong>Pin bền bỉ:</strong> Pin 12V10Ah sử dụng liên tục khoảng 4 giờ – lý tưởng
                cho các sự kiện ngoài trời.
              </li>
              <li>
                <strong>Hiệu ứng âm thanh:</strong> Mạch K18 echo delay reverb giúp tiếng hát mượt
                mà, micro không dây chống hú kèm 2 màn hình hiển thị – dễ dàng chỉnh âm lượng và
                hiệu ứng khi đang hát.
              </li>
              <li>
                <strong>Kết nối đa dạng:</strong> Bluetooth, USB, HDMI, TF, OPT in, AUX, MIC,
                GUITAR – dễ dàng phát nhạc từ điện thoại, USB hoặc nhạc cụ.
              </li>
              <li>
                <strong>Thiết kế sang trọng:</strong> Vỏ bọc da, mặt nạ gỗ lưới sắt chắc chắn; kích
                thước gọn (52×33×26cm), trọng lượng 18kg, có tay cầm.
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-6">Hình Ảnh Sản Phẩm</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[loakaraoke1, loakaraoke2, loakaraoke3, loakaraoke4, loakaraoke5].map((image, idx) => (
                <Image
                  key={idx}
                  src={image.src}
                  alt={`Loa karaoke mẫu ${idx + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md object-cover"
                />
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-green-50 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-green-700">Giá Thuê Đặc Biệt</h3>
            <p className="text-gray-700 mt-4">
              Giá cũ: <span className="line-through text-red-500">350.000đ/ngày</span>
            </p>
            <p className="text-4xl font-bold text-green-700 mt-2">Chỉ còn: 290.000đ/ngày</p>
            <p className="text-gray-600 mt-4">Liên hệ ngay để đặt thuê và nhận ưu đãi!</p>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Thông Tin Liên Hệ</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-4">
              <li>
                <strong>Địa chỉ:</strong> 86 Lê Thiệt, Liên Chiểu, TP. Đà Nẵng (
                <a href="https://g.co/kgs/BkDHJhp" className="text-blue-600 underline">
                  Google Maps
                </a>
                )
              </li>
              <li>
                <strong>SĐT/Zalo:</strong>{' '}
                <a href="tel:0909223917" className="text-blue-600">
                  0909.223.917
                </a>
              </li>
              <li>
                <strong>Giờ làm việc:</strong> Thứ 2–CN: 7:00–18:00
              </li>
              <li>
                <strong>Facebook:</strong>{' '}
                <a
                  href="https://facebook.com/thueleucamtraidanang"
                  className="text-blue-600"
                >
                  /thueleucamtraidanang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
