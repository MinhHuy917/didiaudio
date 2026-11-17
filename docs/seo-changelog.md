# SEO changelog

Ngày 17/11/2026, baseline `ca62037`. Toàn bộ thay đổi ở repository; không deploy, giữ giá catalog/sản phẩm/điều khoản kinh doanh. Riêng FAQ cũ được đồng bộ theo giá catalog500k/ngày sau xác nhận của chủ. Git sạch trước task; không reset, xóa hoặc ghi đè thay đổi của người dùng.

## Những vấn đề đã sửa

- Homepage thiếu H1; metadata lặp keyword và chứa claim chưa có xác nhận.
- Product, About và bốn locale dùng canonical homepage; product không tồn tại trả soft 404.
- 196 href trong bài trỏ sang `/blog*` không có route; 47/56 URL chưa reachable từ homepage qua link trong raw HTML.
- Sitemap dùng host non-www, thiếu product; schema doanh nghiệp lặp và chứa range giá chưa có nguồn.
- Giá có trong SSR nhưng bị opacity 0 khi JS không chạy; homepage client nhận cả body của 49 bài.
- NAP cũ 43 Tống Duy Tân đã được chủ sửa thành **41 Tống Duy Tân**, có tiếp khách tại địa điểm.

## Files thay đổi và mục đích

| Files | Thay đổi |
| --- | --- |
| `src/lib/seo.ts` (mới) | Nguồn metadata/URL/entity chung, LocalBusiness theo xác nhận, Service thuê và price specification từ catalog; serializer JSON-LD an toàn với dấu `<` |
| `src/app/layout.tsx` | Default metadata trung tính; bỏ canonical homepage kế thừa toàn site; một LocalBusiness server-rendered, logo thật; giữ analytics/translate |
| `src/app/page.tsx` | Metadata homepage, Service schema, quy trình thuê ngắn, chỉ truyền dữ liệu card cần thiết sang client; không dựng lại UI lớn |
| `src/components/AboutSection.tsx` | Một H1 dịch vụ, đoạn giới thiệu ngắn, hiển thị từ HTML đầu |
| `src/components/RentalProcess.tsx` (mới) | Ba bước xem loa, liên hệ nhu cầu, xác nhận thuê; phục hồi đích anchor `#promos` đang được menu sử dụng |
| `src/components/FAQ.tsx` | Bỏ FAQPage schema; thêm đích `#chinh-sach` với thông tin cần xác nhận, giữ FAQ hiển thị |
| `src/data/faqs.ts` | Chủ xác nhận sửa FAQ390k theo catalog500k/ngày; FAQ lookup tên/giá từ catalog để tránh lệch lại, các câu trả lời khác giữ nguyên |
| `src/app/products/[id]/page.tsx` | Server metadata/static params, `notFound()` đúng HTTP, Service thuê theo model |
| `src/components/ProductDetailClient.tsx` (mới) | Tách UI chi tiết cũ nhận product qua prop; giữ gallery 13 ảnh, giá, các CTA liên hệ và nội dung; khai báo sizes cho ảnh chính |
| `src/app/about-didiaudio/page.tsx`, `src/components/PageIntro.tsx` | Metadata riêng, heading hiển thị không phụ thuộc animation; sửa cấu trúc heading và overflow ảnh About trên màn nhỏ |
| `src/app/speaker-rental-da-nang/page.tsx`, `src/app/speaker-rental-da-nang-ko/page.tsx`, `src/app/speaker-rental-da-nang-ru/page.tsx`, `src/app/speaker-rental-da-nang-zh/page.tsx` | Title/description/canonical/OG riêng từng route |
| `src/components/InternationalLandingWrapper.tsx` | Bỏ LocalBusiness lặp, đánh dấu ngôn ngữ trên các phần đã dịch; chưa thêm hreflang cho nội dung trộn ngôn ngữ |
| `src/app/[slug]/page.tsx`, `src/components/BlogArticlePage.tsx` | Title bài riêng, giảm keyword metadata tổng hợp; Article/Breadcrumb JSON-LD, publisher dùng cùng entity, ảnh tuyệt đối; bỏ schema FAQ và microdata Article lặp; ảnh chính có sizes |
| `src/components/BlogCamTrai.tsx` | Card data qua props; index 49 bài bằng thẻ a crawlable trong details thu gọn, giữ UI phân trang đang có |
| `src/data/blog.ts` | Chỉ sửa href template về route thật và nhãn link hub; không thay body/slug/date hoặc khôi phục body thô |
| `src/components/ProductTable.tsx` | Nội dung/giá hiện ngay khi JS chưa chạy; thêm sizes ảnh, không sửa giá/đặc tính catalog |
| `src/components/Footer.tsx`, `src/components/MenuContact.tsx` | NAP và Maps theo 41 Tống Duy Tân, không dùng tọa độ của địa chỉ cũ; footer liên hệ hiện từ HTML đầu, thêm link thật tới 4 locale |
| `src/app/not-found.tsx` | Trang phục hồi 404 tiếng Việt đọc được trên nền tối, không phụ thuộc FadeIn |
| `next.config.mjs` | Redirect host non-www → www bằng 308, giữ path/query; giữ cấu hình ảnh AVIF/WebP sẵn có |
| `next-sitemap.config.js` | Host canonical, bỏ lastmod giả khi build, loại route lỗi/dynamic placeholder; sinh đủ product SSG |
| `public/robots.txt`, `public/sitemap.xml`, `public/sitemap-0.xml` | Artifacts từ postbuild cuối, 56 URL canonical indexable; không sửa sitemap thủ công để che khác biệt build |
| `scripts/crawl-seo.cjs`, `scripts/validate-seo.cjs` (mới) | Crawl HTML không chạy JS, Googlebot-UA mô phỏng, graph links, endpoints, browser/lab snapshots; assertions metadata/status/schema/sitemap/redirect/mobile/gallery/liên hệ |
| `docs/seo-*.md`, `docs/seo-evidence/*` (mới) | Audit, keyword map, kế hoạch, changelog, hướng dẫn kiểm thử và bằng chứng trước/sau |

Danh sách chính xác và SHA-256 nguồn đã kiểm thử nằm trong [source-manifest.json](seo-evidence/source-manifest.json). Không thêm dependency, không thay lockfile hoặc catalog sản phẩm. Mọi ảnh gốc được giữ nguyên; tận dụng Next Image optimizer AVIF/WebP đã có thay vì chuyển đổi ảnh hàng loạt.

## URL và từ khóa

Giữ nguyên đủ 56 URL nội dung. Homepage nhắm nhóm thuê loa kẹo kéo / thuê loa kéo / thuê loa Đà Nẵng; product nhắm JBL PartyBox Stage 320 và intent thuê model cụ thể. About, bốn locale và 49 bài có canonical/title phù hợp URL. Mapping chi tiết, các brief nội dung khác intent và kế hoạch tránh cannibalization nằm trong [seo-keyword-map.md](seo-keyword-map.md).

## Những phần còn chờ duyệt

Đã chốt **500k/ngày** và đồng bộ FAQ từ catalog theo xác nhận của chủ. Các mục sau vẫn chờ duyệt: claim giao nhanh/miễn phí, số khách, đánh giá và chính sách cũ; viết lại/gộp/xóa49 bài hoặc đổi URL; giờ hoạt động/social/geo chưa xác minh. Không tạo landing biến thể. Các placeholder liên hệ KakaoTalk/WeChat cần tài khoản thật.

Đã loại FAQ markup theo việc Google ngừng FAQ rich results từ 07/05/2026; FAQ hiển thị vẫn được giữ. [Google Search documentation updates](https://developers.google.com/search/updates)

Kết quả lint/typecheck/build, crawl và mobile được ghi trong [seo-validation.md](seo-validation.md); không có dữ liệu GSC để kết luận đã index hoặc tăng hạng.
