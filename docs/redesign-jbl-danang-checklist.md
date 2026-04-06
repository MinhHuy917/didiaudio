# Kế hoạch redesign toàn diện website thuê loa JBL Đà Nẵng

Tài liệu này chuyển yêu cầu thành checklist triển khai chi tiết theo từng nhóm việc: UI/UX, IA, SEO, kỹ thuật, migration, QA, KPI, và bàn giao.

---

## 1) Mục tiêu dự án

- [ ] Nâng giao diện lên phong cách hiện đại/cao cấp theo nhận diện JBL (đen + cam).
- [ ] Tối ưu UX trên mobile-first, giảm thao tác đặt thuê.
- [ ] Tăng chuyển đổi từ luồng Product → Cart/Booking → Checkout.
- [ ] Cải thiện SEO địa phương cho cụm từ khóa “thuê loa JBL Đà Nẵng”.
- [ ] Chuẩn hóa hiệu năng Core Web Vitals và khả năng truy cập (WCAG AA).

---

## 2) Information Architecture (IA) & Sitemap

- [ ] Chuẩn hóa cây trang:
  - [ ] Trang chủ
  - [ ] Danh mục sản phẩm
  - [ ] Chi tiết sản phẩm
  - [ ] Giỏ hàng / Đặt thuê
  - [ ] Thanh toán
  - [ ] Blog
  - [ ] FAQ
  - [ ] Chính sách
  - [ ] Liên hệ
- [ ] Bổ sung breadcrumb cho trang danh mục + chi tiết sản phẩm.
- [ ] Xác định URL slug thân thiện SEO, không đổi slug tùy tiện.
- [ ] Lập mapping URL cũ → URL mới trước khi go-live.

---

## 3) Design System

### 3.1 Màu sắc
- [ ] Primary: `#FF6600` (CTA, điểm nhấn).
- [ ] Nền tối: `#0B0B0F` / `#121219`.
- [ ] Text chính: `#F5F5F7`, text phụ: `#A1A1AA`.
- [ ] Trạng thái: Success/Warning/Error có token riêng.

### 3.2 Typography
- [ ] Font heading: Montserrat/Inter SemiBold-Bold.
- [ ] Font body: Inter/Roboto Regular.
- [ ] Thiết lập scale: H1/H2/H3/body/caption cho desktop + mobile.

### 3.3 Component Library
- [ ] Header (desktop + mobile menu).
- [ ] Footer.
- [ ] Product Card.
- [ ] Price Block.
- [ ] Filter panel + chip lọc.
- [ ] Search input (autocomplete).
- [ ] CTA Button (primary/secondary/ghost).
- [ ] Form fields (input/select/date picker).
- [ ] Toast/Alert.
- [ ] Stepper booking.
- [ ] FAQ accordion.

### 3.4 Motion/interaction
- [ ] Hover state đồng nhất trên button/card.
- [ ] Loading skeleton cho listing + product.
- [ ] Transition 150–250ms, không lạm dụng animation.

---

## 4) Trang và chức năng cần làm lại

## 4.1 Trang chủ
- [ ] Hero rõ value proposition + CTA “Thuê ngay”.
- [ ] Khối USP: giao nhanh, hỗ trợ setup, hotline.
- [ ] Khối sản phẩm nổi bật.
- [ ] Khối review khách hàng.
- [ ] Khối FAQ ngắn.

## 4.2 Danh mục sản phẩm
- [ ] Lưới responsive 1-2-3-4 cột theo breakpoint.
- [ ] Bộ lọc theo công suất, mức giá, mục đích sử dụng.
- [ ] Sort: mới nhất, giá tăng, giá giảm.
- [ ] Empty state rõ ràng.

## 4.3 Trang chi tiết sản phẩm
- [ ] Gallery ảnh (thumbnail + ảnh chính).
- [ ] Thông số kỹ thuật chuẩn hóa.
- [ ] Hiển thị giá thuê theo ngày + ưu đãi ngày 2+.
- [ ] Nút CTA sticky trên mobile.
- [ ] Khối “sản phẩm liên quan”.

## 4.4 Luồng đặt thuê
- [ ] Step 1: chọn sản phẩm/số lượng/ngày thuê.
- [ ] Step 2: giỏ hàng + chỉnh sửa nhanh.
- [ ] Step 3: thông tin khách + địa chỉ + thời gian giao.
- [ ] Step 4: xác nhận + thanh toán.
- [ ] Form validation realtime + thông báo lỗi rõ.

## 4.5 Tìm kiếm/lọc
- [ ] Debounce search.
- [ ] Gợi ý từ khóa/sản phẩm khi gõ.
- [ ] Giữ state filter trên URL query params.

---

## 5) SEO nội dung địa phương

## 5.1 Cụm từ khóa chính
- [ ] thuê loa JBL Đà Nẵng
- [ ] cho thuê loa Đà Nẵng
- [ ] thuê loa party Đà Nẵng
- [ ] bảng giá thuê loa JBL Đà Nẵng

## 5.2 Blog plan (tối thiểu 12 bài/3 tháng)
- [ ] Kinh nghiệm chọn loa JBL theo quy mô tiệc.
- [ ] So sánh Stage 320 vs Ultimate.
- [ ] Checklist thuê loa sự kiện ngoài trời Đà Nẵng.
- [ ] Setup karaoke 5 phút.
- [ ] Hướng dẫn chống hú micro.
- [ ] Bảng giá cập nhật theo mùa cao điểm.
- [ ] FAQ về giao nhận, cọc, hủy lịch.

## 5.3 On-page SEO
- [ ] Mỗi trang có 1 H1 duy nhất.
- [ ] Title < 60 ký tự, description < 160 ký tự.
- [ ] Internal link từ blog về trang dịch vụ/sản phẩm.
- [ ] Alt ảnh có ngữ cảnh địa phương.

---

## 6) SEO kỹ thuật

- [ ] `schema.org/LocalBusiness` cho toàn site.
- [ ] `schema.org/Product` cho từng trang sản phẩm.
- [ ] `FAQPage` cho trang FAQ.
- [ ] Canonical cho trang có tham số lọc/sort.
- [ ] Hreflang (nếu bật đa ngôn ngữ).
- [ ] Cập nhật `sitemap.xml` và submit Search Console.
- [ ] Kiểm tra `robots.txt` không chặn nhầm trang quan trọng.
- [ ] Tạo 301 redirect map đầy đủ khi đổi/xóa URL.

---

## 7) Hiệu năng & Accessibility

## 7.1 Performance
- [ ] Ảnh sản phẩm dùng WebP/AVIF.
- [ ] Lazy-load ảnh dưới fold.
- [ ] Tối ưu kích thước ảnh theo breakpoint.
- [ ] Giảm JS không cần thiết, tách chunk hợp lý.
- [ ] Theo dõi LCP/CLS/INP.

## 7.2 Accessibility (WCAG AA)
- [ ] Tương phản màu đạt chuẩn.
- [ ] Điều hướng bằng bàn phím đầy đủ.
- [ ] ARIA label cho control quan trọng.
- [ ] Form có label + error message dễ hiểu.

---

## 8) Xóa sản phẩm JBL720 (đã triển khai một phần)

- [x] Xóa dữ liệu sản phẩm JBL720 khỏi danh sách hiển thị frontend.
- [x] Cập nhật nội dung blog để không còn đề cập giá/mẫu JBL720.
- [x] Tạo redirect 301 từ URL sản phẩm cũ về trang chủ.
- [ ] Xóa bản ghi JBL720 ở DB (nếu backend có bảng sản phẩm riêng).
- [ ] Xóa endpoint/API liên quan JBL720 nếu còn tồn tại.
- [ ] Rà soát ảnh/tài nguyên tĩnh không còn dùng để dọn kho.

---

## 9) Migration checklist

- [ ] Backup code + database trước release.
- [ ] Tạo staging gần giống production.
- [ ] Crawl URL cũ (export CSV).
- [ ] Map URL cũ → URL mới + rule redirect.
- [ ] Test redirect bằng danh sách URL mẫu.
- [ ] Freeze content trước giờ cut-over.
- [ ] Release theo chiến lược ít downtime.
- [ ] Theo dõi lỗi 404/500 sau deploy 48h.

---

## 10) Kế hoạch kiểm thử

## 10.1 Functional
- [ ] Tạo đơn thuê mới thành công.
- [ ] Sửa/xóa sản phẩm trong giỏ hàng.
- [ ] Kiểm tra tính tiền đúng cho ngày 2+.
- [ ] Form validation hoạt động đúng.

## 10.2 UI responsive
- [ ] iPhone SE / iPhone 14 / Android phổ biến.
- [ ] Tablet portrait/landscape.
- [ ] Desktop 1366/1440/1920.

## 10.3 SEO/Performance
- [ ] Lighthouse (Home, Category, Product, Blog).
- [ ] Kiểm tra structured data bằng Rich Results Test.
- [ ] Kiểm tra indexability (noindex/canonical/robots).

## 10.4 Security cơ bản
- [ ] Kiểm tra XSS đầu vào form.
- [ ] Kiểm tra CSRF cho endpoint ghi dữ liệu (nếu có auth/session).

---

## 11) Roadmap ưu tiên (4–8 tuần)

## P0 (Tuần 1-2)
- [ ] Wireframe + UI kit + design tokens.
- [ ] Rebuild homepage + category + product detail.
- [ ] Tối ưu luồng booking rút bước.

## P1 (Tuần 3-5)
- [ ] Search/filter nâng cao.
- [ ] SEO technical hoàn chỉnh (schema/canonical/sitemap/robots).
- [ ] Tối ưu hiệu năng và mobile UX.

## P2 (Tuần 6-8)
- [ ] Content hub blog + FAQ mở rộng.
- [ ] A/B test CTA và layout.
- [ ] Dashboard KPI + vòng lặp tối ưu.

---

## 12) KPI sau launch

- [ ] Top 3 cho cụm “thuê loa JBL Đà Nẵng”.
- [ ] Tăng conversion rate >= 20%.
- [ ] Giảm bounce rate >= 15%.
- [ ] LCP < 2.5s, CLS < 0.1, INP tốt.
- [ ] Organic traffic blog tăng đều theo tháng.

---

## 13) Deliverables bàn giao

- [ ] Bộ mockup (Home, Category, Product, Booking, Blog).
- [ ] Design system + component states.
- [ ] Tài liệu SEO checklist + redirect map.
- [ ] Tài liệu migration runbook.
- [ ] Test cases + biên bản UAT.
- [ ] Tài liệu vận hành cập nhật sản phẩm/nội dung.

---

## 14) Gợi ý hình ảnh sản phẩm chủ lực

- [ ] Dùng ảnh lifestyle + ảnh nền sạch cho loa JBL.
- [ ] Ảnh hero ưu tiên tỉ lệ ngang (16:9) cho desktop và crop an toàn cho mobile.
- [ ] Ảnh minh họa mẫu loa JBL Flip (nguồn Unsplash) dùng trong blog/sản phẩm nổi bật khi cần.
