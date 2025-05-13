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
import loa from '/src/images/loa.jpg'
import tripod from '/src/images/tripod.jpg'
import thungda16L from '/src/images/thungda16L.jpg'
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
    { id: 1, name: 'Lều 2 ', catalogue: '(2 lớp chống mưa, 1m4x2m)', image: leu2.src, price: 60, quantity: 1 },
    { id: 2, name: 'Lều 4', catalogue: '(2 lớp chống mưa, 2mx2m)', image: leu4.src, price: 80, quantity: 1 },
    { id: 3, name: 'Lều 6', catalogue: '(2 lớp chống mưa, 3mx2m7)', image: leu6.src, price: 140, quantity: 1 },
    { id: 4, name: 'Lều 8', catalogue: '(2 lớp chống mưa, 4mx2m)', image: leu8.src, price: 180, quantity: 1 },
    { id: 4, name: 'Võng', catalogue: '(đã kèm dây và móc võng)', image: vong.src, price: 40, quantity: 1 },
    { id: 5, name: 'Tấm cách nhiệt', catalogue: '(lót trong lều, cách hơi đất)', image: cachnhiet.src, price: 0, quantity: 1 },
    { id: 6, name: 'Gối hơi', catalogue: '(tính theo số lều)', image: goihoi.src, price: 0, quantity: 1 },
    { id: 7, name: 'Ghế mặt trăng', catalogue: '(màu trắng kem, tải trọng 120kg)', image: ghe.src, price: 20, quantity: 1 },
    { id: 8, name: 'Bàn nhôm', catalogue: '(90cmx60cm)', image: ban.src, price: 40, quantity: 1 },
    { id: 8, name: 'Khăn bàn thổ cẩm', catalogue: '(1mx1m5)', image: khanban.src, price: 15, quantity: 1 },
    { id: 8, name: 'Chân đèn', catalogue: '(Có thể gắn bàn hoặc cắm đất đều được)', image: chanden.src, price: 25, quantity: 1 },
    { id: 9, name: 'Tăng 4-6 người', catalogue: '(3mx3m, kèm 2 trụ)', image: tang3m.src, price: 50, quantity: 1 },
    { id: 10, name: 'Tăng 8-12 người', catalogue: '(4m5x4m5, kèm 2 trụ)', image: tang.src, price: 100, quantity: 1 },
    { id: 11, name: 'Thảm dã ngoại', catalogue: '(chống thấm, 2m1x2m)', image: thamdangoai.src, price: 25, quantity: 1 },
    { id: 12, name: 'Thảm Vintage', catalogue: '(2mx2m, thảm chống thấm dùng lót trong lều hoặc để ngồi)', image: thamvintage.src, price: 40, quantity: 1 },
    { id: 13, name: 'Đèn sinh hoạt', catalogue: '(đã kèm pin, thời gian chiếu sáng 4-6h, pin thêm 10k/cặp)', image: densinhhoat.src, price: 25, quantity: 1 },
    { id: 14, name: 'Đèn Vintage', catalogue: '(đã kèm pin, thời gian chiếu sáng 8h-10h)', image: dendeban.src, price: 15, quantity: 1 },
    { id: 15, name: 'Đèn led tròn ', catalogue: '(đã kèm pin, thời gian chiếu sáng 8-10h)', image: denled.src, price: 20, quantity: 1 },
    { id: 16, name: 'Đèn led ngôi sao', catalogue: '(đã kèm pin, thời gian chiếu sáng 8-10h)', image: denngoisao.src, price: 30, quantity: 1 },
    { id: 17, name: 'Đèn cầm tay', catalogue: '(đã sạc đầy pin, thời gian chiếu sáng 7-9h)', image: dencamtay.src, price: 10, quantity: 1 },
    { id: 18, name: 'Đèn đội đầu', catalogue: '(đã sạc đầy pin, thời gian chiếu sáng 8-10h)', image: dendoidau.src, price: 10, quantity: 1 },
    { id: 19, name: 'Loa Vintage', catalogue: '(đã sạc đầy pin, thời gian sử dụng 6-8h)', image: loa.src, price: 50, quantity: 1 },
   
    { id: 21, name: 'Sạc dự phòng', catalogue: '(đã sạc đầy pin, dung lượng 20.000 mAh, và kèm dây sạc 3 đầu', image: sacduphong.src, price: 30, quantity: 1 },
    { id: 22, name: 'Tripod', catalogue: '(dùng cho cả máy ảnh và điện thoại)', image: tripod.src, price: 40, quantity: 1 },
    { id: 23, name: 'Bếp nướng', catalogue: '(có kèm 2 kẹp inox, 73cmx22cmx20cm)', image: bepnuong.src, price: 40, quantity: 1 },
    { id: 24, name: 'Bếp củi', catalogue: '(125x125cmx16cm)', image: bepcui.src, price: 30, quantity: 1 },
    { id: 25, name: 'Bếp gas', catalogue: '(Chưa kèm bình gas)', image: bepgas.src, price: 40, quantity: 1 },
    { id: 26, name: 'Bếp cồn', catalogue: '(có núm vặn lấy khay cồn, và cần gạt bỏ cồn oan toàn)', image: bepcon.src, price: 20, quantity: 1,  },
    { id: 27, name: 'Thùng đá 8L', catalogue: '(thể tích 8L)', image: thungdanho.src, price: 20, quantity: 1 },
    { id: 32, name: 'Thùng đá 16L', catalogue: '(thể tích 16L)', image: thungda16L.src, price: 30, quantity: 1 },
    { id: 28, name: 'Thùng đá 25L', catalogue: '(thể tích 25L)', image: thungda25L.src, price: 40, quantity: 1 },
    { id: 29, name: 'Bộ nồi 3-4 người', catalogue: '(ấm, chảo, nồi)', image: bonoi.src, price: 30, quantity: 1 },
    { id: 30, name: 'Nồi treo 4L', catalogue: '(đã kèm giá treo 3 chân)', image: noitreo.src, price: 50, quantity: 1,  },
    { id: 30, name: 'Nồi 4L', catalogue: '(thể tích 4L)', image: noi4L.src, price: 30, quantity: 1,  },
    { id: 20, name: 'Ấm 0.8L', catalogue: '(thể tích 0.8L)', image: amnuoc.src, price: 15, quantity: 1 },
    { id: 31, name: 'Đầu khò', catalogue: '(mồi lửa nhanh, nhóm củi,than dễ dàng)', image: daukho.src, price: 10, quantity: 1,  },
    // { id: 32, name: 'Than củi', catalogue: '(mồi lửa nhanh, nhóm củi/than dễ dàng)', image: than.src, price: 15, quantity: 1,  },
    // { id: 28, name: 'Võng hơi Naturehike', catalogue: '(Tải trọng đến 150kg)', image: vonghoi.src, price: 80, quantity: 1 },
    // { id: 29, name: 'Cafe phin ', catalogue: '250ml(7-8 cốc) (hàng đặt trước)', image: cafeden.src, price: 60, quantity: 1, isRental: false },
    // { id: 30, name: 'Cafe muối', catalogue: '250ml (5-6 cốc) (hàng đặt trước)', image: cafemuoi.src, price: 80, quantity: 1, isRental: false },
    // { id: 31, name: 'Mật ong rừng làng Aur', catalogue: '500ml (hàng đặt trước)', image: matong.src, price: 600, quantity: 1, isRental: false },
    { id: 32, name: 'Bộ bài ma sói', catalogue: '(bộ bài chia rẽ tình bạn bè)', image: baimasoi.src, price: 10, quantity: 1 },
    
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
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
        🎪 BẢNG GIÁ THUÊ ĐỒ DÃ NGOẠI
      </h2>

      {renderSection('Lều trại', (p) => p.name.includes('Lều') || p.name.includes('Võng') || p.name.includes('Gối') || p.name.includes('Tấm cách nhiệt'))}
      {renderSection('Bàn Ghế', (p) => p.name.includes('Bàn') || p.name.includes('Ghế') || p.name.includes('Khăn') || p.name.includes('Chân đèn'))}
      {renderSection('Tăng, Thảm', (p) => p.name.includes('Tăng') || p.name.includes('Thảm'))}
      {renderSection('Đèn', (p) => p.name.includes('Đèn'))}
      {renderSection('Phụ kiện tiện ích', (p) => p.name.includes('Loa') || p.name.includes('Tripod') || p.name.includes('Sạc') || p.name.includes('Bộ bài'))}
      {renderSection('Dụng cụ nấu ăn', (p) => p.name.includes('Bếp') || p.name.includes('nồi') || p.name.includes('Nồi') || p.name.includes('Ấm') || p.name.includes('Đầu khò'))} 
      {renderSection('Thùng đá', (p) => p.name.includes('Thùng'))}
      {renderSection('Cafe & Mật Ong', (p) => p.name.includes('Cafe') || p.name.includes('Mật ong'))}
      <div className="text-center mt-20 text-[#1F3329] bg-[#FAF9F7] py-12 px-6 rounded-2xl shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Dịch vụ đi chợ - sơ chế đồ ăn BBQ</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[#3E5245]">

          🎒 Bạn chọn món – chúng tôi đi chợ, sơ chế sạch, đóng gói gọn.
          📄 Có hóa đơn minh bạch – chỉ cần mang đi và nướng!
        </p>



        <div className="mt-10 grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {/* Set Hải Sản */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E6E4DF]">
            <h3 className="text-xl font-bold mb-3 text-[#1F3329]">🦐 Set Hải Sản</h3>
            <ul className="list-disc pl-5 space-y-1 text-[#3E5245] text-sm leading-relaxed">
              <li>Hàu sữa nướng mỡ hành</li>
              <li>Ốc hương xào bơ tỏi kèm bánh mỳ</li>
              <li>Chip Chip hấp sả</li>
              <li>Cá nướng</li>
              <li>Tôm nướng muối ớt</li>
              <li>Rau củ nướng: bắp/đậu bắp/ớt chuông/khoai mật</li>
              <li>Trái cây theo mùa</li>
            </ul>
            <p className="mt-4 text-[#DD6B20] font-semibold">💰 200.000đ ~ 250.000/người</p>
          </div>

          {/* Set Thịt Nướng */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E6E4DF]">
            <h3 className="text-xl font-bold mb-3 text-[#1F3329]">🍖 Set Thịt Nướng</h3>
            <ul className="list-disc pl-5 space-y-1 text-[#3E5245] text-sm leading-relaxed">
              <li>Gà nướng nguyên con ướp mật ong</li>
              <li>Ba chỉ heo ướp BBQ</li>
              <li>Nem nướng</li>
              <li>Rau củ nướng: bắp/đậu bắp/ớt chuông/khoai mật</li>
              <li>Bánh mì bơ tỏi</li>
              <li>Xà lách trộn</li>
              <li>Trái cây theo mùa</li>
            </ul>
            <p className="mt-4 text-[#DD6B20] font-semibold">💰 200.000đ ~ 250.000/người</p>
          </div>

          {/* Set Thập Cẩm */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E6E4DF]">
            <h3 className="text-xl font-bold mb-3 text-[#1F3329]">🍢 Set Thập Cẩm</h3>
            <ul className="list-disc pl-5 space-y-1 text-[#3E5245] text-sm leading-relaxed">
              <li>Gà nướng nguyên con</li>
              <li>Ốc hương xào bơ tỏi</li>
              <li>Chip Chip hấp sả</li>
              <li>Ba chỉ heo ướp</li>
              <li>Rau củ nướng: bắp/đậu bắp/ớt chuông/khoai mật</li>
              <li>Trái cây theo mùa</li>
            </ul>
            <p className="mt-4 text-[#DD6B20] font-semibold">💰 200.000đ ~ 250.000/người</p>
          </div>
        </div>

        <p className="mt-10 text-[#1F3329] text-base md:text-lg font-medium">
  📌 <strong>Menu chỉ mang tính chất tham khảo</strong>. Bạn có thể đặt món theo sở thích, chúng tôi sẽ đi chợ đúng yêu cầu – đảm bảo <strong>hóa đơn rõ ràng, minh bạch</strong>, có thể kiểm tra nguồn gốc và giá cả nếu cần.
</p>
<p className="mt-2 text-[#1F3329] text-base md:text-lg font-medium">
  🧑‍🍳 Dịch vụ bao gồm: <strong>rửa sạch – sơ chế sẵn – tẩm ướp và đóng gói gọn gàng</strong>. Bạn chỉ cần mang theo và nướng tại chỗ. Phù hợp với những nhóm đi cắm trại nhưng không có thời gian chuẩn bị.
</p>
<p className="mt-2 text-[#1F3329] text-base md:text-lg font-medium">
  💰 <strong>Phí dịch vụ: 90.000đ/người</strong> (chưa bao gồm chi phí nguyên liệu). Chúng tôi đi chợ giúp, chuẩn bị từ A-Z, bạn chỉ việc tận hưởng bữa tiệc BBQ giữa thiên nhiên.
</p>
<p className="mt-4 text-[#1F3329] text-base md:text-lg font-medium">
  📅 <strong>Đặt trước tối thiểu 24h</strong> để đảm bảo chất lượng. Nhận nhóm từ 5 người trở lên.
</p>



      </div>

    </div>
  )
}

export default ProductList
