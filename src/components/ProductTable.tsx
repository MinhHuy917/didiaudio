'use client'

import React, { useState } from 'react'

type Product = {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    // Lều 2,4,6,10.. & Lều chữ A, Lều thay đồ free cách nhiệt kèm theo
    {
      id: 1,
      name: 'Lều 2 Naturehike',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/82a14b24-1df7-4c36-85e8-02eae721c1ef.jpg?v=1711087412123',
      price: 599,
      quantity: 1,
    },
    {
      id: 1,
      name: 'Lều 4 Naturehike',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/fer02807.jpg?v=1696578557973',
      price: 599,
      quantity: 1,
    },
    {
      id: 1,
      name: 'Lều 6 Euruka',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/16cb6bc3-0340-4a05-b9b5-6af0ca5cf55f.jpg?v=1651891736957',
      price: 599,
      quantity: 1,
    },
    {
      id: 1,
      name: 'Lều 10 bear',
      image: 'https://www.leudulich.vn/upload/sanpham3/Nnay2sCa2P.jpg',
      price: 599,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Cách nhiệt',
      image:
        'https://salt.tikicdn.com/ts/product/c7/85/de/81fb45fc53257b438e8ce17719a41401.jpg',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Thảm lót lều',
      image:
        'https://www.nature-hike.vn/wp-content/uploads/2019/10/Untitled-1.jpg',
      price: 999,
      quantity: 1,
    },
    // Tăng
    {
      id: 2,
      name: 'Tăng 4-6 người',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/nh20tm006-5-720x-jpeg-c92b99f1-dc83-461a-95db-d394bfde89d0.jpg?v=1624181023147',
      price: 2499,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Tăng 8-12 người',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/dji-0459.jpg?v=1720436765893',
      price: 2499,
      quantity: 1,
    },

    // Bàn ghế dã ngoại

    {
      id: 3,
      name: 'Bàn Naturehike',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/ban-gap-da-ngoai-mat-nhom-size-s-naturehike-portable-aluminium-folding-table-nh16z016-l-9536.png?v=1613908727157',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bàn Gỗ Naturehike',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/ban-go-cuon-da-ngoai-vua-1713169777153.jpg?v=1722549925207',
      price: 999,
      quantity: 1,
    },

    {
      id: 3,
      name: 'Ghế Thổ Cẩm',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/f84801d1-a5cb-4bd7-892b-4d9e39628703.jpg?v=1651891272480',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Ghế Naturehike',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/cho-thue-ghe-da-ngoai-vintage.jpg?v=1715846303690',
      price: 999,
      quantity: 1,
    },

    // Đèn lều , đèn trang trí
    {
      id: 3,
      name: 'Đèn Lều',
      image:
        'https://bizweb.dktcdn.net/thumb/large/100/163/023/products/56f128a0-fc99-4c0d-b254-fa1294cc354f.jpg?v=1652109909667',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Đèn vintage',
      image:
        'https://thueleudulich.com/wp-content/uploads/2016/05/cho-thue-den-long-vintage.jpeg',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Đèn trang trí',
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjafxxrWZBLyRGHeFDSAH-LcXIxfNFrcEtSy3RN45JCO0aEBEzGZ-id7S_8CvoyvOUGvaatZ_SAdufB5KipOfQtdlb9ljoNcEPwpW3EJs&usqp=CAc',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Đèn ngôi sao',
      image:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRyHOSKrdEjjfzhA9CG9X4s5IS9fU0V1teJ1aCaqQM2PMQgGCLLW03KfE2e8ha77jkCAzxwob1CQcAWljHiUnGS9zgdVkaqADmTCKQnmp_b9Fy1cl_QueK&usqp=CAc',
      price: 999,
      quantity: 1,
    },

    // Bếp   & dụng cụ nấu
    {
      id: 3,
      name: 'Bếp nướng',
      image:
        'https://armyhaus.com/wp-content/uploads/2020/03/bep-nuong-campingmoon-mt3-1.jpg',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bếp gas dã ngoại',
      image:
        'https://product.hstatic.net/200000467803/product/fanfan-bep-gas-da-ngoai-gap-gon-ms-100-1_77c8240ccd3f45c0a39087352ed65b86.jpg',
      price: 999,
      quantity: 1,
    },
    // Phụ kiện cắm trại (Khăn trải bàn thổ cẩm, Đèn,quạt,loa nghe nhạc,túi ngủ,võng,..)
    {
      id: 3,
      name: 'Khăn trải bàn thổ cẩm',
      image: '      https://philong.com.vn/media/product/27880-j2.jpg',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Khăn trải bàn thổ cẩm',
      image:
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfvct6n8nc6i9d',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Quạt tích điện',
      image:
        'https://product.hstatic.net/1000217316/product/quat-treo-da-nang-naturehike-nh21zm003_c959ec911ceb40a3910705897950cc47_master.jpg',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Túi ngủ',
      image:
        'https://www.nature-hike.vn/wp-content/uploads/2018/07/tu%CC%81i-ngu%CC%89-va%CC%86n-pho%CC%80ng-LV180.jpg',
      price: 999,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Võng',
      image:
        'https://product.hstatic.net/200000832593/product/vong_doi_sieu_nhe_naturehike_ultralight_double_person_hammock-mau_cam_f1ea42b484b84010b35026e84436fddd_master.jpg',
      price: 999,
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
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Sản phẩm
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Qty
            </th> */}
            <th scope="col" className="px-6 py-3">
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
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img
                  src={product.image}
                  className="max-h-full w-16 max-w-full md:w-32"
                  alt={product.name}
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {product.name}
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
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
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
