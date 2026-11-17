# SEO audit — ĐiĐi Audio

Ngày 17/11/2026, Asia/Ho_Chi_Minh. Baseline repository `ca62037`, trạng thái Git sạch khi bắt đầu. Audit nguồn đi trước triển khai; production được crawl riêng với hai bản build local trước/sau. Không có Search Console/Google Business Profile dashboard nên không kết luận index, ranking hoặc Core Web Vitals thực tế. Không có bằng chứng production đang chạy đúng commit baseline và task này không deploy production.

## Findings ban đầu và ưu tiên

| ID | Mức | Bằng chứng nguồn / route | Ảnh hưởng và hướng xử lý |
| --- | --- | --- | --- |
| SEO-01 | P1 | `src/app/layout.tsx` canonical homepage; product, About, 4 locale không override | Canonical sai ở trang dịch vụ quan trọng. Self-canonical tuyệt đối theo từng URL |
| SEO-02 | P1 | `src/app/products/[id]/page.tsx` client page, missing model trả JSX, không `notFound()` | Soft 404; tách server wrapper giữ nguyên UI, trả 404 thật |
| SEO-03 | P1 | `src/components/AboutSection.tsx` dùng H2; homepage không mount HeroSection | Thiếu H1. Sửa heading trong cùng khung hiện có, giới thiệu ngắn theo intent dịch vụ |
| SEO-04 | P1 | `src/app/page.tsx`: title lặp biến thể, OG nhầm An Nhơn, description từ50k/30–60p/24h | Metadata không nhất quán, claim chưa xác nhận. Thay metadata tự nhiên, không quảng cáo giá/ưu đãi chưa rõ |
| SEO-05 | P1 | `src/data/blog.ts:921` ghi đè toàn bộ49 bài bằng template | Nội dung trùng lặp, chứa hướng dẫn SEO thay vì giải quyết từng intent. Cần kế hoạch biên tập riêng và owner approval trước thay đổi hàng loạt |
| SEO-06 | P1 | Template `blog.ts` tạo196 href `/blog`/`/blog/<slug>`; routing thật `/<slug>` | Broken links. Sửa href sang URL thật, giữ nguyên slug và nội dung bài |
| SEO-07 | P1 | `public/sitemap*`, `next-sitemap.config.js` non-www,55 URL, thiếu product | Đồng bộ host với canonical www; sitemap từ route prerender thật, thêm product và kiểm tra indexable |
| SEO-08 | P1 | Root/home/locale lặp LocalBusiness; root priceRange50k–1.6m, FAQ390k khác catalog500 | Một entity graph; bỏ range chưa có nguồn. Chủ đã chốt FAQ theo catalog500k/ngày; chính sách và claim khác còn cần xác nhận |
| SEO-09 | P1 | Root `lang=vi`, locale trộn component VI; kế thừa canonical/OG | Cần metadata riêng; không phát hreflang cho phiên bản chưa đủ tương ứng/dịch nhất quán. Không giả lang hoàn toàn khác khi shell vẫn tiếng Việt |
| SEO-10 | P2 | `BlogCamTrai` chỉ xuất6 link HTML đầu, các trang sau đổi bằng state | Khả năng khám phá43 bài còn lại hạn chế. Thêm index link thu gọn crawlable trong section hiện tại |
| SEO-11 | P2 | Framer initial opacity0 trong AboutSection/ProductTable | Giá có trong SSR nhưng không nhìn thấy nếu JS không chạy. Nội dung cốt lõi hiển thị từ HTML/CSS đầu |
| SEO-12 | P2 | Product `Image fill priority` chưa có sizes; blog card import cả full bodies client | Tối ưu sizes và server/client data boundary, giữ ảnh/logo/layout |
| SEO-13 | P2 | Baseline `Footer`/`MenuContact` cùng ghi43 Tống Duy Tân; legacy `Offices` có86 Lê Thiệt nhưng không mount | Chủ đã xác nhận **41 Tống Duy Tân là nơi nhận loa công khai cho khách** trong phiên này. Sửa NAP/map/schema theo xác nhận; giờ hoạt động và quyền sở hữu social còn chờ. Không dùng địa chỉ legacy |
| SEO-14 | P2 | Homepage/locale testimonials và counters không có provenance kiểm chứng | Không đưa rating/review vào JSON-LD; nội dung business claim cần xác nhận trước biên tập |

P1 ảnh hưởng crawl/index/hiểu nội dung đáng kể; P2 cải thiện discovery, độ tin cậy hoặc hiệu năng. Không suy diễn mức mất traffic/doanh thu từ source.

## Rendering và phạm vi URL

Next14 App Router, React18, TS, Tailwind; data TypeScript local, không booking backend. Có56 URL nội dung dự định: home + About +4 locale +49 bài +1product. Blog SSG qua static params; home/About/locale được prerender; product baseline client page trong dynamic server route vẫn có SSR HTML, không được gọi là “CSR không HTML” chỉ vì có `use client`. Googlebot cần nhận nội dung, metadata và status đúng trước/sau hydration.

`src/app/[slug]/page.tsx` tạo route bài viết trực tiếp ở `/<slug>`; repository không có route `/blog` hoặc `/blog/[slug]`. `src/app/products/[id]/page.tsx` chỉ có một model catalog đang hoạt động: `/products/loa-jbl-partyBox-stage-320`. Không coi các model được nhắc trong bài cũ là sản phẩm đang cho thuê.

## Bằng chứng raw HTML và kết quả sau sửa an toàn

| Hạng mục | Baseline đã quan sát | Bản local sau sửa |
| --- | --- | --- |
| Inventory |56 URL nội dung hiện hữu; crawl trực tiếp đủ56. Homepage thiếu H1;6 URL kế thừa canonical homepage | Giữ đủ56 URL; mỗi URL có title riêng, một H1 và self-canonical trong HTML trả về |
| Discovery từ homepage | Theo đồ thị các thẻ `a[href]` trong raw HTML, chỉ9/56 URL reachable;47 chưa reachable theo cách này |56/56 reachable nhờ index bài viết crawlable và href đúng. Đây là khả năng khám phá link, **không phải số URL Google đã index** |
| Link bài viết |196 lần xuất hiện href sai, thuộc12 đích `/blog` hoặc `/blog/<slug>`; các đích trả404 | Chỉ remap href: `/blog` → `/#blog`, `/blog/<slug>` → `/<slug>`; không đổi slug hay viết lại nội dung bài |
| Canonical/sitemap | Canonical www nhưng sitemap non-www,55 URL và thiếu product | Robots/sitemap dùng host canonical www; sitemap gồm56 URL nội dung200 đã kiểm tra, loại URL lỗi/redirect/noindex hiện có |
| Nội dung khi tắt JS | Giá có trong HTML nhưng animation opacity khiến phần cốt lõi không nhìn thấy | Kiểm tra no-JS thấy H1 và giá; không dùng nội dung riêng cho Googlebot |
| URL không tồn tại | Missing product trả UI không tìm thấy nhưng HTTP200 | Unknown product/slug trả404 thật và noindex; URL đang hoạt động được giữ |
| Structured data | LocalBusiness lặp; range giá chưa có nguồn và FAQ markup chứa thông tin giá mâu thuẫn | Một entity LocalBusiness dùng dữ kiện được xác nhận, Service/rental offer theo catalog; không rating, tồn kho hoặc giờ hoạt động tự thêm |

Bằng chứng production: [live-baseline-analysis.json](seo-evidence/live-baseline-analysis.json). Kết quả crawl sau cùng: [final-after-results.json](seo-evidence/final-after-results.json); các assertions và kiểm thử browser: [validation.json](seo-evidence/validation.json). Xem [seo-validation.md](seo-validation.md) để biết bản build cuối, status/redirect, metadata/schema, viewport360/390/768/1440 và regression liên hệ/gallery. Dùng Googlebot user-agent chỉ là mô phỏng HTTP, không thay thế URL Inspection hay quá trình render/index thật của Google.

Đo hiệu năng dùng browser local, context mới, snapshot khoảng3 giây, không throttle và chặn third party trong phép đo. [local-baseline-lab.json](seo-evidence/local-baseline-lab.json) là số đo lab của home/product/article ở1440 và390px; không phải CrUX, không phải field CWV, và tổng layout-shift entries của snapshot không phải CLS theo toàn bộ session. Không suy ra tăng hạng hoặc mức cải thiện production từ phép đo này.

## Nội dung trùng lặp và intent cần xử lý tiếp

`src/data/blog.ts`, hàm `buildSeoArticleContent()` và phép `rawBlogPosts.map()` ở cuối file, thay body của **cả49 bài** bằng cùng một khung SEO. Slug/title/description khác nhau không giải quyết việc phần thân lặp lại. Template hiện có các đoạn giải thích chiến lược keyword, gợi ý ảnh và danh sách từ khóa dùng chung, thay vì trả lời riêng câu hỏi của từng URL. `src/components/BlogArticlePage.tsx` loại đoạn mở đầu bắt đầu bằng “Meta description:” trước khi render; không tính riêng đoạn đã loại này là nội dung khách đang đọc. Những đoạn hướng dẫn SEO khác vẫn nằm trong body hiển thị.

Sửa196 href là thay đổi kỹ thuật nhỏ đã thực hiện; **chưa sửa vấn đề trùng body49 bài**. Không tự khôi phục toàn bộ body cũ: nguồn cũ còn nhắc model/giá/tính năng không thuộc catalog hiện tại. Ví dụ giá490k/275k trong các entry thô không thể được mô tả là giá khách đang thấy, vì export đang ghi đè các body đó. Cần kiểm chứng từng outline và fact sheet trước khi biên tập.

Các URL checklist giao nhận/thử loa/phụ kiện, tiệc gia đình/sinh nhật, yoga/gym/lớp học có intent chồng lấn. Keyword map đề xuất cách phân biệt, chưa có bằng chứng phải giữ tất cả độc lập hay gộp. Không tự canonical chéo, noindex, đổi URL hoặc301 hàng loạt. Không kết luận Google đã phạt website chỉ từ template; rủi ro nằm ở giá trị nội dung và mức độ đáp ứng intent. Google yêu cầu nội dung hữu ích và có chính sách với nội dung quy mô lớn tạo chủ yếu để thao túng tìm kiếm. [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

## Local SEO và fact sheet

| Dữ kiện | Nguồn / trạng thái | Cách sử dụng |
| --- | --- | --- |
| ĐiĐi Audio, `https://www.didi-audio.com/`, Đà Nẵng | Yêu cầu của chủ website và nội dung repository | Dùng nhất quán trong metadata/entity/service |
| Hotline0339 197 917 | Chủ đã cung cấp; Footer/MenuContact và catalog dùng cùng số | `tel:0339197917`; schema `0339197917` |
|41 Tống Duy Tân, Đà Nẵng | Chủ xác nhận địa chỉ và đây là điểm nhận loa công khai cho khách trong phiên này | Được sửa NAP/map và LocalBusiness. Không suy ra giờ tiếp khách, tọa độ hoặc đặc điểm cửa hàng |
|43 Tống Duy Tân | Địa chỉ baseline ở Footer/MenuContact | Đã được chủ sửa thành41, không giữ làm địa chỉ thứ hai |
|86 Lê Thiệt và email legacy | `src/components/Offices.tsx`; component không được mount trên route hiện hành | Là dữ liệu repository cần dọn sau, không phải bằng chứng có chi nhánh thứ hai hoặc NAP lệch trên HTML đang hiển thị |
| Giờ hoạt động, social profiles | Link tồn tại trong source không chứng minh quyền sở hữu; chưa được chủ xác nhận | Chưa thêm `openingHours`/`sameAs` vào schema |
|500k/ngày Stage320 | Giá trong `src/data/products.ts`, đang dùng ở catalog/product | Giữ nguyên nguồn dữ liệu và logic thuê; không đổi giá |
|390k trong FAQ, claim từ50k | `src/data/faqs.ts` và metadata/claim baseline | Chủ đã xác nhận đồng bộ FAQ theo catalog **500k/ngày**. FAQ lookup giá từ catalog; metadata không quảng cáo giá từ50k chưa xác nhận |

Các claim còn cần chủ xác nhận: giao30–60 phút/30 phút, hỗ trợ24h/24-7, miễn phí setup/ưu đãi,1000+ khách và5.0/100% counters ở `WhyUs`/`Testimonials` và About/locale. Review trong source được hardcode, chưa có provenance để xác minh; không kết luận là giả và không phát sinh AggregateRating/Review schema. `UseCaseSection` có claim IPX7 trong khi catalog khai báo IPX4; cần đối chiếu đúng model và tài liệu hãng trước khi sửa nội dung. Placeholder Kakao/WeChat trong `src/data/landing-pages.ts` cần chủ cung cấp link thật hoặc duyệt xử lý; không tự tạo tài khoản/link.

Google đã ngừng hiển thị FAQ rich results từ07/05/2026 và cập nhật tài liệu liên quan vào tháng6/2026. Vì vậy task bỏ FAQ structured data nhưng giữ FAQ hiển thị, không hứa rich results. [Google Search documentation updates,08/05 và15/06/2026](https://developers.google.com/search/updates).

## Việc ngoài repository và các phê duyệt còn thiếu

- **GSC:** xác minh property đúng host, submit sitemap sau khi chủ triển khai, dùng URL Inspection kiểm tra HTML/render của home/product/bài đại diện, theo dõi Page indexing, canonical Google chọn và CWV thực tế. Chưa thực hiện những bước này.
- **Google Business Profile:** chủ xác minh/quản lý hồ sơ thật, đối chiếu tên/địa chỉ41 Tống Duy Tân/hotline/website, chọn category phản ánh hoạt động thật, khai báo giờ có người tiếp khách và service area thực tế, bổ sung ảnh thật và quy trình xin đánh giá trung thực. Địa chỉ public pickup đã được xác nhận nhưng chưa có dữ liệu xác minh profile, biển hiệu hoặc điều kiện tiếp khách. Không tự tuyên bố GBP đủ điều kiện hay đã tối ưu. [Business Profile guidelines](https://support.google.com/business/answer/3038177), [service-area/hybrid business guidance](https://support.google.com/business/answer/9157481).
- **Cần duyệt nội dung:** phụ phí/cọc/giấy tờ/trả trễ, cam kết giao nhận/setup/hỗ trợ, thông số/phụ kiện và claims/reviews/counters. Địa chỉ41, tính công khai và giá FAQ theo catalog500k/ngày đã chốt; giờ hoạt động/social còn thiếu.
- **Cần duyệt biên tập:**49 outline/nguồn, bài nào có intent đủ khác biệt và kế hoạch xử lý nội dung cũ. Roadmap ở [seo-keyword-map.md](seo-keyword-map.md); không tạo thêm trang địa phương gần giống nhau.

Không phát hiện P0 bằng chứng được trong phạm vi kiểm tra. Các sửa an toàn ưu tiên P1 về canonical/status/HTML/link; vấn đề chất lượng49 body và business facts còn pending được giữ rõ, không coi là hoàn tất chỉ vì lint/build thành công.

## Kiến trúc và giới hạn vận hành

Không có API route, database, model đặt thuê hoặc form thanh toán trong source hiện tại. Catalog và FAQ là TypeScript trong `src/data`; bài viết export từ template local. Luồng thuê chuyển qua `tel:`, Zalo, Messenger/WhatsApp; lịch thuê được xác nhận bên ngoài website. Không thêm backend, AI API hay tồn kho/ngày giả. `RootLayout` là shell client dùng Framer Motion; Tailwind quản lý style và Inter có subset tiếng Việt. MDX tooling còn trong config nhưng49 URL bài đang lấy dữ liệu TypeScript.

Package scripts dùng Next build/start, postbuild gọi next-sitemap; không có CI/deployment manifest trong repo. Header live có dấu vết Vercel nhưng chưa truy cập dashboard hay xác minh commit đang deploy. Redirect ứng dụng308 không chứng minh cấu hình domain ở hosting đã đổi. Sitemap lấy route prerender với exclusions; khi thêm route noindex mới phải cập nhật exclusion và chạy validator, không mặc định transform tự đọc metadata.
