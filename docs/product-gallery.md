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
