# Tránh dựng 3D khi mới vào trang — 18/11/2026

## Nguyên nhân và thay đổi

Gallery cũ gọi `setWarm(true)` sau `window.load`, qua `requestIdleCallback` có timeout 800ms (fallback 100ms). Việc này mount viewer ẩn ngay cả khi khách đang xem ảnh đầu. Viewer nhập model-viewer/Three, giải mã GLB và tạo WebGL. Idle callback vẫn chạy trên main thread; nó không chuyển công việc sang worker. File GLB hiện tại khoảng 9,9MB, chưa kể chi phí giải mã và đưa texture lên GPU.

Gallery mới ưu tiên ảnh tĩnh. Sau `window.load` 3 giây, chỉ thêm resource hint `rel=prefetch`, `as=fetch`, priority thấp cho file GLB. Không mount viewer, nhập engine, giải mã mô hình hoặc tạo WebGL ở bước này. Bỏ tải dự đoán khi tab đang ẩn, bật Save-Data, mạng slow-2g/2g/3g hoặc khách đã mở viewer. Nếu trình duyệt không cung cấp thông tin mạng, vẫn gửi hint; trình duyệt quyết định có tải hay không.

Chỉ khi khách chọn slide 360° hoặc nhấn mở viewer ở gallery không có ảnh, component mới khởi tạo 3D. Sau lần mở này, giữ viewer khi chuyển về ảnh để tránh khởi tạo lại; auto-rotate chỉ chạy ở slide tương tác. Không đổi GLB, cache headers, cấu hình AR, ảnh, giá, nội dung hoặc luồng đặt thuê. Không thêm dependency.

Resource hint là best effort: browser có thể bỏ qua hoặc không tái sử dụng cache. Không cam kết mô hình chỉ tải một lần trên mọi browser. Lần mở 360° đầu vẫn cần giải mã/render và có thể chờ ngắn. Nếu cần giảm tiếp độ trễ đó, bước sau là đo và tối ưu mesh/texture, có kiểm tra chất lượng và decoder tương thích. Chưa thay mô hình trong lượt này.

## Đo cục bộ trước/sau

Hai production build cô lập dùng cùng source/dependencies; bản trước thay gallery bằng phiên bản HEAD trước sửa. Chrome headless, viewport 390×950, CPU throttle 4×, software WebGL, reduced-motion, chặn tài nguyên bên thứ ba, quan sát 8 giây trước khi chọn 360°. Mạng localhost, giả lập connection 4g để kiểm tra prefetch; đây không phải mô phỏng băng thông di động. Mỗi route đo một lần, chưa có thống kê nhiều lần hoặc điện thoại thật.

| Trước khi chọn 360° | Homepage trước → sau | Product trước → sau |
| --- | --- | --- |
| Viewer đã mount | 1 → 0 | 1 → 0 |
| Lần gọi WebGL/WebGL2 | 2 → 0 | 2 → 0 |
| Engine model-viewer đăng ký | Có → Không | Có → Không |
| Khoảng ngắt frame lớn nhất | 2099,9 → 550ms | 1983,3 → 266,6ms |
| GLB initiator | fetch → link | fetch → link |

GLB vẫn được tải ở nền trong phép thử sau sửa (8.557.070 byte truyền qua mạng). Kết quả xác nhận loại bỏ việc dựng 3D ngoài ý muốn lúc vào trang; vẫn có long task từ phần trang còn lại. Không xem đây là số liệu field Core Web Vitals, INP, hoặc bằng chứng mọi máy hết đứng 5 giây. Phép thử cuộn sau khoảng quan sát chỉ kiểm tra trang còn cuộn được, không đo độ trễ cuộn trong toàn bộ thời gian khởi động.

Bằng chứng: [trước](3d-startup-evidence/before/startup.json), [sau](3d-startup-evidence/after/startup.json), [source hashes](3d-startup-evidence/source-manifest.json).

## Files và kiểm thử

- `src/components/product-gallery/ProductMediaGallery.tsx`: tách tải file nền khỏi mount viewer, giữ khởi tạo theo thao tác.
- `src/lib/model-prefetch.ts`: resource hint, kiểm tra mạng/Save-Data, deduplicate và cleanup.
- `scripts/test-model-prefetch.cjs`: kiểm tra guard mạng và vòng đời hint.
- `scripts/check-3d-startup-browser.cjs`: kiểm tra renderer/WebGL trước thao tác và thu bằng chứng lab.
- `scripts/test-product-3d-browser.cjs`: cập nhật contract không dựng 3D ban đầu; giữ regression tương tác.
- Tài liệu này, bổ sung `docs/product-gallery.md`, logs/JSON trong `docs/3d-startup-evidence/`.

Lệnh kiểm tra: `yarn lint`, `yarn tsc --noEmit --incremental false`, `node --test scripts/test-model-prefetch.cjs scripts/test-product-3d.cjs`, `node scripts/check-product-3d.cjs`, `yarn build`. Production build chạy trong snapshot `/private/tmp/didi-3d-startup-after-lPKFje`, dùng node_modules của workspace; tránh ghi đè cache dev.

Browser dùng Playwright Core có sẵn ở môi trường, không thêm vào dependency website:

```sh
TEST_BASE_URL=http://127.0.0.1:4192 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/check-3d-startup-browser.cjs
TEST_BASE_URL=http://127.0.0.1:4192 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/test-product-3d-browser.cjs
```

Lint, typecheck, 2 nhóm unit prefetch, 3 nhóm unit 3D, validator GLB và production build PASS. Browser regression **11 nhóm PASS**, kết quả cuối nằm ở [browser.log](3d-startup-evidence/browser.log). Kiểm tra homepage/product tại 360/390/768/1440px, photo-first, không có renderer ban đầu, mở mô hình thật theo thao tác, giữ viewer, AR gate, reduced motion, keyboard/focus, controls, links và overflow; thêm lỗi tải/retry và WebGL unavailable.

Lượt browser đầu timeout tại `page.goto` chờ `networkidle` sau 6 nhóm PASS, lưu ở `browser-initial-timeout.log`. Harness chuyển sang chờ `load` tối đa 60 giây thay vì yêu cầu mọi tác vụ tải nền im lặng; chạy lại toàn bộ 11 nhóm thành công. Không sửa hoặc bỏ các assertion tương tác để vượt kiểm tra.

AR vẫn tắt theo cấu hình chưa xác minh tỷ lệ. Không deploy/push; chưa nghiệm thu trên iOS/Android thật.
