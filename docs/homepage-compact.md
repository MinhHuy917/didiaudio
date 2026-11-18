# Trang chủ tinh gọn — 18/11/2026

- Hero căn giữa: ĐIĐI AUDIO, Thuê Loa Kẹo Kéo Đà Nẵng, slider 5 ảnh sản phẩm. Không có 360° trong Hero.
- Ngay sau Hero: khối xem 360° riêng, dùng Product3D hiện có; giá lấy từ products.price, thông số chính và CTA đặt thuê bên dưới ảnh. Không khởi tạo WebGL khi vào trang; chỉ mở khi bấm. AR vẫn theo cấu hình đã xác minh, hiện chưa bật. Không thay giá, model hoặc chính sách.
- Sau hình ảnh thực tế: quy trình thuê 3 bước với icon.
- Video và hướng dẫn: hai thẻ dẫn tới thư viện và hướng dẫn hiện có; không nhúng danh sách video dài trên home.
- Nhu cầu sử dụng: một thẻ. Blog và đánh giá: thẻ mở rộng theo nhu cầu, mặc định đóng. Bỏ section lợi ích dài khỏi home; chính sách/FAQ và liên hệ vẫn có.
- Giữ anchor products/promos/blog/chinh-sach/faq và luồng đặt thuê sản phẩm hiện có.

Files giao diện: src/app/page.tsx, AboutSection.tsx, HomeRentalPreview.tsx, HomeQuickLinks.tsx, RentalProcess.tsx. Tái sử dụng gallery, viewer, Testimonials, dữ liệu blog và catalog; không thêm dependency. Giữ tiêu đề ĐIĐI AUDIO do chủ website đã chỉnh trước lượt này.

Validation: PASS yarn lint, yarn tsc --noEmit --incremental false, yarn build (gồm sitemap). Chrome viewport 360/390/768/1440: PASS thứ tự section, slider 5 ảnh, không overflow, giá catalog, link tài nguyên HTTP200. Tại390px: tải mô hình thật, Escape/return focus, CTA đến trang sản phẩm #dat-thue đều PASS. Chưa test điện thoại vật lý hoặc native AR. Logs trong homepage-compact-evidence/.

Script mới scripts/test-compact-home-browser.cjs kiểm tra luồng homepage mới. Hai script gallery/reference cũ chuyển phạm vi full catalog về trang sản phẩm (homepage chủ đích chỉ còn5ảnh); script startup cập nhật homepage không còn prefetch hint của gallery tương tác. Không chạy lại toàn bộ bộ kiểm thử thư viện video/guide hoặc các script gallery cũ trong lượt này; phần nội dung đầy đủ ở các trang đó không thay đổi.

Chưa deploy/push.
