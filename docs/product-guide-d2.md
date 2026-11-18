# Bổ sung bộ micro Alpha Works D2

Chủ ĐiĐi Audio xác nhận bộ đang giao bằng [trang D2 được cung cấp](https://cellphones.com.vn/micro-karaoke-alpha-works-d2.html). Đã đối chiếu [manual chính hãng](https://www.alphaworksaudio.com/vi/_files/ugd/426e76_9beae4b067ca4d46bba987b57d7e5a87.pdf) và [trang sản phẩm Alpha Works](https://www.alphaworksaudio.com/vi/product-page/wireless-microphone-alpha-works-d2); dùng retailer để nhận diện model, không lấy quảng cáo làm bằng chứng vận hành.

Đã cập nhật5 bản vi/en/ko/ru/zh của phần micro, checklist và lỗi micro không tiếng:

1. Hai pin AA mỗi tay micro; đọc pin trên màn hình. USB-C sạc đầu thu, không sạc tay micro.
2. Hạ âm lượng trước khi cắm jack6,35 mm đầu thu vào MIC của Stage320; MIC2/GUITAR phải chọn biểu tượng micro. Bật nguồn đầu thu và tay micro.
3. Kiểm tra từng kênh A/B trước. Khi mất đồng bộ, đưa hai mắt IR gần nhau và nhấn nhanh CH-A/CH-B tương ứng. Không yêu cầu khách ghép lại mọi lần dùng hoặc giữ nút CH khi chỉ cần đồng bộ.
4. Cách phát nhạc mặc định của guide: điện thoại Bluetooth trực tiếp tới JBL PartyBox Stage320; D2 đưa tiếng micro qua MIC. Bluetooth có tên D2 là ngõ nhận nhạc của receiver, không phải cách ghép tay micro.
5. Tăng âm lượng micro ở đầu thu và VOL micro trên loa từ mức thấp. Echo chọn một nơi chính để tránh chồng hiệu ứng. Khi xong, giữ nguồn tay micro hơn 3 giây và tắt đầu thu.

Mic First là xử lý nhạc bên trong D2 theo manual. Việc không áp dụng nó lên nhạc Bluetooth đi thẳng tới JBL là suy luận từ đường tín hiệu đã chọn, chưa phải phép đo trên bộ vật lý. Không quảng cáo chống hú tuyệt đối, khoảng cách, số giờ pin hay tính năng chưa cần cho hướng dẫn.

`verified=true` biểu thị model chủ đã xác nhận và facts đã đối chiếu tài liệu. `hardwareTested=false`; `prepairedAtHandover=null` vì chủ chưa nói mọi bộ giao đều ghép sẵn. Hướng dẫn có nhánh kiểm tra và đồng bộ khi cần, không suy đoán trạng thái giao thực tế.

Phần micro dùng [tutorial từ kênh Alpha Works](https://www.youtube.com/watch?v=ZhCmbAet46M), được xác minh trực tiếp watch page: public/playabilityOK, playableInEmbed=true,182 giây, uploadDate2026-03-04T23:28:36-08:00. Các phần loa giữ video JBL. Không thêm video D2 vào catalog9 video JBL hiện có; chỉ thêm record cho guide. Thử phát thật, YouTube trả mã 150 và từ chối nhúng mặc dù watch-page metadata báo cho phép. Đã đặt D2 embeddable=false: nút micro mở YouTube trực tiếp, không tải iframe/API cho D2 hoặc bắt người dùng chờ lỗi. Các phần JBL vẫn dùng player sau click; no-JS vẫn có các link trực tiếp.

Tiến độ v2 giữ các mục không liên quan từ v1, bỏ dấu hoàn thành các bước micro, lỗi no-mic và prep-mic để người dùng đọc lại nội dung mới; dữ liệu v1 được giữ nguyên. Test unit và browser kiểm tra migration này, gồm trường hợp storage bị chặn.

Files cập nhật:

- `src/data/rental-microphone.ts`: model, pin, receiver, pairing, nguồn xác nhận và trạng thái hardware.
- `src/data/rental-microphone-video.ts`: tutorial D2 riêng, metadata thật và bản dịch5ngôn ngữ.
- `src/data/guide-content.ts`, `guide-messages.ts`, `guide-sources.ts`: hướng dẫn đúng D2, bỏ thông báo cần xác nhận trong UI, thêm nguồn hãng.
- `src/components/guide/GuideCenter.tsx`: thông tin D2, chọn video theo chủ đề, migration tiến độ.
- `src/lib/product-guide.ts`: keyv2 và lọc các mục cần đọc lại khi migrate.
- `src/app/huong-dan-su-dung-jbl-partybox-320/page.tsx`: truyền video D2 vào guide; TechArticle citations tự nhận nguồn hãng mới.
- `scripts/test-product-guide.cjs`, `test-product-guide-browser.cjs`: facts D2, tám nhóm browser, migration và cả hai video/direct links.
- `docs/product-guide.md`, báo cáo này và `product-guide-d2-evidence/`: giải quyết điểm chờ của bản ban đầu, giữ bằng chứng trước đó dưới dạng snapshot.

Giữ 25 bước chính,21 bước xử lý lỗi,4 checklist; không đổi catalog/giá, chính sách, URL, luồng thuê, thư viện video JBL, AR hoặc gallery360°. Không thêm dependency.

Bằng chứng hạn chế nhúng D2: `product-guide-d2-evidence/real-youtube.json` ghi mã 150, không pageerror và fallback xuất hiện. Bản cuối chủ động dùng link trực tiếp để tôn trọng hạn chế này; không thử proxy, thay embed host để vượt chặn hoặc tải/rehost video.

## Kiểm thử cuối

PASS lint, typecheck,6nhóm unit và production `yarn build` bằng Node22. PASS8nhóm browser:360/390/768/1440px (đủ46bước và4checklist),5bản SSR/schema/ngôn ngữ và6teaser integrations, no-JS, storage bị chặn, migration v1→v2. Đã kiểm tra link D2 mở YouTube trực tiếp và không mở dialog/iframe; video JBL vẫn mở modal, Escape trả focus đúng nút. Unit video/3D và GLB validator hiện có cũng qua.

Video thật đã thử trước khi chuyển sang direct link: YouTube trả150, không phát trong iframe. Bản cuối không cố nhúng lại và không tuyên bố playback nhúng D2 đã thành công. Nội dung/tính năng hãng được kiểm chứng theo tài liệu; chưa thử Bluetooth, pin, IR hoặc âm thanh trên thiết bị vật lý. Chưa deploy production, không tự thực hiện cuộc gọi hay gửi Zalo.

Bằng chứng: [summary](product-guide-d2-evidence/summary.json), [unit](product-guide-d2-evidence/unit.log), [browser](product-guide-d2-evidence/browser.log), [lint](product-guide-d2-evidence/lint.log), [typecheck](product-guide-d2-evidence/typecheck.log), [build](product-guide-d2-evidence/build.log), [metadata video gốc](product-guide-d2-evidence/video-source.json), [lỗi nhúng thực tế](product-guide-d2-evidence/real-youtube.json), [source hashes](product-guide-d2-evidence/source-manifest.json).
