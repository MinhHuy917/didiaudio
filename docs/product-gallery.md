# Gallery ảnh /360° / AR —17/11/2026

## Phân tích và phương án

Trang chi tiết trước thay đổi có gallery13 ảnh và viewer3D tách riêng bên dưới; hero có ảnh và nút mở viewer riêng. Stack Next14/React18/Tailwind, model-viewer4.4.0 đã có; không cần thêm dependency. Dữ liệu Stage320, giá500k/ngày và model GLB đã có trong repository.

Phương án đã thông báo trước code: một gallery dùng chung cho hai vị trí; slide1 luôn là ảnh thường, slide2 là mô hình tương tác nếu cấu hình hợp lệ, các ảnh còn lại giữ nguyên thứ tự. Không tự chạy carousel. Tái sử dụng viewer hiện có, thêm chế độ embedded và gợi ý kéo; chỉ tải engine/model khi khách chọn slide tương tác.

## Thiết kế và hành vi

- Hero:2 slide (ảnh +360°). Chi tiết:14 slide (13 ảnh cũ +360° ở vị trí2). Nếu model bị tắt/thiếu cấu hình hợp lệ, chỉ có các ảnh thường. Không có ảnh thì hiện thông báo bổ sung ảnh.
- Ảnh thường có nhãn **Ảnh sản phẩm / Ảnh tĩnh**, không giả lập quay ảnh để thay cho mô hình3D. Thumbnail ảnh và ô360° khác nhau rõ; có chỉ số media, nút trước/sau và danh sách cuộn ngang.
- Slide2 hiện **360° · Kéo để xoay**, bàn tay trắng đặt trên mặt loa, gợi ý vuốt nhẹ. Mô hình thật tự xoay chậm8°/giây khi idle; nút Dừng xoay dừng cả gợi ý chuyển động. Pointer/keyboard tương tác vào model ẩn bàn tay và dừng auto-rotate. Gợi ý không chặn pointer. Reduced-motion bắt đầu với model/hand đứng yên.
- Badge hình khối **AR** đặt trên vùng media. Stage320 vẫn **AR · Chưa bật** theo quyết định trước, kèm giải thích tỷ lệ đang chờ xác nhận; không tạo camera giả hoặc CTA đặt loa đang hoạt động. Khi contract AR hợp lệ, badge thành nút gọi native AR thật qua adapter đang có.
- Swipe ảnh thường đổi slide. Gesture trong model dùng để xoay/pinch, không bị gallery chiếm làm swipe. Các thumbnail là tab có selected state, ArrowLeft/Right/Home/End; Escape rời viewer về ảnh đầu và trả focus. Có scroll margin để focus tránh header/thanh liên hệ cố định. Touch targets tối thiểu44px.
- Zoom, reset, fullscreen giữ hoạt động. Chuyển sang ảnh unmount viewer; event/timer/src được dọn và model cache không giữ các model đã dùng. Lỗi tải có trạng thái rõ, retry tạo phiên mới và dùng fragment cache key để tránh cache lỗi của loader; fragment không làm đổi HTTP URL hoặc query chữ ký CDN.
- Giữ thương hiệu tối/cyan của ĐiĐi Audio. Không sao chép logo, giá bán, badge chứng nhận hoặc review từ ảnh JBL tham chiếu. Không đổi catalog, giá thuê, policies, link liên hệ hoặc route.

## Files thay đổi trong lượt này

- `src/components/product-gallery/ProductMediaGallery.tsx`: slide model, ảnh, nav/tabs, swipe, trạng thái AR và empty state.
- `src/components/product-gallery/DragHint.tsx`, `DragHint.module.css`: bàn tay và animation tôn trọng reduced-motion.
- `src/components/product-3d/Product3DViewer.tsx`: embedded viewport, hand, dừng gợi ý, badge AR, sửa retry lifecycle/cache; giữ entry standalone tương thích.
- `src/components/ProductDetailClient.tsx`: thay phần gallery cũ bằng component chung, giữ phần thông tin/CTA.
- `src/components/AboutSection.tsx`: thay preview hero bằng cùng gallery.
- `scripts/test-product-3d-browser.cjs`: cập nhật kiểm tra theo UX mới, lỗi/retry và WebGL fallback.
- Tài liệu này và evidence đi kèm. Các thay đổi3D chưa commit từ lượt trước được giữ, không reset hoặc ghi đè.

## Kiểm thử

Lệnh kiểm tra mã: `npm run lint`, `tsc --noEmit --incremental false`, `node --test scripts/test-product-3d.cjs`, `node scripts/check-product-3d.cjs`, `npm run build`. Build riêng tại `/private/tmp/didi-gallery-6b_9hj_n`; không ghi `.next` workspace, không deploy.

Browser regression dùng Playwright Core/Chrome150 có sẵn tại môi trường kiểm thử; code trong `scripts/test-product-3d-browser.cjs`. Kiểm tra hero và product tại360/390/768/1440px: thứ tự media,13 ảnh giữ nguyên, một H1, không preload GLB, render model thật, reduced-motion, controls/fullscreen, keyboard/focus, không overflow/runtime errors; kiểm tra animation bình thường, swipe ảnh, drag model thật, dừng gợi ý; missing-model/retry và WebGL unavailable vẫn quay về ảnh được. Giá500k và tel/Zalo/Messenger được kiểm tra trên product.

Không xem browser viewport/software WebGL là test thiết bị Android/iOS thật. AR vẫn tắt và không được tuyên bố đã nghiệm thu native camera, pinching trên thiết bị thật hoặc tỷ lệ ngoài đời. Không có phép đo field CWV trong lượt này.

Bằng chứng cuối lưu ở `docs/product-gallery-evidence/`: lint/typecheck/build/unit/browser logs, source hashes và ảnh thường/360° ở mobile/desktop. Kết quả cụ thể được ghi sau khi các checks hoàn tất.


## Kết quả cuối

PASS lint, typecheck,3 unit groups, validator GLB và production build. Browser: **11 nhóm PASS** (8 tổ hợp route/viewport và3 nhóm swipe/drag/motion, lỗi/retry, WebGL fallback). Focus sau Escape được kiểm tra bằng hit-test để bảo đảm thumbnail không bị thanh liên hệ cố định che. Không ghi nhận runtime error ở các trường hợp bình thường.

Build báo First Load JS home189kB, product145kB, so với bản hero trước188/143kB; đây là bundle report, không phải CWV. Không thêm dependency trong lượt gallery. SHA nguồn đã khớp bản build trong [source-manifest.json](product-gallery-evidence/source-manifest.json).

- [Ảnh thường trên mobile](product-gallery-evidence/product-390-photo.png)
- [Slide360° và bàn tay trên mobile](product-gallery-evidence/product-390-360.png)
- [Hero trên desktop](product-gallery-evidence/hero-1440-photo.png)
- [Browser log](product-gallery-evidence/browser.log), [build log](product-gallery-evidence/build.log), [lint](product-gallery-evidence/lint.log), [typecheck](product-gallery-evidence/types.log), [unit](product-gallery-evidence/unit.log).

AR vẫn tắt, giá/cấu hình model không thay đổi, chưa push/deploy. Tài liệu/evidence3D và hero từ các lượt trước là snapshot nghiệm thu trước lần đổi gallery này.


## Bổ sung ảnh theo gallery JBL —17/11/2026

Yêu cầu tiếp theo: thêm các góc chụp như [gallery JBL](https://vn.jbl.com/loudspeakers/PARTYBOX-STAGE-320.html). Đã rà từng ảnh sẵn có bằng mắt:4 ảnh tương ứng bộ hãng đã có, gồm hero, mặt trước, cổng kết nối và bảng điều khiển. Tái sử dụng chúng thay vì tải trùng; bổ sung15 góc còn thiếu (sau/trái/phải/đáy, tay kéo, ngăn pin, góc nghiêng, bánh xe và hộp). Giữ toàn bộ13 ảnh cũ: **28 ảnh +1 slide360° =29 slide ở cả hero và trang chi tiết**, thay counts2/14 của bản gallery ban đầu.

Ảnh đầu vẫn là ảnh thường, slide2 vẫn là model tương tác. Các góc được xếp theo bộ gallery JBL rồi đến hình minh họa/lifestyle và ảnh chụp thực tế đã có. Giá, chính sách, model và AR không đổi. Không nhập video, giá bán hoặc badge chứng nhận từ site tham khảo.

Nguồn dữ liệu chung: `src/data/product-gallery.ts` mô tả thứ tự ảnh (index tham chiếu ảnh cũ hoặc src/alt ảnh mới), `getProductGallery()` trong `src/lib/product-gallery.ts` tái sử dụng ảnh và loại src trùng; `src/lib/product-gallery-types.ts` định nghĩa src/alt. Server homepage truyền đầy đủ bộ ảnh vào hero, client detail dùng cùng helper. Gallery vẫn nhận được ảnh cũ dạng string. Thanh thumbnails tự cuộn ngang đến ảnh đang chọn, không cuộn trang hoặc làm tràn viewport.

File mới ở `public/images/stage-320-gallery/`:15WebP tối đa1200px, giữ alpha/aspect ratio, tổng1,929,604bytes. Không đưa PNG gốc dung lượng lớn vào repo. Next Image vẫn cấp ảnh responsive/lazy, GLB chỉ tải khi chọn slide360°. [Nguồn và manifest ảnh](../public/images/stage-320-gallery/SOURCE.md).

Kiểm thử bản build riêng `/private/tmp/didi-extra-photos-_ff1f9x0`: lint, typecheck, build;11 nhóm browser regression tại360/390/768/1440; kiểm tra thêm decode đủ28ảnh trên cả hai routes,29tabs, End/Home và thumbnail cuối được cuộn vào vùng nhìn thấy. Kết quả/log cuối ghi trong evidence bên dưới; không deploy.

Bằng chứng: [browser](product-gallery-more-photos-evidence/browser.log), [kiểm tra mọi ảnh](product-gallery-more-photos-evidence/all.log), [build](product-gallery-more-photos-evidence/build.log), [source hashes](product-gallery-more-photos-evidence/source-manifest.json), [ảnh điều khiển trên hero mobile](product-gallery-more-photos-evidence/hero-390-photo-7.png), [ảnh hộp trên hero mobile](product-gallery-more-photos-evidence/hero-390-photo-19.png). Evidence các thư mục khác là snapshot các lượt triển khai trước.

Nghiệm thu bộ ảnh cuối: **PASS** lint/typecheck/build,11 nhóm browser, và decode28ảnh trên cả2routes.15file WebP khớp SHA-256 bản build; không sửa giá/FAQ, chưa deploy.


## Tải sẵn360° khi vào trang —18/11/2026

Theo yêu cầu tiếp theo, thay cơ chế chỉ tải sau click bằng **tải/dựng nền tự động** trên homepage và product detail. Sau sự kiện window load, requestIdleCallback bắt đầu trong tối đa800ms (fallback100ms cho browser thiếu API); bấm slide360° trước đó vẫn khởi động ngay. Ảnh và font ban đầu được ưu tiên. Không kích hoạt AR/camera tự động.

Viewer được mount ẩn với loading=eager, nạp và parse GLB ngay khi còn ở ảnh thường; khi chuyển slide sẽ dùng cùng instance. Khi ẩn: hidden/aria-hidden loại khỏi giao diện và focus, auto-rotate tắt; khi rời trang hoặc retry mới dọn instance. Vì giữ model trong bộ nhớ, đổi ảnh/360° nhiều lần không cần download/parse lại. Đây là thay đổi chủ ý so với cơ chế unmount khi chọn ảnh ở các mục trước.

Model khoảng9.9MB sẽ được tải tự động cho khách vào trang có gallery. Preload cải thiện thời gian chờ lúc chọn360°, không bảo đảm không có loading khi người dùng bấm ngay hoặc mạng chậm. Không tuyên bố field CWV/hiệu năng trên mọi thiết bị; không thêm dependency, giá và AR giữ nguyên.

PASS lint/typecheck/yarn build.11 nhóm browser tại360/390/768/1440 xác nhận loaded trong khi ảnh1 còn được chọn, viewer ẩn, hoạt động khi chuyển360°, AR gate, reduced-motion, controls/fullscreen, focus, lỗi/retry/WebGL fallback. Kiểm tra bổ sung trên cả2route:4 lần đổi qua lại dùng **cùng DOM/model**, đúng **1 request GLB/route**, không auto-rotate khi ẩn. Bản build riêng `/private/tmp/didi-preload-t3cg650s`; chưa deploy.

Files: ProductMediaGallery.tsx (schedule/retain), Product3DViewer.tsx (active/eager/pause), test-product-3d-browser.cjs (contract mới). Evidence: [build](product-preload-evidence/build.log), [browser](product-preload-evidence/browser.log), [chuyển qua lại](product-preload-evidence/repeated.log), [source hashes](product-preload-evidence/source-manifest.json). Các kết quả no-preload trước đó là snapshot hành vi cũ, đã được thay thế theo yêu cầu này.

## Bổ sung 20 ảnh chụp tham khảo — 18/11/2026

Theo yêu cầu bổ sung ảnh trên mạng, đã chọn 20 ảnh chụp Stage 320 từ bốn bài trải nghiệm gốc: SoundGuys (6), Tom’s Guide (5), STEREO GUIDE (5), Digital Trends (4). Đã xem contact sheet của 21 ứng viên và loại một ảnh mặt trước trên hiên nhà gần trùng góc. Bộ ảnh gồm mặt trước có/không bật đèn, mặt bên, mặt sau, bảng điều khiển, tay kéo, ngăn pin, cổng kết nối, bánh xe và bối cảnh trong nhà/ngoài trời. Không thêm render, biểu đồ, screenshot ứng dụng hoặc model loa khác.

Giữ nguyên 28 ảnh hiện có, thêm 20 ảnh cuối danh sách: **48 ảnh + slide 360° thứ hai = 49 slide**. Cùng một nguồn dữ liệu phục vụ homepage `/` và `/products/loa-jbl-partyBox-stage-320`. Không sửa giá, policy, thông số, URL, chức năng đặt thuê, cấu hình AR hoặc cơ chế preload model.

Các ảnh mới hiển thị “Ảnh chụp tham khảo”, có liên kết bài gốc, credit và thông báo không phải ảnh ĐiĐi Audio tự chụp. Không trình bày chúng như ảnh thiết bị đang cho thuê hay trải nghiệm khách hàng ĐiĐi Audio. Bản quyền thuộc chủ sở hữu nguồn; chưa xác minh giấy phép mở/quyền tái sử dụng, cần chủ website xác nhận trước khi xuất bản production. Chưa deploy/push.

20 WebP tổng **2.106.242 byte**, tối đa 1200px mỗi chiều, quality85, không phóng lớn/cắt khung hay xóa watermark. Giữ lazy loading và responsive sizes của Next Image; ảnh đầu vẫn được ưu tiên. Chi tiết asset URL, source page, tác giả, dimensions và SHA-256 ở [sources.json](../public/images/stage-320-real/sources.json), [SOURCE.md](../public/images/stage-320-real/SOURCE.md).

Files thay đổi:

- `src/data/product-real-photos.ts`: danh sách 20 ảnh và metadata nguồn.
- `src/data/product-gallery.ts`: nối bộ ảnh vào gallery hiện có.
- `src/lib/product-gallery-types.ts`: metadata nguồn optional, tương thích ảnh cũ.
- `src/components/product-gallery/ProductMediaGallery.tsx`: nhãn và credit/link có keyboard focus, touch target 44px.
- `public/images/stage-320-real/`: 20 WebP và hồ sơ nguồn.
- `scripts/test-product-3d-browser.cjs`: cập nhật 49 slide và kiểm tra nguồn.
- `scripts/test-product-reference-photos.cjs`: uniqueness/hash, decode ảnh, credit, dimensions, dung lượng.
- `scripts/test-product-reference-photos-browser.cjs`: kiểm tra đủ 48 ảnh, 20 credit/link, keyboard focus và mobile overflow trên cả hai routes.
- `docs/product-real-photos-evidence/`, mục tài liệu này: log và bằng chứng.

Validation: PASS `yarn lint`, `tsc --noEmit --incremental false`, `node scripts/test-product-3d.cjs` (3 nhóm), `node scripts/check-product-3d.cjs`, `node scripts/test-product-reference-photos.cjs` (20 file decode/hash hợp lệ), **`yarn build` production**. Bản build riêng `/private/tmp/didi-real-gallery-260z53cp`, dùng Node22 và dependency của repository; không đụng cache dev `.next`.

Browser Chrome: **11 nhóm PASS** trên homepage/product ở 360/390/768/1440px; kiểm tra photo-first, slide360 thứ hai, preload/retain model, controls, keyboard, reduced-motion, links, không overflow, lỗi model/retry và WebGL fallback. Kiểm tra bổ sung mở/decode đủ 48 ảnh trên mỗi route ở390px, tất cả20 nguồn ảnh/link và focus; không runtime error. Chưa đo field Core Web Vitals, không tuyên bố thay đổi chỉ số performance thực tế.

Bằng chứng: [build](product-real-photos-evidence/build.log), [lint](product-real-photos-evidence/lint.log), [asset tests](product-real-photos-evidence/assets.log), [11 browser groups](product-real-photos-evidence/browser.log), [all images browser](product-real-photos-evidence/all-photos-browser.log), [mobile hero](product-real-photos-evidence/hero-reference-390.png), [mobile product](product-real-photos-evidence/product-reference-390.png).

Chạy lại browser checks với Chrome/Playwright có sẵn trong môi trường, không thêm dependency cho website:

```sh
TEST_BASE_URL=http://127.0.0.1:4186 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/test-product-3d-browser.cjs
TEST_BASE_URL=http://127.0.0.1:4186 PLAYWRIGHT_MODULE=/private/tmp/didi-ux-audit/node_modules/playwright-core node scripts/test-product-reference-photos-browser.cjs
```
