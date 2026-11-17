# Kế hoạch triển khai SEO

Ngày 17/11/2026. Baseline `ca62037`; xem [audit](seo-audit.md) và [keyword map](seo-keyword-map.md). Mức ưu tiên phản ánh khả năng crawl, hiểu nội dung, tính đúng dữ kiện và rủi ro hồi quy; không suy đoán traffic hoặc doanh thu.

## Thứ tự ưu tiên và kết quả

| Đợt | Phạm vi | Tác động | Rủi ro / cách kiểm soát | Trạng thái |
| --- | --- | --- | --- | --- |
| 0 | Inventory, source audit, live crawl, build baseline riêng | Có bằng chứng trước sửa | Chỉ đọc production; không ghi đè `.next` của workspace | Hoàn tất |
| 1 — P1 | Metadata riêng, canonical www, H1 home, product server wrapper, 404 thật | Sửa tín hiệu canonical và soft 404 | Giữ đủ 56 URL, đúng chữ hoa/thường của product ID; so HTML và gallery/contact | Đã triển khai local |
| 2 — P1 | Href blog, index bài viết crawlable, robots/sitemap tự động | Sửa 196 href lỗi; giúp khám phá đầy đủ catalog bài viết | Chỉ sửa href, không đổi slug hay viết lại body; kiểm tra link graph | Đã triển khai local |
| 3 — P1 | Một LocalBusiness, Service thuê, Article/Breadcrumb đồng nhất | Mô tả đúng doanh nghiệp và loại giao dịch thuê | Chỉ dùng dữ kiện có nguồn; không rating, tồn kho, giờ mở cửa hoặc giá bán giả | Đã triển khai local |
| 4 — P2 | Hiển thị nội dung cốt lõi khi chưa có JS, kích thước ảnh responsive, giảm body bài viết gửi cho client homepage | Tăng độ bền rendering và giảm JS | Giữ ảnh, gallery, catalog, liên hệ; đo lab trước/sau cùng phương pháp | Đã triển khai local |
| 5 — P1, cần duyệt | Fact sheet chính sách/claim, biên tập 49 bài theo intent | Giải quyết claim chưa có nguồn và trùng lặp nội dung còn lại | Không tự chọn giá mới, gộp/xóa/noindex/301 hoặc publish nội dung chưa xác nhận | Chờ chủ website |
| 6 — ngoài repository | Kiểm tra hosting, Search Console, Business Profile | Xác nhận hành vi sau phát hành và dữ liệu Google thực tế | Không tự deploy hoặc sửa tài khoản bên ngoài | Chưa thực hiện |

Mọi kết quả “đã triển khai” ở trên là bản sửa trong repository và bản build local, chưa phải production. Các kiểm tra và giới hạn đo nằm trong [seo-validation.md](seo-validation.md).

## Phạm vi an toàn đã thực hiện

- Homepage dùng title/description tập trung vào dịch vụ thuê loa tại Đà Nẵng và một H1 trong section sẵn có. Bổ sung quy trình trao đổi, xác nhận thuê và thông tin cần hỏi trước khi nhận loa; không thêm cam kết miễn phí, giao nhanh, tiền cọc hay điều kiện thương mại mới.
- Product tách server wrapper và client UI, lấy metadata/giá/schema từ catalog hiện có. Missing product gọi `notFound()`; không giả lập khả dụng hoặc đặt lịch tự động.
- About và bốn trang ngôn ngữ có metadata riêng; đánh dấu `lang` trên phần nội dung đã dịch. Chưa phát hreflang vì các trang còn trộn tiếng Việt và chưa có bộ bản dịch tương đương hoàn chỉnh.
- Broken href `/blog` và `/blog/<slug>` chuyển về hub `/#blog` và route bài `/<slug>` đang tồn tại. Thêm danh sách thu gọn bằng `details` với liên kết thật cho đủ 49 bài. Không tạo route mới.
- Canonical/sitemap/robots thống nhất `https://www.didi-audio.com`. Next.js redirect host non-www trả **308** và giữ path/query. Cần kiểm tra cấu hình domain tại hosting khi phát hành để tránh redirect tạm thời hoặc nhiều bước.
- Địa chỉ **41 Tống Duy Tân, Đà Nẵng** được chủ cung cấp và xác nhận có tiếp khách; cập nhật footer, menu liên hệ, bản đồ và LocalBusiness. Không tự thêm quận, tọa độ, giờ hoạt động hoặc social profiles.
- FAQ hiển thị vẫn được giữ; loại FAQPage JSON-LD. Google đã ngừng hiển thị FAQ rich results từ 07/05/2026; việc bỏ markup không đồng nghĩa phải bỏ nội dung hỏi đáp hữu ích. [Google Search updates](https://developers.google.com/search/updates)

## Gói nội dung cần chủ website duyệt

| Quyết định | Hiện trạng / đề xuất cụ thể | Chưa thực hiện |
| --- | --- | --- |
| Giá Stage 320 — đã chốt | Chủ xác nhận đồng bộ FAQ theo catalog **500k/ngày**. FAQ đã lookup tên/giá từ catalog, không hardcode thêm một giá riêng | Không đổi giá catalog hoặc điều kiện thuê khác |
| Chính sách và claim | Chốt số giờ/ngày thuê, giao nhận, phí giao, cọc, giấy tờ, trả trễ; xác nhận các claim 24h, giao nhanh/miễn phí, ưu đãi, số khách và review còn ở UI cũ | Không tự đặt điều khoản hoặc hợp thức hóa claim qua schema |
| Dữ liệu doanh nghiệp | Đã xác nhận địa chỉ có tiếp khách và hotline; cần giờ hoạt động, social chính thức, xác nhận pin Maps đúng địa điểm | Schema không có hours, sameAs hoặc geo chưa xác thực |
| Bài viết | Duyệt các brief ưu tiên và mapping 49 URL trong keyword map; sau đó viết từng bài từ tài liệu hãng và hướng dẫn thuê đã chốt | Không gộp/xóa URL, khôi phục hàng loạt body thô hoặc tạo bài mới na ná nhau |
| Ngôn ngữ / liên hệ | Cần tài khoản KakaoTalk và WeChat thật; duyệt bản dịch toàn trang trước hreflang | Không điền account ID phỏng đoán; placeholder cũ được ghi nhận trong audit |
| URL / cấu trúc | Giữ các URL hiện có. Chỉ cân nhắc redirect/gộp bài sau dữ liệu GSC và review intent | Không triển khai đổi URL, 301 hàng loạt hay landing địa phương mới |

## Checklist ngoài repository

Các việc dưới đây là hướng dẫn cho chủ website sau khi duyệt và phát hành; chưa được thực hiện trong tài khoản Google.

1. **Hosting:** đặt host chính www, chuyển non-www vĩnh viễn một bước và giữ path/query; kiểm tra HTTP → HTTPS, HTTPS non-www → www, URL product và URL không tồn tại. Quy tắc trong Next.js không thay thế việc kiểm tra redirect chạy trước ứng dụng tại nền tảng hosting.
2. **Search Console:** xác minh quyền sở hữu phù hợp; gửi `https://www.didi-audio.com/sitemap.xml`; URL Inspection homepage, product, một bài và các locale; kiểm tra HTML render, canonical Google chọn, Page Indexing, Crawl Stats, Manual Actions, Security Issues. Không dùng một lệnh `site:` để kết luận số URL đã index.
3. **Đo lường:** lưu baseline thật trong GSC theo query/page/device và CrUX/CWV khi có dữ liệu; theo dõi sau khi Google crawl lại. Không hứa thời gian index hoặc thứ hạng. Kiểm tra lượt click hotline/Zalo hiện có trước khi đề xuất tracking mới.
4. **Business Profile:** rà soát hồ sơ đang tồn tại trước khi tạo thêm; dùng tên thực tế ĐiĐi Audio, địa chỉ 41 Tống Duy Tân và hotline nhất quán; xác nhận pin, biển hiệu, điều kiện tiếp khách và giờ thực tế; chọn danh mục phù hợp nhất đang có trong giao diện quản trị, khu vực phục vụ thực tế; ảnh cửa hàng/thiết bị thật, dịch vụ và website canonical. Google yêu cầu dữ liệu đại diện chính xác doanh nghiệp trong thực tế. [Google Business Profile guidelines](https://support.google.com/business/answer/3038177)
5. **Đánh giá khách:** chỉ mời khách đã sử dụng dịch vụ chia sẻ trải nghiệm thật, không tự tạo rating/review hoặc gắn aggregateRating từ dữ liệu chưa có nguồn.

Canonical và redirect là tín hiệu, không bảo đảm Google chọn đúng URL mong muốn; sitemap hỗ trợ phát hiện URL và là tín hiệu canonical yếu hơn redirect/rel-canonical. [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
