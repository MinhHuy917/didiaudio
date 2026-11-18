# Trung tâm hướng dẫn JBL PartyBox Stage 320

> Cập nhật: chủ ĐiĐi Audio đã xác nhận bộ **Alpha Works D2**. Hướng dẫn micro đã được hoàn thiện ở cả năm ngôn ngữ theo manual chính hãng. Xem [báo cáo D2 và kiểm thử mới](product-guide-d2.md). Các log trong `product-guide-evidence` là snapshot của bản ban đầu; chưa kiểm thử thiết bị vật lý.

## Phạm vi và kiểm tra ban đầu

Đã truy cập https://www.didi-audio.com/ và đọc repository trước khi triển khai. Website production hiển thị dịch vụ thuê loa, Stage320, giá500k/ngày, bộ micro không dây và các kênh liên hệ; không xác định được hãng/model, cách cấp nguồn, đầu thu hoặc thao tác ghép đôi của bộ micro đang giao. Không suy đoán những thông tin đó từ ảnh hoặc video review.

Stack: Next.js14 App Router, React18, TypeScript, Tailwind, Inter local, lucide-react. Metadata/canonical/JSON-LD dùng `src/lib/seo.ts`, sitemap bằng next-sitemap. Ngôn ngữ hiện có: landing pages vi/en/ko/ru/zh và Google Translate ở root. Đã giữ các thay đổi thư viện video chưa commit của phiên trước, không reset/xóa/ghi đè chúng.

Phương án tích hợp: một route SSR có bản dịch qua query; teaser nhẹ trên homepage, bốn landing pages quốc tế và trang Stage320; nội dung hướng dẫn dạng dữ liệu, native accordion, tìm kiếm tại trình duyệt, trạng thái hoàn thành chỉ trong phiên tab. Tái sử dụng Container, link/brand styles, assets Stage320 và player YouTube đã có. Không thêm dependency, backend, tài khoản hoặc API key.

## Kết quả triển khai

Route: `/huong-dan-su-dung-jbl-partybox-320`.

- Sáu chủ đề: Bluetooth; micro/karaoke; điều khiển; Auracast; sạc/an toàn; xử lý lỗi.
- 25 bước chính và7 tình huống lỗi, mỗi tình huống có nguyên nhân thường gặp và3 bước xử lý: tổng46 bước, thêm4 mục chuẩn bị. Nội dung không cam kết người dùng phải thực hiện tất cả tình huống lỗi.
- Tìm kiếm không dấu/không phân biệt hoa thường, hỗ trợ nhiều từ; kết quả rỗng và nút xóa/khôi phục. Menu6 chủ đề có href thật, xóa tìm kiếm trước khi nhảy và quản lý focus/scroll margin để header không che tiêu đề.
- Native `<details>/<summary>` giữ toàn bộ hướng dẫn trong HTML, mở được bằng Enter/Space và cả khi JavaScript tắt. Mỗi bước có nút đánh dấu/bỏ đánh dấu, aria-pressed, tiến độ và live announcement.
- Session storage chỉ chứa ID bước/checklist đã tự đánh dấu, không có dữ liệu cá nhân. ID ổn định qua năm ngôn ngữ; JSON lỗi/ID lạ bị bỏ qua. Chặn storage vẫn dùng được guide và checkbox.
- Ảnh thật của top panel, cổng micro/GAIN và mặt sau Stage320. Không tự vẽ vị trí nút hoặc dùng ảnh model khác. Ảnh có alt từng ngôn ngữ, kích thước/aspect đặt trước, lazy/responsive và link xem ảnh gốc lớn.
- Video chính thức JBL `wx5IPeEge4g` dùng lại catalog đã xác minh. Mỗi chủ đề có nút mở player theo yêu cầu và link YouTube trực tiếp (cả khi tắt JavaScript). Không autoplay/nạp iframe khi vào guide.
- Mỗi bài có gọi0339197917, Zalo `https://zalo.me/0339197917` và link về cụm thuê/liên hệ Stage320 đang có; nút lên đầu nằm trong bài, không thêm floating button.
- Giao diện nền tối/cyan/Inter, desktop sidebar sticky, mobile quick navigation cuộn ngang; target tối thiểu44px, keyboard focus và reduced-motion.

## Nguồn và kiểm chứng nội dung

| Chủ đề        | Nguồn đối chiếu                               | Phạm vi đã xác minh                                                                                                         |
| ------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Bluetooth     | JBL Owner’s Manual §3.1/5/6.1; Apple; Android | Nguồn, pairing, tên thiết bị/PIN0000, đèn Bluetooth, chọn đầu ra, ngắt điện thoại cũ                                        |
| Micro/karaoke | JBL §3.1/3.2/6.5; Shure                       | VOL/BASS/TREBLE/ECHO của micro; MIC/MIC2-GUITAR, GAIN; giảm feedback. Chưa xác minh bộ micro thực giao                      |
| Điều khiển    | JBL §3.1/6.3/9.1–9.3; QSG                     | Main volume/Play, light controls, BASS BOOST, sound-effect buttons, app và battery indicator                                |
| Auracast      | JBL §9.4; QSG; Stage320 firmware notes        | Phân biệt Bluetooth/Auracast, thao tác hai Stage320, primary, kiểm tra nhạc/ngắt nhóm; không suy diễn mọi JBL đều ghép được |
| Sạc/an toàn   | JBL §3.1/5/7/9.7; QSG                         | Dây được giao/AC, đèn sạc/pin, cổng khô, nắp bảo vệ, IPX4, vị trí và di chuyển                                              |
| Xử lý lỗi     | JBL §11, các mục liên quan ở trên, Shure      | Bảy tình huống kiểm tra cơ bản, các nguyên nhân có thể gặp; không chẩn đoán chắc chắn hỏng linh kiện                        |

Nguồn truy cập/đối chiếu ngày18/11/2026:

- [JBL Stage320 Owner’s Manual](https://support.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa40be9ab/pdfs/JBL_PARTYBOX_STAGE_320_OM_Global_EN_V4.pdf).
- [JBL Stage320 Quick Start Guide](https://support.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw827bce9d/pdfs/JBL_PartyBox_Stage_320_QSG_Global_SOP.pdf).
- [JBL Stage320 firmware release notes](https://support.jbl.com/au/en/howto/partybox-stage-320-software-update-release-notes-apac/000043820.html).
- [Apple: Bluetooth accessory connection](https://support.apple.com/en-us/105108).
- [Android: Bluetooth setup](https://support.google.com/android/answer/9417604).
- [Shure: control acoustic feedback](https://www.shure.com/en-US/insights/how-to-control-feedback-in-a-sound-system).
- [Video hướng dẫn chính thức JBL](https://www.youtube.com/watch?v=wx5IPeEge4g); metadata/provenance dùng lại `public/images/stage-320-videos/sources.json`.

Không đưa số người, vùng phủ âm, khoảng cách ghép nhiều loa, hiệu ứng giọng hát, loại pin micro hoặc tần số receiver chưa được xác minh vào hướng dẫn. Firmware notes cho thấy tương thích có thể thay đổi; hướng dẫn cơ bản dùng hai Stage320, model khác cần đối chiếu bộ thực tế, không hướng dẫn khách tự update/reset loa thuê. Đây là khuyến nghị thao tác kỹ thuật, không bổ sung điều khoản/giá/chính sách kinh doanh.

### Bộ micro đã được chủ website xác nhận: Alpha Works D2

Model được chủ website xác nhận bằng link CellphoneS; thông tin vận hành đã đối chiếu manual Alpha Works: hai pin AA mỗi tay, đầu thu sạc USB-C, ngõ ra 6,35 mm và đồng bộ IR bằng nhấn nhanh CH-A/CH-B khi cần. Phần B, checklist và lỗi micro không tiếng đã cập nhật cho cả năm ngôn ngữ, kèm video riêng từ Alpha Works.

Hướng dẫn mặc định phát nhạc qua Bluetooth trực tiếp tới Stage 320, D2 đưa tiếng hát qua MIC. Giải thích sự khác nhau giữa Bluetooth D2 và đồng bộ tay micro, tránh chồng echo và hiểu sai Mic First. Không thay đổi luồng thuê.

`rental-microphone.ts` ghi verified=true cho model chủ xác nhận và facts từ hãng; hardwareTested=false, prepairedAtHandover=null. Không khẳng định mọi bộ giao đã ghép sẵn hoặc đã thử phần cứng. Tiến độ v2 giữ các chủ đề khác, yêu cầu đọc lại các bước micro mới; dữ liệu v1 không bị xóa. Chi tiết nguồn, files và kết quả mới ở báo cáo D2 liên kết trên.

## SEO và hiệu suất

Route mới SSR, chọn đúng bản nội dung trên server trước khi truyền vào client; không import toàn bộ nội dung năm ngôn ngữ vào client teaser. Các bản dịch có `?lang=en|ko|ru|zh`; URL canonical luôn là đường dẫn guide gốc, không tạo locale routes/hreflang giả. Header đổi ngôn ngữ giữ guide route; link ngôn ngữ trong guide tải bản SSR tương ứng và đồng bộ header.

Một H1, H2 theo chủ đề, H3 theo bước/lỗi; breadcrumb hiển thị khớp BreadcrumbList. TechArticle có headline/description/inLanguage, publisher trỏ entity doanh nghiệp hiện có và citations thật. Không thêm FAQPage, rating, thời điểm xuất bản giả hoặc hứa hẹn HowTo/video rich results. Không có dữ liệu Search Console để kết luận indexing/thứ hạng.

Sitemap tự động thêm canonical SSR guide:58 URL gồm57 URL đang có và guide, không đưa query ngôn ngữ vào sitemap. Giữ nguyên robots, redirects, URL, giá, catalog, chính sách và liên hệ cũ.

Không thêm font/script/API mới; video dùng loader cũ sau click; ảnh dùng lại assets hiện có và khung cố định. Build ghi nhận route guide13.3 kB, First Load JS113 kB; đây là số liệu artifact của Next, không phải điểm Lighthouse/field CWV hay bằng chứng tăng conversion. Chưa đo field CWV.

## Files của thay đổi hướng dẫn

- `src/lib/product-guide.ts`: types, route, chuẩn hóa/tìm kiếm và progress guards.
- `src/data/guide-content.ts`: sáu chủ đề/46 bước bằng5ngôn ngữ; server chọn một locale.
- `src/data/guide-messages.ts`, `guide-sources.ts`: UI copy và nguồn.
- `src/data/rental-microphone.ts`: dữ liệu D2 chủ xác nhận, nguồn hãng và giới hạn kiểm thử phần cứng.
- `src/data/rental-microphone-video.ts`: tutorial D2 riêng, không thay đổi catalog video JBL.
- `src/components/guide/{GuideCenter,GuideTeaser}.tsx`: tutorial, checklist/search/native accordions/progress/images/video/support và teaser.
- `src/app/huong-dan-su-dung-jbl-partybox-320/page.tsx`: SSR, metadata, breadcrumb/TechArticle.
- `src/app/page.tsx`, `src/components/InternationalLandingWrapper.tsx`, `ProductDetailClient.tsx`: tích hợp teaser đúng model/ngôn ngữ.
- `src/components/LanguageSwitcher.tsx`: nhận guide route và đồng bộ khi pathname thay đổi; giữ video/landing routes cũ.
- `next-sitemap.config.js`, `public/sitemap-0.xml`: canonical guide.
- `scripts/test-product-guide{,-browser}.cjs`: data/search/progress/source guards và test từng bước UI.
- `scripts/{crawl-seo,validate-seo}.cjs`:58 URL và assertions TechArticle/nguồn/topic anchors.
- `scripts/test-product-videos-browser.cjs`: chờ decode cả9 thumbnail sau xem thêm trước khi đóng context kiểm thử.
- `docs/product-guide.md`, `docs/product-guide-evidence/`: báo cáo và bằng chứng.

Các file thư viện video có sẵn trong working tree vẫn được giữ. Không thêm package/dependency. Không deploy/push.

## Cách kiểm thử

```sh
yarn lint
./node_modules/.bin/tsc --noEmit --incremental false
node scripts/test-product-guide.cjs
node scripts/test-product-videos.cjs
node scripts/test-product-3d.cjs
node scripts/check-product-3d.cjs
node scripts/test-product-reference-photos.cjs
yarn build
# Chạy production server trong terminal riêng:
yarn start -p 4188
TEST_BASE_URL=http://127.0.0.1:4188 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/test-product-guide-browser.cjs
TEST_BASE_URL=http://127.0.0.1:4188 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/test-product-3d-browser.cjs
TEST_BASE_URL=http://127.0.0.1:4188 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/test-product-videos-browser.cjs
TEST_BASE_URL=http://127.0.0.1:4188 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core TEST_OUTPUT=/private/tmp/didi-guide-seo-crawl node scripts/crawl-seo.cjs
TEST_BASE_URL=http://127.0.0.1:4188 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core SEO_CRAWL_RESULTS=/private/tmp/didi-guide-seo-crawl/results.json node scripts/validate-seo.cjs
```

Production build được chạy riêng tại `/private/tmp/didi-guide-build-m07tiut_`, Node22, dùng dependency repository.13 file source runtime khớp SHA-256 với bản build trong `source-manifest.json`. Không ghi vào cache dev `.next` của workspace trong lượt này.

Kiểm thử phần mềm đã mở từng accordion, đọc46 bước, click nút hoàn thành/bỏ đánh dấu, restore phiên, search có/không dấu, empty state, quick anchor/focus/header offset, decode ảnh, href hỗ trợ và video/focus. Browser mock YouTube chỉ để kiểm tra integration/lazy modal; playback thật của player/ID này đã kiểm tra ở lượt thư viện video, không phải kiểm tra thao tác Bluetooth/micro vật lý.

Không có loa/điện thoại/bộ micro thực trong môi trường để thử ghép nối, nghe tiếng, sạc hoặc tái hiện lỗi phần cứng. Nội dung kỹ thuật đã đối chiếu tài liệu; cần nghiệm thu thực tế khi có bộ thiết bị và thông tin micro.

### Kết quả nghiệm thu bản ban đầu (xem báo cáo D2 cho cập nhật mới)

- PASS lint, typecheck,4nhóm unit guide; data/search/progress/source guards khớp5bản dịch.
- PASS production `yarn build` và postbuild sitemap58URL. Không thêm dependency.
- PASS7nhóm browser guide:4viewport360/390/768/1440px (đọc/click đủ46bước và4checklist),5ngôn ngữ/SSR/schema/header/6teaser integrations, no-JS và blocked session storage. Không runtime error hoặc overflow ngang.
- PASS17nhóm SEO validation:58URL canonical, metadata/H1/JSON-LD, TechArticle/nguồn/topic anchors, internal links, robots/sitemap,404/noindex, redirect308, Googlebot-UA và no-JS samples, responsive4kích thước trên các routes cũ; không lỗi JS.
- PASS11nhóm browser3D,6nhóm browser video; unit video/3D, GLB validator và20ảnh tham khảo cũ đều qua.

Có một lần regression video chờ quá lâu tại request `/_next/image` của `SIGaLIY2nmI.webp&w=640`. Chẩn đoán ghi nhận page/H1/sáu card đã render và chỉ request này còn pending; ảnh gốc decode hợp lệ, chuyển AVIF640 riêng mất272ms. Khởi động lại server kiểm thử và bổ sung bước đợi decode cả9thumbnail sau “Xem thêm” trước khi đóng context: toàn bộ6nhóm video qua, không sửa code/player/catalog video để né lỗi. Chưa kết luận nguyên nhân nội bộ Next Image hoặc tác động production; có log riêng để tái kiểm tra nếu tái hiện.

Bằng chứng: [summary](product-guide-evidence/summary.json), [build](product-guide-evidence/build.log), [lint](product-guide-evidence/lint.log), [typecheck](product-guide-evidence/typecheck.log), [unit](product-guide-evidence/unit.log), [guide browser](product-guide-evidence/browser.log), [SEO crawl](product-guide-evidence/seo-crawl-summary.json), [SEO validation](product-guide-evidence/seo-validation.log), [3D regression](product-guide-evidence/3d-browser.log), [video regression](product-guide-evidence/video-browser.log), [image diagnostic](product-guide-evidence/video-diagnostic.log), [source/build hashes](product-guide-evidence/source-manifest.json), [390px](product-guide-evidence/guide-390.png), [1440px](product-guide-evidence/guide-1440.png).

**Cập nhật:** điểm chờ model micro của bản ban đầu đã được giải quyết bằng xác nhận Alpha Works D2. Chưa thử trên thiết bị vật lý và chưa deploy production.
