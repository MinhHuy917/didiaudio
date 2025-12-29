import img0 from '@/images/blog/0.jpeg'
import img1 from '@/images/blog/1.jpg'
import img2 from '@/images/blog/2.jpg'
import img3 from '@/images/blog/3.jpg'
import img4 from '@/images/blog/4.jpg'
import img5 from '@/images/blog/5.jpg'
import img6 from '@/images/blog/6.jpg'
import img7 from '@/images/blog/7.jpg'
import img8 from '@/images/blog/8.jpg'
import img9 from '@/images/blog/9.jpg'
import img10 from '@/images/blog/10.jpg'
import img11 from '@/images/blog/11.jpg'
import img12 from '@/images/blog/12.jpg'
import img13 from '@/images/blog/13.jpeg'
import img14 from '@/images/blog/14.jpeg'
import img15 from '@/images/blog/15.jpeg'
import img16 from '@/images/blog/16.jpeg'
import img17 from '@/images/blog/17.jpeg'
import img18 from '@/images/blog/18.jpeg'
import img19 from '@/images/blog/19.jpeg'
import img20 from '@/images/blog/20.jpeg'
import img21 from '@/images/blog/21.jpeg'
import img22 from '@/images/blog/22.jpeg'
import img23 from '@/images/blog/23.jpeg'
import img24 from '@/images/blog/24.jpeg'
import img25 from '@/images/blog/25.jpeg'
import img26 from '@/images/blog/26.jpeg'
import img27 from '@/images/blog/27.jpeg'
import img28 from '@/images/blog/28.jpeg'
import img29 from '@/images/blog/29.jpeg'
import img30 from '@/images/blog/30.jpeg'
import img31 from '@/images/blog/31.jpeg'
import img32 from '@/images/blog/32.jpeg'
import img33 from '@/images/blog/33.jpeg'
import img34 from '@/images/blog/34.jpeg'
import img35 from '@/images/blog/35.jpeg'
import img36 from '@/images/blog/36.jpeg'
import img37 from '@/images/blog/37.jpeg'
import img38 from '@/images/blog/38.jpeg'
import img39 from '@/images/blog/39.jpeg'
import img40 from '@/images/blog/40.jpeg'
import img41 from '@/images/blog/41.jpeg'
import img42 from '@/images/blog/42.jpeg'
import img43 from '@/images/blog/43.jpeg'
import img44 from '@/images/blog/44.jpeg'
import img45 from '@/images/blog/45.jpeg'
import img46 from '@/images/blog/46.jpeg'
import img47 from '@/images/blog/47.jpeg'
import img48 from '@/images/blog/48.jpeg'
import img49 from '@/images/blog/49.jpeg'

// Legacy interface
interface Blog {
  id: number
  title: string
  content: string
  image: string
}

const blogData: Blog[] = []
export default blogData

// 50 bài blog về loa/thuê loa, tối ưu SEO
export const articles = [
  {
    slug: 'kinh-nghiem-chon-loa-keo-cho-tiec-gia-dinh',
    title: 'Kinh nghiệm chọn loa kéo cho tiệc gia đình: công suất, pin, mic',
    description:
      'Checklist nhanh chọn loa kéo cho tiệc gia đình: công suất, pin, micro chống hú, Bluetooth ổn định.',
    image: img0.src,
    date: '2024-11-10',
    content: `
      <h2>1. Chọn công suất theo không gian</h2>
      <ul>
        <li>Phòng khách &lt;25m²: 80–120W (JBL Encore 2).</li>
        <li>Sân vườn 30–50 khách: 200–300W (JBL Stage 320).</li>
        <li>Ngoài trời đông: 500–800W (JBL 720/Ultimate).</li>
      </ul>
      <h2>2. Pin & thời gian dùng</h2>
      <p>Pin rời &gt;12h tiện thay nhanh; pin liền 6–8h đủ tiệc tối. Ưu tiên sạc nhanh 10 phút nghe 60–120 phút.</p>
      <h2>3. Micro & chống hú</h2>
      <p>2 mic UHF, chỉnh echo/bass/treble trên loa; đặt micro cách loa 2–3m, tránh hướng thẳng vào loa.</p>
      <h2>4. Kết nối & tiện ích</h2>
      <p>Bluetooth 5.3/5.4 ổn định, có AUX/USB, ghép nhiều loa (Auracast). Nên có bánh xe, tay kéo, IPX4.</p>
    `,
  },
  {
    slug: 'setup-karaoke-5-phut-voi-loa-keo-jbl',
    title: 'Setup karaoke 5 phút với loa kéo JBL: không hú, hát hay',
    description:
      'Cắm điện, ghép Bluetooth, chỉnh echo/mic trong 5 phút. Checklist chống hú và preset nhanh.',
    image: img1.src,
    date: '2024-11-08',
    content: `
      <h2>1. Ghép Bluetooth & nguồn nhạc</h2>
      <p>Dùng điện thoại phát nhạc chất lượng cao; tắt app ghi âm để tránh chiếm mic.</p>
      <h2>2. Cân chỉnh micro</h2>
      <p>Volume mic tăng dần từ 0; echo nhẹ, treble vừa, bass tùy giọng; cầm mic 45°.</p>
      <h2>3. Chống hú</h2>
      <ul>
        <li>Đặt loa trước người hát, cách 2–3m.</li>
        <li>Không chĩa đầu mic vào loa.</li>
        <li>Giảm echo khi phòng hẹp.</li>
      </ul>
      <h2>4. Test & lưu preset</h2>
      <p>Phát bài vocal, chỉnh tới khi rõ, không rè; lưu preset nếu loa hỗ trợ.</p>
    `,
  },
  {
    slug: 'bang-gia-thue-loa-keo-jbl-da-nang-2024',
    title: 'Bảng giá thuê loa kéo JBL Đà Nẵng 2024 (Encore 2, 320, 720, Ultimate)',
    description: 'Giá thuê theo ngày, giảm 50% từ ngày thứ 2. Giao nhanh 30–60 phút, setup miễn phí.',
    image: img2.src,
    date: '2024-11-05',
    content: `
      <table>
        <thead><tr><th>Model</th><th>Công suất</th><th>Giá/ngày</th><th>Ngày 2+</th></tr></thead>
        <tbody>
          <tr><td>JBL Encore 2</td><td>100W</td><td>350k</td><td>175k</td></tr>
          <tr><td>JBL Stage 320</td><td>240W</td><td>550k</td><td>275k</td></tr>
          <tr><td>JBL 720</td><td>800W</td><td>1.200k</td><td>600k</td></tr>
          <tr><td>JBL Ultimate</td><td>3 đường tiếng</td><td>1.600k</td><td>800k</td></tr>
        </tbody>
      </table>
      <p>Giá gồm: 2 micro UHF, dây AUX, hướng dẫn nhanh, hỗ trợ 24/7. Giao 30–60 phút nội thành.</p>
    `,
  },
  {
    slug: 'meo-choi-nhac-ngoai-troi-khong-mat-tieng',
    title: 'Mẹo chơi nhạc ngoài trời không mất tiếng, không hụt bass',
    description:
      'Chọn loa chống nước, kê cao 80–120cm, che mưa nhẹ, dự phòng pin/sạc, hướng loa vào khán giả.',
    image: img3.src,
    date: '2024-11-01',
    content: `
      <ul>
        <li><strong>Chống nước:</strong> IPX4 cho party biển/sân vườn.</li>
        <li><strong>Vị trí:</strong> Kê cao, tránh vật cản trước loa.</li>
        <li><strong>Nguồn:</strong> Ổ kéo dài, pin dự phòng hoặc pin rời.</li>
        <li><strong>Gió:</strong> Bọc mic, giảm treble khi gió lớn.</li>
        <li><strong>Âm lượng:</strong> 70–80% tổng, tinh chỉnh bass/treble để không méo.</li>
      </ul>
    `,
  },
  {
    slug: 'chon-micro-khong-day-hat-karaoke-hay',
    title: 'Chọn micro không dây hát karaoke hay: UHF, pin, chống hú',
    description:
      'Chọn micro UHF ổn định, có chống hú, pin tốt. Ưu tiên micro đi kèm loa JBL hoặc UHF rời chất lượng.',
    image: img4.src,
    date: '2024-10-28',
    content: `
      <h2>1. Dải tần & ổn định</h2>
      <p>UHF ít nhiễu, khoảng cách 10–20m không rớt sóng.</p>
      <h2>2. Chống hú</h2>
      <p>Đặt loa trước mic, tránh quay mic vào loa; giảm echo ở phòng hẹp.</p>
      <h2>3. Pin</h2>
      <p>Pin rời AA thay nhanh; pin sạc tiện nhưng nhớ sạc đủ trước tiệc.</p>
    `,
  },
  {
    slug: 'checklist-thue-loa-keo-truoc-su-kien',
    title: 'Checklist thuê loa kéo trước sự kiện: 6 phút kiểm tra',
    description:
      '6 mục cần check: công suất, pin, micro, kết nối, phụ kiện, giao nhận. Tránh thiếu đồ và trễ giờ.',
    image: img5.src,
    date: '2024-10-22',
    content: `
      <ol>
        <li>Công suất đúng quy mô.</li>
        <li>Pin/nguồn rõ ràng, sạc nhanh.</li>
        <li>2 mic UHF, test chống hú.</li>
        <li>Kết nối Bluetooth/AUX, ghép đôi.</li>
        <li>Phụ kiện: sạc, AUX, chân/kẹ.</li>
        <li>Giao nhận: hẹn giờ, lưu hotline.</li>
      </ol>
    `,
  },
  {
    slug: 'chon-loa-keo-cho-restaurant-cafe-live-music',
    title: 'Chọn loa kéo cho quán cafe/restaurant có live music',
    description:
      'Ưu tiên công suất 200–300W, pin đủ 6–8h, 2 mic UHF, hỗ trợ ghép đôi, ánh sáng tinh tế.',
    image: img6.src,
    date: '2024-10-18',
    content: `
      <p>Không gian 50–80 khách: 200–300W (Stage 320). Nên có 2 mic UHF, hỗ trợ nhạc cụ qua Line-in. Pin 6–8h hoặc dùng nguồn liên tục.</p>
    `,
  },
  {
    slug: 'loa-keo-cho-sinh-nhat-tai-nha',
    title: 'Loa kéo cho sinh nhật tại nhà: gọn, pin lâu, mic hay',
    description:
      'Tiệc 15–25 người: 100–150W, pin 8–12h, 2 mic UHF, bánh xe kéo. Ưu tiên JBL Encore 2.',
    image: img7.src,
    date: '2024-10-12',
    content: `
      <p>Encore 2: 100W, pin 15h, 2 mic UHF, đèn LED. Đủ cho phòng khách, sân nhỏ. Setup 5 phút: cắm điện, ghép Bluetooth, chỉnh echo nhẹ.</p>
    `,
  },
  {
    slug: 'ghep-doi-nhieu-loa-jbl-bang-auracast',
    title: 'Ghép đôi nhiều loa JBL bằng Auracast/PartyBoost',
    description:
      'Cách kết nối nhiều loa JBL để phủ âm rộng: bật Auracast/PartyBoost, chọn master, đặt loa cách đều.',
    image: img8.src,
    date: '2024-10-08',
    content: `
      <ol>
        <li>Bật Auracast/PartyBoost trên loa.</li>
        <li>Kết nối điện thoại với loa master.</li>
        <li>Nhấn nút liên kết trên loa phụ, chờ đèn báo.</li>
        <li>Đặt loa cách nhau 3–5m để phủ đều.</li>
      </ol>
    `,
  },
  {
    slug: 'meo-hat-karaoke-it-met-hoi',
    title: 'Mẹo hát karaoke ít mệt: chỉnh echo, chọn tông, đứng đúng vị trí',
    description:
      'Giảm echo, chọn tông vừa, giữ khoảng cách mic 5–8cm, mở monitor vừa đủ để đỡ mệt khi hát lâu.',
    image: img9.src,
    date: '2024-10-05',
    content: `
      <ul>
        <li>Echo vừa đủ, đừng quá nhiều.</li>
        <li>Chọn tông thấp hơn 1–2 bán âm nếu khó hát.</li>
        <li>Giữ mic 5–8cm, nghiêng 45°.</li>
        <li>Đừng mở mic quá to, dễ hú và mệt.</li>
      </ul>
    `,
  },
  {
    slug: 'chon-loa-keo-cho-team-building-50-nguoi',
    title: 'Chọn loa kéo cho team building 50 người',
    description:
      'Công suất 300–500W, pin dài hoặc nguồn ổn định, 2 mic UHF, ghép đôi nếu sân rộng.',
    image: img10.src,
    date: '2024-10-02',
    content: `
      <p>Chọn Stage 320 (240W) hoặc 720 (800W) tùy sân. Chuẩn bị sạc dự phòng, che mưa nhẹ, test mic trước khi bắt đầu trò chơi.</p>
    `,
  },
  {
    slug: 'bao-quan-loa-keo-sau-su-dung',
    title: 'Bảo quản loa kéo sau sử dụng: 5 bước nhanh',
    description:
      'Lau khô, tắt nguồn, sạc 80%, cất nơi khô ráo, giữ micro riêng. Tránh ẩm/mặn để loa bền.',
    image: img11.src,
    date: '2024-09-28',
    content: `
      <ol>
        <li>Lau khô, đặc biệt khu vực cổng.</li>
        <li>Sạc ~80% trước khi cất.</li>
        <li>Micro tháo pin (nếu pin rời) để tránh rò.</li>
        <li>Cất nơi khô, tránh ánh nắng trực tiếp.</li>
      </ol>
    `,
  },
  {
    slug: 'chong-hu-micro-loa-keo',
    title: 'Chống hú micro loa kéo: 6 kỹ thuật cơ bản',
    description:
      'Đặt loa trước mic, giảm echo, xoay mic 45°, tránh đối diện loa, giảm treble khi phòng hẹp.',
    image: img12.src,
    date: '2024-09-25',
    content: `
      <ul>
        <li>Loa phía trước, người hát phía sau loa.</li>
        <li>Echo vừa, giảm treble nếu phòng hẹp.</li>
        <li>Không hướng mic vào loa.</li>
        <li>Dùng foam chụp mic nếu cần.</li>
      </ul>
    `,
  },
  {
    slug: 'chon-loa-keo-cho-lop-hoc-yoga-dance',
    title: 'Chọn loa kéo cho lớp yoga/dance: nhẹ, pin lâu, Bluetooth ổn',
    description:
      'Ưu tiên loa nhẹ &lt;10kg, pin 8–12h, Bluetooth ổn định, có bánh xe. Encore 2 phù hợp phòng studio nhỏ.',
    image: img13.src,
    date: '2024-09-22',
    content: `
      <p>Studio nhỏ: Encore 2. Phòng lớn hơn: Stage 320. Giữ âm lượng 60–70% để nhạc không bị méo khi tập lâu.</p>
    `,
  },
  {
    slug: 'ket-noi-loa-keo-voi-tivi-xem-phim-hat-karaoke',
    title: 'Kết nối loa kéo với TV để xem phim & karaoke',
    description:
      'Dùng Bluetooth/AUX/optical (nếu có). Chỉnh độ trễ audio trong TV nếu bị lệch hình tiếng.',
    image: img14.src,
    date: '2024-09-18',
    content: `
      <p>Dùng Bluetooth cho nhanh, AUX để giảm trễ. Nếu TV hỗ trợ optical, dùng DAC chuyển sang AUX. Kiểm tra lip-sync trong cài đặt TV.</p>
    `,
  },
  {
    slug: 'loa-keo-cho-du-lich-da-ngoai',
    title: 'Loa kéo cho du lịch dã ngoại: chống nước, pin dài, gọn nhẹ',
    description:
      'Chọn loa IPX4, pin &gt;10h, trọng lượng &lt;10kg, có bánh xe. Nhạc ngoài trời cần bass đủ nhưng không quá nặng.',
    image: img15.src,
    date: '2024-09-15',
    content: `
      <p>Encore 2 phù hợp picnic nhỏ; Stage 320 cho nhóm 20–40 người. Mang theo sạc nhanh và bạt che mưa nhẹ.</p>
    `,
  },
  {
    slug: 'so-sanh-loa-keo-jbl-encore-2-va-stage-320',
    title: 'So sánh JBL Encore 2 vs Stage 320: chọn loa nào?',
    description:
      'Encore 2: 100W, gọn nhẹ, pin lâu. Stage 320: 240W, pin dài, bánh xe kéo, phủ sân rộng hơn.',
    image: img16.src,
    date: '2024-09-12',
    content: `
      <table>
        <thead><tr><th>Tiêu chí</th><th>Encore 2</th><th>Stage 320</th></tr></thead>
        <tbody>
          <tr><td>Công suất</td><td>100W</td><td>240W</td></tr>
          <tr><td>Pin</td><td>~15h</td><td>~18h</td></tr>
          <tr><td>Trọng lượng</td><td>~7kg</td><td>~16kg</td></tr>
        </tbody>
      </table>
      <p>Tiệc nhỏ chọn Encore 2, sân vườn chọn Stage 320.</p>
    `,
  },
  {
    slug: 'cham-soc-pin-loa-keo-de-khong-chai',
    title: 'Chăm sóc pin loa kéo để không chai nhanh',
    description:
      'Sạc 80–90%, tránh để cạn kiệt, dùng sạc chính hãng, cất nơi mát. Xả/sạc định kỳ nếu ít dùng.',
    image: img17.src,
    date: '2024-09-10',
    content: `
      <ul>
        <li>Sạc khi còn 20–30%.</li>
        <li>Không để 0% lâu.</li>
        <li>Dùng sạc chuẩn, tránh sạc nhanh rẻ tiền.</li>
        <li>Mỗi tháng xả/sạc 1 lần nếu ít dùng.</li>
      </ul>
    `,
  },
  {
    slug: 'huong-dan-dung-mixer-kem-loa-keo',
    title: 'Hướng dẫn dùng mixer kèm loa kéo để hát hay hơn',
    description:
      'Thêm mixer nhỏ để cân EQ/FX, phân kênh mic/nhạc, giảm hú. Kết nối qua Line-in/aux.',
    image: img18.src,
    date: '2024-09-07',
    content: `
      <p>Kết nối mixer out vào Line-in của loa. Chỉnh high/low theo giọng, thêm reverb nhẹ. Đặt gain mic vừa phải để tránh hú.</p>
    `,
  },
  {
    slug: 'chon-loa-keo-cho-phong-gym',
    title: 'Chọn loa kéo cho phòng gym: bền, bass khỏe, chạy dài giờ',
    description:
      'Công suất 200–400W, pin tốt hoặc cắm điện, Bluetooth ổn định. Stage 320 phù hợp phòng 100–150m².',
    image: img19.src,
    date: '2024-09-04',
    content: `
      <p>Ưu tiên loa có bánh xe, tay kéo, chịu va đập nhẹ. Giữ volume 60–70% để loa bền khi chạy liên tục.</p>
    `,
  },
  {
    slug: 'meo-chinh-eq-cho-nhac-vang-nhac-tre',
    title: 'Mẹo chỉnh EQ cho nhạc vàng và nhạc trẻ trên loa kéo',
    description:
      'Nhạc vàng: tăng mid-high nhẹ, giảm bass. Nhạc trẻ EDM: tăng bass/low-mid, giữ treble vừa để đỡ chói.',
    image: img20.src,
    date: '2024-09-01',
    content: `
      <ul>
        <li>Nhạc vàng: bass -1, mid +1, treble +1.</li>
        <li>EDM: bass +2, mid 0, treble 0 hoặc -1 nếu chói.</li>
        <li>Test từng bài và ghi nhớ preset.</li>
      </ul>
    `,
  },
  {
    slug: 'ket-noi-micro-co-day-vao-loa-keo',
    title: 'Kết nối micro có dây vào loa kéo: chống hú và an toàn',
    description:
      'Dùng cổng 6.35mm, giảm gain trước khi cắm, tránh rút cắm khi loa đang mở lớn, chỉnh echo nhẹ.',
    image: img21.src,
    date: '2024-08-29',
    content: `
      <p>Giảm volume mic, cắm jack 6.35mm, tăng dần. Nếu hú, xoay mic tránh loa, giảm treble hoặc echo.</p>
    `,
  },
  {
    slug: 'thu-loa-truoc-khi-thue-5-phut',
    title: 'Thử loa trước khi thuê trong 5 phút',
    description:
      'Check ngoại hình, pin, mic, Bluetooth, AUX, bass/treble, thử hú. Đảm bảo nhận loa chuẩn.',
    image: img22.src,
    date: '2024-08-26',
    content: `
      <ol>
        <li>Quan sát thùng, màng loa.</li>
        <li>Test mic UHF, xem hú.</li>
        <li>Ghép Bluetooth, chạy nhạc.</li>
        <li>Test AUX, thử bass/treble.</li>
      </ol>
    `,
  },
  {
    slug: 'bao-hanh-va-bao-tri-loa-keo-khi-thue',
    title: 'Bảo hành & bảo trì loa kéo khi thuê: cần hỏi gì?',
    description:
      'Hỏi rõ thời gian hỗ trợ, đổi loa nếu lỗi, hotline 24/7, phụ kiện thay thế. Ghi nhận tình trạng khi nhận loa.',
    image: img23.src,
    date: '2024-08-24',
    content: `
      <p>Chụp ảnh loa khi nhận; kiểm phụ kiện. Lưu hotline kỹ thuật. Nếu lỗi, yêu cầu đổi loa trong 30–60 phút.</p>
    `,
  },
  {
    slug: 'chon-loa-keo-cho-quay-roadshow',
    title: 'Chọn loa kéo cho roadshow: công suất, pin, di động',
    description:
      'Công suất 300–500W, bánh xe, pin đủ 6–8h hoặc nguồn ngoài, 2 mic cho MC. JBL 720 phù hợp không gian mở.',
    image: img24.src,
    date: '2024-08-21',
    content: `
      <p>Sự kiện ngoài trời cần loa bền, dễ kéo. Chọn loa có ghép đôi nếu sân dài, và chuẩn bị ô che mưa nhẹ.</p>
    `,
  },
  {
    slug: 'top-5-bai-test-loa-keo-khi-thu-am-thanh',
    title: 'Top 5 bài test loa kéo khi thử âm thanh',
    description:
      'Chọn bài vocal rõ, bass sâu, live acoustic, EDM và nhạc cụ để kiểm nhanh dải tần và độ méo.',
    image: img25.src,
    date: '2024-08-18',
    content: `
      <ul>
        <li>Vocal: bài ballad giọng nữ/nam.</li>
        <li>Bass: EDM drop.</li>
        <li>Acoustic: guitar/piano.</li>
        <li>Live: bản thu trực tiếp để nghe không gian.</li>
      </ul>
    `,
  },
  {
    slug: 'su-khac-nhau-giua-loa-keo-va-loa-partybox',
    title: 'Khác nhau giữa loa kéo và loa partybox',
    description:
      'Loa kéo tối ưu di chuyển, pin dài, mic; partybox thiên về ánh sáng và party trong nhà. Chọn theo nhu cầu.',
    image: img26.src,
    date: '2024-08-15',
    content: `
      <p>Loa kéo: bánh xe, tay kéo, mic đi kèm. Partybox: đèn LED mạnh, bass sâu. Tiệc di động chọn loa kéo; party tại nhà chọn partybox.</p>
    `,
  },
  {
    slug: 'huong-dan-dung-echo-de-hat-khong-bi-loang',
    title: 'Dùng echo thế nào để hát không bị loãng?',
    description:
      'Giữ echo ở mức 20–40%, repeat thấp, delay vừa. Nếu phòng vang, giảm thêm echo để giọng rõ.',
    image: img27.src,
    date: '2024-08-12',
    content: `
      <p>Echo quá nhiều làm nhòe lời. Bắt đầu từ mức thấp, tăng dần đến khi giọng dày vừa đủ nhưng vẫn rõ chữ.</p>
    `,
  },
  {
    slug: 'ket-noi-nhac-cu-guitar-voi-loa-keo',
    title: 'Kết nối guitar với loa kéo: tránh méo và hú',
    description:
      'Dùng cổng Line/Guitar, giảm gain, tăng dần. Đặt loa lệch guitar để giảm hú, dùng EQ giảm low-mid nếu ù.',
    image: img28.src,
    date: '2024-08-10',
    content: `
      <p>Cắm guitar vào line riêng, giữ volume guitar ~50%, tăng loa dần. Nếu ù, giảm low-mid hoặc bass.</p>
    `,
  },
  {
    slug: 'chon-loa-keo-cho-lop-hoc-ngoai-troi',
    title: 'Chọn loa kéo cho lớp học ngoài trời',
    description:
      'Công suất 150–300W, pin đủ buổi, chống nước nhẹ, mic rõ. Stage 320 phù hợp lớp 30–50 học viên.',
    image: img29.src,
    date: '2024-08-07',
    content: `
      <p>Ưu tiên micro rõ lời, không hú. Mang ô che mưa nhẹ, pin dự phòng. Đặt loa cao ngang tai người nghe.</p>
    `,
  },
  {
    slug: 'kiem-tra-phu-kien-loa-keo-truoc-khi-nhan',
    title: 'Kiểm tra phụ kiện loa kéo trước khi nhận',
    description:
      'Đủ 2 mic, sạc, dây AUX, chân/kê nếu có. Test nhanh mic và sạc để tránh thiếu hoặc lỗi.',
    image: img30.src,
    date: '2024-08-04',
    content: `
      <p>Check danh sách: 2 mic, bộ sạc, dây AUX, hướng dẫn. Test mic và sạc 1–2 phút trước khi rời cửa hàng.</p>
    `,
  },
  {
    slug: 'huong-dan-ve-sinh-loa-keo',
    title: 'Hướng dẫn vệ sinh loa kéo: an toàn cho màng loa',
    description:
      'Dùng khăn mềm khô, tránh hóa chất mạnh, không chạm màng loa, vệ sinh cổng kết nối bằng cọ khô.',
    image: img31.src,
    date: '2024-08-01',
    content: `
      <p>Rút điện, dùng khăn khô lau thùng. Không ấn vào màng. Dùng chổi nhỏ vệ sinh cổng, tránh xịt dung dịch vào cổng.</p>
    `,
  },
  {
    slug: 'cach-dat-loa-de-bass-day-hon',
    title: 'Cách đặt loa để bass dày hơn mà không ù',
    description:
      'Đặt loa cách tường 30–60cm, nâng cao 40–80cm, hướng loa vào người nghe. Giảm bass nếu phòng nhỏ.',
    image: img32.src,
    date: '2024-07-28',
    content: `
      <p>Tiệm cận tường giúp bass dày nhưng đừng sát tường. Nếu phòng nhỏ, giảm bass 1–2 nấc để không ù.</p>
    `,
  },
  {
    slug: 'phong-tranh-loa-bi-nong-khi-chay-lau',
    title: 'Phòng tránh loa kéo bị nóng khi chạy lâu',
    description:
      'Không mở max volume, thông thoáng mặt sau, nghỉ 5–10 phút mỗi 2–3 giờ nếu chạy pin, ưu tiên cắm điện ổn định.',
    image: img33.src,
    date: '2024-07-25',
    content: `
      <p>Giữ volume tổng 70–80%, tránh bị clip. Để loa thoáng, không che lỗ thoát hơi.</p>
    `,
  },
  {
    slug: 'ket-noi-loa-keo-voi-phan-mem-hat-karaoke',
    title: 'Kết nối loa kéo với app karaoke: giảm trễ, giữ chất âm',
    description:
      'Dùng Bluetooth 5.3/5.4 hoặc AUX để giảm trễ. Tắt hiệu ứng DSP trong app nếu âm bị nén.',
    image: img34.src,
    date: '2024-07-22',
    content: `
      <p>Bluetooth tiện, AUX giảm trễ. Tắt EQ/app filter nếu tiếng bị mỏng; dùng EQ trên loa thay vì trong app.</p>
    `,
  },
  {
    slug: 'chon-loa-keo-cho-phong-thu-nho',
    title: 'Chọn loa kéo cho phòng thu nhỏ tại nhà',
    description:
      'Chọn loa có Line-out/Line-in sạch, EQ phẳng, mic ít hú. Dùng thêm interface nếu thu âm nghiêm túc.',
    image: img35.src,
    date: '2024-07-20',
    content: `
      <p>Loa kéo chủ yếu cho nghe/hát; nếu thu âm, cân nhắc dùng thêm audio interface để tín hiệu sạch hơn.</p>
    `,
  },
  {
    slug: 'tai-sao-nen-chon-loa-jbl-chinh-hang-khi-thue',
    title: 'Vì sao nên chọn loa JBL chính hãng khi thuê?',
    description:
      'Âm thanh ổn định, micro tốt, pin bền, chống nước, dịch vụ hỗ trợ dễ dàng. Tránh rủi ro hỏng giữa sự kiện.',
    image: img36.src,
    date: '2024-07-17',
    content: `
      <p>Loa chính hãng cho độ bền, ít hú, pin đúng công bố, phụ kiện đồng bộ. Dịch vụ hỗ trợ rõ ràng khi cần.</p>
    `,
  },
  {
    slug: 'huong-dan-dat-lich-thue-loa-online',
    title: 'Hướng dẫn đặt lịch thuê loa online: 3 bước',
    description:
      'Chọn model, chọn thời gian, xác nhận giao/nhận. Chuẩn bị CCCD/GPLX và cọc nếu cần.',
    image: img37.src,
    date: '2024-07-14',
    content: `
      <ol>
        <li>Chọn loa theo quy mô sự kiện.</li>
        <li>Chọn ngày/giờ giao, địa chỉ.</li>
        <li>Chuẩn bị giấy tờ và cọc (nếu áp dụng).</li>
      </ol>
    `,
  },
  {
    slug: 'cach-chon-nhac-nen-cho-party-ngoai-troi',
    title: 'Cách chọn nhạc nền cho party ngoài trời',
    description:
      'Chọn playlist nhiều nhịp, bass vừa; âm lượng 70–80% để khách trò chuyện thoải mái, không vỡ tiếng.',
    image: img38.src,
    date: '2024-07-11',
    content: `
      <p>Dùng playlist chill/house buổi chiều, tăng dần BPM tối. Tránh mở quá to khiến mic dễ hú khi giao lưu.</p>
    `,
  },
  {
    slug: 'loi-thuong-gap-khi-dung-loa-keo-va-cach-khac-phuc',
    title: 'Lỗi thường gặp khi dùng loa kéo và cách khắc phục',
    description:
      'Không kết nối được Bluetooth, mic hú, pin sụt nhanh. Check khoảng cách, reset Bluetooth, giảm echo/treble.',
    image: img39.src,
    date: '2024-07-08',
    content: `
      <ul>
        <li>Bluetooth: xóa kết nối cũ, ghép lại gần loa.</li>
        <li>Mic hú: xoay mic, giảm echo/treble.</li>
        <li>Pin nhanh hết: sạc đủ, tránh max volume lâu.</li>
      </ul>
    `,
  },
  {
    slug: 'nen-thue-hay-mua-loa-keo',
    title: 'Nên thuê hay mua loa kéo? Quyết định nhanh trong 3 câu hỏi',
    description:
      'Hỏi tần suất dùng, ngân sách, không gian cất. Đi ít thì thuê, đi nhiều thì mua để tiết kiệm lâu dài.',
    image: img40.src,
    date: '2024-07-05',
    content: `
      <p>Nếu mỗi tháng &lt;2 lần: thuê. &gt;4 lần: cân nhắc mua. Không gian hẹp: thuê để khỏi cất trữ.</p>
    `,
  },
  {
    slug: 'giu-am-thanh-on-dinh-khi-troi-mua',
    title: 'Giữ âm thanh ổn định khi trời mưa nhẹ',
    description:
      'Che mưa bằng bạt, tránh nước vào cổng, giảm treble khi gió lớn, không đặt loa trực tiếp trên nền ướt.',
    image: img41.src,
    date: '2024-07-02',
    content: `
      <p>Che mưa phần đầu loa, dùng chân kê. Nếu ẩm, lau khô trước khi cất để tránh ô xi hóa cổng kết nối.</p>
    `,
  },
  {
    slug: 'am-thanh-cho-le-cuoi-tai-nha',
    title: 'Âm thanh cho lễ cưới tại nhà: rõ lời, nhạc nền dễ nghe',
    description:
      'Ưu tiên loa 200–400W, 2 mic rõ lời, nhạc nền vừa phải. Đặt loa hai bên cổng, tránh hú khi MC nói.',
    image: img42.src,
    date: '2024-06-29',
    content: `
      <p>Dùng 2 loa đặt hai bên, hướng vào khách. Giữ echo MC thấp, tăng treble nhẹ để lời rõ.</p>
    `,
  },
  {
    slug: 'huong-dan-ghi-am-nhanh-voi-loa-keo-va-dien-thoai',
    title: 'Ghi âm nhanh với loa kéo và điện thoại',
    description:
      'Dùng app ghi âm, đặt điện thoại cách loa 1.5–2m, giảm bass để file đỡ ù. Nếu có line-out, ghi âm sạch hơn.',
    image: img43.src,
    date: '2024-06-26',
    content: `
      <p>Đặt điện thoại ngang tầm loa, tránh sát loa. Nếu loa có line-out, nối vào điện thoại qua adapter để thu sạch.</p>
    `,
  },
  {
    slug: 'ket-noi-loa-keo-voi-laptop-trinh-chieu',
    title: 'Kết nối loa kéo với laptop khi trình chiếu',
    description:
      'Dùng Bluetooth hoặc AUX. Kiểm tra output trong hệ điều hành, tắt enhancement nếu âm bị nén.',
    image: img44.src,
    date: '2024-06-23',
    content: `
      <p>Chọn loa làm output chính, tắt “loudness equalization” nếu tiếng bị lạ. AUX cho trễ thấp khi thuyết trình.</p>
    `,
  },
  {
    slug: 'chon-loa-keo-cho-lop-hoc-ngoai-ngu',
    title: 'Chọn loa kéo cho lớp học ngoại ngữ',
    description:
      'Cần giọng nói rõ, ít hú, công suất 100–200W. Mic ổn định, loa gọn để di chuyển giữa lớp.',
    image: img45.src,
    date: '2024-06-20',
    content: `
      <p>Dùng Encore 2 cho lớp nhỏ. Giữ volume 60–70% để giọng không méo, giảm bass, tăng mid/treble cho rõ lời.</p>
    `,
  },
  {
    slug: 'bat-kenh-uhf-micro-tranh-nhieu',
    title: 'Bật kênh UHF micro để tránh nhiễu',
    description:
      'Chọn kênh cách xa Wi-Fi, thử 2–3 kênh để ít nhiễu nhất. Đứng trong 10–15m cho tín hiệu ổn.',
    image: img46.src,
    date: '2024-06-18',
    content: `
      <p>Nếu nghe nhiễu, đổi kênh micro, tránh 2.4GHz mạnh. Kiểm tra pin mic, tín hiệu yếu dễ sinh nhiễu.</p>
    `,
  },
  {
    slug: 'cach-dung-den-led-tren-loa-partybox',
    title: 'Cách dùng đèn LED trên loa partybox cho tiệc',
    description:
      'Chọn preset phù hợp mood, giảm độ sáng khi hát karaoke để đỡ chói, tắt đèn khi thu âm.',
    image: img47.src,
    date: '2024-06-15',
    content: `
      <p>Đèn đẹp cho party nhưng có thể làm khó tập trung khi hát. Hãy giảm sáng hoặc tắt khi thu âm/MC.</p>
    `,
  },
  {
    slug: 'kiem-soat-am-luong-khi-co-tre-em',
    title: 'Kiểm soát âm lượng loa kéo khi có trẻ em',
    description:
      'Giữ dưới 80dB, tránh đứng sát loa, không cho trẻ nghịch mic/loa. Đặt loa cao khỏi tầm với.',
    image: img48.src,
    date: '2024-06-12',
    content: `
      <p>Âm lượng vừa đủ nghe, không max volume. Hướng loa xa khu vực trẻ chơi, tắt mic khi không dùng.</p>
    `,
  },
  {
    slug: 'huong-dan-update-firmware-loa-jbl',
    title: 'Hướng dẫn cập nhật firmware loa JBL (nếu hỗ trợ)',
    description:
      'Dùng app JBL/brand app, sạc đủ pin, giữ kết nối ổn định. Không tắt loa giữa chừng.',
    image: img49.src,
    date: '2024-06-10',
    content: `
      <ol>
        <li>Sạc loa &gt;50%.</li>
        <li>Mở app hãng, kiểm tra bản update.</li>
        <li>Giữ kết nối, không tắt loa khi đang cập nhật.</li>
      </ol>
    `,
  },
]

