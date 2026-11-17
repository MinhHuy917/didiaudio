# Bằng chứng SEO

Thu thập ngày17/11/2026. Không có dữ liệu tài khoản GSC/GBP; không suy ra index/ranking từ file này.

- `live-baseline-results.json`, `live-baseline-analysis.json`: production trước sửa, raw HTML56 URL, status/metadata/schema/link graph, endpoint/host redirects và browser samples. Không chứng minh live chạy cùng commit repository.
- `local-baseline-results.json`, `local-baseline-lab.json`, `baseline-build.log`: build riêng từ ca62037, cùng phương pháp đo local với bản sau.
- `final-after-results.json`, `final-after-lab.json`: crawl bản sửa local cuối,56 URL,12 browser samples1440/390 có/không JS. Dữ liệu inventory được đọc từ source TypeScript, không thêm sản phẩm.
- `validation.json`, `tests.log`:15 nhóm assertions thành công gồm UTF-8, canonical/status/schema/sitemap/links, UA mô phỏng, serializer, gallery/contact/FAQ500k và8 trang ở4 viewport360/390/768/1440.
- `lint.log`, `typecheck.log`, `build.log`: lint/typecheck/build exit0. Typecheck không có diagnostics nên log rỗng.
- `before-*.png`, `after-*.png`: ảnh màn hình mẫu; `after-faq-500k-390.png` là FAQ mở sau xác nhận đồng bộ giá của chủ.
- `before-*.html.gz`, `after-*.html.gz`: phản hồi HTML nguyên bản của home, product và bài mẫu; giải nén bằng gzip để kiểm tra, không phải HTML sau hydration.
- `source-manifest.json`: SHA-256 nguồn và kiểm tra bảo toàn catalog/assets/package/locks; ngoại lệ href blog, FAQ theo xác nhận và robots/sitemap sinh tự động được ghi rõ.

Timestamps trong JSON là UTC; báo cáo dùng ngày theo Asia/Ho_Chi_Minh. Performance là snapshot lab3 giây, không throttle, chặn third party; không phải Lighthouse/CrUX hay field CWV. Mọi HTTP/bot/browser check sau sửa trỏ localhost. Chưa deploy, chưa dùng kết quả của bản sửa để tuyên bố production đã đổi.
