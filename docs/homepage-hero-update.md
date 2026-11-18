# Hero và bố cục trang chủ — 18/11/2026

## Thay đổi

- Hero giữ hai cột trên desktop, nội dung trước gallery trên mobile. Khối giá cyan–blue gọn dưới mô tả: “GIÁ THUÊ ƯU ĐÃI”, “500.000đ / ngày”, “Bao gồm 2 micro không dây · Hỗ trợ setup tận nơi”. Giá lấy từ `products[0].price` trong catalog (đơn vị nghìn đồng), nhân 1.000 và format `vi-VN`; không thêm nguồn giá mới.
- CTA chính “Đặt thuê ngay” dẫn tới `/products/loa-jbl-partyBox-stage-320#dat-thue`, nơi có Gọi/Zalo/Messenger hiện hữu. CTA phụ “Liên hệ tư vấn” giữ `tel:0339197917`.
- Ba badge nhỏ sau CTA giữ thông tin đã có: 240W RMS, pin lên đến 18 giờ, IPX4 và Auracast. Không thêm cam kết giao hàng, giá gạch bỏ hoặc khuyến mãi khác.
- Bỏ card lớn giới thiệu cùng loa và nút “Xem chi tiết” khỏi `ProductTable.tsx`, giữ nguyên dải 13 ảnh, Swiper và hiệu ứng đã có. Heading “Hình ảnh thực tế” thành H2, nằm ngay sau Hero. Video, quy trình thuê, hướng dẫn, nhu cầu sử dụng, lợi ích, blog, đánh giá, FAQ và liên hệ giữ thứ tự tương đối.
- Di chuyển anchor `#products` lên giá Hero, dùng `scroll-mt-32`, giữ các link “Bảng giá” từ header/menu/blog/trang 404. Dải ảnh có anchor riêng `#hinh-anh-thuc-te`.
- Bỏ khoảng padding Hero bị cộng trùng với padding sẵn của `main` trong RootLayout, rút gọn H1 bằng cách bỏ tên thương hiệu đã có ở nhãn. Giữ một H1 và nội dung dịch vụ tại Đà Nẵng; metadata/canonical không đổi.

Không sửa catalog, dữ liệu sản phẩm, chính sách, route hoặc logic liên hệ/đặt thuê. Không thêm dependency. Gallery vẫn nhận cùng 48 ảnh và cấu hình 3D; slide 360° vẫn thứ hai. Các thay đổi tải mô hình của lượt trước được giữ nguyên. AR vẫn theo cấu hình hiện có (chưa bật do tỷ lệ chưa xác minh), không được tự bật trong lần chỉnh Hero.

## Files thay đổi trong lượt này

- `src/app/page.tsx`: truyền giá từ catalog, render phần ảnh sau Hero; việc hiển thị giá không còn phụ thuộc model 3D có bật hay không.
- `src/components/AboutSection.tsx`: giá, CTA, thông số gọn, điều chỉnh khoảng cách.
- `src/components/ProductTable.tsx`: chỉ giữ phần ảnh hiện có, bỏ UI sản phẩm trùng.
- Tài liệu này và `docs/homepage-hero-evidence/`.

Các file gallery/prefetch/test và tài liệu hiệu năng chưa commit từ lượt trước không bị reset hoặc ghi đè. Production build dùng snapshot riêng `/private/tmp/didi-home-hero-xivsjjxi`, dependency của workspace; không ghi đè `.next` đang dùng cho dev. Hash các file liên quan khớp bản build ở [source-manifest.json](homepage-hero-evidence/source-manifest.json).

## Validation

PASS `yarn lint`, `yarn tsc --noEmit --incremental false`, `yarn build` (bao gồm postbuild sitemap). Logs: [lint](homepage-hero-evidence/lint.log), [typecheck](homepage-hero-evidence/typecheck.log), [build](homepage-hero-evidence/build.log).

Chrome/Playwright **4 nhóm PASS** tại 360×640, 390×844, 768×1024 và 1440×1000:

- Giá có trong HTML trả từ server, đúng đơn vị/ngày; một H1 và một anchor `#products`.
- Giá/CTA nằm trong viewport ban đầu; hit-test xác nhận nút không bị che. Ở 360×640, nút đặt thuê nằm tại y=492,5–542,5px, phía trên thanh liên hệ cố định.
- Không overflow ngang; Hero → ảnh thực tế đúng thứ tự; card lớn trùng lặp đã bỏ, 13 ảnh ở dải ảnh vẫn giữ.
- Tab/Shift+Tab giữa hai CTA, focus outline, Enter đi đúng trang sản phẩm và khu vực đặt thuê; tel/Zalo ở điểm đến đúng link hiện có.
- URL cũ `/#products` dẫn tới giá Hero, không bị sticky header che.
- Gallery giữ 49 slide (48 ảnh + 360°), không tự mount model-viewer khi vào trang; không page runtime errors trong luồng kiểm tra.

Chi tiết ở [browser.log](homepage-hero-evidence/browser.log), [validation.json](homepage-hero-evidence/validation.json). Script kiểm tra theo môi trường nằm trong `homepage-hero-evidence/browser-check.cjs`; Chrome và Playwright Core do môi trường kiểm thử cung cấp, không thêm dependency cho website.

Regression gallery: **11 nhóm PASS** qua `scripts/test-product-3d-browser.cjs` trên homepage/product ở 360/390/768/1440px, xoay mô hình thật theo thao tác, chuyển ảnh/giữ viewer, zoom/reset/fullscreen, keyboard/Escape/focus, reduced-motion, swipe/drag/animation, lỗi tải/thử lại và WebGL fallback. [Log gallery](homepage-hero-evidence/gallery-browser.log).

Ảnh nghiệm thu:

- [Mobile 360×640](homepage-hero-evidence/home-360x640.png)
- [Mobile 390×844](homepage-hero-evidence/home-390x844.png)
- [Tablet 768×1024](homepage-hero-evidence/home-768x1024.png)
- [Desktop 1440×1000](homepage-hero-evidence/home-1440x1000.png)

Đây là browser với viewport giả lập; chưa test thiết bị iOS/Android thật hoặc thu số liệu field CWV. Chưa commit, push hoặc deploy production.
