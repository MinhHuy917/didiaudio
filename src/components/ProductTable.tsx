'use client'

import React from 'react'

import Image from 'next/image'
import { products } from "@/data/products"
import Link from 'next/link'



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
            <Link
            href={`/products/${product.id}`}
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
                      {product.price}k/ngày
                    </span>
                  )}
                </div>
              </div>
            </Link>
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
      {renderSection('Bàn Ghế', (p) => p.name.includes('Bàn') || p.name.includes('Ghế') || p.name.includes('Khăn') || p.name.includes('Chân treo đèn'))}
      {renderSection('Tăng, Thảm', (p) => p.name.includes('Tăng') || p.name.includes('Thảm'))}
      {renderSection('Đèn', (p) => p.name.includes('Đèn'))}
      {renderSection('Phụ kiện tiện ích', (p) => p.name.includes('Loa') || p.name.includes('Quạt') || p.name.includes('Tripod') || p.name.includes('Sạc') || p.name.includes('Bộ bài'))}
      {renderSection('Dụng cụ nấu ăn', (p) => p.name.includes('Bếp') || p.name.includes('nồi') || p.name.includes('Nồi') || p.name.includes('Ấm') || p.name.includes('Tay quay nướng gà') || p.name.includes('Máy nướng gà tự động') || p.name.includes('Đầu khò'))} 
      {renderSection('Thùng đá', (p) => p.name.includes('Thùng'))}
      {renderSection('Cafe & Mật Ong', (p) => p.name.includes('Cafe') || p.name.includes('Mật ong'))}


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
