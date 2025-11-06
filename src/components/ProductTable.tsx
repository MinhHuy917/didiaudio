'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { products } from "@/data/products"
import Link from 'next/link'
import QR from '/src/images/qr2.png'
import { IconAll, IconTent, IconMat, IconTable, IconLight, IconAccessory, IconCooking, IconIce } from "@/components/icons/CampIcons";

const CATEGORY_DEFS = [
  { label: 'Tất cả', value: 'all', Icon: IconAll },
  { label: 'Lều & Võng', value: 'tent', Icon: IconTent },
  { label: 'Tăng, Thảm', value: 'mat', Icon: IconMat },
  { label: 'Bàn Ghế', value: 'table', Icon: IconTable },
  { label: 'Đèn & Giá treo', value: 'light', Icon: IconLight },
  { label: 'Loa, Quạt, Sạc', value: 'accessory', Icon: IconAccessory },
  { label: 'Dụng cụ nấu', value: 'cooking', Icon: IconCooking },
  { label: 'Thùng đá', value: 'ice', Icon: IconIce },
] as const;


type Product = {
  id: any
  name: string
  catalogue: string
  image: any
  price: number
  quantity: number
  isRental?: boolean
}

const FilterBar: React.FC<{ selected: string; onChange: (v: string) => void; }> = ({ selected, onChange }) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 gap-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {CATEGORY_DEFS.map(({ value, label, Icon }) => {
          const active = selected === value;
          return (
            <button
              key={value}
              onClick={() => onChange(value)}
              aria-pressed={active}
              className={[
                "group flex items-center rounded-xl border transition-all duration-200",
                "px-3 py-2 text-[13px] sm:px-4 sm:py-2.5 sm:text-sm",
                active
                  ? "border-green-700 bg-green-50 text-green-900 shadow-sm"
                  : "border-gray-200 bg-white text-gray-800 hover:border-green-600 hover:bg-green-50",
                "focus:outline-none focus:ring-2 focus:ring-green-600/30"
              ].join(" ")}
            >
              <span className={["mr-2 flex-shrink-0", active ? "text-green-700" : "text-gray-700", "h-6 w-6 sm:h-7 sm:w-7"].join(" ")}>
                <Icon className="h-full w-full" />
              </span>
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};



const categoryOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Lều võng', value: 'tent' },
  { label: 'Tăng, Thảm', value: 'mat' },
  { label: 'Bàn Ghế', value: 'table' },
  { label: 'Đèn, giá treo đèn', value: 'light' },
  { label: 'Phụ kiện tiện ích', value: 'accessory' },
  { label: 'Dụng cụ nấu ăn', value: 'cooking' },
  { label: 'Thùng đá, túi đựng nước', value: 'ice' },
]

const ProductList: React.FC = () => {
  const [filterText, setFilterText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categoryFilterMap: Record<string, (p: Product) => boolean> = {
    all: () => true,
    tent: (p) => p.name.includes('Lều') || p.name.includes('Võng') || p.name.includes('Gối') || p.name.includes('Tấm cách nhiệt'),
    table: (p) => p.name.includes('Bàn') || p.name.includes('Ghế') || p.name.includes('Khăn') ,
    mat: (p) => p.name.includes('Tăng') || p.name.includes('Bộ 2 Cây Chống Tăng') || p.name.includes('Thảm'),
    light: (p) => p.name.includes('Đèn') || p.name.includes('Giá chân treo đèn 1m') || p.name.includes('Trụ treo đèn 1m8') ,
    accessory: (p) => p.name.includes('Loa') || p.name.includes('Loa') || p.name.includes('Quạt') || p.name.includes('Tripod') || p.name.includes('Sạc') || p.name.includes('Bộ bài'),
    cooking: (p) => p.name.includes('Bếp') || p.name.includes('nồi') || p.name.includes('Nồi') || p.name.includes('Ấm') || p.name.includes('Tay quay nướng inox') || p.name.includes('Máy nướng tự động') || p.name.includes('Đầu khò') || p.name.includes('Bình gas') || p.name.includes('Than gáo dừa') || p.name.includes('Viên mồi than'),
    ice: (p) => p.name.includes('Thùng') || p.name.includes('Túi đựng nước'),
  }

  const combinedFilter = (p: Product) => {
    const matchesCategory = categoryFilterMap[selectedCategory](p)
    const matchesText =
      filterText === '' ||
      p.name.toLowerCase().includes(filterText.toLowerCase()) ||
      p.catalogue.toLowerCase().includes(filterText.toLowerCase())
    return matchesCategory && matchesText
  }


  const filteredProducts = products.filter(combinedFilter)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 font-sans text-[#1F3329]">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-8 tracking-wide flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6h13M9 12h13m0 0V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h10" />
        </svg>
        BẢNG GIÁ THUÊ
      </h2>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      
      </div>

{/* Filter Section (new, no scroll) */}
<FilterBar selected={selectedCategory} onChange={setSelectedCategory} />



      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
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
                className="w-full h-[180px] object-cover rounded"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-[#1F3329] leading-tight">{product.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-[#2D4B3A] mt-1">{product.catalogue}</p>
                </div>
                {/* <div className="mt-3 text-sm md:text-base font-semibold text-[#1F3329]">
                  {product.price === 0 ? (
                    <span className="text-green-600">Miễn phí</span>
                  ) : (
                    <span className="text-orange-600">
                      {product.price}k{product.isRental ? "" : "/ngày"}
                    </span>
                  )}
                </div> */}
  <div className="mt-2">
  {product.price === 0 ? (
    <span className="text-green-600 font-medium text-xs sm:text-sm">Miễn phí</span>
  ) : product.originalPrice && product.originalPrice > product.price ? (
    <div className="flex flex-col">
      {/* Giá gốc */}
      <span className="text-gray-400 line-through text-[11px] sm:text-xs">
        {product.originalPrice}k{product.isRental ? "" : "/ngày"}
      </span>

      {/* Giá sale + badge giảm */}
      <div className="flex items-center gap-1.5">
        <span className="text-orange-600 font-semibold text-sm sm:text-base">
          {product.price}k{product.isRental ? "" : "/ngày"}
        </span>
        <span className="bg-red-500 text-white text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
        </span>
      </div>
    </div>
  ) : (
    <span className="text-orange-600 font-semibold text-sm sm:text-base">
      {product.price}k{product.isRental ? "" : "/ngày"}
    </span>
  )}
</div>



              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Không tìm thấy sản phẩm phù hợp.</p>
      )}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6 my-12">
        <h2 className="text-2xl font-bold text-gray-800">Chính sách thuê lều</h2>

        {/* 1. Đặt cọc & thanh toán */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">1. Đặt cọc & Thanh toán</h3>
          <p className="text-gray-700 leading-relaxed">
            Khi thuê lều, vui lòng mang theo <span className="font-medium">CCCD hoặc GPLX</span> để bên mình đối chiếu và <span className="font-medium">chụp ảnh làm cơ sở cọc</span> (chỉ lưu thông tin, <span className="italic">không giữ giấy tờ</span>).
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
              <span className="font-semibold">Ví dụ:</span> Nếu bạn đi cắm trại vào <span className="font-medium">thứ 7</span> và cần đi sớm, bạn có thể ghé lấy lều từ tối <span className="font-medium">thứ 6</span> mà không tính thêm phí.
              Khi trả lều, bạn có thể trả trong ngày <span className="font-medium">Chủ Nhật</span>.
              Nhưng nếu giữ lều qua đêm Chủ Nhật và trả vào <span className="font-medium">thứ 2</span> hoặc sau đó, shop sẽ tính thêm <span className="font-semibold">50% giá thuê cho mỗi ngày tiếp theo</span>.
            </p>
          </div>
        </div>

        {/* 3. Đền bù thiệt hại */}
        <div>
          <h4 className="text-base font-semibold text-red-700 mt-3 mb-1">📌 Đền bù thiệt hại</h4>
          <p className="text-gray-700 leading-relaxed">
            Khi trả lại, nếu <span className="font-medium">thiết bị hư hỏng, mất mát hoặc quá bẩn không thể chùi rửa được</span>,
            shop sẽ <span className="font-semibold">tính phí vệ sinh, sửa chữa hoặc yêu cầu bồi thường</span> theo <span className="font-semibold text-red-700">giá trị thị trường hiện tại</span> của sản phẩm.
          </p>
        </div>

        {/* 4. Những điều không nên */}
        <div>
          <h4 className="text-base font-semibold text-yellow-600 mt-3 mb-1">⚠️ Những điều không nên</h4>
          <p className="text-gray-700 leading-relaxed">
            Để tránh làm hỏng thiết bị và giữ đồ dùng luôn sạch sẽ, <span className="font-semibold text-red-700">vui lòng KHÔNG sử dụng</span> <span className="font-medium">tấm phủ lều</span> (tấm phủ bên trên lều) và <span className="font-medium">tấm tăng chữ A</span> (tấm che nắng, che mưa dựng kiểu chữ A) để <span className="font-semibold">ngồi, nằm, hoặc trải dưới nền đất</span>.
          </p>
        </div>

          {/* 5.QR */} Thanh toán không tiền mặt
          <div>
    <h4 className="text-base font-semibold text-green-700 mt-3 mb-2">💳 Thanh toán không tiền mặt</h4>
    <p className="text-gray-700 leading-relaxed mb-3">
      Bạn có thể quét mã QR bên dưới để thanh toán nhanh chóng và tiện lợi.
    </p>
    <div className="flex justify-center">
  <img
    src={QR.src}
    alt="QR Thanh toán"
    className="max-w-xs rounded-lg border border-gray-300 shadow-md bg-white p-2"
  />
</div>

  </div>
      </div>

    </div>
    
  )
}

export default ProductList
