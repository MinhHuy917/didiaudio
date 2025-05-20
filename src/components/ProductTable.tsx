'use client'

import React from 'react'

import Image from 'next/image'
import ban from '/src/images/ban.png'
import bepcui from '/src/images/bepcui.jpg'
import bepgas from '/src/images/bepgas.jpg'
import bepnuong from '/src/images/bepnuong.jpg'
import bonoi from '/src/images/bonoi3mon.png'
import cachnhiet from '/src/images/tamcachnhiet.png'
import dencamtay from '/src/images/dencamtay.jpg'
import dendeban from '/src/images/dendeban.jpg'
import dendoidau from '/src/images/dendoidau.jpg'
import denled from '/src/images/denled.png'
import denngoisao from '/src/images/denngoisao.png'
import densinhhoat from '/src/images/densinhhoat.jpg'
import ghe from '/src/images/ghe.png'
import goihoi from '/src/images/goihoi.jpg'
import leu2 from '/src/images/leu2.jpg'
import leu4 from '/src/images/leu4.jpg'
import leu6 from '/src/images/leu6.jpg'
import leu8 from '/src/images/leu8.jpg'
import loa from '/src/images/loatronsmart.png'
import tripod from '/src/images/tripod.jpg'
import thungda16L from '/src/images/thungda16L.jpg'
import tayquaynuongga from '/src/images/tayquaynuongga.jpg'
import chanden from '/src/images/chanden.png'
import khanban from '/src/images/khanban.png'
import vong from '/src/images/vong.jpg'
import sacduphong from '/src/images/sacduphong.jpeg'
import tang from '/src/images/tang.jpg'
import tang3m from '/src/images/tang3m.jpg'
import thamdangoai from '/src/images/thamdangoai.jpg'
import thamvintage from '/src/images/thamvintage2.png'
import thungda25L from '/src/images/thungdac2.png'
import thungdanho from '/src/images/thungda6.8L.jpeg'
import baimasoi from '/src/images/baimasoi.png'
import noi4L from '/src/images/noi4L.png'
import bepcon from '/src/images/bepcon.png'
import noitreo from '/src/images/noitreo.png'
import daukho from '/src/images/daukho.png'
import amnuoc from '/src/images/amnuoc.png'
import quat from '/src/images/quat.png'
import maynuongtudong from '/src/images/maynuongtudong.png'



type Product = {
  id: number
  name: string
  catalogue: string
  image: any
  price: number
  quantity: number
  isRental?: boolean
}



const ProductList: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Lều 2 ', catalogue: '(2 lớp chống mưa, 1m4x2m)', image: leu2.src, price: 70, quantity: 1 },
    { id: 2, name: 'Lều 4', catalogue: '(2 lớp chống mưa, 2mx2m)', image: leu4.src, price: 90, quantity: 1 },
    { id: 3, name: 'Lều 6', catalogue: '(2 lớp chống mưa, 3mx2m7)', image: leu6.src, price: 140, quantity: 1 },
    { id: 4, name: 'Lều 8', catalogue: '(2 lớp chống mưa, 4mx2m)', image: leu8.src, price: 180, quantity: 1 },
    { id: 4, name: 'Võng', catalogue: '(đã kèm dây và móc võng)', image: vong.src, price: 40, quantity: 1 },
    { id: 5, name: 'Tấm cách nhiệt', catalogue: '(lót trong lều, cách hơi đất)', image: cachnhiet.src, price: 0, quantity: 1 },
    { id: 6, name: 'Gối hơi', catalogue: '(kèm bơi hơi)', image: goihoi.src, price: 5, quantity: 1 },
    { id: 7, name: 'Ghế mặt trăng', catalogue: '(màu trắng kem, tải trọng 120kg)', image: ghe.src, price: 20, quantity: 1 },
    { id: 8, name: 'Bàn nhôm', catalogue: '(90cmx60cm)', image: ban.src, price: 50, quantity: 1 },
    { id: 9, name: 'Khăn bàn thổ cẩm', catalogue: '(1mx1m5)', image: khanban.src, price: 15, quantity: 1 },
    { id: 10, name: 'Chân đèn', catalogue: '(Có thể gắn bàn hoặc cắm đất đều được)', image: chanden.src, price: 25, quantity: 1 },
    { id: 11, name: 'Tăng 4-6 người - diện tích 9m2', catalogue: '(3mx3m, kèm 2 trụ chống)', image: tang3m.src, price: 50, quantity: 1 },
    { id: 12, name: 'Tăng 8-12 người - diện tích 20m2', catalogue: '(4m5x4m5, kèm 2 trụ chống)', image: tang.src, price: 100, quantity: 1 },
    { id: 13, name: 'Thảm dã ngoại', catalogue: '(chống thấm, 2m1x2m)', image: thamdangoai.src, price: 25, quantity: 1 },
    { id: 14, name: 'Thảm Vintage', catalogue: '(2mx2m, thảm chống thấm dùng lót trong lều hoặc để ngồi)', image: thamvintage.src, price: 40, quantity: 1 },
    { id: 15, name: 'Đèn cầm tay', catalogue: '(đã sạc đầy pin, thời gian chiếu sáng 7-9h)', image: dencamtay.src, price: 10, quantity: 1 },
    { id: 16, name: 'Đèn đội đầu', catalogue: '(đã sạc đầy pin, thời gian chiếu sáng 8-10h)', image: dendoidau.src, price: 10, quantity: 1 },
    { id: 17, name: 'Đèn sinh hoạt', catalogue: '(kèm cặp pin thêm miễn phí, tổng thời gian chiếu sáng 8-12h)', image: densinhhoat.src, price: 30, quantity: 1 },
    { id: 18, name: 'Đèn Vintage', catalogue: '(đã kèm pin, thời gian chiếu sáng 8h-10h)', image: dendeban.src, price: 15, quantity: 1 },
    { id: 19, name: 'Đèn led tròn ', catalogue: '(đã kèm pin, thời gian chiếu sáng 8-10h)', image: denled.src, price: 20, quantity: 1 },
    { id: 20, name: 'Đèn led ngôi sao', catalogue: '(đã kèm pin, thời gian chiếu sáng 8-10h)', image: denngoisao.src, price: 30, quantity: 1 },
    { id: 21, name: 'Sạc dự phòng', catalogue: '(đã sạc đầy pin, dung lượng 20.000 mAh, và kèm dây sạc 3 đầu', image: sacduphong.src, price: 30, quantity: 1 },
    { id: 22, name: 'Loa Tronsmart T7 Mini', catalogue: 'Loa công suất 15W, dùng đến 12h (bật đèn) và 18h (tắt đèn), Chống nước nhẹ, dải tần 20Hz–20kHz.', image: loa.src, price: 60, quantity: 1 },
    { id: 23, name: 'Quạt tích điện', catalogue: '(Pin 20.000maH, thời gian dùng: 70h (mức thấp), 11h (mạnh nhất), 9h (bật tất cả chức năng); đèn dùng ~300h. Tích hợp đèn 3 mức, đßiều khiển từ xa, hẹn giờ, xoay 180°, kiêm sạc dự phòng.)', image: quat.src, price: 70, quantity: 1 }, 
    { id: 24, name: 'Tripod', catalogue: '(có remote, dùng cho cả máy ảnh và điện thoại)', image: tripod.src, price: 40, quantity: 1 },
    { id: 25, name: 'Bếp nướng', catalogue: '(có kèm 2 kẹp inox, 73cmx22cmx20cm)', image: bepnuong.src, price: 40, quantity: 1 },
    { id: 26, name: 'Bếp củi', catalogue: '(125x125cmx16cm)', image: bepcui.src, price: 40, quantity: 1 },
    { id: 27, name: 'Bếp gas', catalogue: '(Không kèm bình gas)', image: bepgas.src, price: 50, quantity: 1 },
    { id: 28, name: 'Bếp cồn', catalogue: '(có núm vặn lấy khay cồn, và cần gạt bỏ cồn oan toàn)', image: bepcon.src, price: 20, quantity: 1,  },
    { id: 29, name: 'Thùng đá 8L', catalogue: '(thể tích 8L)', image: thungdanho.src, price: 20, quantity: 1 },
    { id: 30, name: 'Thùng đá 16L', catalogue: '(thể tích 16L)', image: thungda16L.src, price: 30, quantity: 1 },
    { id: 31, name: 'Thùng đá 25L', catalogue: '(thể tích 25L)', image: thungda25L.src, price: 40, quantity: 1 },
    { id: 32, name: 'Bộ nồi 3-4 người', catalogue: '(ấm, chảo, nồi)', image: bonoi.src, price: 30, quantity: 1 },
    { id: 33, name: 'Nồi treo 4L', catalogue: '(đã kèm giá treo 3 chân)', image: noitreo.src, price: 50, quantity: 1,  },
    { id: 34, name: 'Nồi 4L', catalogue: '(thể tích 4L)', image: noi4L.src, price: 30, quantity: 1,  },
    { id: 35, name: 'Ấm 0.8L', catalogue: '(thể tích 0.8L)', image: amnuoc.src, price: 15, quantity: 1 },
    { id: 36, name: 'Tay quay nướng gà', catalogue: '(kèm 2 trụ chống, nướng gà,vịt, thịt đều được)', image: tayquaynuongga.src, price: 20, quantity: 1 },
    { id: 37, name: 'Máy nướng gà tự động', catalogue: '(sử dụng bằng sạc dự phòng - pin 5000maH quay được 10h, kèm quạt mini, không kèm sạc dự phòng)', image: maynuongtudong.src, price: 50, quantity: 1 },
    { id: 38, name: 'Đầu khò', catalogue: '(mồi lửa nhanh, nhóm củi,than dễ dàng)', image: daukho.src, price: 10, quantity: 1,  },
    { id: 39, name: 'Bộ bài ma sói', catalogue: '(bộ bài chia rẽ tình bạn bè)', image: baimasoi.src, price: 10, quantity: 1 },
    // { id: 32, name: 'Than củi', catalogue: '(mồi lửa nhanh, nhóm củi/than dễ dàng)', image: than.src, price: 15, quantity: 1,  },
    // { id: 40, name: 'Cafe phin ', catalogue: '250ml (7-8 cốc) (hàng đặt trước)', image: cafeden.src, price: 0, quantity: 1, isRental: false },
    // { id: 30, name: 'Cafe muối', catalogue: '250ml (5-6 cốc) (hàng đặt trước)', image: cafemuoi.src, price: 80, quantity: 1, isRental: false },
    // { id: 31, name: 'Mật ong rừng làng Aur', catalogue: '500ml (hàng đặt trước)', image: matong.src, price: 600, quantity: 1, isRental: false },
 
    
  ]

  const renderSection = (title: string, filter: (product: Product) => boolean) => {
    const sectionItems = products.filter(filter)
    if (sectionItems.length === 0) return null

    return (
      <div className="mb-12">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F3329] mb-5 font-sans tracking-wide">
          {title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {sectionItems.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white dark:bg-[#EFE9DA] shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 200px"
                className="w-full h-[180px] md:h-[180px] lg:h-full object-cover rounded"
              />

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-[#1F3329] leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-[#2D4B3A] mt-1">
                    {product.catalogue}
                  </p>
                </div>
                <div className="mt-3 text-sm md:text-base font-semibold text-[#1F3329]">
                  {product.price === 0 ? (
                    <span className="text-green-600">Miễn phí</span>
                  ) : (
                    <span className="text-orange-600">
                      {product.price}k{product.isRental === false ? '/Chai' : '/ngày'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 font-sans text-[#1F3329]" style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2 className="text-xl md:text-2xl font-bold text-center mb-10 tracking-wide flex items-center justify-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6h13M9 12h13m0 0V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h10" />
  </svg>
   BẢNG GIÁ THUÊ
</h2>


      {renderSection('Lều trại', (p) => p.name.includes('Lều') || p.name.includes('Võng') || p.name.includes('Gối') || p.name.includes('Tấm cách nhiệt'))}
      {renderSection('Bàn Ghế', (p) => p.name.includes('Bàn') || p.name.includes('Ghế') || p.name.includes('Khăn') || p.name.includes('Chân đèn'))}
      {renderSection('Tăng, Thảm', (p) => p.name.includes('Tăng') || p.name.includes('Thảm'))}
      {renderSection('Đèn', (p) => p.name.includes('Đèn'))}
      {renderSection('Phụ kiện tiện ích', (p) => p.name.includes('Loa') || p.name.includes('Quạt') || p.name.includes('Tripod') || p.name.includes('Sạc') || p.name.includes('Bộ bài'))}
      {renderSection('Dụng cụ nấu ăn', (p) => p.name.includes('Bếp') || p.name.includes('nồi') || p.name.includes('Nồi') || p.name.includes('Ấm') || p.name.includes('Tay quay nướng gà') || p.name.includes('Máy nướng gà tự động') || p.name.includes('Đầu khò'))} 
      {renderSection('Thùng đá', (p) => p.name.includes('Thùng'))}
      {renderSection('Cafe & Mật Ong', (p) => p.name.includes('Cafe') || p.name.includes('Mật ong'))}


      <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-5 rounded-xl shadow-sm space-y-3 my-6">
      <h2 className="text-lg font-bold">Lưu ý khi thuê đồ</h2>

      <p className="text-base leading-relaxed">
        Khi bạn thuê, <span className="font-medium text-yellow-900">shop đã chuẩn bị sẵn túi bạt và dây cột</span>.
        Bạn <span className="font-semibold text-yellow-900">không cần mang theo</span> túi đựng hay dây cột riêng —
        chỉ cần mượn tại shop và khi trả lại hãy trả đầy đủ cho shop là được.
      </p>

      <p className="text-base leading-relaxed">
  Vui lòng nhận lều và trả lều tại  <span className="font-semibold"> khu vực có camera </span>, 
  để <span className="font-medium text-yellow-900">kiểm tra đầy đủ lều và phụ kiện</span>.  
  Việc kiểm tra kỹ lưỡng giúp đảm bảo không thiếu, hư hỏng hoặc mất mát đồ đạc — tránh rắc rối cho bạn và giúp shop xử lý nhanh chóng hơn.
</p>

    </div>


    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6 my-8">
      <h2 className="text-2xl font-bold text-gray-800">Chính sách thuê lều</h2>

      {/* 1. Đặt cọc & thanh toán */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-1">1. Đặt cọc & Thanh toán</h3>
        <p className="text-gray-700 leading-relaxed">
          Khi thuê lều, vui lòng mang theo <span className="font-medium">CCCD hoặc GPLX </span> 
          để bên mình đối chiếu và <span className="font-medium">chụp ảnh làm cơ sở cọc </span> 
          (chỉ lưu thông tin, <span className="italic">không giữ giấy tờ</span>).
          Đồng thời, bạn cần <span className="font-semibold">thanh toán đầy đủ trước khi nhận lều và đồ cắm trại</span>.
        </p>
      </div>

      {/* 2. Thời gian thuê */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-1">2. Thời gian thuê</h3>
        <p className="text-gray-700 leading-relaxed">
          Thời gian thuê được tính theo ngày (<span className="font-medium">24 tiếng</span>) kể từ lúc nhận lều và phụ kiện.
          Tuy nhiên, bên mình có thể <span className="font-medium">hỗ trợ linh hoạt</span> nếu bạn cần nhận sớm hoặc trả trễ.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-400 p-4 mt-3 rounded">
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-semibold">Ví dụ:</span> Nếu bạn đi cắm trại vào <span className="font-medium">thứ 7 </span> 
            và cần đi sớm, bạn có thể ghé lấy lều từ tối <span className="font-medium">thứ 6</span> mà không tính thêm phí.
            Khi trả lều, bạn có thể trả trong ngày <span className="font-medium">Chủ Nhật</span>.
            Nhưng nếu giữ lều qua đêm Chủ Nhật và trả vào <span className="font-medium">thứ 2 </span> hoặc sau đó,
            shop sẽ tính thêm <span className="font-semibold">50% giá thuê cho mỗi ngày tiếp theo</span>.
          </p>
        </div>
      </div>

      <div>

  {/* Tiêu đề phụ: Đền bù thiệt hại */}
  <h4 className="text-base font-semibold text-red-700 mt-3 mb-1">📌 Đền bù thiệt hại</h4>
  <p className="text-gray-700 leading-relaxed">
    Khi trả lại, nếu thiết <span className="font-medium">bị hư hỏng, mất mát hoặc quá bẩn không thể chùi rửa được</span>, 
    shop sẽ <span className="font-semibold">tính phí vệ sinh, sửa chữa hoặc yêu cầu bồi thường </span> 
    theo <span className="font-semibold text-red-700">giá trị thị trường hiện tại </span> của sản phẩm.
  </p>
</div>
    </div>
    

    </div>
  )
}

export default ProductList
