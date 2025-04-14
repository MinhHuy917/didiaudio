'use client'

import React from 'react'

import Image from 'next/image'
import ban from '/src/images/ban.png'
import bepcui from '/src/images/bepcui.jpg'
import bepgas from '/src/images/bepgas.jpg'
import bepnuong from '/src/images/bepnuong.jpg'
import bonoi from '/src/images/bonoi.jpg'
import cachnhiet from '/src/images/cachnhiet.jpg'
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
import vonghoi from '/src/images/vonghoi.jpg'
import cafeden from '/src/images/cafeden.jpg'
import cafemuoi from '/src/images/cafemuoi.jpg'
import matong from '/src/images/matong.jpg'
import sacduphong from '/src/images/sacduphong.jpeg'
import tang from '/src/images/tang.jpg'
import tang3m from '/src/images/tang3m.jpg'
import thamdangoai from '/src/images/thamdangoai.jpg'
import thamvintage from '/src/images/thamvintage.jpg'
import thungda25L from '/src/images/thungda25L.jpg'
import thungdanho from '/src/images/thungda6.8L.jpeg'

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
    { id: 1, name: 'Lều 2 ', catalogue: '(1m4x2m)', image: leu2.src, price: 60, quantity: 1 },
    { id: 2, name: 'Lều 4', catalogue: '(2mx2m)', image: leu4.src, price: 80, quantity: 1 },
    { id: 3, name: 'Lều 6', catalogue: '(3mx2m7)', image: leu6.src, price: 140, quantity: 1 },
    { id: 4, name: 'Lều 8', catalogue: '(4mx2m)', image: leu8.src, price: 180, quantity: 1 },
    { id: 5, name: 'Cách nhiệt', catalogue: '(Miễn phí khi thuê lều)', image: cachnhiet.src, price: 0, quantity: 1 },
    { id: 6, name: 'Gối hơi', catalogue: '(Miễn phí khi thuê lều)', image: goihoi.src, price: 0, quantity: 1 },
    { id: 7, name: 'Ghế mặt trăng', catalogue: '(màu trắng kem, tải trọng 120kg)', image: ghe.src, price: 20, quantity: 1 },
    { id: 8, name: 'Bàn nhôm', catalogue: '(90cmx60cm)', image: ban.src, price: 40, quantity: 1 },
    { id: 9, name: 'Tăng 6-8 người', catalogue: '(3mx3m, kèm 2 trụ)', image: tang3m.src, price: 50, quantity: 1 },
    { id: 10, name: 'Tăng 12-16 người', catalogue: '(4m5x4m5, kèm 2 trụ)', image: tang.src, price: 100, quantity: 1 },
    { id: 11, name: 'Thảm dã ngoại', catalogue: '(2m1x2m)', image: thamdangoai.src, price: 25, quantity: 1 },
    { id: 12, name: 'Thảm vintage', catalogue: '(2mx2m)', image: thamvintage.src, price: 40, quantity: 1 },
    { id: 13, name: 'Đèn Sinh Hoạt', catalogue: '(Thời gian chiếu sáng 4-6h, đã kèm pin)', image: densinhhoat.src, price: 25, quantity: 1 },
    { id: 14, name: 'Đèn Vintage', catalogue: '(Thời gian chiếu sáng 8h-10h)', image: dendeban.src, price: 15, quantity: 1 },
    { id: 15, name: 'Đèn cầm tay', catalogue: '(Thời gian chiếu sáng 7-9h, đã sạc đầy pin)', image: dencamtay.src, price: 20, quantity: 1 },
    { id: 16, name: 'Đèn đội đầu', catalogue: '(Thời gian chiếu sáng 8-10h, đã sạc đầy pin)', image: dendoidau.src, price: 15, quantity: 1 },
    { id: 17, name: 'Đèn ngôi sao', catalogue: '(Thời gian chiếu sáng 7-8h, đã kèm pin)', image: denngoisao.src, price: 30, quantity: 1 },
    { id: 18, name: 'Dây đèn Led ', catalogue: '(Thời gian chiếu sáng 7-8h, đã kèm pin)', image: denled.src, price: 20, quantity: 1 },
    { id: 19, name: 'Loa Vintage', catalogue: '(Thời gian sử dụng 7-8h liên tục, đã kèm pin)', image: loa.src, price: 50, quantity: 1 },
    { id: 20, name: 'Sạc dự phòng', catalogue: 'Dung lượng 20.000 mAh đã sạc đầy', image: sacduphong.src, price: 30, quantity: 1 },
    { id: 21, name: 'Tripod', catalogue: 'Dùng cho cả máy ảnh và điện thoại', image: tripod.src, price: 40, quantity: 1 },
    { id: 22, name: 'Bếp nướng', catalogue: '(73cmx22cmx20cm, có kèm kẹp inox)', image: bepnuong.src, price: 40, quantity: 1 },
    { id: 23, name: 'Bếp củi', catalogue: '(125x125cmx16cm)', image: bepcui.src, price: 50, quantity: 1 },
    { id: 24, name: 'Bếp gas', catalogue: '(Chưa kèm gas)', image: bepgas.src, price: 50, quantity: 1 },
    { id: 25, name: 'Bộ nồi', catalogue: '(ấm, chảo, nồi)', image: bonoi.src, price: 30, quantity: 1 },
    { id: 26, name: 'Thùng đá nhỏ', catalogue: '(8L)', image: thungdanho.src, price: 20, quantity: 1 },
    { id: 27, name: 'Thùng đá lớn', catalogue: '(25L)', image: thungda25L.src, price: 40, quantity: 1 },
    { id: 28, name: 'Võng hơi Naturehike', catalogue: '(Tải trọng đến 150kg)', image: vonghoi.src, price: 80, quantity: 1 },
    { id: 29, name: 'Cafe Đen ', catalogue: '250ml', image: cafeden.src, price: 60, quantity: 1, isRental: false },
    { id: 30, name: 'Cafe Muối', catalogue: '250ml', image: cafemuoi.src, price: 80, quantity: 1, isRental: false },
    { id: 31, name: 'Mật ong rừng', catalogue: '500ml', image: matong.src, price: 600, quantity: 1, isRental: false },

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
                className="w-full h-full object-cover rounded"
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
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 font-sans text-[#1F3329]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">
        🎪 BẢNG GIÁ THUÊ ĐỒ DÃ NGOẠI
      </h2>

      {renderSection('Lều trại', (p) => p.name.includes('Lều') || p.name.includes('Gối') || p.name.includes('Cách nhiệt'))}
      {renderSection('Tăng & Thảm', (p) => p.name.includes('Tăng') || p.name.includes('Võng') || p.name.includes('Thảm'))}
      {renderSection('Bàn Ghế', (p) => p.name.includes('Bàn') || p.name.includes('Ghế'))}
      {renderSection('Đèn', (p) => p.name.includes('Đèn'))}
      {renderSection('Phụ kiện tiện ích', (p) => p.name.includes('Loa') || p.name.includes('Tripod') || p.name.includes('Sạc'))}
      {renderSection('Dụng cụ nấu ăn', (p) => p.name.includes('Bếp') || p.name.includes('nồi'))}
      {renderSection('Thùng đá', (p) => p.name.includes('Thùng'))}
      {renderSection('Cafe & Mật Ong', (p) => p.name.includes('Cafe') || p.name.includes('Mật ong'))}
      <div className="text-center mt-20 text-[#1F3329] bg-[#FAF9F7] py-12 px-6 rounded-2xl shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">🍽️ DỊCH VỤ SET UP BBQ & ĐỒ ĂN CAMPING</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[#3E5245]">
          Thưởng thức bữa ăn ngoài trời phong phú, tươi ngon và tiện lợi. Mọi món ăn được sơ chế sẵn, đóng gói vệ sinh, chỉ việc nướng và thưởng thức cùng bạn bè!
        </p>



        <div className="mt-10 grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {/* Set Hải Sản */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E6E4DF]">
            <h3 className="text-xl font-bold mb-3 text-[#1F3329]">🦐 Set Hải Sản</h3>
            <ul className="list-disc pl-5 space-y-1 text-[#3E5245] text-sm leading-relaxed">
              <li>Hàu sữa phô mai nướng</li>
              <li>Ốc hương xào bơ tỏi</li>
              <li>Chip Chip hấp sả</li>
              <li>Sò mai mỡ hành</li>
              <li>Cá dìm nướng giấy bạc</li>
              <li>Tôm nướng muối ớt</li>
              <li>Trái cây tráng miệng: Dưa hấu, Nho</li>
            </ul>
            <p className="mt-4 text-[#DD6B20] font-semibold">💰 150.000đ/người</p>
          </div>

          {/* Set Thịt Nướng */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E6E4DF]">
            <h3 className="text-xl font-bold mb-3 text-[#1F3329]">🍖 Set Thịt Nướng</h3>
            <ul className="list-disc pl-5 space-y-1 text-[#3E5245] text-sm leading-relaxed">
              <li>Gà nướng nguyên con ướp mật ong</li>
              <li>Ba chỉ heo ướp BBQ</li>
              <li>Nem nướng</li>
              <li>Rau củ nướng: bắp, đậu bắp, ớt chuông</li>
              <li>Bánh mì bơ tỏi</li>
              <li>Xà lách trộn</li>
              <li>Trái cây: Thơm, Dưa lưới</li>
            </ul>
            <p className="mt-4 text-[#DD6B20] font-semibold">💰 130.000đ/người</p>
          </div>

          {/* Set Thập Cẩm */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E6E4DF]">
            <h3 className="text-xl font-bold mb-3 text-[#1F3329]">🍢 Set Thập Cẩm</h3>
            <ul className="list-disc pl-5 space-y-1 text-[#3E5245] text-sm leading-relaxed">
              <li>Gà nướng nguyên con</li>
              <li>Ốc hương xào bơ tỏi</li>
              <li>Chip Chip hấp sả</li>
              <li>Ba chỉ heo ướp</li>
              <li>Rau củ nướng</li>
              <li>Xôi lá cẩm hoặc cơm nắm mè</li>
              <li>Trái cây: Dưa hấu, Thanh long</li>
            </ul>
            <p className="mt-4 text-[#DD6B20] font-semibold">💰 140.000đ/người</p>
          </div>
        </div>

        <p className="mt-10 text-[#1F3329] text-base md:text-lg font-medium">
          📅 <strong>Đặt trước tối thiểu 24h</strong> để đảm bảo chất lượng. Nhận chuẩn bị theo yêu cầu riêng cho nhóm từ 5 người trở lên.
        </p>
      </div>

    </div>
  )
}

export default ProductList
