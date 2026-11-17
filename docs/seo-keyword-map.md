# Keyword map theo search intent

Ngày17/11/2026. Không có dữ liệu search-volume/GSC; đây là mapping theo nội dung/intent, không phải dự báo thứ hạng. Các URL hiện tại được giữ nguyên.

| URL | Intent chính | Keyword trọng tâm | Trạng thái |
| --- | --- | --- | --- |
| `/` | Tìm dịch vụ thuê loa tại Đà Nẵng, xem catalog/giá và liên hệ | **thuê loa kẹo kéo Đà Nẵng; thuê loa kéo Đà Nẵng; thuê loa Đà Nẵng** | Metadata/H1/intro triển khai; không chia ba biến thể thành ba landing |
| `/products/loa-jbl-partyBox-stage-320` | Đánh giá model cụ thể trước khi thuê | thuê loa JBL PartyBox Stage 320 Đà Nẵng | Metadata/SSR/Service theo model, giá nguồn catalog |
| `/about-didiaudio` | Hiểu doanh nghiệp và cách liên hệ | ĐiĐi Audio Đà Nẵng | Brand intent, không cạnh tranh homepage bằng title dịch vụ chung |
| `/#products` | Xem thiết bị/giá trong cùng trang dịch vụ | giá thuê loa kéo Đà Nẵng; cho thuê loa JBL PartyBox | Giữ anchor, không tạo trang giá copy |
| `/#faq`, `/#chinh-sach` | Làm rõ điều kiện thuê | câu hỏi thuê loa; giao nhận/trả loa | FAQ hiển thị; các giá/claim chưa chốt cần owner xác nhận |
| `/speaker-rental-da-nang` | Người đọc tiếng Anh tìm dịch vụ hiện hữu | speaker rental Da Nang | Metadata riêng; body/shared UI còn trộn VI, chưa hreflang |
| `/speaker-rental-da-nang-ko` | Người đọc tiếng Hàn tìm dịch vụ hiện hữu | Localized speaker-rental intent (KO) | Giữ URL; cần duyệt bản dịch và link Kakao thật |
| `/speaker-rental-da-nang-ru` | Người đọc tiếng Nga tìm dịch vụ hiện hữu | Localized speaker-rental intent (RU) | Giữ URL; cần duyệt bản dịch tương ứng |
| `/speaker-rental-da-nang-zh` | Người đọc tiếng Trung tìm dịch vụ hiện hữu | Localized speaker-rental intent (ZH) | Giữ URL; cần duyệt bản dịch và kênh liên hệ thật |

Các từ khóa phụ như cho thuê loa kẹo kéo, thuê loa karaoke/di động/tổ chức tiệc được dùng tự nhiên theo phần nội dung phù hợp; không lặp danh sách biến thể trong title/H1 hoặc tạo trang doorway.

## Mapping49 bài hiện có — đề xuất, chưa biên tập body

Cột title ghi nhận title trong source baseline, không xác nhận những claim nằm trong title như “5 phút”, số người, model hoặc giá của năm2024. Tất cả49 outline/keyword dưới đây đang **chờ phê duyệt biên tập**; task chỉ sửa link và discovery, chưa biến các intent đề xuất thành nội dung mới. Nguồn:49 entry và export trong `src/data/blog.ts`, routing `src/app/[slug]/page.tsx`.

| URL giữ nguyên | Title hiện tại trong source | Intent đề xuất | Keyword chính đề xuất | Cụm |
| --- | --- | --- | --- | --- |
| `/kinh-nghiem-chon-loa-keo-cho-tiec-gia-dinh` | Kinh nghiệm chọn loa kéo cho tiệc gia đình: công suất, pin, mic | Người tổ chức tiệc cần chọn thiết bị theo bối cảnh; tránh tự suy ra công suất/số khách. | cách chọn loa kéo cho tiệc gia đình | chon-loa |
| `/setup-karaoke-5-phut-voi-loa-keo-jbl` | Setup karaoke 5 phút với loa kéo JBL: không hú, hát hay | Hướng dẫn từng bước kết nối/test micro đúng thiết bị hiện có; cần thử nghiệm và nguồn hãng. | cách setup karaoke với loa JBL PartyBox | karaoke |
| `/bang-gia-thue-loa-keo-jbl-da-nang-2024` | Bảng giá thuê loa kéo JBL Đà Nẵng 2024 (320, 720, Ultimate) | Đối chiếu giá catalog và điều kiện thuê; bài2024/model cũ cần owner duyệt cập nhật, không tự thêm thiết bị. | giá thuê loa JBL PartyBox Đà Nẵng | giao-dich |
| `/meo-choi-nhac-ngoai-troi-khong-mat-tieng` | Mẹo chơi nhạc ngoài trời không mất tiếng, không hụt bass | Giải thích bố trí và giới hạn ngoài trời, không biến watt thành coverage. | cách dùng loa kéo ngoài trời | am-thanh |
| `/chon-micro-khong-day-hat-karaoke-hay` | Chọn micro không dây hát karaoke hay: UHF, pin, chống hú | Phân biệt loại mic/tính tương thích, chỉ nêu phụ kiện thuê có thật. | cách chọn micro không dây karaoke | karaoke |
| `/checklist-thue-loa-keo-truoc-su-kien` | Checklist thuê loa kéo trước sự kiện: 6 phút kiểm tra | Checklist trước giao dịch/bàn giao với danh sách phụ kiện thật; phân biệt với bài test âm thanh. | checklist nhận loa thuê | ban-giao |
| `/chon-loa-keo-cho-restaurant-cafe-live-music` | Chọn loa kéo cho quán cafe/restaurant có live music | Đánh giá nhu cầu cố định/nhạc sống; cần case study thật, không mặc định dịch vụ đáp ứng mọi quán. | chọn loa kéo cho quán cafe live music | chon-loa |
| `/loa-keo-cho-sinh-nhat-tai-nha` | Loa kéo cho sinh nhật tại nhà: gọn, pin lâu, mic hay | Checklist riêng tiệc tại nhà: không gian, nguồn nhạc, mic; owner quyết định khác biệt so bài tiệc gia đình. | thuê loa cho sinh nhật tại nhà | chon-loa |
| `/ghep-doi-nhieu-loa-jbl-bang-auracast` | Ghép đôi nhiều loa JBL bằng Auracast/PartyBoost | Hướng dẫn tương thích từng model, phân biệt PartyBoost/Auracast; không đồng nhất các công nghệ. | cách ghép loa JBL bằng Auracast | ket-noi |
| `/meo-hat-karaoke-it-met-hoi` | Mẹo hát karaoke ít mệt: chỉnh echo, chọn tông, đứng đúng vị trí | Nhu cầu thực hành chọn tông/echo/vị trí; tránh lời khuyên sức khỏe hoặc hứa hát hay. | cách chỉnh karaoke đỡ mệt | karaoke |
| `/chon-loa-keo-cho-team-building-50-nguoi` | Chọn loa kéo cho team building 50 người | Nhu cầu MC/nhạc/trò chơi và địa điểm; URL50người giữ nhưng không cam kết thiết bị đáp ứng50 người. | chọn loa cho team building | chon-loa |
| `/bao-quan-loa-keo-sau-su-dung` | Bảo quản loa kéo sau sử dụng: 5 bước nhanh | Hướng dẫn chăm sóc sau dùng theo manual; phân biệt bảo quản với vệ sinh/firmware. | bảo quản loa kéo sau khi sử dụng | bao-tri |
| `/chong-hu-micro-loa-keo` | Chống hú micro loa kéo: 6 kỹ thuật cơ bản | Troubleshooting feedback, từng bước kiểm tra an toàn theo setup hiện hữu. | cách chống hú micro loa kéo | karaoke |
| `/chon-loa-keo-cho-lop-hoc-yoga-dance` | Chọn loa kéo cho lớp yoga/dance: nhẹ, pin lâu, Bluetooth ổn | Nhu cầu giọng hướng dẫn/nhạc và thời gian; cần bằng chứng khác biệt với gym/ngoại ngữ. | chọn loa cho lớp yoga dance | chon-loa |
| `/ket-noi-loa-keo-voi-tivi-xem-phim-hat-karaoke` | Kết nối loa kéo với TV để xem phim & karaoke | Xác định cổng/modelTV, độ trễ, cách kết nối có thật; không mặc định mọi TV đều hỗ trợ. | cách kết nối loa kéo với tivi | ket-noi |
| `/loa-keo-cho-du-lich-da-ngoai` | Loa kéo cho du lịch dã ngoại: chống nước, pin dài, gọn nhẹ | Chuẩn bị nguồn điện, vận chuyển, điều kiện ngoài trời; không thêm địa điểm/giấy phép tự đoán. | thuê loa kéo đi dã ngoại Đà Nẵng | chon-loa |
| `/cham-soc-pin-loa-keo-de-khong-chai` | Chăm sóc pin loa kéo để không chai nhanh | Giải thích pin công bố vs thực tế, sạc đúng manual; tránh hướng dẫn không có nguồn. | cách sử dụng pin loa kéo | bao-tri |
| `/huong-dan-dung-mixer-kem-loa-keo` | Hướng dẫn dùng mixer kèm loa kéo để hát hay hơn | Chỉ hướng dẫn thiết bị/cổng đã xác minh; không ngụ ý mixer nằm trong gói thuê. | cách dùng mixer với loa kéo | karaoke |
| `/chon-loa-keo-cho-phong-gym` | Chọn loa kéo cho phòng gym: bền, bass khỏe, chạy dài giờ | Nhu cầu nhạc liên tục/nguồn điện/giọng hướng dẫn; cần case study hoặc owner chọn merge với yoga/dance. | chọn loa kéo cho phòng gym | chon-loa |
| `/meo-chinh-eq-cho-nhac-vang-nhac-tre` | Mẹo chỉnh EQ cho nhạc vàng và nhạc trẻ trên loa kéo | Hướng dẫn EQ theo nghe thử và thiết bị, không dùng preset universal chưa được test. | cách chỉnh EQ loa kéo | karaoke |
| `/ket-noi-micro-co-day-vao-loa-keo` | Kết nối micro có dây vào loa kéo: chống hú và an toàn | Tương thích cổng, mức tín hiệu và test; không ngụ ý mic có dây được tặng/cho thuê nếu catalog chưa có. | cách kết nối micro có dây vào loa kéo | karaoke |
| `/thu-loa-truoc-khi-thue-5-phut` | Thử loa trước khi thuê trong 5 phút | Các bước test âm thanh/micro/pin; cần tách khỏi checklist giao nhận hoặc owner merge có301. | cách thử loa trước khi thuê | ban-giao |
| `/bao-hanh-va-bao-tri-loa-keo-khi-thue` | Bảo hành & bảo trì loa kéo khi thuê: cần hỏi gì? | Hướng dẫn hỏi quyền hỗ trợ/bàn giao; không tự đặt bảo hành, đổi loa hoặc SLA. | thuê loa bị lỗi cần hỏi gì | bao-tri |
| `/chon-loa-keo-cho-quay-roadshow` | Chọn loa kéo cho roadshow: công suất, pin, di động | Nhu cầu di chuyển/phát thanh và nguồn điện; không quảng cáo model720 không có trong catalog. | chọn loa cho roadshow | chon-loa |
| `/top-5-bai-test-loa-keo-khi-thu-am-thanh` | Top 5 bài test loa kéo khi thử âm thanh | Tiêu chí chọn track test/đoạn giọng và mục đích test; không xuất bản lời bài hát hoặc playlist không xác minh. | nhạc test loa khi thuê | ban-giao |
| `/su-khac-nhau-giua-loa-keo-va-loa-partybox` | Khác nhau giữa loa kéo và loa partybox | Giải thích thuật ngữ/sản phẩm; phân biệt dòng thiết bị với dịch vụ cho thuê, tránh bịa model. | loa kéo và JBL PartyBox khác nhau thế nào | so-sanh |
| `/huong-dan-dung-echo-de-hat-khong-bi-loang` | Dùng echo thế nào để hát không bị loãng? | Hướng dẫn riêng echo, phân biệt chống hú/EQ; cần nghe thử thực tế. | cách chỉnh echo karaoke | karaoke |
| `/ket-noi-nhac-cu-guitar-voi-loa-keo` | Kết nối guitar với loa kéo: tránh méo và hú | Xác minh guitar input/model hỗ trợ; không ngụ ý guitar đi kèm gói thuê. | kết nối guitar với loa JBL PartyBox | ket-noi |
| `/chon-loa-keo-cho-lop-hoc-ngoai-troi` | Chọn loa kéo cho lớp học ngoài trời | Nhu cầu độ rõ giọng/địa điểm; không suy ra số học viên từ công suất. | chọn loa cho lớp học ngoài trời | chon-loa |
| `/kiem-tra-phu-kien-loa-keo-truoc-khi-nhan` | Kiểm tra phụ kiện loa kéo trước khi nhận | Danh sách đối chiếu cụ thể trước bàn giao; owner quyết định giữ độc lập hay gộp checklist. | phụ kiện khi nhận loa thuê | ban-giao |
| `/huong-dan-ve-sinh-loa-keo` | Hướng dẫn vệ sinh loa kéo: an toàn cho màng loa | Manual nhà sản xuất, các thao tác không gây hỏng; không tự tuyên bố quy trình sát khuẩn của cửa hàng. | cách vệ sinh loa kéo an toàn | bao-tri |
| `/cach-dat-loa-de-bass-day-hon` | Cách đặt loa để bass dày hơn mà không ù | Hướng dẫn vị trí/test âm thanh, phân biệt với nội dung ngoài trời; không bịa phép đo. | cách đặt loa giảm ù bass | am-thanh |
| `/phong-tranh-loa-bi-nong-khi-chay-lau` | Phòng tránh loa kéo bị nóng khi chạy lâu | Nhận biết/cách dừng và liên hệ hỗ trợ; chỉ hướng dẫn theo nguồn, không hứa tự sửa. | loa kéo nóng khi dùng lâu | bao-tri |
| `/ket-noi-loa-keo-voi-phan-mem-hat-karaoke` | Kết nối loa kéo với app karaoke: giảm trễ, giữ chất âm | Hướng dẫn nguồn nhạc, cổng và độ trễ cho thiết bị tương thích; không coi app nào cũng miễn phí. | kết nối loa kéo với app karaoke | ket-noi |
| `/chon-loa-keo-cho-phong-thu-nho` | Chọn loa kéo cho phòng thu nhỏ tại nhà | Giải thích giới hạn nhu cầu thu âm và kiểm tra cổng; tránh gợi ý âm thanh chuyên nghiệp không có chứng cứ. | loa kéo có dùng cho phòng thu được không | chon-loa |
| `/tai-sao-nen-chon-loa-jbl-chinh-hang-khi-thue` | Vì sao nên chọn loa JBL chính hãng khi thuê? | Cách nhận dạng model/phụ kiện/nguồn gốc theo tài liệu, tránh khẳng định chính hãng/bảo hành khi chưa có evidence. | kiểm tra loa JBL khi thuê | so-sanh |
| `/huong-dan-dat-lich-thue-loa-online` | Hướng dẫn đặt lịch thuê loa online: 3 bước | Quy trình liên hệ/xác nhận ngoài web có thật; không giả lập booking online hoặc đòi CCCD/GPLX khi owner chưa xác nhận. | cách đặt thuê loa tại ĐiĐi Audio | giao-dich |
| `/cach-chon-nhac-nen-cho-party-ngoai-troi` | Cách chọn nhạc nền cho party ngoài trời | Nhu cầu trình tự phát và âm lượng theo bối cảnh; nội dung gốc cần độc lập, không lặp chọn công suất. | chọn nhạc nền cho tiệc ngoài trời | am-thanh |
| `/loi-thuong-gap-khi-dung-loa-keo-va-cach-khac-phuc` | Lỗi thường gặp khi dùng loa kéo và cách khắc phục | Troubleshooting theo triệu chứng với link tới hướng dẫn chuyên sâu; không lặp toàn bộ mọi bài. | lỗi thường gặp khi dùng loa kéo | bao-tri |
| `/nen-thue-hay-mua-loa-keo` | Nên thuê hay mua loa kéo? Quyết định nhanh trong 3 câu hỏi | So sánh chi phí/dịp dùng theo ví dụ có nguồn; không bịa giá mua/tuổi thọ hoặc tiết kiệm%.  | nên thuê hay mua loa kéo | so-sanh |
| `/giu-am-thanh-on-dinh-khi-troi-mua` | Giữ âm thanh ổn định khi trời mưa nhẹ | Nội dung an toàn theo IPX4/manual; không gợi ý có thể ngâm nước hoặc tiếp tục dùng khi ướt. | dùng loa kéo khi gặp mưa cần làm gì | bao-tri |
| `/am-thanh-cho-le-cuoi-tai-nha` | Âm thanh cho lễ cưới tại nhà: rõ lời, nhạc nền dễ nghe | Nhu cầu giọng nói/nhạc/bối cảnh; chỉ phát triển nếu dịch vụ và case thực tế được owner xác nhận. | thuê loa cho lễ cưới tại nhà | chon-loa |
| `/huong-dan-ghi-am-nhanh-voi-loa-keo-va-dien-thoai` | Ghi âm nhanh với loa kéo và điện thoại | Xác minh đường tín hiệu/cổng, phân biệt phát âm và ghi âm; không bịa tính năng. | có thể ghi âm với loa kéo và điện thoại không | ket-noi |
| `/ket-noi-loa-keo-voi-laptop-trinh-chieu` | Kết nối loa kéo với laptop khi trình chiếu | Hướng dẫn cổng/Bluetooth/độ trễ theo thiết bị; link về model có thật. | kết nối loa kéo với laptop | ket-noi |
| `/chon-loa-keo-cho-lop-hoc-ngoai-ngu` | Chọn loa kéo cho lớp học ngoại ngữ | Nhu cầu độ rõ lời/phát giọng, cần khác biệt thực tế với lớp học chung/yoga. | chọn loa cho lớp học ngoại ngữ | chon-loa |
| `/bat-kenh-uhf-micro-tranh-nhieu` | Bật kênh UHF micro để tránh nhiễu | Chỉ hướng dẫn cặp micro/model được xác nhận; không gán UHF cho phụ kiện khi chưa rõ model. | cách tránh nhiễu micro UHF | karaoke |
| `/cach-dung-den-led-tren-loa-partybox` | Cách dùng đèn LED trên loa partybox cho tiệc | Manual/app đúng Stage320, không khẳng định chức năng khác model. | cách điều khiển đèn loa JBL PartyBox | am-thanh |
| `/kiem-soat-am-luong-khi-co-tre-em` | Kiểm soát âm lượng loa kéo khi có trẻ em | Nội dung nhận thức an toàn có nguồn đáng tin; không tự đặt ngưỡng dB/thời gian hoặc lời khuyên y tế. | âm lượng loa khi có trẻ em | bao-tri |
| `/huong-dan-update-firmware-loa-jbl` | Hướng dẫn cập nhật firmware loa JBL (nếu hỗ trợ) | Manual/app chính thức và điều kiện tương thích; không hướng dẫn firmware không xác minh. | cách cập nhật firmware JBL PartyBox | ket-noi |


## Ưu tiên nội dung cần phát triển sau phê duyệt

1. `/bang-gia-thue-loa-keo-jbl-da-nang-2024`: cập nhật bài giải thích cách tính thuê theo ngày và các khoản cần xác nhận từ fact sheet đã chốt; không bịa giá/khuyến mãi hoặc đổi URL chỉ vì năm2024. Homepage vẫn là trang dịch vụ thương mại chính.
2. `/kinh-nghiem-chon-loa-keo-cho-tiec-gia-dinh`: tư vấn Stage320 theo không gian/nguồn điện/micro hiện có, tránh so sánh model không có trong catalog hoặc suy ra watt→số khách.
3. `/checklist-thue-loa-keo-truoc-su-kien`: checklist gửi thông tin ngày/địa điểm, nhận/trả, phụ kiện và các điều kiện cần hỏi. Tách rõ tư vấn với policy đã được chủ chốt.
4. `/setup-karaoke-5-phut-voi-loa-keo-jbl`: hướng dẫn ghép nối/test micro được kiểm tra trên thiết bị, dẫn nguồn hãng, không cam kết hoàn tất trong thời gian chưa xác minh.
5. `/meo-choi-nhac-ngoai-troi-khong-mat-tieng`: chuẩn bị loa khi đi dã ngoại, giữ thiết bị khô ráo, nguồn điện và giới hạn pin; không khẳng định chống nước ngoài dữ liệu xác nhận.

Giữ49 URL đang200. Trước khi gộp/redirect/noindex hoặc thay body hàng loạt, cần duyệt outline, nguồn nội dung và mapping URL. Không tự chọn canonical của bài này sang bài khác chỉ vì cùng template. Chưa tạo bài mới trong task để tránh tăng thêm thin/duplicate content.

Internal link mẫu: bài hướng dẫn → `/#products` → đúng product Stage320; bài điều kiện → `/#chinh-sach`/hotline; link liên quan giữa các bài phải là `/<slug>`, không `/blog/<slug>`. Toàn bộ danh sách có link HTML từ homepage.

## Brief nội dung theo đợt, cần duyệt trước khi xuất bản

Các brief dùng URL đang hoạt động. Tên dưới đây là hướng biên tập, chưa đổi title/body và chưa tạo thêm route. Không dùng số lượng bài làm mục tiêu; chỉ phát triển một URL khi có câu trả lời và bằng chứng riêng.

| Đợt / URL nguồn | Brief và intent khác biệt | Nội dung / bằng chứng cần chuẩn bị | Internal links và phê duyệt |
| --- | --- | --- | --- |
|1 — `/bang-gia-thue-loa-keo-jbl-da-nang-2024` | **Bảng giá và cách tính thời gian thuê:** giúp hiểu tiền thuê/đơn vị/ngày và những khoản cần hỏi; homepage vẫn là trang dịch vụ chính | Fact sheet chủ chốt về giá catalog, FAQ500k, thời gian thuê, phụ phí nếu có. Không tự thêm model720/Ultimate chỉ vì title cũ nhắc đến | Link `/#products`, Stage320, `/#chinh-sach`. Duyệt giá, điều kiện và title mới trước biên tập; giữ slug có2024 nếu chưa có kế hoạch redirect được duyệt |
|1 — `/huong-dan-dat-lich-thue-loa-online` | **Cách liên hệ và xác nhận thuê tại ĐiĐi Audio:** hướng dẫn người sẵn sàng đặt, khác bài bảng giá | Ghi nhận thực tế chủ tiếp nhận yêu cầu, thông tin tối thiểu cần gửi, bước xác nhận và giao/nhận. Địa chỉ41 Tống Duy Tân là public pickup đã được xác nhận; giờ nhận/trả còn thiếu | Link `tel:0339197917`, catalog và policy. Không giả lập thanh toán, lịch trống hoặc xác nhận tự động; owner duyệt quy trình |
|1 — `/checklist-thue-loa-keo-truoc-su-kien` | **Chuẩn bị trước khi nhận loa:** giúp đối chiếu giao dịch/phụ kiện; tách khỏi bài test âm thanh | Checklist bàn giao thật, phụ kiện theo catalog đã được chủ xác nhận, cách liên hệ khi có thiếu/hỏng. Không tự yêu cầu giấy tờ/cọc hoặc đặt quy định trả trễ | Link bài đặt thuê, model và policy. Owner quyết định phân vai với `/kiem-tra-phu-kien-loa-keo-truoc-khi-nhan`; chưa gộp/xóa URL |
|1 — `/kinh-nghiem-chon-loa-keo-cho-tiec-gia-dinh` | **Chọn loa theo nguồn nhạc, micro và cách di chuyển:** tư vấn trước thuê, khác bảng giá và hướng dẫn kết nối | Dữ liệu catalog Stage320, ảnh thật, trải nghiệm sử dụng được ghi nhận và tài liệu hãng cho thông số. Tách rõ số hãng công bố khỏi nhận xét tư vấn | Link model và hướng dẫn karaoke. Không suy ra số người/diện tích từ watt. Owner duyệt ranh giới với bài sinh nhật/team building |
|2 — `/setup-karaoke-5-phut-voi-loa-keo-jbl` | **Kết nối và test karaoke trên thiết bị đang cho thuê:** hướng dẫn thao tác cụ thể, không bài quảng cáo dịch vụ chung | Test thực tế đúng model loa/micro/nguồn nhạc, ảnh các cổng/nút, manual hãng, các lỗi đã quan sát. Không giữ cam kết5 phút hoặc “không hú” nếu chưa chứng minh | Link product, `/chong-hu-micro-loa-keo`, bài kết nối liên quan. Owner duyệt phụ kiện và hướng dẫn đã test |
|2 — `/loa-keo-cho-du-lich-da-ngoai` | **Checklist vận chuyển, pin và nguồn điện khi dã ngoại:** khác hướng dẫn bố trí âm thanh ngoài trời | Kích thước/trọng lượng/pin/IP đúng model và nguồn hãng, giới hạn vận hành, phụ kiện thực có. Không khuyên dùng trong nước/mưa, không thêm địa điểm/giấy phép đoán | Link model, chăm sóc pin và bài âm thanh ngoài trời. Chủ xác nhận dịch vụ giao nhận phù hợp từng trường hợp; không hứa coverage/số người |
|2 — `/meo-choi-nhac-ngoai-troi-khong-mat-tieng` | **Bố trí loa và thử độ rõ ở điểm dùng:** hướng dẫn âm thanh, khác logistics dã ngoại | Ghi nhận thử nghe/điều kiện, giới hạn môi trường và nguồn kỹ thuật; không đặt con số công suất/diện tích/phạm vi không đo | Link bài dã ngoại, test loa và model. Duyệt nội dung gốc; không gắn số liệu đo giả |
|2 — `/loi-thuong-gap-khi-dung-loa-keo-va-cach-khac-phuc` | **Tra cứu theo triệu chứng:** chỉ dẫn kiểm tra cơ bản và khi cần liên hệ | Lỗi thực tế được ghi nhận, manual, phạm vi thao tác được phép. Mỗi triệu chứng dẫn đến hướng dẫn chuyên sâu, không lặp toàn bộ chúng | Link chống hú, kết nối, pin và hotline. Chủ duyệt hỗ trợ/đổi thiết bị; không tự đặt SLA hoặc bảo hành |
|3 — các URL chọn loa cho cafe/gym/lớp học/roadshow/lễ cưới | **Rà soát nhu cầu thực trước khi viết riêng:** chỉ giữ brief độc lập khi có yêu cầu, thiết bị và ví dụ riêng | Phỏng vấn chủ/case thực tế, phụ kiện và khả năng cung cấp xác nhận được. Chưa có bằng chứng thì giữ trong hàng chờ, không mở rộng catalog hoặc cam kết phù hợp | Mỗi URL cần owner duyệt outline và quyết định giữ/gộp. Mọi thay đổi URL/noindex/301 cần bản mapping được duyệt riêng |

## Quy tắc giữ chất lượng và tránh cạnh tranh nội bộ

- Homepage nhận intent thương mại rộng của ba từ khóa chính. Trang sản phẩm trả lời về đúng Stage320. Bài viết giải quyết câu hỏi cụ thể rồi dẫn đến dịch vụ, không cùng dùng một title/body thuê loa chung.
- Chưa tạo trang FAQ riêng, trang theo quận/phường hoặc các biến thể “kẹo kéo/loa kéo/loa di động” gần giống nhau. Các câu hỏi thuê hiện phục vụ ở `/#faq`; chỉ đề xuất URL mới khi có intent độc lập và nội dung đủ dùng.
- Các bài checklist/test/phụ kiện phải phân biệt rõ thời điểm và đầu ra; các bài chọn loa theo sự kiện phải có khác biệt thực tế. Chưa có phê duyệt thì chưa gộp, redirect hoặc canonical chéo.
- Không dùng ngày build để làm mới `dateModified`; không tự đổi slug chỉ để bỏ năm2024. Chỉ ghi ngày cập nhật sau một lần biên tập thực chất được kiểm chứng.
- Dùng thông số từ đúng manual/model và giá từ một nguồn catalog. Chủ đã xác nhận500k/ngày và FAQ lấy cùng giá catalog; keyword map không tự đặt giá cho model hoặc điều kiện thuê khác. Không dùng rating/counters, thời gian giao, giờ hoạt động hoặc tài khoản social làm chứng cứ khi chưa xác minh.
- Sau mỗi đợt đã duyệt: kiểm tra nội dung không còn đoạn template hướng dẫn SEO, một H1/title đúng intent, canonical tự tham chiếu, link crawlable, ảnh/alt đúng thực tế và không đụng business logic. Theo dõi GSC sau triển khai bởi chủ; không coi checklist kỹ thuật là bảo đảm thứ hạng.
