'use client'

import React, { useState } from 'react'

import leu2 from '/src/images/leu2.jpg'
import leu4 from '/src/images/leu4.jpg'
import leu6 from '/src/images/leu6.jpg'
import leu8 from '/src/images/leu8.jpg'
import cachnhiet from '/src/images/cachnhiet.jpg'
import thamdangoai from '/src/images/thamdangoai.jpg'
import goihoi from '/src/images/goihoi.jpg'
import ghe from '/src/images/ghe.png'
import ban from '/src/images/ban.png'
import tang from '/src/images/tang.jpg'
import loa from '/src/images/loa.jpg'
import densinhhoat from '/src/images/densinhhoat.jpg'
import dendeban from '/src/images/dendeban.jpg'
import dendoidau from '/src/images/dendoidau.jpg'
import dencamtay from '/src/images/dencamtay.jpg'
import denled from '/src/images/denled.png'
import denngoisao from '/src/images/denngoisao.png'
import bepnuong from '/src/images/bepnuong.jpg'
import bepcui from '/src/images/bepcui.jpg'
import bepgas from '/src/images/bepgas.jpg'
import bonoi from '/src/images/bonoi.jpg'
import thungda25L from '/src/images/thungda25L.jpg'


type Product = {
  id: number
  name: string
  catalogue: string
  image: any
  price: number
  quantity: number
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Lều 2 ',
      catalogue: '(1m4x2m)',
      image:
      leu2.src,
      price: 60,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Lều 4',
      catalogue: '(2mx2m)',
      image:
        leu4.src,
      price: 80,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Lều 6',
      catalogue: '(3mx2m7)',
      image:
        leu6.src,
      price: 140,
      quantity: 1,
    },
    {
      id: 4,
      name: 'Lều 8',
      catalogue: '(4mx2m)',
      image: leu8.src,
      price: 180,
      quantity: 1,
    },
    
    {
      id: 3,
      name: 'Cách nhiệt',
      catalogue: '(2mx2m - Miễn phí khi thuê cùng lều)',
      image:
      cachnhiet.src,
      price: 0,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Gối hơi',
      catalogue: '(1m4x2m - Miễn phí khi thuê cùng lều)',
      image:
        goihoi.src,
      price: 0,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Thảm dã ngoại',
      catalogue: '(2m1x2m)',
      image:
        thamdangoai.src,
      price: 20,
      quantity: 1,
    },
    
   

    // Bàn ghế dã ngoại
    {
      id: 3,
      name: 'Ghế mặt trăng',
      catalogue: '(47cmx47cmx68cm)',
      image:
        ghe.src,
      price: 15,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bàn nhôm',
      catalogue: '90x60',
      image:
        ban.src,
      price: 40,
      quantity: 1,
    },

    // Tăng
    {
      id: 2,
      name: 'Tăng 4m5x4m5 (kèm 2 trụ)',
      catalogue: '(1m4x2m)',
      image:
        tang.src,
      price: 60,
      quantity: 1,
    },
   
  

    // Đèn lều , đèn trang trí
    {
      id: 3,
      name: 'Đèn Sinh Hoạt',
      catalogue: '(Kèm 2 pin sạc đầy, chiếu sáng 4-6h)',
      image:
        densinhhoat.src,
      price: 20,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Đèn để bàn',
      catalogue: '(Đã sạc pin 4-5h chiếu sáng)',
      image:
        dendeban.src,
      price: 15,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Đèn cầm tay',
      catalogue: '(Thời gian chiếu sáng 4-6h)',
      image:
        dencamtay.src,
      price: 15,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Đèn đội đầu',
      catalogue: '(Đã sạc pin 6-10h chiếu sáng)',
      image:
        dendoidau.src,
      price: 10,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Đèn ngôi sao',
      catalogue: '(Dài 4m, đèn dùng 3 pin con thỏ, chưa kèm pin)',
      image:
        denngoisao.src,
      price: 20,
      quantity: 1,
    },

    {
      id: 3,
      name: 'Dây đèn Led ',
      catalogue: '(Dài 6m, đèn dùng 3 pin con thỏ, chưa kèm pin)',
      image:
        denled.src,
      price: 10,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Loa mini vintage',
      catalogue: '(Thời gian sử dụng: 6-10h liên tục )',
      image:
        loa.src,
      price: 50,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bếp nướng',
      catalogue: '(73cmx21,5cmx20cm)',
      image: bepnuong.src,
      price: 40,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bếp củi',
      catalogue: '(125x125cmx160mm)',
      image:
        bepcui.src,
      price: 30,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bếp gas',
      catalogue: '(Kèm bình gas mới)',
      image:
        bepgas.src,
      price: 50,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bộ nồi',
      catalogue: '(ấm, chảo, nồi)',
      image:
        bonoi.src,
      price: 30,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Thùng đá',
      catalogue: '(25L)',
      image:
        thungda25L.src,
      price: 40,
      quantity: 1,
    },
  ])

  

  const handleQuantityChange = (id: number, delta: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product,
      ),
    )
  }

  const handleRemove = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    )
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-[#EFE9DA] border-b border-[#6A8F6B] dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-0 text-[#1F3329] text-lg py-3">
              Sản phẩm
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Qty
            </th> */}
            <th scope="col" className="px-0 text-[#1F3329] text-lg py-3">
              Giá
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Action
            </th> */}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b bg-white border-[#6A8F6B] dark:bg-[#EFE9DA] "
            >
              <td className="p-4">
                <img
                  src={product.image}
                  className="h-20 w-20 md:h-32 md:w-32 rounded-md object-cover "
                  alt={product.name}
                />
              </td>
              <td className="font-[system-ui] px-0 py-4 font-semibold text-gray-900 dark:text-[#1F3329]">
                {product.name}
                <p className="text-sm text-gray-600 dark:text-[#2D4B3A]">{product.catalogue}</p>
              </td>

              {/* // Chọn số lượng lều thuê và gửi tới mail  */}
              {/* <td className="px-6 py-4">
                <div className="flex items-center">
                  <button
                    className="me-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => handleQuantityChange(product.id, -1)}
                  >
                    <span className="sr-only">Decrease quantity</span>
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="number"
                    className="block w-14 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={product.quantity}
                    readOnly
                  />
                  <button
                    className="ms-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    <span className="sr-only">Increase quantity</span>
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </td> */}
              <td className="font-[system-ui] px-2 py-4 font-semibold text-gray-900 dark:text-[#1F3329]">
                {product.price}k/ngày
              </td>
              {/* <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  //   onClick={() => handleRemove(product.id)}
                >
                  Xem chi tiết
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
