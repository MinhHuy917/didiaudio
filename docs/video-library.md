# Thư viện video JBL PartyBox Stage 320

## Kiểm tra trước khi triển khai

Đã truy cập https://www.didi-audio.com/ và đọc source hiện tại. Production trả nội dung dịch vụ, catalog, giá500k/ngày, quy trình thuê, FAQ và các liên kết liên hệ trong HTML. Tại thời điểm khảo sát, production chưa có khu vực video riêng. Không có dữ liệu Search Console hoặc field Core Web Vitals để kết luận indexing, thứ hạng hay hiệu quả chuyển đổi.

Repository dùng Next.js14 App Router, React18, TypeScript, Tailwind, Inter local, lucide-react. Trang chủ SSG; metadata dùng `createPageMetadata`, canonical origin `https://www.didi-audio.com`; schema dùng `jsonLd`; sitemap do next-sitemap tạo sau build. Không có thư viện Dialog/Toast dùng chung phù hợp: dùng native `<dialog>` và live region, không thêm dependency. Tái sử dụng Container và Button.

Hệ thống ngôn ngữ có landing pages tiếng Anh, Hàn, Nga, Trung và Google Translate ở root. Nội dung mới có bản dịch thủ công cho vi/en/ko/ru/zh, gồm UI, tiêu đề/mô tả video, bộ lọc, lỗi player và chia sẻ. Tên kênh/tiêu đề gốc và ngôn ngữ nói trong video được giữ đúng nguồn; không tự tạo phụ đề hay tuyên bố video có phụ đề.

## Phương án đã tích hợp

- Homepage: ba video nổi bật sau danh sách loa, trước quy trình thuê.
- Bốn landing pages quốc tế: cùng bộ ba video, dùng bản dịch tương ứng.
- `/video-jbl-partybox-320`: thư viện đầy đủ chín video, sáu danh mục; hiển thị6, “Xem thêm video” mở phần còn lại. Đổi danh mục đặt lại số lượng.
- Mobile: một cột, bộ lọc44px vuốt ngang; tablet768px: hai cột; desktop1024px trở lên: ba cột. Giữ nền tối, cyan, Inter và border/radius của website. Hover chỉ chuyển động khi không chọn reduced-motion.
- Player trong native dialog top layer; mở bằng bàn phím, vòng focus ở biên, Escape/nút đóng/backdrop, khôi phục focus và body scroll khi đóng. Iframe tối thiểu200px chiều cao, thích ứng16:9.
- Play mới tải code modal và YouTube IFrame API. API tạo iframe youtube-nocookie với controls chuẩn, origin và referrer policy phù hợp. Không tự tải player/phát video khi vào trang, không chèn overlay lên controls sau khi sẵn sàng.
- Bất kỳ lỗi player (bao gồm100/101/150/153), API bị chặn hoặc timeout đều có thông báo và liên kết YouTube. Hủy player khi lỗi/đóng, tránh phát âm thanh sau khi giao diện báo lỗi.
- Chia sẻ bằng Web Share nếu có, fallback clipboard; thông báo cạnh card, live announcement và input đọc/sao chép thủ công nếu clipboard bị từ chối. Hủy native share không báo lỗi giả.
- “Thuê JBL 320 ngay” dẫn tới `/products/loa-jbl-partyBox-stage-320#dat-thue`, là cụm liên hệ đang có, thêm anchor và scroll margin. Không giả lập form, lịch trống, tồn kho hay đơn thuê.
- Footer có link crawlable tới thư viện. Header language switch ở thư viện giữ người dùng trong thư viện với ngôn ngữ được chọn; các route cũ vẫn hoạt động như trước.

## Video và nguồn xác minh

Các watch page công khai được lấy trực tiếp từ YouTube ngày18/11/2026. Đã đọc `videoDetails`, `playerMicroformatRenderer` và `playabilityStatus`: cả9 trả statusOK, playableInEmbed=true. Dữ liệu gồm ID, tên kênh, channelID, ngày giờ upload có timezone và thời lượng thực. Hai video từ channel JBL `UCced_wdSslkOf7xc_0qyT8w`. Không dùng ID tự tạo, lượt xem/rating giả hoặc lời nhận xét gán cho khách ĐiĐi Audio.

| Video ID / nguồn | Kênh | Thời lượng |
| --- | --- | --- |
| [nkdQlX2FOCM](https://www.youtube.com/watch?v=nkdQlX2FOCM) | Tân Một Cú | 11:19 |
| [wx5IPeEge4g](https://www.youtube.com/watch?v=wx5IPeEge4g) | JBL | 2:59 |
| [SIGaLIY2nmI](https://www.youtube.com/watch?v=SIGaLIY2nmI) | Real Reviews | 4:54 |
| [OBn77FdFdTM](https://www.youtube.com/watch?v=OBn77FdFdTM) | JBL | 1:00 |
| [jqOj1Ca6NBE](https://www.youtube.com/watch?v=jqOj1Ca6NBE) | Duy Nguyễn Studio | 32:17 |
| [vvPqgsxmtpk](https://www.youtube.com/watch?v=vvPqgsxmtpk) | Loa Kéo, Loa Bluetooth Bảo Châu Elec | 11:18 |
| [bny5v3Gt4Xc](https://www.youtube.com/watch?v=bny5v3Gt4Xc) | GYMCADDY | 19:15 |
| [vTfyHozpYeI](https://www.youtube.com/watch?v=vTfyHozpYeI) | Alfred Speakers | 13:08 |
| [sic-FK3xL1o](https://www.youtube.com/watch?v=sic-FK3xL1o) | FirstReview | 19:54 |

Chi tiết và hashes: [sources.json](../public/images/stage-320-videos/sources.json), [SOURCE.md](../public/images/stage-320-videos/SOURCE.md). Thumbnail gốc đã được kiểm tra contact sheet, giữ khung/logo/text, chuyển WebP tối đa960px, không phóng lớn:9file tổng639826byte. Khi thiếu maxres, dùng ảnh hqdefault thật của video. Chỉ lưu thumbnail, không tải/rehost stream video. Bản quyền video/thumbnail thuộc tác giả; người xem thấy rõ nguồn. Khả năng nhúng có thể thay đổi theo quốc gia/thời điểm, vì vậy link YouTube luôn có sẵn.

Nội dung phân biệt tiếng thu qua video với trải nghiệm âm thanh thực và nhắc xác nhận phụ kiện: micro trong video không đồng nghĩa có trong bộ thuê. Không dùng khoảng cách trong video outdoor để cam kết vùng phủ âm, diện tích hay số người.

## SEO và hiệu suất

Thư viện mới SSR để render bản dịch theo `?lang=en|ko|ru|zh`; query sai/lặp về tiếng Việt. Metadata tiếng Việt ở URL gốc, title/description/OG tương ứng ngôn ngữ ở các biến thể. Canonical của mọi biến thể là URL thư viện gốc; không tạo đường dẫn ngôn ngữ mới hay hreflang giả. Có một H1 và breadcrumb hiển thị khớp BreadcrumbList. Home giữ nguyên H1/metadata; section dùng H2 và các video H3.

VideoObject được render trong HTML cho đúng các card đang hiển thị:3 trên homepage/landing,6 ban đầu tại thư viện; sau lọc/xem thêm, graph cập nhật cùng UI. Mỗi video có tên/mô tả đúng bản dịch, thumbnail tuyệt đối, uploadDate thật, durationISO8601, ngôn ngữ gốc, tác giả/kênh, URL watch và embed. Không có rating, views hay publisher giả. Không hứa hẹn video rich results: đây là trang thư viện, không phải các watch pages riêng với video làm nội dung chính.

Thư viện SSR không nằm trong prerender manifest, nên `additionalPaths` của next-sitemap thêm đúng URL canonical gốc. Sitemap sau build có57URL:56URL cũ giữ nguyên và một URL mới. Không đưa query ngôn ngữ vào sitemap. Không sửa robots hay redirect/URL hiện có.

Thumbnail và player có khung/kích thước đặt trước; ảnh dùng Next Image lazy/responsive sizes, ưu tiên ảnh hero hiện có giữ nguyên. YouTube player/API chỉ nạp sau click. Không thêm dependency hoặc API key. Không công bố điểm Lighthouse/field CWV hay mức cải thiện chuyển đổi vì chưa có phép đo phù hợp. Kiểm tra browser xác nhận không overflow; không tuyên bố CLS toàn website bằng0.

Tài liệu kỹ thuật đã đối chiếu: [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference), [tham số player](https://developers.google.com/youtube/player_parameters), [Google VideoObject](https://developers.google.com/search/docs/appearance/structured-data/video).

## Files thay đổi

- `src/lib/product-videos.ts`: types, categories, filter, locale và các URL dùng chung.
- `src/data/product-videos.ts`: catalog video, thứ tự, metadata và nội dung năm ngôn ngữ.
- `src/data/video-messages.ts`: toàn bộ UI/error/share strings.
- `src/lib/video-schema.ts`: VideoObject dựa trên dữ liệu xác thực và card hiển thị.
- `src/lib/youtube-player.ts`: singleton loader API, timeout/error cleanup.
- `src/components/video/{VideoSection,VideoGallery,VideoPlayerDialog}.tsx`: section, filter/cards/pagination/share và lazy modal/player.
- `src/app/video-jbl-partybox-320/page.tsx`: SSR library, metadata, breadcrumb, lựa chọn ngôn ngữ.
- `src/app/page.tsx`, `src/components/InternationalLandingWrapper.tsx`: đưa section vào các trang đang có.
- `src/components/LanguageSwitcher.tsx`: chỉ thêm hành vi giữ route thư viện khi đổi ngôn ngữ.
- `src/components/Footer.tsx`: link thư viện; `ProductDetailClient.tsx`: anchor cụm liên hệ.
- `public/images/stage-320-videos/`:9thumbnail và hồ sơ nguồn.
- `next-sitemap.config.js`, `public/sitemap-0.xml`: URL canonical mới.
- `scripts/test-product-videos{,-browser}.cjs`: unit/assets/schema, responsive và interaction.
- `scripts/{crawl-seo,validate-seo}.cjs`: thêm URL57, kiểm tra VideoObject và cập nhật regression gallery cũ13ảnh sang48ảnh/panel hiện tại.
- `docs/video-library.md`, `docs/product-videos-evidence/`: báo cáo/logs/screenshots.

Giữ nguyên catalog loa, giá, chính sách, business logic, routes cũ, gallery ảnh, preload360° và AR gate.

## Cách thêm hoặc chỉnh video

1. Lấy ID11ký tự từ watch/Shorts URL thật. Xác minh title, nguồn, uploadDate, duration, public/embedding permission trực tiếp trên YouTube. Không đoán metadata từ ngày crawl hoặc title được dịch.
2. Thêm/sắp xếp record trong `src/data/product-videos.ts`, chọn category trong type và viết title/description cho đủ5locale. Ba record đầu là featured; thứ tự mảng cũng là thứ tự thư viện.
3. Lấy thumbnail thật của video, tối ưu giữ khung và thêm provenance/hash vào `public/images/stage-320-videos/sources.json`. Ghi tác giả đúng nguồn. Không ghi là video ĐiĐi Audio nếu không phải.
4. Nếu biết video không cho nhúng, đặt embeddable=false: người xem vẫn có thông báo và link trực tiếp; schema không phát embedUrl. Nếu video bị xóa/hết công khai, thay hoặc bỏ record có kiểm tra.
5. Chạy unit, lint, typecheck, build và browser checks. Không cần backend/Admin/YouTube API key.

## Kiểm thử

```sh
yarn lint
./node_modules/.bin/tsc --noEmit --incremental false
node scripts/test-product-videos.cjs
node scripts/test-product-3d.cjs
node scripts/check-product-3d.cjs
node scripts/test-product-reference-photos.cjs
yarn build
# Chạy production server ở một terminal riêng:
yarn start -p 4187
# Browser tools do môi trường kiểm thử cung cấp, không thêm vào dependency website:
TEST_BASE_URL=http://127.0.0.1:4187 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/test-product-videos-browser.cjs
TEST_BASE_URL=http://127.0.0.1:4187 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/test-product-3d-browser.cjs
TEST_BASE_URL=http://127.0.0.1:4187 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core TEST_OUTPUT=/private/tmp/didi-video-seo-crawl node scripts/crawl-seo.cjs
TEST_BASE_URL=http://127.0.0.1:4187 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core SEO_CRAWL_RESULTS=/private/tmp/didi-video-seo-crawl/results.json node scripts/validate-seo.cjs
```

Các browser fixture cho lỗi YouTube dùng API giả lập để kiểm tra có chủ đích các mã100/101/150/153, cleanup, focus và share; chúng không thay thế kiểm tra playback thật. Ngoài fixture, đã mở video hướng dẫn JBL `wx5IPeEge4g` bằng API/iframe thật trong Chrome1440px với chính sách autoplay mặc định, sau cú nhấn Play: playabilityOK, playerState1, currentTime10.286848s, paused=false, không fallback/pageerror. Đây là phép thử playback một video trong môi trường hiện tại, không tuyên bố đã xem hết/chạy tất cả9video hay bảo đảm mọi thiết bị/quốc gia.

Bằng chứng playback thật: [JSON](product-videos-evidence/real-youtube.json), [ảnh](product-videos-evidence/real-youtube-1440.png). Kiểm tra responsive: [390px](product-videos-evidence/library-390.png), [1440px](product-videos-evidence/library-1440.png).

### Kết quả nghiệm thu cuối

- PASS lint (không warning/error), typecheck,4nhóm unit/assets/schema,3nhóm unit3D, GLB validator và20ảnh tham khảo cũ.
- PASS `yarn build` production bằng Node22; postbuild tạo57URL canonical.
- PASS6nhóm video browser:360/390/768/1440px; toàn bộ5ngôn ngữ và header switch; trường hợp API YouTube bị chặn. Các nhóm viewport kiểm tra grid,6filter, pagination, lazy thumbnail/player, schema, Enter/Escape/vòng focus, cleanup, lỗi100/101/150/153, share/clipboard/manual fallback, rental href và overflow.
- PASS11nhóm browser3D hiện có: cả homepage/product, các viewport, preload/retain, AR gate, controls/fullscreen, reduced-motion, drag/swipe, retry và WebGL fallback.
- PASS SEO crawl57trang HTML,3Googlebot-UA samples,12browser snapshots, không lỗi thu thập; validator16nhóm PASS với các URL cũ, canonical/meta/H1, schema/VideoObject6card, internal links/anchor, sitemap/robots,404/noindex, redirect308, no-JS home và responsive32tổ hợp route/viewport; không runtime error.
- Playback thật của video JBL đã PASS bằng Chrome mặc định, không mock hoặc tắt autoplay policy. Khả năng phát cả9video được đối chiếu public/embed metadata; không tuyên bố đã phát thử cả9stream.

Log và bằng chứng: [summary](product-videos-evidence/summary.json), [lint](product-videos-evidence/lint.log), [typecheck](product-videos-evidence/typecheck.log), [unit](product-videos-evidence/unit.log), [build](product-videos-evidence/build.log), [video browser](product-videos-evidence/browser.log), [3D browser](product-videos-evidence/product-3d-browser.log), [SEO crawl summary](product-videos-evidence/seo-crawl-summary.json), [SEO validation](product-videos-evidence/seo-validation.log), [source hashes](product-videos-evidence/source-manifest.json).

Đã sửa vòng focus ở biên modal sau test thực tế; cập nhật test SEO cũ đang giả định gallery13ảnh, không đổi gallery để làm test qua. Tất cả kết quả PASS ở trên là lần nghiệm thu cuối. Chưa deploy/push production. Sau khi chủ website triển khai, kiểm tra Rich Results Test, URL Inspection cho thư viện mới và gửi lại sitemap trong Search Console; không coi đây là xác nhận đã index.
