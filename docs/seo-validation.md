# SEO validation

Ngày 17/11/2026. Kết quả dưới đây áp dụng cho production build **local** của bản sửa, không phải production đang chạy trên didi-audio.com. Baseline nguồn là `ca62037`, Git sạch khi bắt đầu; build baseline và build cuối chạy ở bản sao riêng, không ghi vào `.next` của workspace.

## Kết quả kiểm tra

| Kiểm tra | Kết quả / phạm vi bằng chứng |
| --- | --- |
| Lint | PASS — `npm run lint`, không cảnh báo/lỗi ESLint; [lint.log](seo-evidence/lint.log) |
| Typecheck | PASS — `tsc --noEmit --incremental false`; không có diagnostics, exit0. [typecheck.log](seo-evidence/typecheck.log) là log rỗng tương ứng |
| Production build | PASS — `npm run build`, gồm postbuild next-sitemap. Home/About/locale prerender;49 bài và1 product SSG. [build.log](seo-evidence/build.log) |
| Automated SEO/browser checks | PASS —15 nhóm assertions, không pageerror; [tests.log](seo-evidence/tests.log), [validation.json](seo-evidence/validation.json) |
| Raw HTML |56/56 URL nội dung trả200, title riêng, description, một H1, canonical tuyệt đối chính xác, OG URL khớp; `lang=vi` trên shell và UTF-8 tiếng Việt. Toàn bộ inventory trong [final-after-results.json](seo-evidence/final-after-results.json) |
| Link graph |56/56 reachable từ homepage bằng `a[href]` trong HTML; không còn đích nội bộ/fragment lỗi trong inventory. Trước sửa9/56 reachable,196 href sang12 đích `/blog*`404 và112 lần fragment không tồn tại |
| Robots / sitemap |200; Allow `/`; sitemap index và56 canonical URLs www, không URL lỗi/redirect/noindex, không lastmod giả. [robots.txt](../public/robots.txt), [sitemap.xml](../public/sitemap.xml), [sitemap-0.xml](../public/sitemap-0.xml) |
| HTTP lỗi | `/products/not-a-real-speaker` và `/not-a-real-seo-page` trả404 thật và noindex; trước sửa missing product trả200 |
| Host redirect | Request local với Host `didi-audio.com` trả308 một bước sang HTTPS www, giữ product path và query. Không kết luận redirect tại hosting production đã đổi |
| Googlebot mô phỏng | UA Googlebot nhận cùng status/title/canonical/headings ở home, product, bài mẫu; không có nội dung riêng cho bot. Đây không phải request đã xác minh là Googlebot hoặc dữ liệu Google index |
| Không JavaScript | Home/product/bài mẫu ở1440 và390px; H1/giá home có trong HTML và không bị ancestor opacity0. Mẫu raw HTML nén và ảnh trước/sau nằm trong thư mục evidence |
| Schema | JSON parse thành công; mỗi route đúng một LocalBusiness dùng41 Tống Duy Tân và hotline; home/product thêm Service thuê, giá product lấy catalog500000VND/ngày; Article/Breadcrumb ở bài. Không FAQPage, rating, tồn kho, giờ mở cửa hoặc range giá tự thêm |
| Serializer JSON-LD | Test chuỗi tiếng Việt chứa `</script><script>`: không còn dấu `<` trong JSON nhúng, parse lại giữ nguyên giá trị. Không làm biến dạng tiếng Việt hoặc chuỗi markup |
| Responsive |360/390/768/1440px: home, About, product, bài mẫu và cả4 locale; document width bằng viewport, một H1, NAP hiện hành, không lỗi runtime |
| Regression thuê / liên hệ | Catalog giữ500k/ngày. Ở4 viewport, gallery13 ảnh đổi ảnh bằng focus+Enter, CTA product giữ đúng tel/Zalo/Messenger. Nút Khác trên mobile mở bằng keyboard, hiện địa chỉ41. FAQ mở được và hiển thị500k/ngày theo catalog sau xác nhận chủ |

Không có booking backend, form checkout hay tồn kho theo ngày để test giao dịch end-to-end. Test xác nhận UI và href đúng; không gửi tin nhắn, gọi hotline hoặc khẳng định người nhận đã phản hồi. Không coi việc kiểm tra keyboard một số thao tác là chứng nhận accessibility toàn website.

## Metadata và schema đại diện

| URL | Metadata / dữ liệu kiểm tra |
| --- | --- |
| `/` | Title: **Thuê Loa Kẹo Kéo Đà Nẵng \| Thuê Loa Kéo - ĐiĐi Audio**. H1: **Thuê loa kẹo kéo tại Đà Nẵng - ĐiĐi Audio**. Canonical `https://www.didi-audio.com/`; LocalBusiness + Service |
| `/products/loa-jbl-partyBox-stage-320` | Title theo tên model; canonical đúng ID/chữ hoa-thường; Service → Offer với businessFunction LeaseOut, UnitPriceSpecification500000VND /1DAY; không giả định ngày còn loa |
| `/about-didiaudio` | Title/description/canonical riêng; một H1 hiển thị từ HTML; ảnh không làm tràn màn nhỏ |
| Bốn `/speaker-rental-da-nang*` | Canonical/title/OG riêng, lang trên các phần đã dịch; shell VI và sản phẩm/footer VI được giữ. Không thêm hreflang khi bản dịch chưa tương đương đầy đủ |
|49 `/<slug>` | Title riêng, canonical tuyệt đối, Article với ảnh tuyệt đối và publisher tham chiếu entity chung; BreadcrumbList khớp breadcrumb hiển thị; không canonical chéo hoặc giả ngày cập nhật mới |

JSON-LD đã được kiểm cú pháp và các contract dữ liệu bằng script; ý nghĩa Service/Offer đối chiếu [Schema.org Service](https://schema.org/Service) và [UnitPriceSpecification](https://schema.org/UnitPriceSpecification). Chưa chạy Google Rich Results Test/URL Inspection cho bản sửa chưa deploy; không hứa rich result. LocalBusiness chỉ dùng thông tin đã xác nhận theo [Google LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## Performance trước / sau

Cùng máy và Chrome150, production build local, context mới cho từng route/viewport, snapshot khoảng3 giây, không throttle CPU/network, chặn third party. Đây là **mỗi trường hợp một mẫu lab**, chịu ảnh hưởng cache ảnh/optimizer, tải máy và thứ tự chạy. Không phải CrUX hoặc field CWV; không có dữ liệu INP, không suy ra điểm Lighthouse, tỷ lệ chuyển đổi hay thứ hạng.

| Route | Viewport | LCP trước → sau (ms) | Tổng layout-shift entries trước → sau |
| --- | --- | --- | --- |
| Home |1440 |792 →448 |0.00244 →0 |
| Home |390 |968 →252 |0 →0 |
| Product |1440 |992 →168 |0 →0 |
| Product |390 |144 →144 |0 →0 |
| Bài mẫu |1440 |208 →216 |0 →0 |
| Bài mẫu |390 |168 →172 |0 →0 |

Tổng layout-shift entries trong snapshot không phải CLS theo toàn bộ session window. Bài mẫu không cho thấy cải thiện LCP; không diễn giải chênh lệch nhỏ là regression chắc chắn từ một mẫu. Một số transfer size sau sửa cao hơn do HTML/link mới và trạng thái cache; không tuyên bố mọi chỉ số đều giảm. Xem số liệu TTFB/long tasks/transfer và timestamps thật trong [local-baseline-lab.json](seo-evidence/local-baseline-lab.json), [final-after-lab.json](seo-evidence/final-after-lab.json).

Build báo First Load JS homepage **200kB →186kB**, chủ yếu nhờ tránh import body49 bài vào component client của homepage. Các route khác thay đổi nhỏ và không phải tất cả giảm: product140→141kB, About127→128kB, locale177→178kB, bài105→105kB. Đây là ước tính bundle của Next build, không phải transfer hay CWV. [Baseline build](seo-evidence/baseline-build.log), [final build](seo-evidence/build.log)

## Kiểm tra hình ảnh và giới hạn UX

Đã xem ảnh home/product/article ở390 và1440px; không thấy overflow trang, tiêu đề bị cắt hoặc ảnh hỏng mới. Gallery và bố cục liên hệ được giữ. Giá product vẫn nằm dưới fold trên390px như baseline; cải thiện thứ tự CTA/giá hoặc khoảng trống hero cần một task UX riêng, không thay bố cục lớn trong đợt SEO này. Các alt title bài viết cũ và ảnh trong body vẫn cần review theo từng ảnh thực tế; không tự nhân keyword vào alt.

- [Home390 trước](seo-evidence/before-home-390-js.png) / [sau](seo-evidence/after-home-390-js.png)
- [Home390 không JS trước](seo-evidence/before-home-390-no-js.png) / [sau](seo-evidence/after-home-390-no-js.png)
- [Home1440 sau](seo-evidence/after-home-1440-js.png), [product390 sau](seo-evidence/after-product-390-js.png), [article390 sau](seo-evidence/after-article-390-js.png)

## Tái chạy

Không có test runner hoặc script typecheck sẵn trong package.json. Không thêm dependency hay thay lockfile; browser harness sử dụng Playwright Core và Chrome sẵn ở môi trường kiểm thử. Dùng Node22 như lần kiểm thử này; build cần truy cập Google Fonts của next/font nếu cache chưa có. Có thể trỏ `PLAYWRIGHT_MODULE` tới module Playwright Core có sẵn và `CHROME_PATH` tới Chrome trên máy kiểm thử.

```bash
npm run lint
./node_modules/.bin/tsc --noEmit --incremental false
npm run build
npm run start -- --hostname 127.0.0.1 --port 4173
```

Ở terminal khác, từ root repository (server phải chạy bản build của đúng source):

```bash
export PLAYWRIGHT_MODULE=/absolute/path/to/playwright-core
export CHROME_PATH=/absolute/path/to/Google-Chrome
export TEST_BASE_URL=http://127.0.0.1:4173
export TEST_OUTPUT=/tmp/didi-seo-check
node scripts/crawl-seo.cjs
SEO_CRAWL_RESULTS="$TEST_OUTPUT/results.json" node scripts/validate-seo.cjs
```

Trong môi trường task, module là `/private/tmp/didi-ux-audit/node_modules/playwright-core`, Chrome ở `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`; server cuối dùng bản sao `/private/tmp/didiaudio-seo-e81m7y53/final`. Lint/typecheck/build exit0, browser checks exit0. Giá500k và địa chỉ41 đã được chủ xác nhận. Hash nguồn, package/locks, ảnh và kiểm tra các file dữ liệu không đổi ngoài ngoại lệ được duyệt ghi trong [source-manifest.json](seo-evidence/source-manifest.json).

## Còn phải xác minh trước / sau phát hành

- **Trước phát hành:** review các claim cũ về giao nhận/ưu đãi/review, policies, body49 bài và placeholder Kakao/WeChat; chốt giờ hoạt động/social chính thức. Các thay đổi này chưa tự thực hiện; xem gói duyệt cụ thể trong [kế hoạch](seo-implementation-plan.md).
- **Sau khi chủ duyệt và tự phát hành:** crawl lại domain thật, kiểm tra permanent host redirect ở hosting, sitemap và HTTP404; Rich Results Test/Schema validator và URL Inspection. Production baseline còn307 non-www →www và chuỗi HTTP hai bước; source308 chưa chứng minh nền tảng đã đổi.
- **GSC/GBP:** chưa đăng nhập hoặc sửa tài khoản; chưa gửi sitemap hay yêu cầu index. Không có dữ liệu để báo trang đã được Google index, field CWV đạt hoặc thứ hạng tăng. Checklist thao tác và cách đo nằm trong kế hoạch.
