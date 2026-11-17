# Xem loa360° và AR — ĐiĐi Audio

## Phân tích và phương án trước code

Baseline: Next14 App Router, React18, Tailwind, catalog TypeScript. `src/app/products/[id]/page.tsx` là server wrapper; `src/components/ProductDetailClient.tsx` chứa gallery13 ảnh và CTA liên hệ thuê. Không có checkout, Admin, database, auth hoặc upload API.

Chọn `@google/model-viewer`4.4.0, không cài thêm Three.js/React Three Fiber riêng. Entry dưới gallery; engine và GLB tải khi khách bấm. Viewer không phủ giá/CTA; đóng bằng nút hoặc Escape và trả focus; unmount gỡ event/timer/src, model cache tắt. Engine JavaScript đã tải vẫn nằm trong cache trình duyệt, không tuyên bố giải phóng toàn bộ bộ nhớ browser.

Chủ đã chọn quản lý cấu hình và file trong repository: **không thêm Admin/backend riêng**. Không ghi upload vào filesystem tạm của Vercel. Không thay giá, nội dung sản phẩm, policies, routes, SEO hoặc chức năng thuê hiện có. Không deploy.

## Đã triển khai

- Nút **360° Xem chi tiết** dưới gallery Stage320, xem model thật từ các góc, drag/touch/native keyboard, zoom, reset camera, tự xoay12°/giây có nút dừng, reduced-motion bắt đầu ở trạng thái dừng.
- Toàn màn hình qua browser API, fallback khi không hỗ trợ. Controls có touch target44px và focus rõ; inline viewer không cần focus trap như modal.
- Loading, timeout45s, lỗi engine/model, retry, WebGL2 không hỗ trợ và ảnh gốc luôn có sẵn. Sản phẩm không có cấu hình hợp lệ không hiện entry3D.
- AR có adapter ưu tiên `scene-viewer webxr quick-look`, thao tác kích hoạt trực tiếp, thông báo khi không khả dụng, `ar-scale=fixed`. Nút chỉ xuất hiện khi cấu hình đã bật và xác nhận kích thước/tỷ lệ; chưa bật cho Stage320.
- GLB/GLTF được hỗ trợ; GLB tự chứa tài nguyên được khuyến nghị. USDZ tùy chọn; Quick Look có thể chuyển từ GLB. WebXR cần HTTPS và thiết bị tương thích. [Tài liệu model-viewer AR](https://modelviewer.dev/examples/augmentedreality/)

## Mô hình Stage320 và quyết định AR

Chủ cung cấp [trang JBL](https://vn.jbl.com/loudspeakers/PARTYBOX-STAGE-320.html). Trang dùng Huemen SKU `4mt2iogz2fj3gx5os7dr`; metadata công khai trỏ tới GLB Stage320. Đã lưu nguyên GLB vào `public/models/stage-320/stage-320.glb`,9,880,936bytes (~9.42MiB), giữ nguyên geometry/texture/scale. Nguồn và SHA-256 nằm trong [SOURCE.md](../public/models/stage-320/SOURCE.md). Không nạp player/analytics của JBL hoặc gọi API nhà cung cấp lúc khách xem.

Bounds model đo bằng model-viewer: rộng0.334754898m, cao1.042910163m, sâu0.386018567m. Mô hình có tay kéo mở. Thông số hãng33.5×67×38.5cm mô tả kích thước sản phẩm, không đủ xác nhận chiều cao tay kéo mở. Không thu toàn bộ model về67cm vì sẽ làm sai chiều rộng/sâu. URL USDZ của SKU có tên mẫu tai nghe khác, không được sử dụng.

**360 đang bật; AR đang tắt** chờ xác nhận chiều cao thực tế tay kéo mở hoặc model tay kéo gập đúng tỷ lệ. Phản hồi cuối của chủ được hiểu là đồng ý giữ AR tắt trong lúc chờ xác nhận, không coi là xác nhận số đo104.3cm. `scaleVerified=false`, `arEnabled=false`. Không hiển thị camera hoặc AR giả, không báo đã kiểm thử native AR trên Android/iOS.

## Quản lý trong repository

1. Đặt GLB đúng sản phẩm vào `public/models/<model>/`, dùng tên phiên bản mới khi thay file để tránh cache cũ. Giữ record nguồn và đơn vị mét; ưu tiên file tự chứa texture/bin. File hiện tại khá lớn: chỉ tải theo yêu cầu; chưa nén lại để tránh ảnh hưởng chất lượng/scale.
2. Sửa map `src/data/product-3d.ts`, key phải khớp ID trong catalog. `enabled` bật360, `modelUrl` là đường dẫn public hoặc URLHTTPS có CORS. `posterUrl` tùy chọn, mặc định ảnh sản phẩm.
3. `dimensionsMeters` là kích thước có nguồn `dimensionSource`; chỉ bật `scaleVerified` và `arEnabled` khi đã kiểm tra bounds/đơn vị và kích thước vật lý tương ứng tư thế model. Nếu có `usdzUrl`, phải xác minh đúng loa và cùng tỷ lệ. Không tái sử dụng USDZ tên khác từ supplier.
4. Chạy validator, unit tests, lint/typecheck/build và browser checks. Review diff, tự phát hành sau khi duyệt; task không push hoặc deploy.

```bash
node scripts/check-product-3d.cjs
node --test scripts/test-product-3d.cjs
npm run lint
./node_modules/.bin/tsc --noEmit --incremental false
npm run build
```

Ví dụ cấu hình cho một sản phẩm (chỉ dùng đường dẫn file thực tế, không copy model kiểm thử vào catalog):

```ts
{
  enabled: true,
  modelUrl: '/models/stage-320/stage-320.glb',
  arEnabled: false,
  scaleVerified: false,
  dimensionsMeters: { width: 0.335, height: 0.67, depth: 0.385 },
  dimensionSource: 'https://vn.jbl.com/loudspeakers/PARTYBOX-STAGE-320.html',
}
```

## Kiểm thử và giới hạn

- PASS lint, typecheck, production build trong bản sao `/private/tmp/didi-3d-hfs5dz87`, Node22. Không ghi `.next` của workspace.
- PASS3 unit groups: thiếu/disabled model, URL không an toàn/sai định dạng, AR yêu cầu verified scale/dimensions/source và USDZ hợp lệ.
- PASS validator: GLB2 header/declared length/JSON, file tồn tại, AR gated. Validator không thay thế kiểm định model bằng mắt hoặc đo kích thước vật lý.
- PASS Chrome150 tại360/390/768/1440 với model Stage320 thật: không request GLB/khởi tạo engine trước click; model loaded và visible; zoom thay đổi camera radius; rotation/reduced-motion/reset/fullscreen; đóng/Escape/focus; không overflow hoặc pageerror;13 ảnh, giá500k và tel/Zalo/Messenger còn nguyên.
- Fixture riêng trong `/tmp` đã kiểm tra lỗi model và fallback AR desktop; model hình học không nằm trong repository/catalog. Không có test route trong source bàn giao.
- First Load JS product theo Next build:141kB trước →142kB sau; home186kB giữ nguyên. Engine/model tải sau tương tác. Đây là số bundle, không phải phép đo field CWV; không khẳng định CWV không đổi hoặc native AR hoạt động trên mọi thiết bị.
- Chưa kiểm thử thao tác camera/Scene Viewer/Quick Look trên thiết bị Android/iOS thật, độ chính xác AR vật lý, touch pinch trên máy thật, hoặc mức dùng RAM/GPU dài hạn. Các mục này còn cần nghiệm thu trước khi bật AR.

Browser checks dùng Playwright Core/Chrome có sẵn ngoài dependency production:

```bash
npm run start -- --hostname 127.0.0.1 --port 4175
# terminal khác, từ repository:
PLAYWRIGHT_MODULE=/absolute/path/to/playwright-core \
CHROME_PATH=/absolute/path/to/Chrome \
TEST_BASE_URL=http://127.0.0.1:4175 \
TEST_OUTPUT=/tmp/didi-3d-check \
node scripts/test-product-3d-browser.cjs
```

Ảnh kiểm thử và logs trong [product-3d-evidence](product-3d-evidence/). Chrome test dùng reduced-motion và software WebGL; viewport không thay thế thiết bị thật.

## Files changed

- `src/components/ProductDetailClient.tsx`: import và một entry dưới gallery, không sửa UI cũ.
- `src/components/product-3d/Product3D.tsx`, `Product3DViewer.tsx`: lazy entry, controls, lifecycle và AR.
- `src/lib/product-3d.ts`, `src/data/product-3d.ts`: contract, capability guards, cấu hình theo ID.
- `public/models/stage-320/*`: model thật và nguồn.
- `package.json`, `package-lock.json`, `yarn.lock`: model-viewer4.4.0 và dependencies cần thiết; giữ các lock entries nền tảng cũ.
- `scripts/check-product-3d.cjs`, `test-product-3d.cjs`, `test-product-3d-browser.cjs`: validation và regression.
- Tài liệu này và `docs/product-3d-evidence/*`.


## Đưa360° lên hero trang chủ —17/11/2026

Theo yêu cầu tiếp theo của chủ, hero giờ có nội dung dịch vụ bên trái và ảnh/entry360° bên phải ở desktop, xếp dọc trên mobile. Nút360° đặt trên ảnh để dễ tìm trên điện thoại. Có CTA xem catalog, tư vấn và link chi tiết model. Hero lấy name/image/config từ catalog qua server, chỉ truyền dữ liệu cần thiết sang client; không copy giá hoặc tạo model mới.

Files của lần cập nhật này: `src/app/page.tsx`, `src/components/AboutSection.tsx`, `src/components/product-3d/Product3D.tsx`. Prop `preview` tái sử dụng viewer, trang chi tiết tiếp tục dùng entry gọn mặc định. H1 và metadata SEO giữ nguyên; engine/GLB chỉ tải sau click. AR tiếp tục tắt.

PASS lint/typecheck/build bản hero; browser checks tại360/390/768/1440 xác nhận một H1, CTA đúng href, không preload GLB, xem3D thật, Escape/focus, AR off, không overflow/runtime errors. Bộ regression product cũng PASS cả4viewport cho gallery13 ảnh, giá500k/ngày, liên hệ và controls. First Load JS build mới: home188kB, product143kB; không phải kết quả CWV thực tế. Bản sao build: `/private/tmp/didi-hero-3d-c2_j9kte`; không deploy.

Log hiện tại: [hero-build.log](product-3d-evidence/hero-build.log), [hero-lint.log](product-3d-evidence/hero-lint.log), [hero-typecheck.log](product-3d-evidence/hero-typecheck.log), [hero-browser.log](product-3d-evidence/hero-browser.log), [product regression](product-3d-evidence/hero-product-regression.log), [source hashes](product-3d-evidence/hero-source-manifest.json). Log/source manifest không có prefix hero là snapshot nghiệm thu tính năng3D trước lần cập nhật hero này.

Ảnh: [mobile](product-3d-evidence/hero-closed-390.png), [desktop](product-3d-evidence/hero-closed-1440.png), [mobile đang xem3D](product-3d-evidence/hero-open-390.png).
