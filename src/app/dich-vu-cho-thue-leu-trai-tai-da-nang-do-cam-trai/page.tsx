


// components/DididiCampingRental.js
import Image from 'next/image'
import leu2 from '/src/images/leu2/1.png'
import leu4anh2 from '/src/images/leu4/2.png'
import leu6anh1 from '/src/images/leu6/1.png'
import leu8 from '/src/images/leu8.jpg'
import vonganh1 from '/src/images/vong/0.png'
import goihoianh2 from '/src/images/goihoi/2.png'
import cachnhiet from '/src/images/tamcachnhiet.png'
import ghe from '/src/images/ghe.png'
import khanban from '/src/images/khanbanthocam.png'
import amnuoc from '/src/images/amnuoc.png'
import baimasoi from '/src/images/baimasoi.png'
import ban from '/src/images/ban.png'
import bepcon from '/src/images/bepcon.png'
import bepcui from '/src/images/bepcui.jpg'
import bepgas from '/src/images/bepgas.jpg'
import bepnuong from '/src/images/bepnuong.jpg'
import bonoi from '/src/images/bonoi3mon.png'
import chanden from '/src/images/chanden.png'
import daukho from '/src/images/daukho.png'
import dencamtay from '/src/images/dencamtay.jpg'
import dendeban from '/src/images/dendeban.jpg'
import dendoidau from '/src/images/dendoidau.jpg'
import loa from '/src/images/loatronsmart.png'
import denled from '/src/images/denled.png'
import denngoisao from '/src/images/denngoisao.png'
import denleu from '/src/images/denleu/0.png'
import densinhhoat from '/src/images/densinhhoat/5.png'
import gheNH1 from '/src/images/gheNH16J001-J/1.jpg'
import banNH1 from '/src/images/banNH22JU050/1.png'
import banNHM from '/src/images/bannaturehikesizem/00.png'
import banNHL from '/src/images/bannaturehikesizel/0.jpg'
import tang3manh1 from '/src/images/tang3m/1.png'
import tang4m5anh1 from '/src/images/tang4m5/1.png'
import maynuongtudong from '/src/images/maynuongtudong.png'
import noi4L from '/src/images/noi4L.png'
import quat from '/src/images/quat.png'
import sacduphong from '/src/images/sacduphong.jpeg'
import tayquaynuongga from '/src/images/tayquaynuongga.jpg'
import thamdangoai from '/src/images/thamdangoai.jpg'
import thamvintage from '/src/images/thamvintage2.png'
import thungda16L from '/src/images/thungda16L.jpg'
import thungdanho from '/src/images/thungda6.8L.jpeg'
import thungda25L from '/src/images/thungdac2.png'
import tripod from '/src/images/tripod.jpg'
import vienmoithan1 from '/src/images/vien-moi-than/1.png'
import than1 from '/src/images/than/1.png'
import caytrutreodenanh2 from '/src/images/caytrutreoden/2.png'
import binhgas1 from '/src/images/binhgas/1.jpg'
import TuiMangNuocCoVoi1 from '/src/images/TuiMangNuocCoVoi/1.jpg'
import loakaraoke from '/src/images/loakaraoke/0.jpg'
import Link from 'next/link'
import bepnuongMT3 from '/src/images/bepnuongMT3/0.png'

const rentalItems = [
  // Lều trại
  { id: 'thue-leu-2-da-nang', name: 'Lều 2P (2 lớp, 1.4 × 2 m)', price: '70.000 VNĐ', type: 'ngày', image: leu2 },
  { id: 'thue-leu-4-da-nang', name: 'Lều 4P (2 lớp, 2.1 × 2.1 m)', price: '90.000 VNĐ', type: 'ngày', image: leu4anh2 },
  { id: 'thue-leu-6-da-nang', name: 'Lều 6P (cao thoáng, chống mưa tốt)', price: '140.000 VNĐ', type: 'ngày', image: leu6anh1 },
  { id: 'thue-leu-8-da-nang', name: 'Lều 8P Dragon Dome', price: '180.000 VNĐ', type: 'ngày', image: leu8 },
  // Võng, gối, cách nhiệt
  {  id: 'vong-don', name: 'Võng đơn NatureHike', price: '40.000 VNĐ', type: 'ngày', image: vonganh1 },
  {  id: 'goi-hoi-intex', name: 'Gối hơi Intex (kèm bơm)', price: '5.000 VNĐ', type: 'ngày', image: goihoianh2 },
  { id: 'tam-cach-nhiet', name: 'Tấm cách nhiệt', price: 'Miễn phí', type: 'ngày', image: cachnhiet },
  // Bàn ghế
  {  id: 'thue-ghe-camping-da-nang', name: 'Ghế mặt trăng', price: '20.000 VNĐ', type: 'ngày', image: ghe },
  {  id: 'ghe-naturehike-nh16j001-j', name: 'Ghế NatureHike', price: '30.000 VNĐ', type: 'ngày', image: gheNH1 },
  { id: 'thue-ban-camping-da-nang', name: 'Bàn nhôm 90×60 cm', price: '50.000 VNĐ', type: 'ngày', image: ban },
  {  id: 'ban-nhom-naturehike-cnh22ju050', name: 'Bàn nhôm Naturehike CNH22JU050 - Size S', price: '60.000 VNĐ', type: 'ngày', image: banNH1 },
  {  id: 'ban-nhom-naturehike-NH16Z016L-Size-M', name: 'Bàn nhôm Naturehike NH16Z016L - Size M', price: '80.000 VNĐ', type: 'ngày', image: banNHM },
  {  id: 'ban-nhom-naturehike-NH16Z016L-Size-L', name: 'Bàn nhôm Naturehike NH16Z016L - Size L', price: '120.000 VNĐ', type: 'ngày', image: banNHL },
  {  id: 'khan-ban-tho-cam', name: 'Khăn bàn thổ cẩm', price: '10.000 VNĐ', type: 'ngày', image: khanban },
  {  id: 'chan-treo-den', name: 'Giá chân treo đèn 1m', price: '20.000 VNĐ', type: 'ngày', image: chanden },
  {  id: 'tru-cot-gia-treo-den', name: 'Trụ treo đèn 1m8', price: '25.000 VNĐ', type: 'ngày', image: caytrutreodenanh2 },
  // Tăng & thảm
  {  id: 'tang-9m2', name: 'Tăng 4–6P (3 × 3 m)', price: '50.000 VNĐ', type: 'ngày', image: tang3manh1 },
  {   id: 'tang-20m2', name: 'Tăng 8–12P (4.5 × 4.5 m)', price: '100.000 VNĐ', type: 'ngày', image: tang4m5anh1 },
  {  id: 'tham-da-ngoai', name: 'Thảm dã ngoại 2.1 × 2 m', price: '25.000 VNĐ', type: 'ngày', image: thamdangoai },
  { id: 'tham-vintage', name: 'Thảm Vintage 2 × 2 m', price: '40.000 VNĐ', type: 'ngày', image: thamvintage },
  // Đèn
   { id: 'den-sinh-hoat', name: 'Đèn sinh hoạt', price: '50.000 VNĐ', type: 'ngày', image: densinhhoat },
   { id: 'den-leu', name: 'Đèn lều', price: '20.000 VNĐ', type: 'ngày', image: denleu },
  { id: 'den-vintage', name: 'Đèn Vintage', price: '15.000 VNĐ', type: 'ngày', image: dendeban },
  { id: 'den-led-tron', name: 'Đèn led tròn', price: '20.000 VNĐ', type: 'ngày', image: denled },
  { id: 'den-led-ngoi-sao', name: 'Đèn led ngôi sao', price: '30.000 VNĐ', type: 'ngày', image: denngoisao },
 
  // Tiện ích
  { id: 'sac-du-phong', name: 'Sạc dự phòng 20.000 mAh', price: '30.000 VNĐ', type: 'ngày', image: sacduphong },
  { id: 'thue-loa-nghe-nhac-da-nang', name: 'Loa Tronsmart T7 Mini', price: '50.000 VNĐ', type: 'ngày', image: loa },
  { id: 'thue-loa-karaoke-xach-tay-da-nang', name: 'Loa Karaoke Xách Tay', price: '290.000 VNĐ', type: 'ngày', image: loakaraoke },
  {  id: 'quat-tich-dien', name: 'Quạt tích điện (pin 20.000 mAh + đèn)', price: '60.000 VNĐ', type: 'ngày', image: quat },
  { id: 'thue-trippd-da-nang', name: 'Tripod (remote)', price: '40.000 VNĐ', type: 'ngày', image: tripod },
  { name: 'Bộ bài ma sói', price: '10.000 VNĐ', type: 'ngày', image: baimasoi },
  // Nấu ăn
  { id: 'thue-bep-nuong-da-nang', name: 'Bếp nướng Nhỏ', price: '40.000 VNĐ', type: 'ngày', image: bepnuong },
  { id: 'cho-thue-bep-nuong-da-nang', name: 'Bếp Nướng Lớn', price: '70.000 VNĐ', type: 'ngày', image: bepnuongMT3 },
  {  id: 'bep-cui', name: 'Bếp củi', price: '40.000 VNĐ', type: 'ngày', image: bepcui },
  {  id: 'bep-con', name: 'Bếp gas (không gas)', price: '50.000 VNĐ', type: 'ngày', image: bepgas },
  { name: 'Bếp cồn', price: '20.000 VNĐ', type: 'ngày', image: bepcon },
  {   id: 'bo-noi-4-nguoi', name: 'Bộ nồi 3–4P', price: '30.000 VNĐ', type: 'ngày', image: bonoi },
  {  id: 'noi-treo-4l', name: 'Nồi treo 4 L', price: '50.000 VNĐ', type: 'ngày', image: noi4L },
  {  id: 'noi-4l', name: 'Nồi 4 L', price: '30.000 VNĐ', type: 'ngày', image: noi4L },
  {   id: 'am-nuoc', name: 'Ấm 0.8 L', price: '15.000 VNĐ', type: 'ngày', image: amnuoc },
  {id: 'tay-quay-nuong-inox',  name: 'Tay quay inox', price: '20.000 VNĐ', type: 'ngày', image: tayquaynuongga },
  {  id: 'may-nuong-tu-dong', name: 'Máy nướng tự động', price: '50.000 VNĐ', type: 'ngày', image: maynuongtudong },
  {  id: 'dau-kho-namilux', name: 'Đầu khò', price: '10.000 VNĐ', type: 'ngày', image: daukho },
  {id: 'binh-ga-mini-namilux-250g', name: 'Bình gas mini 250 g', price: '30.000 VNĐ', type: 'ngày', image: binhgas1 },
  { id: 'than-gao-dua', name: 'Than gáo dừa 1 kg', price: '30.000 VNĐ', type: 'ngày', image: than1 },
  { id: 'vien-moi-than', name: 'Viên mồi than', price: '8.000 VNĐ', type: 'ngày', image: vienmoithan1 },
  // Thùng đá & nước
  { id: 'thung-da-8l', name: 'Thùng đá 8 L', price: '20.000 VNĐ', type: 'ngày', image: thungdanho },
  {  id: 'thung-da-16l', name: 'Thùng đá 16 L', price: '30.000 VNĐ', type: 'ngày', image: thungda16L },
  {  id: 'thung-da-25l', name: 'Thùng đá 25 L', price: '40.000 VNĐ', type: 'ngày', image: thungda25L },
  { name: 'Túi nước 10 L', price: '10.000 VNĐ', type: 'ngày', image: TuiMangNuocCoVoi1 },
]

export default function DididiCampingRental() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
    

      <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          DỊCH VỤ
        </span>
        <h1 className="text-3xl font-bold mt-2">Dịch Vụ Cho Thuê Lều Trại, Dụng Cụ Dã Ngoại Tại Đà Nẵng</h1>        
        <p className="text-yellow-500 mt-1">★★★★★ <span className="text-gray-600">779 Reviews</span></p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/og-image.jpg"
          alt="Dịch vụ cho thuê lều trại, dụng cụ dã ngoại tại Đà Nẵng"
          width={1200}
          height={500}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold text-green-700">1. Dịch Vụ Cho Thuê Lều Trại Dã Ngoại Đà Nẵng – Thuê Đồ Cắm Trại Đà Nẵng</h2>
        <p>
          ĐiĐi Camping là một cửa hàng chuyên cho thuê lều trại và phụ kiện đồ cắm trại ở Đà Nẵng, đồ dùng đều được vệ sinh sạch sẽ trước khi giao, cam kết hoàn tiền nếu sản phẩm bẩn.
        </p>

        <h3 className="text-lg font-semibold text-green-700">1.1 Thông tin liên hệ</h3>
        <ul className="list-disc pl-6">
          <li>Địa chỉ: 86 Lê Thiệt, Liên Chiểu, TP. Đà Nẵng (<a href="https://g.co/kgs/BkDHJhp" className="text-blue-600 underline">Google Maps</a>)</li>
          <li>SĐT/Zalo: <a href="tel:0909223917" className="text-blue-600">0909.223.917</a></li>
          <li>Giờ làm việc: Thứ 2–CN: 7:00–18:00</li>
          <li>Facebook: <a href="https://facebook.com/thueleucamtraidanang" className="text-blue-600">/thueleucamtraidanang</a></li>
        </ul>
        <h2 className="text-xl font-semibold text-green-700">2. Chính sách thuê – Bảo vệ thiết bị</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Đem theo CCCD hoặc GPLX để đối chiều và chụp ảnh làm cơ sở cọc (chỉ chụp ảnh, không giữ giấy tờ).</li>
          <li>Giờ thuê linh hoạt – 24 h từ thời điểm nhận.</li>
          <li>Hư hỏng hoặc thiết bị quá bẩn: áp dụng phí vệ sinh/sửa chữa theo giá thị trường.</li>
          <li>Lưu ý : Không sử dụng tấm phủ trên lều hoặc tấm tăng chữ A để ngồi nằm dưới đất.</li>
        </ul>


        <h2 className="text-xl font-bold text-green-700 mt-6">3. Bảng Giá Cho Dụng Cụ Cắm Trại Đà Nẵng</h2>
      
        <div className="mt-10 text-center">
          <p className="text-lg">Thông tin này hữu ích như thế nào? Bình chọn nếu nó hữu ích.</p>
          <div className="text-yellow-500 text-2xl my-2">★★★★★</div>
          <p className="text-sm text-gray-600">Đánh giá 4.9 / 5 – 779 reviews</p>
        </div>
      </div>
    </section>

      {/* Pricing Table */}
      <div className="overflow-x-auto">
  <table className="w-full table-auto border-collapse">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 border">Sản phẩm</th>
        <th className="px-4 py-2 border">Giá thuê (/ngày)</th>
        <th className="px-4 py-2 border">Hình ảnh</th>
      </tr>
    </thead>
    <tbody>
      {rentalItems.map((item, idx) => (
        <tr key={idx} className="border-t hover:bg-gray-50">
          <td className="px-4 py-2">
            <Link href={`/products/${item.id}`} className="text-blue-600 hover:underline">
              {item.name}
            </Link>
          </td>
          <td className="px-4 py-2">{item.price}</td>
          <td className="px-4 py-2">
            <Link href={`/products/${item.id}`}>
              <div className="w-20 h-14 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  
    </section>
  )
}
