import type { GuideContent, GuideLocale } from '@/lib/product-guide'

// Server selects one locale. Owner-confirmed D2 model; operating facts checked against manufacturer manuals.
export const guideContent: Record<GuideLocale, GuideContent> = {
  vi: {
    checklist: [
      {
        id: 'prep-placement',
        label: 'Loa đứng vững trên mặt phẳng; các cổng khô ráo.',
      },
      {
        id: 'prep-power',
        label: 'Có dây nguồn đúng bộ được giao hoặc pin loa đủ dùng.',
      },
      {
        id: 'prep-phone',
        label: 'Điện thoại có Bluetooth; bắt đầu với âm lượng thấp.',
      },
      {
        id: 'prep-mic',
        label:
          'Karaoke với D2: kiểm tra 2 pin AA mỗi tay micro, pin đầu thu và jack MIC.',
      },
    ],
    topics: [
      {
        id: 'bluetooth',
        title: 'Kết nối Bluetooth với điện thoại',
        summary:
          'Dùng cho iPhone và Android. Bắt đầu với một điện thoại và một loa.',
        image: 'top',
        sources: ['manual', 'apple', 'android'],
        steps: [
          {
            id: 'bluetooth-power',
            title: 'Bật nguồn loa',
            body: 'Nhấn nút nguồn có biểu tượng nguồn ở phía trước bảng điều khiển trên đỉnh loa. Nếu pin cạn, dùng dây nguồn được giao theo mục sạc pin.',
          },
          {
            id: 'bluetooth-pair',
            title: 'Cho loa vào chế độ ghép nối',
            body: 'Nhấn nút có biểu tượng Bluetooth trên bảng điều khiển. Đèn Bluetooth nháy trắng nhanh là đang chờ ghép nối.',
          },
          {
            id: 'bluetooth-phone',
            title: 'Mở Bluetooth trên điện thoại',
            body: 'iPhone: Cài đặt → Bluetooth → bật. Android: mở cài đặt Bluetooth, chọn ghép nối thiết bị mới; tên menu có thể khác theo máy.',
          },
          {
            id: 'bluetooth-select',
            title: 'Chọn đúng tên loa',
            body: 'Trong danh sách thiết bị, chạm “JBL PartyBox Stage 320” và chấp nhận yêu cầu ghép nối nếu có. Nếu được hỏi mã PIN, tài liệu JBL ghi 0000.',
          },
          {
            id: 'bluetooth-test',
            title: 'Kiểm tra và phát nhạc',
            body: 'Điện thoại báo đã kết nối, đèn Bluetooth trên loa sáng trắng ổn định. Mở một bài nhạc, chọn loa làm đầu ra âm thanh và tăng âm lượng từ từ.',
          },
          {
            id: 'bluetooth-switch',
            title: 'Ngắt hoặc đổi điện thoại',
            body: 'Ngắt Bluetooth của điện thoại cũ hoặc tắt Bluetooth trên máy đó. Nhấn nút Bluetooth trên loa rồi ghép điện thoại mới. Không cần khôi phục cài đặt loa.',
          },
        ],
      },
      {
        id: 'microphone',
        title: 'Kết nối micro và hát karaoke',
        summary:
          'Bộ micro được ĐiĐi Audio xác nhận: Alpha Works D2. Tay micro dùng pin AA, đầu thu sạc USB-C và đưa tiếng hát vào cổng MIC của Stage 320.',
        image: 'connections',
        sources: ['manual', 'd2manual', 'd2product', 'feedback'],
        steps: [
          {
            id: 'microphone-identify',
            title: 'Chuẩn bị pin và sạc đầu thu D2',
            body: 'Mỗi tay micro cần 2 pin AA, lắp đúng chiều trong khoang pin. Đọc biểu tượng pin trên màn hình tay micro. Sạc đầu thu bằng cáp USB-C đi kèm và nguồn USB phù hợp; cáp này không sạc tay micro.',
          },
          {
            id: 'microphone-power',
            title: 'Kết nối đầu thu và bật micro',
            body: 'Hạ âm lượng micro trên loa và âm lượng micro trên đầu thu D2 trước khi cắm jack 6,35 mm của đầu thu vào MIC trên Stage 320. Nếu dùng MIC 2/GUITAR, chọn biểu tượng micro. Gạt nguồn đầu thu; nhấn nút nguồn tay micro để màn hình sáng.',
          },
          {
            id: 'microphone-input',
            title: 'Kiểm tra kênh A/B; đồng bộ hồng ngoại khi cần',
            body: 'Bật đầu thu và từng tay micro, kiểm tra đèn kênh A/B rồi nói thử. Nếu chưa nhận tín hiệu, đưa mắt hồng ngoại của tay micro gần mắt IR đầu thu, nhấn nhanh CH-A hoặc CH-B tương ứng và kiểm tra lại; thực hiện riêng từng tay. Không giữ CH khi chỉ cần đồng bộ, vì nhấn giữ kích hoạt quét tần số.',
          },
          {
            id: 'microphone-volume',
            title: 'Phát nhạc và tăng tiếng hát từ từ',
            body: 'Ghép điện thoại với JBL PartyBox Stage 320 theo mục Bluetooth, không chọn D2 cho cách phát nhạc này. Tăng âm lượng micro ở đầu thu và VOL trong cụm MICROPHONE trên loa từng ít một. Núm âm lượng chính của loa chỉnh nhạc; nếu rè, giảm mức micro/GAIN ngõ đang dùng.',
          },
          {
            id: 'microphone-effects',
            title: 'Chỉnh echo, tránh hú và tắt khi xong',
            body: 'Bắt đầu với ECHO trên D2 thấp, rồi chỉnh ECHO của Stage 320 nhẹ nhàng; tránh tăng echo ở cả hai nơi. Nếu hú, hạ VOL micro ngay và đưa micro xa mặt loa. Khi xong, giữ nút nguồn tay micro hơn 3 giây để tắt và gạt tắt đầu thu.',
          },
        ],
      },
      {
        id: 'controls',
        title: 'Hiểu các nút điều khiển loa',
        summary:
          'Ảnh bảng điều khiển thật ở ngay bên dưới. Không nhầm BASS của micro với BASS BOOST của nhạc.',
        image: 'top',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'controls-music',
            title: 'Âm lượng chính và phát nhạc',
            body: 'Núm lớn bên phải có biểu tượng Play: xoay để đổi âm lượng chính, nhấn một lần để phát/tạm dừng. Trong chế độ hỗ trợ, nhấn hai lần qua bài, ba lần về bài trước.',
          },
          {
            id: 'controls-lights',
            title: 'Đèn LED',
            body: 'Núm có biểu tượng ánh sáng ở bên trái: nhấn để bật/tắt hiệu ứng, xoay để đổi kiểu đèn. Không nhìn trực tiếp vào phần đèn khi đang sáng.',
          },
          {
            id: 'controls-bass',
            title: 'Bass của nhạc',
            body: 'Nhấn BASS BOOST để chuyển mức tăng bass hoặc tắt. Bắt đầu âm lượng vừa phải; núm BASS trong cụm MICROPHONE chỉ dành cho tiếng micro.',
          },
          {
            id: 'controls-effects',
            title: 'Các phím hiệu ứng âm thanh',
            body: 'Ba phím màu trong cụm hiệu ứng phát các hiệu ứng âm thanh đặc biệt. Chúng không thay thế nút nguồn, Bluetooth hay núm chỉnh âm lượng micro.',
          },
          {
            id: 'controls-app',
            title: 'Ứng dụng JBL PartyBox',
            body: 'Tìm ứng dụng JBL PartyBox do JBL/Harman phát hành trong App Store hoặc Google Play. Sau khi kết nối loa, dùng ứng dụng để tùy chỉnh theo các mục đang được hỗ trợ. Không tự cập nhật firmware loa thuê.',
          },
          {
            id: 'controls-battery',
            title: 'Xem pin còn lại',
            body: 'Nhấn một nút trên loa để hiện mức pin trên dải báo. Đèn báo pin nháy đỏ nhanh là pin yếu; chuyển sang mục sạc khi cần.',
          },
        ],
      },
      {
        id: 'auracast',
        title: 'Kết nối nhiều loa bằng Auracast',
        summary:
          'Bluetooth nối điện thoại với loa; Auracast nối các loa tương thích. Quy trình dưới đây dùng hai Stage 320.',
        image: 'top',
        sources: ['manual', 'quickstart', 'firmware'],
        steps: [
          {
            id: 'auracast-compatibility',
            title: 'Kiểm tra cặp loa trước',
            body: 'Bật cả hai Stage 320. Nếu dùng model khác, xác nhận tương thích và firmware với ĐiĐi Audio; không mặc định mọi loa JBL đều ghép được và không tự cập nhật loa thuê.',
          },
          {
            id: 'auracast-primary',
            title: 'Chọn loa nhận nhạc',
            body: 'Ghép điện thoại qua Bluetooth với một loa và phát thử ở âm lượng nhỏ. Loa đang nhận nhạc từ điện thoại là loa chính theo mặc định.',
          },
          {
            id: 'auracast-pair',
            title: 'Nhấn nút Auracast trên từng loa',
            body: 'Dùng nút có biểu tượng Auracast ở cạnh nút Bluetooth trên bảng điều khiển mỗi Stage 320. Nút Bluetooth dùng để ghép điện thoại, không phải nút ghép nhiều loa.',
          },
          {
            id: 'auracast-check-exit',
            title: 'Nghe thử và ngắt nhóm khi xong',
            body: 'Kiểm tra nhạc phát từ cả hai loa. Để ngắt, nhấn lại nút Auracast hoặc tắt một loa theo tài liệu JBL. Không mặc định tiếng micro sẽ truyền tới mọi loa; xác nhận nếu cần karaoke nhiều loa.',
          },
        ],
      },
      {
        id: 'charging',
        title: 'Sạc pin và sử dụng an toàn',
        summary:
          'Dùng dây nguồn được giao, giữ cổng khô và kiểm tra loa trước khi di chuyển.',
        image: 'back',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'charging-ac',
            title: 'Sạc qua cổng AC của loa',
            body: 'Khi dây và cổng đều khô, dùng dây nguồn được giao nối cổng AC phía sau với ổ điện phù hợp. USB trên loa không phải cổng sạc pin loa.',
          },
          {
            id: 'charging-indicator',
            title: 'Đọc đèn báo sạc',
            body: 'Đèn pin nháy trắng chậm khi đang sạc; cả dải sáng trắng khi đầy. Không tự tháo pin, mở máy hoặc thay dây/nguồn chưa được ĐiĐi Audio xác nhận.',
          },
          {
            id: 'charging-outdoor',
            title: 'Sử dụng ngoài trời',
            body: 'Stage 320 kháng nước bắn IPX4, không phải để ngâm nước. Giữ nắp bảo vệ đóng khi cần kháng nước; cổng sạc phải khô trước khi cắm AC. Tránh mưa tạt, nguồn nhiệt và vị trí chênh vênh.',
          },
          {
            id: 'charging-move',
            title: 'Bảo quản và di chuyển',
            body: 'Dừng nhạc, tắt micro và rút các dây trước khi di chuyển loa. Giữ loa đứng vững, không ngồi hay tựa lên loa; kiểm tra thiết bị và phụ kiện cùng ĐiĐi Audio khi giao trả.',
          },
        ],
      },
      {
        id: 'troubleshooting',
        title: 'Xử lý lỗi thường gặp',
        summary:
          'Bắt đầu từ kiểm tra đơn giản; nếu chưa được, dùng nút hỗ trợ ngay dưới bài. Không tự reset hoặc sửa loa thuê.',
        image: 'connections',
        sources: ['manual', 'firmware', 'feedback', 'd2manual'],
        steps: [],
        issues: [
          {
            id: 'not-found',
            title: 'Điện thoại không tìm thấy loa',
            cause:
              'Loa chưa ở chế độ ghép nối, đang kết nối điện thoại cũ hoặc chưa bật nguồn.',
            steps: [
              {
                id: 'issue-not-found-1',
                title: 'Điện thoại không tìm thấy loa · 1',
                body: 'Kiểm tra loa có nguồn và bật Bluetooth trên điện thoại.',
              },
              {
                id: 'issue-not-found-2',
                title: 'Điện thoại không tìm thấy loa · 2',
                body: 'Ngắt kết nối ở điện thoại cũ, rồi nhấn nút Bluetooth của loa.',
              },
              {
                id: 'issue-not-found-3',
                title: 'Điện thoại không tìm thấy loa · 3',
                body: 'Đưa điện thoại gần loa, làm mới danh sách và chọn đúng Stage 320.',
              },
            ],
          },
          {
            id: 'no-music',
            title: 'Bluetooth đã kết nối nhưng không có tiếng',
            cause:
              'Nhạc đang tạm dừng, đầu ra chưa đúng, âm lượng thấp hoặc nguồn USB/AUX đang được ưu tiên.',
            steps: [
              {
                id: 'issue-no-music-1',
                title: 'Bluetooth đã kết nối nhưng không có tiếng · 1',
                body: 'Mở nhạc và chọn Stage 320 làm thiết bị phát âm thanh trên điện thoại.',
              },
              {
                id: 'issue-no-music-2',
                title: 'Bluetooth đã kết nối nhưng không có tiếng · 2',
                body: 'Tăng âm lượng điện thoại và núm âm lượng chính của loa từ mức thấp.',
              },
              {
                id: 'issue-no-music-3',
                title: 'Bluetooth đã kết nối nhưng không có tiếng · 3',
                body: 'Dừng nguồn USB/AUX, rút dây/USB không dùng rồi phát lại Bluetooth.',
              },
            ],
          },
          {
            id: 'no-mic',
            title: 'Micro không phát ra âm thanh',
            cause:
              'Tay D2/đầu thu chưa bật, pin AA hoặc pin đầu thu yếu, mất đồng bộ A/B hoặc sai ngõ MIC.',
            steps: [
              {
                id: 'issue-no-mic-1',
                title: 'Micro không phát ra âm thanh · 1',
                body: 'Kiểm tra 2 pin AA đúng chiều mỗi tay micro, màn hình tay micro và nguồn/pin sạc của đầu thu D2.',
              },
              {
                id: 'issue-no-mic-2',
                title: 'Micro không phát ra âm thanh · 2',
                body: 'Hạ VOL trước khi kiểm tra jack đầu thu 6,35 mm cắm chắc vào MIC; nếu dùng MIC 2/GUITAR, chọn micro.',
              },
              {
                id: 'issue-no-mic-3',
                title: 'Micro không phát ra âm thanh · 3',
                body: 'Kiểm tra đèn A/B. Nếu chưa đồng bộ, đưa mắt IR lại gần và nhấn nhanh CH-A/CH-B tương ứng; tăng âm lượng micro D2 và VOL micro từ mức thấp. Nếu vẫn im, liên hệ hỗ trợ.',
              },
            ],
          },
          {
            id: 'feedback',
            title: 'Micro bị hú hoặc rè',
            cause: 'Micro quá gần/hướng vào loa hoặc mức VOL/GAIN quá cao.',
            steps: [
              {
                id: 'issue-feedback-1',
                title: 'Micro bị hú hoặc rè · 1',
                body: 'Hạ VOL micro ngay để dừng tiếng hú.',
              },
              {
                id: 'issue-feedback-2',
                title: 'Micro bị hú hoặc rè · 2',
                body: 'Đưa micro xa mặt loa, đổi vị trí người hát và không chĩa đầu micro vào loa.',
              },
              {
                id: 'issue-feedback-3',
                title: 'Micro bị hú hoặc rè · 3',
                body: 'Thử lại ở mức thấp; nếu rè, giảm GAIN của ngõ đang dùng và nhờ hỗ trợ nếu chưa ổn.',
              },
            ],
          },
          {
            id: 'dropouts',
            title: 'Âm thanh Bluetooth bị gián đoạn',
            cause:
              'Khoảng cách, vật cản, nhiễu hoặc nguồn nhạc trên điện thoại bị gián đoạn.',
            steps: [
              {
                id: 'issue-dropouts-1',
                title: 'Âm thanh Bluetooth bị gián đoạn · 1',
                body: 'Đưa điện thoại gần loa và bỏ vật cản giữa hai thiết bị.',
              },
              {
                id: 'issue-dropouts-2',
                title: 'Âm thanh Bluetooth bị gián đoạn · 2',
                body: 'Kiểm tra bài nhạc vẫn phát trên điện thoại; thử một tệp âm thanh sẵn có trên máy.',
              },
              {
                id: 'issue-dropouts-3',
                title: 'Âm thanh Bluetooth bị gián đoạn · 3',
                body: 'Ngắt rồi ghép lại Bluetooth; nếu còn lỗi, ghi lại tình huống và liên hệ ĐiĐi Audio.',
              },
            ],
          },
          {
            id: 'no-power',
            title: 'Loa không lên nguồn',
            cause:
              'Pin cạn, dây nguồn chưa cắm chắc hoặc nguồn điện có vấn đề.',
            steps: [
              {
                id: 'issue-no-power-1',
                title: 'Loa không lên nguồn · 1',
                body: 'Kiểm tra dây và cổng khô, không hư hỏng. Nếu ướt/hỏng, không cấp điện và gọi hỗ trợ.',
              },
              {
                id: 'issue-no-power-2',
                title: 'Loa không lên nguồn · 2',
                body: 'Dùng dây nguồn được giao, kiểm tra kết nối AC và nhấn nút nguồn của loa.',
              },
              {
                id: 'issue-no-power-3',
                title: 'Loa không lên nguồn · 3',
                body: 'Nếu vẫn không có phản hồi, dừng sử dụng và liên hệ ĐiĐi Audio; không tự mở máy hoặc thay pin.',
              },
            ],
          },
          {
            id: 'multi-speaker',
            title: 'Không ghép nối được nhiều loa',
            cause:
              'Nhầm nút Bluetooth/Auracast, loa chưa nhận nhạc hoặc cặp model/firmware chưa tương thích.',
            steps: [
              {
                id: 'issue-multi-speaker-1',
                title: 'Không ghép nối được nhiều loa · 1',
                body: 'Thử từng loa hoạt động riêng và xác nhận model từng loa.',
              },
              {
                id: 'issue-multi-speaker-2',
                title: 'Không ghép nối được nhiều loa · 2',
                body: 'Với hai Stage 320: ghép điện thoại với một loa, phát nhạc rồi nhấn Auracast trên cả hai.',
              },
              {
                id: 'issue-multi-speaker-3',
                title: 'Không ghép nối được nhiều loa · 3',
                body: 'Nếu model khác hoặc chưa ghép được, hỏi ĐiĐi Audio về tương thích; không tự cập nhật firmware/reset.',
              },
            ],
          },
        ],
      },
    ],
  },
  en: {
    checklist: [
      {
        id: 'prep-placement',
        label: 'Speaker upright on a stable surface; connectors dry.',
      },
      {
        id: 'prep-power',
        label:
          'The supplied power cord is available, or the speaker battery is charged.',
      },
      {
        id: 'prep-phone',
        label: 'Phone Bluetooth is available; start at low volume.',
      },
      {
        id: 'prep-mic',
        label:
          'D2 karaoke: check 2 AA batteries per handheld, receiver charge and MIC connection.',
      },
    ],
    topics: [
      {
        id: 'bluetooth',
        title: 'Connect your phone over Bluetooth',
        summary:
          'For iPhone and Android. Start with one phone and one speaker.',
        image: 'top',
        sources: ['manual', 'apple', 'android'],
        steps: [
          {
            id: 'bluetooth-power',
            title: 'Power on the speaker',
            body: 'Press the power-symbol button near the front of the top panel. If the battery is empty, use the supplied cord as described in Charging.',
          },
          {
            id: 'bluetooth-pair',
            title: 'Enter pairing mode',
            body: 'Press the Bluetooth-symbol button on the top panel. A rapidly flashing white Bluetooth indicator means pairing mode.',
          },
          {
            id: 'bluetooth-phone',
            title: 'Open phone Bluetooth settings',
            body: 'iPhone: Settings → Bluetooth → on. Android: open Bluetooth settings and choose Pair new device; menu names vary by phone.',
          },
          {
            id: 'bluetooth-select',
            title: 'Select the speaker',
            body: 'Tap “JBL PartyBox Stage 320” in the device list and accept pairing if prompted. If a PIN is requested, JBL specifies 0000.',
          },
          {
            id: 'bluetooth-test',
            title: 'Check and play music',
            body: 'The phone shows Connected and the speaker Bluetooth indicator stays white. Play a track, select the speaker as audio output and raise volume gradually.',
          },
          {
            id: 'bluetooth-switch',
            title: 'Disconnect or switch phones',
            body: 'Disconnect the old phone or turn its Bluetooth off. Press the speaker Bluetooth button and pair the new phone. A factory reset is unnecessary.',
          },
        ],
      },
      {
        id: 'microphone',
        title: 'Microphones and karaoke',
        summary:
          'ĐiĐi Audio confirmed the Alpha Works D2 kit. Handhelds use AA batteries; the USB-C rechargeable receiver feeds the Stage 320 MIC input.',
        image: 'connections',
        sources: ['manual', 'd2manual', 'd2product', 'feedback'],
        steps: [
          {
            id: 'microphone-identify',
            title: 'Prepare batteries and charge the D2 receiver',
            body: 'Each handheld takes 2 AA batteries; follow the compartment polarity marks. Read battery status on its display. Charge the receiver using the supplied USB-C cable and a suitable USB supply; this cable does not charge the handhelds.',
          },
          {
            id: 'microphone-power',
            title: 'Connect the receiver and power on',
            body: 'Lower speaker microphone volume and D2 microphone volume before inserting the receiver’s 6.35 mm plug into the Stage 320 MIC socket. If using MIC 2/GUITAR, select the microphone symbol. Switch on the receiver and press each handheld power button to light its display.',
          },
          {
            id: 'microphone-input',
            title: 'Check A/B channels; use infrared sync if needed',
            body: 'With the receiver and handhelds on, check channel A/B indicators and speak into each mic. If there is no link, align the handheld and receiver IR windows and short-press the corresponding CH-A or CH-B; check each handheld separately. Do not hold CH just to sync, as holding starts frequency scanning.',
          },
          {
            id: 'microphone-volume',
            title: 'Play music and raise vocals gradually',
            body: 'Pair your phone with JBL PartyBox Stage 320, not D2, for this music path. Increase receiver microphone volume and the speaker MICROPHONE VOL gradually. The main speaker knob controls music; reduce microphone level/relevant input GAIN if distorted.',
          },
          {
            id: 'microphone-effects',
            title: 'Set echo, prevent feedback and switch off',
            body: 'Start with low D2 ECHO and gently adjust Stage 320 ECHO; avoid adding strong echo at both stages. If feedback occurs, immediately lower microphone VOL and move it away from the speaker front. Hold handheld power for over 3 seconds to switch off, then turn the receiver off.',
          },
        ],
      },
      {
        id: 'controls',
        title: 'Understand the speaker controls',
        summary:
          'The actual top panel is shown below. Microphone BASS and music BASS BOOST are different controls.',
        image: 'top',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'controls-music',
            title: 'Main volume and music playback',
            body: 'The large right-hand Play knob turns main volume up/down; press once to play/pause. In supported modes, press twice for next track or three times for previous.',
          },
          {
            id: 'controls-lights',
            title: 'LED lights',
            body: 'Use the left light-symbol knob: press for effects on/off and rotate for patterns. Do not stare directly at illuminated light emitters.',
          },
          {
            id: 'controls-bass',
            title: 'Music bass',
            body: 'Press BASS BOOST to cycle boost levels or off. Start at moderate volume; BASS in the MICROPHONE section is for microphone audio only.',
          },
          {
            id: 'controls-effects',
            title: 'Sound-effect buttons',
            body: 'The three colored effect buttons trigger special sound effects. They are not power, Bluetooth or microphone volume controls.',
          },
          {
            id: 'controls-app',
            title: 'JBL PartyBox app',
            body: 'Find the JBL/Harman JBL PartyBox app in the App Store or Google Play. Connect the speaker and use the supported customization options. Do not update rental speaker firmware yourself.',
          },
          {
            id: 'controls-battery',
            title: 'Check remaining battery',
            body: 'Press a speaker button to show battery level on the indicator strip. A rapidly flashing red battery indicator means low battery; see Charging.',
          },
        ],
      },
      {
        id: 'auracast',
        title: 'Connect multiple speakers with Auracast',
        summary:
          'Bluetooth links your phone to a speaker; Auracast links compatible speakers. These steps use two Stage 320 units.',
        image: 'top',
        sources: ['manual', 'quickstart', 'firmware'],
        steps: [
          {
            id: 'auracast-compatibility',
            title: 'Check the speaker pair first',
            body: 'Power on both Stage 320 units. For another model, confirm compatibility and firmware with ĐiĐi Audio; not every JBL speaker pairs with every other model. Do not update rental firmware yourself.',
          },
          {
            id: 'auracast-primary',
            title: 'Choose the music source speaker',
            body: 'Pair the phone over Bluetooth with one speaker and play at low volume. The phone-connected speaker is the primary by default.',
          },
          {
            id: 'auracast-pair',
            title: 'Press Auracast on each speaker',
            body: 'Use the Auracast-symbol button beside Bluetooth on each Stage 320 top panel. The Bluetooth button pairs a phone, not the speaker group.',
          },
          {
            id: 'auracast-check-exit',
            title: 'Listen and disconnect when finished',
            body: 'Check that both speakers play music. Press Auracast again or turn off a speaker to disconnect, as JBL instructs. Do not assume microphones reach every speaker; confirm a multi-speaker karaoke setup.',
          },
        ],
      },
      {
        id: 'charging',
        title: 'Charging and safe use',
        summary:
          'Use the supplied power cord, keep connectors dry and check the speaker before moving it.',
        image: 'back',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'charging-ac',
            title: 'Charge using the speaker AC input',
            body: 'With cord and connectors dry, connect the supplied cord from the rear AC input to a suitable outlet. The speaker USB socket is not its battery charging input.',
          },
          {
            id: 'charging-indicator',
            title: 'Read the charging indicator',
            body: 'Slow white flashing indicates charging; the full strip stays white when charged. Do not open the speaker, remove its battery or substitute unconfirmed power equipment.',
          },
          {
            id: 'charging-outdoor',
            title: 'Use outdoors carefully',
            body: 'Stage 320 has IPX4 splash resistance, not submersion protection. Keep covers closed for splash resistance and charging connectors dry before AC use. Avoid driving rain, heat and unstable positions.',
          },
          {
            id: 'charging-move',
            title: 'Store and move with care',
            body: 'Stop music, switch microphones off and disconnect cords before moving. Keep the speaker upright and stable; never sit or lean on it. Check equipment and accessories with ĐiĐi Audio at return.',
          },
        ],
      },
      {
        id: 'troubleshooting',
        title: 'Troubleshoot common problems',
        summary:
          'Start with simple checks; contact support below if needed. Do not reset or repair the rental speaker yourself.',
        image: 'connections',
        sources: ['manual', 'firmware', 'feedback', 'd2manual'],
        steps: [],
        issues: [
          {
            id: 'not-found',
            title: 'Phone cannot find the speaker',
            cause:
              'Pairing mode is off, another phone is connected, or the speaker is off.',
            steps: [
              {
                id: 'issue-not-found-1',
                title: 'Phone cannot find the speaker · 1',
                body: 'Check speaker power and enable phone Bluetooth.',
              },
              {
                id: 'issue-not-found-2',
                title: 'Phone cannot find the speaker · 2',
                body: 'Disconnect the old phone, then press speaker Bluetooth.',
              },
              {
                id: 'issue-not-found-3',
                title: 'Phone cannot find the speaker · 3',
                body: 'Move the phone closer, refresh the list and select Stage 320.',
              },
            ],
          },
          {
            id: 'no-music',
            title: 'Bluetooth connected but no music',
            cause:
              'Playback is paused, output/volume is wrong, or USB/AUX has taken over.',
            steps: [
              {
                id: 'issue-no-music-1',
                title: 'Bluetooth connected but no music · 1',
                body: 'Start music and select Stage 320 as the phone audio output.',
              },
              {
                id: 'issue-no-music-2',
                title: 'Bluetooth connected but no music · 2',
                body: 'Gradually raise phone and speaker main volume from low levels.',
              },
              {
                id: 'issue-no-music-3',
                title: 'Bluetooth connected but no music · 3',
                body: 'Stop USB/AUX playback, remove unused inputs and retry Bluetooth.',
              },
            ],
          },
          {
            id: 'no-mic',
            title: 'Microphone has no sound',
            cause:
              'D2 handheld/receiver power, weak AA or receiver battery, lost A/B sync, or an incorrect MIC input.',
            steps: [
              {
                id: 'issue-no-mic-1',
                title: 'Microphone has no sound · 1',
                body: 'Check 2 correctly oriented AA batteries per handheld, handheld displays and receiver power/charge.',
              },
              {
                id: 'issue-no-mic-2',
                title: 'Microphone has no sound · 2',
                body: 'Lower VOL before checking the 6.35 mm receiver plug is secure in MIC; select microphone mode if using MIC 2/GUITAR.',
              },
              {
                id: 'issue-no-mic-3',
                title: 'Microphone has no sound · 3',
                body: 'Check A/B indicators. If needed, align IR windows and short-press the matching CH-A/CH-B, then gradually raise D2 microphone volume and microphone VOL. Contact support if still silent.',
              },
            ],
          },
          {
            id: 'feedback',
            title: 'Microphone feedback or distortion',
            cause:
              'Microphone too close/aimed at speaker or excessive VOL/GAIN.',
            steps: [
              {
                id: 'issue-feedback-1',
                title: 'Microphone feedback or distortion · 1',
                body: 'Lower microphone VOL immediately to stop feedback.',
              },
              {
                id: 'issue-feedback-2',
                title: 'Microphone feedback or distortion · 2',
                body: 'Move the microphone away from the speaker front and change singer position.',
              },
              {
                id: 'issue-feedback-3',
                title: 'Microphone feedback or distortion · 3',
                body: 'Retry quietly; reduce the used input GAIN if distorted and seek help if unresolved.',
              },
            ],
          },
          {
            id: 'dropouts',
            title: 'Bluetooth audio drops out',
            cause:
              'Distance, obstacles, interference or interrupted phone playback.',
            steps: [
              {
                id: 'issue-dropouts-1',
                title: 'Bluetooth audio drops out · 1',
                body: 'Move the phone closer and remove obstacles between devices.',
              },
              {
                id: 'issue-dropouts-2',
                title: 'Bluetooth audio drops out · 2',
                body: 'Check phone playback and try an audio file already on the phone.',
              },
              {
                id: 'issue-dropouts-3',
                title: 'Bluetooth audio drops out · 3',
                body: 'Disconnect/reconnect Bluetooth; if it persists, note the situation and contact ĐiĐi Audio.',
              },
            ],
          },
          {
            id: 'no-power',
            title: 'Speaker will not power on',
            cause: 'Empty battery, loose power cable or power supply problem.',
            steps: [
              {
                id: 'issue-no-power-1',
                title: 'Speaker will not power on · 1',
                body: 'Check cord/connectors are dry and undamaged. If wet/damaged, do not power it and call support.',
              },
              {
                id: 'issue-no-power-2',
                title: 'Speaker will not power on · 2',
                body: 'Use the supplied cord, check the AC connection and press speaker power.',
              },
              {
                id: 'issue-no-power-3',
                title: 'Speaker will not power on · 3',
                body: 'If there is still no response, stop and contact ĐiĐi Audio; do not open the speaker or change its battery.',
              },
            ],
          },
          {
            id: 'multi-speaker',
            title: 'Multiple speakers will not connect',
            cause:
              'Bluetooth/Auracast mix-up, no source music or model/firmware compatibility.',
            steps: [
              {
                id: 'issue-multi-speaker-1',
                title: 'Multiple speakers will not connect · 1',
                body: 'Test each speaker independently and confirm its model.',
              },
              {
                id: 'issue-multi-speaker-2',
                title: 'Multiple speakers will not connect · 2',
                body: 'For two Stage 320 units: pair the phone with one, start music, then press Auracast on both.',
              },
              {
                id: 'issue-multi-speaker-3',
                title: 'Multiple speakers will not connect · 3',
                body: 'For other models or continued failure, ask ĐiĐi Audio about compatibility; do not update firmware/reset.',
              },
            ],
          },
        ],
      },
    ],
  },
  ko: {
    checklist: [
      {
        id: 'prep-placement',
        label: '스피커가 평평한 곳에 안정적으로 서 있고 단자가 건조합니다.',
      },
      {
        id: 'prep-power',
        label: '제공된 전원선이 있거나 스피커 배터리가 충전되어 있습니다.',
      },
      {
        id: 'prep-phone',
        label: '휴대폰 블루투스를 사용할 수 있으며 낮은 음량으로 시작합니다.',
      },
      {
        id: 'prep-mic',
        label:
          'D2 노래방: 마이크마다 AA 배터리 2개, 수신기 충전 및 MIC 연결을 확인하세요.',
      },
    ],
    topics: [
      {
        id: 'bluetooth',
        title: '휴대폰 블루투스 연결',
        summary:
          'iPhone과 Android용입니다. 휴대폰 한 대와 스피커 한 대로 시작하세요.',
        image: 'top',
        sources: ['manual', 'apple', 'android'],
        steps: [
          {
            id: 'bluetooth-power',
            title: '스피커 전원 켜기',
            body: '상단 패널 앞쪽의 전원 기호 버튼을 누르세요. 배터리가 방전되었다면 충전 항목에 따라 제공된 전원선을 사용하세요.',
          },
          {
            id: 'bluetooth-pair',
            title: '페어링 모드 시작',
            body: '상단 패널의 Bluetooth 기호 버튼을 누르세요. Bluetooth 표시등이 빠르게 흰색으로 깜박이면 페어링 대기 중입니다.',
          },
          {
            id: 'bluetooth-phone',
            title: '휴대폰 블루투스 설정 열기',
            body: 'iPhone: 설정 → Bluetooth → 켜기. Android: 블루투스 설정에서 새 기기 페어링을 선택하세요. 기종에 따라 메뉴 이름이 다릅니다.',
          },
          {
            id: 'bluetooth-select',
            title: '스피커 선택',
            body: '기기 목록에서 “JBL PartyBox Stage 320”을 선택하고 요청 시 페어링을 승인하세요. PIN을 요구하면 JBL 문서의 0000을 입력하세요.',
          },
          {
            id: 'bluetooth-test',
            title: '연결 확인 후 음악 재생',
            body: '휴대폰에 연결됨이 표시되고 스피커 Bluetooth 등이 흰색으로 켜져 있습니다. 음악을 재생하고 출력 기기를 스피커로 선택한 뒤 음량을 서서히 높이세요.',
          },
          {
            id: 'bluetooth-switch',
            title: '연결 해제 또는 휴대폰 변경',
            body: '이전 휴대폰의 연결을 해제하거나 블루투스를 끄세요. 스피커 Bluetooth 버튼을 누른 뒤 새 휴대폰을 페어링하세요. 초기화는 필요하지 않습니다.',
          },
        ],
      },
      {
        id: 'microphone',
        title: '마이크 연결 및 노래방',
        summary:
          'ĐiĐi Audio가 확인한 구성은 Alpha Works D2입니다. 핸드 마이크는 AA 배터리를 사용하고 USB-C 충전 수신기는 Stage 320 MIC 입력에 연결합니다.',
        image: 'connections',
        sources: ['manual', 'd2manual', 'd2product', 'feedback'],
        steps: [
          {
            id: 'microphone-identify',
            title: '배터리 준비 및 D2 수신기 충전',
            body: '각 핸드 마이크에 AA 배터리 2개를 극성 표시에 맞게 넣으세요. 화면에서 배터리 상태를 확인하세요. 수신기는 제공된 USB-C 케이블과 적합한 USB 전원으로 충전합니다. 이 케이블로 핸드 마이크를 충전하지 않습니다.',
          },
          {
            id: 'microphone-power',
            title: '수신기 연결 및 전원 켜기',
            body: '연결 전 스피커 마이크 음량과 D2 마이크 음량을 낮추세요. 수신기의 6.35mm 플러그를 Stage 320 MIC에 연결하고 MIC 2/GUITAR 사용 시 마이크 기호를 선택하세요. 수신기 전원을 켜고 각 마이크 전원 버튼을 눌러 화면이 켜지는지 확인하세요.',
          },
          {
            id: 'microphone-input',
            title: 'A/B 확인 및 필요 시 적외선 동기화',
            body: '수신기와 마이크를 켠 뒤 A/B 표시등과 각 마이크 소리를 확인하세요. 연결되지 않았다면 마이크와 수신기의 IR 창을 가까이 맞추고 해당 CH-A 또는 CH-B를 짧게 누르세요. 각 마이크를 따로 확인하세요. CH 길게 누르기는 주파수 검색이므로 단순 동기화 때는 길게 누르지 마세요.',
          },
          {
            id: 'microphone-volume',
            title: '음악 재생 및 보컬 음량 조절',
            body: '이 음악 경로에서는 휴대폰을 D2가 아닌 JBL PartyBox Stage 320에 연결하세요. 수신기 마이크 음량과 스피커 MICROPHONE VOL을 조금씩 높이세요. 메인 노브는 음악 음량용입니다. 왜곡되면 마이크 레벨 또는 해당 입력 GAIN을 낮추세요.',
          },
          {
            id: 'microphone-effects',
            title: '에코, 하울링 및 전원 끄기',
            body: 'D2 ECHO를 낮게 두고 Stage 320 ECHO를 조금씩 조절하세요. 두 곳에서 에코를 동시에 크게 올리지 마세요. 하울링 시 즉시 마이크 VOL을 낮추고 스피커 앞면에서 멀리 이동하세요. 종료 시 마이크 전원 버튼을 3초 넘게 누르고 수신기도 끄세요.',
          },
        ],
      },
      {
        id: 'controls',
        title: '스피커 조작 버튼 이해',
        summary:
          '아래는 실제 상단 패널입니다. 마이크 BASS와 음악 BASS BOOST는 서로 다른 조절부입니다.',
        image: 'top',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'controls-music',
            title: '메인 음량 및 음악 재생',
            body: '오른쪽 큰 Play 노브를 돌려 메인 음량을 조절하고 한 번 눌러 재생/일시정지하세요. 지원 모드에서는 두 번 눌러 다음 곡, 세 번 눌러 이전 곡으로 이동합니다.',
          },
          {
            id: 'controls-lights',
            title: 'LED 조명',
            body: '왼쪽 조명 기호 노브를 눌러 효과를 켜고 끄며 돌려 패턴을 바꾸세요. 켜진 발광부를 직접 응시하지 마세요.',
          },
          {
            id: 'controls-bass',
            title: '음악 베이스',
            body: 'BASS BOOST를 눌러 강조 단계 또는 끄기를 선택하세요. 적당한 음량부터 시작하세요. MICROPHONE 구역의 BASS는 마이크 소리 전용입니다.',
          },
          {
            id: 'controls-effects',
            title: '음향 효과 버튼',
            body: '색상이 있는 세 효과 버튼은 특수 음향 효과를 실행합니다. 전원, Bluetooth 또는 마이크 음량 버튼이 아닙니다.',
          },
          {
            id: 'controls-app',
            title: 'JBL PartyBox 앱',
            body: 'App Store 또는 Google Play에서 JBL/Harman의 JBL PartyBox 앱을 찾으세요. 스피커 연결 후 지원되는 항목을 설정하세요. 대여 스피커 펌웨어를 직접 업데이트하지 마세요.',
          },
          {
            id: 'controls-battery',
            title: '배터리 잔량 확인',
            body: '스피커 버튼을 눌러 표시줄에서 배터리 잔량을 확인하세요. 배터리 표시등이 빠르게 빨간색으로 깜박이면 잔량이 부족합니다. 충전 항목을 참고하세요.',
          },
        ],
      },
      {
        id: 'auracast',
        title: 'Auracast로 여러 스피커 연결',
        summary:
          'Bluetooth는 휴대폰과 스피커, Auracast는 호환 스피커 사이를 연결합니다. 아래 절차는 Stage 320 두 대 기준입니다.',
        image: 'top',
        sources: ['manual', 'quickstart', 'firmware'],
        steps: [
          {
            id: 'auracast-compatibility',
            title: '먼저 스피커 조합 확인',
            body: 'Stage 320 두 대의 전원을 켜세요. 다른 모델은 ĐiĐi Audio와 호환성 및 펌웨어를 확인하세요. 모든 JBL 스피커가 서로 연결되는 것은 아닙니다. 대여 장비를 직접 업데이트하지 마세요.',
          },
          {
            id: 'auracast-primary',
            title: '음악 수신 스피커 선택',
            body: '휴대폰을 한 스피커에 Bluetooth로 연결하고 낮은 음량으로 재생하세요. 휴대폰에 연결된 스피커가 기본 주 스피커입니다.',
          },
          {
            id: 'auracast-pair',
            title: '각 스피커의 Auracast 누르기',
            body: '각 Stage 320 상단 패널에서 Bluetooth 옆의 Auracast 기호 버튼을 누르세요. Bluetooth 버튼은 휴대폰 페어링용이며 스피커 그룹용이 아닙니다.',
          },
          {
            id: 'auracast-check-exit',
            title: '재생 확인 및 연결 해제',
            body: '양쪽에서 음악이 나오는지 확인하세요. JBL 안내에 따라 Auracast를 다시 누르거나 한 스피커를 꺼서 해제하세요. 마이크 소리가 모든 스피커로 전송된다고 가정하지 말고 별도로 확인하세요.',
          },
        ],
      },
      {
        id: 'charging',
        title: '충전 및 안전한 사용',
        summary:
          '제공된 전원선을 사용하고 단자를 건조하게 유지하며 이동 전 장비를 확인하세요.',
        image: 'back',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'charging-ac',
            title: '스피커 AC 입력으로 충전',
            body: '전원선과 단자가 건조한 상태에서 제공된 선을 후면 AC 입력과 적합한 콘센트에 연결하세요. USB 단자는 스피커 배터리 충전 입력이 아닙니다.',
          },
          {
            id: 'charging-indicator',
            title: '충전 표시 확인',
            body: '천천히 흰색으로 깜박이면 충전 중이며 표시줄 전체가 흰색으로 켜지면 완충입니다. 스피커를 열거나 배터리를 빼거나 확인되지 않은 전원 장비로 교체하지 마세요.',
          },
          {
            id: 'charging-outdoor',
            title: '야외 사용 시 주의',
            body: 'Stage 320은 IPX4 생활방수이며 물에 담그는 용도가 아닙니다. 방수를 위해 덮개를 닫고 AC 연결 전 충전 단자를 건조하게 유지하세요. 강한 비, 열 및 불안정한 장소를 피하세요.',
          },
          {
            id: 'charging-move',
            title: '보관 및 이동',
            body: '음악을 멈추고 마이크를 끄며 이동 전 모든 선을 분리하세요. 스피커를 안정적으로 세우고 위에 앉거나 기대지 마세요. 반납 시 ĐiĐi Audio와 장비 및 액세서리를 확인하세요.',
          },
        ],
      },
      {
        id: 'troubleshooting',
        title: '자주 발생하는 문제 해결',
        summary:
          '간단한 확인부터 시작하고 해결되지 않으면 아래 지원 버튼을 사용하세요. 대여 스피커를 직접 초기화하거나 수리하지 마세요.',
        image: 'connections',
        sources: ['manual', 'firmware', 'feedback', 'd2manual'],
        steps: [],
        issues: [
          {
            id: 'not-found',
            title: '휴대폰에서 스피커가 안 보임',
            cause:
              '페어링 모드가 아니거나 이전 휴대폰에 연결되어 있거나 전원이 꺼져 있습니다.',
            steps: [
              {
                id: 'issue-not-found-1',
                title: '휴대폰에서 스피커가 안 보임 · 1',
                body: '스피커 전원을 확인하고 휴대폰 Bluetooth를 켜세요.',
              },
              {
                id: 'issue-not-found-2',
                title: '휴대폰에서 스피커가 안 보임 · 2',
                body: '이전 휴대폰 연결을 해제한 뒤 스피커 Bluetooth를 누르세요.',
              },
              {
                id: 'issue-not-found-3',
                title: '휴대폰에서 스피커가 안 보임 · 3',
                body: '휴대폰을 가까이 가져가 목록을 새로고침하고 Stage 320을 선택하세요.',
              },
            ],
          },
          {
            id: 'no-music',
            title: 'Bluetooth 연결 후 소리가 안 남',
            cause:
              '재생이 멈췄거나 출력/음량 설정이 잘못되었거나 USB/AUX가 선택되었습니다.',
            steps: [
              {
                id: 'issue-no-music-1',
                title: 'Bluetooth 연결 후 소리가 안 남 · 1',
                body: '음악을 재생하고 휴대폰 오디오 출력을 Stage 320으로 선택하세요.',
              },
              {
                id: 'issue-no-music-2',
                title: 'Bluetooth 연결 후 소리가 안 남 · 2',
                body: '낮은 수준부터 휴대폰과 스피커 메인 음량을 서서히 높이세요.',
              },
              {
                id: 'issue-no-music-3',
                title: 'Bluetooth 연결 후 소리가 안 남 · 3',
                body: 'USB/AUX 재생을 멈추고 사용하지 않는 입력을 분리한 뒤 Bluetooth를 다시 재생하세요.',
              },
            ],
          },
          {
            id: 'no-mic',
            title: '마이크 소리가 안 남',
            cause:
              'D2 마이크/수신기 전원 꺼짐, AA 또는 수신기 배터리 부족, A/B 동기화 해제 또는 잘못된 MIC 입력.',
            steps: [
              {
                id: 'issue-no-mic-1',
                title: '마이크 소리가 안 남 · 1',
                body: '각 마이크 AA 배터리 2개의 극성, 화면 및 수신기 전원/충전을 확인하세요.',
              },
              {
                id: 'issue-no-mic-2',
                title: '마이크 소리가 안 남 · 2',
                body: 'VOL을 낮춘 뒤 수신기 6.35mm 플러그의 MIC 연결을 확인하세요. MIC 2/GUITAR 사용 시 마이크 모드를 선택하세요.',
              },
              {
                id: 'issue-no-mic-3',
                title: '마이크 소리가 안 남 · 3',
                body: 'A/B 등을 확인하세요. 필요 시 IR 창을 맞추고 해당 CH-A/CH-B를 짧게 누른 뒤 D2 마이크 음량과 마이크 VOL을 서서히 높이세요. 소리가 없으면 문의하세요.',
              },
            ],
          },
          {
            id: 'feedback',
            title: '마이크 하울링 또는 왜곡',
            cause:
              '마이크가 스피커에 너무 가깝거나 향하고 있거나 VOL/GAIN이 높습니다.',
            steps: [
              {
                id: 'issue-feedback-1',
                title: '마이크 하울링 또는 왜곡 · 1',
                body: '즉시 마이크 VOL을 낮추어 하울링을 멈추세요.',
              },
              {
                id: 'issue-feedback-2',
                title: '마이크 하울링 또는 왜곡 · 2',
                body: '마이크를 스피커 앞면에서 멀리하고 노래하는 위치를 바꾸세요.',
              },
              {
                id: 'issue-feedback-3',
                title: '마이크 하울링 또는 왜곡 · 3',
                body: '낮은 음량으로 다시 시도하고 왜곡 시 해당 입력 GAIN을 낮추세요. 해결되지 않으면 문의하세요.',
              },
            ],
          },
          {
            id: 'dropouts',
            title: 'Bluetooth 소리가 끊김',
            cause:
              '거리, 장애물, 간섭 또는 휴대폰 재생 중단이 원인일 수 있습니다.',
            steps: [
              {
                id: 'issue-dropouts-1',
                title: 'Bluetooth 소리가 끊김 · 1',
                body: '휴대폰을 가까이 가져가고 사이의 장애물을 치우세요.',
              },
              {
                id: 'issue-dropouts-2',
                title: 'Bluetooth 소리가 끊김 · 2',
                body: '휴대폰 재생 상태를 확인하고 기기에 저장된 오디오 파일로 시험하세요.',
              },
              {
                id: 'issue-dropouts-3',
                title: 'Bluetooth 소리가 끊김 · 3',
                body: 'Bluetooth 연결을 해제 후 다시 연결하세요. 계속되면 상황을 기록하고 ĐiĐi Audio에 문의하세요.',
              },
            ],
          },
          {
            id: 'no-power',
            title: '스피커 전원이 안 켜짐',
            cause:
              '배터리 방전, 느슨한 전원선 또는 전원 공급 문제일 수 있습니다.',
            steps: [
              {
                id: 'issue-no-power-1',
                title: '스피커 전원이 안 켜짐 · 1',
                body: '전원선과 단자가 건조하고 손상되지 않았는지 확인하세요. 젖었거나 손상되었다면 전원을 연결하지 말고 문의하세요.',
              },
              {
                id: 'issue-no-power-2',
                title: '스피커 전원이 안 켜짐 · 2',
                body: '제공된 전원선과 AC 연결을 확인한 뒤 전원 버튼을 누르세요.',
              },
              {
                id: 'issue-no-power-3',
                title: '스피커 전원이 안 켜짐 · 3',
                body: '반응이 없으면 사용을 중단하고 ĐiĐi Audio에 문의하세요. 직접 열거나 배터리를 교체하지 마세요.',
              },
            ],
          },
          {
            id: 'multi-speaker',
            title: '여러 스피커 연결 실패',
            cause:
              'Bluetooth/Auracast 버튼 혼동, 음악 입력 부재 또는 모델/펌웨어 호환성 문제입니다.',
            steps: [
              {
                id: 'issue-multi-speaker-1',
                title: '여러 스피커 연결 실패 · 1',
                body: '각 스피커가 개별 작동하는지 시험하고 모델을 확인하세요.',
              },
              {
                id: 'issue-multi-speaker-2',
                title: '여러 스피커 연결 실패 · 2',
                body: 'Stage 320 두 대라면 한 대에 휴대폰을 연결하고 음악을 재생한 뒤 양쪽 Auracast를 누르세요.',
              },
              {
                id: 'issue-multi-speaker-3',
                title: '여러 스피커 연결 실패 · 3',
                body: '다른 모델이거나 계속 실패하면 ĐiĐi Audio에 호환성을 문의하세요. 직접 업데이트/초기화하지 마세요.',
              },
            ],
          },
        ],
      },
    ],
  },
  ru: {
    checklist: [
      {
        id: 'prep-placement',
        label: 'Колонка устойчиво стоит на ровной поверхности, разъёмы сухие.',
      },
      {
        id: 'prep-power',
        label: 'Есть выданный кабель питания или заряженная батарея колонки.',
      },
      {
        id: 'prep-phone',
        label: 'Bluetooth телефона доступен; начинаем с небольшой громкости.',
      },
      {
        id: 'prep-mic',
        label:
          'Караоке D2: проверьте 2 AA в каждом микрофоне, заряд приёмника и MIC-подключение.',
      },
    ],
    topics: [
      {
        id: 'bluetooth',
        title: 'Подключение телефона по Bluetooth',
        summary:
          'Для iPhone и Android. Начните с одного телефона и одной колонки.',
        image: 'top',
        sources: ['manual', 'apple', 'android'],
        steps: [
          {
            id: 'bluetooth-power',
            title: 'Включите колонку',
            body: 'Нажмите кнопку питания в передней части верхней панели. Если батарея разряжена, используйте выданный кабель по разделу зарядки.',
          },
          {
            id: 'bluetooth-pair',
            title: 'Включите режим сопряжения',
            body: 'Нажмите кнопку с символом Bluetooth. Быстро мигающий белый индикатор Bluetooth означает режим сопряжения.',
          },
          {
            id: 'bluetooth-phone',
            title: 'Откройте Bluetooth телефона',
            body: 'iPhone: Настройки → Bluetooth → включить. Android: откройте настройки Bluetooth и выберите новое устройство; названия меню отличаются.',
          },
          {
            id: 'bluetooth-select',
            title: 'Выберите колонку',
            body: 'Нажмите “JBL PartyBox Stage 320” и подтвердите сопряжение. Если запрошен PIN, JBL указывает 0000.',
          },
          {
            id: 'bluetooth-test',
            title: 'Проверьте и включите музыку',
            body: 'Телефон показывает подключение, индикатор Bluetooth горит белым. Включите трек, выберите колонку как выход и постепенно прибавьте громкость.',
          },
          {
            id: 'bluetooth-switch',
            title: 'Отключите или смените телефон',
            body: 'Отключите старый телефон либо его Bluetooth. Нажмите Bluetooth на колонке и подключите новый телефон. Сброс настроек не нужен.',
          },
        ],
      },
      {
        id: 'microphone',
        title: 'Микрофоны и караоке',
        summary:
          'ĐiĐi Audio подтвердил комплект Alpha Works D2. Ручные микрофоны питаются от AA, приёмник заряжается через USB-C и подключается к MIC Stage 320.',
        image: 'connections',
        sources: ['manual', 'd2manual', 'd2product', 'feedback'],
        steps: [
          {
            id: 'microphone-identify',
            title: 'Подготовьте батарейки и зарядите приёмник',
            body: 'Каждый микрофон использует 2 AA по обозначениям полярности. Заряд виден на его дисплее. Заряжайте приёмник комплектным USB-C кабелем от подходящего USB-питания; этот кабель не заряжает ручные микрофоны.',
          },
          {
            id: 'microphone-power',
            title: 'Подключите приёмник и включите комплект',
            body: 'Убавьте громкость микрофона колонки и громкость микрофонов D2 до подключения штекера 6,35 мм к MIC Stage 320. Для MIC 2/GUITAR выберите значок микрофона. Включите приёмник переключателем, нажмите питание микрофонов и проверьте дисплеи.',
          },
          {
            id: 'microphone-input',
            title: 'Проверьте A/B и при необходимости ИК-синхронизацию',
            body: 'При включённых устройствах проверьте индикаторы A/B и речь в каждый микрофон. Если связи нет, совместите ИК-окна микрофона и приёмника, кратко нажмите соответствующую CH-A или CH-B. Проверяйте микрофоны отдельно. Не удерживайте CH для простой синхронизации: удержание запускает поиск частоты.',
          },
          {
            id: 'microphone-volume',
            title: 'Запустите музыку и прибавьте голос',
            body: 'Для этой схемы подключите телефон к JBL PartyBox Stage 320, а не D2. Понемногу увеличивайте громкость микрофонов приёмника и VOL секции MICROPHONE колонки. Основной регулятор меняет музыку; при искажениях уменьшите микрофонный уровень/GAIN нужного входа.',
          },
          {
            id: 'microphone-effects',
            title: 'Эхо, обратная связь и выключение',
            body: 'Начните с малого ECHO на D2 и мягко регулируйте ECHO Stage 320; не усиливайте эхо одновременно в обоих местах. При свисте сразу убавьте VOL микрофона и отнесите его от колонки. Для выключения удерживайте питание микрофона более 3 секунд, затем выключите приёмник.',
          },
        ],
      },
      {
        id: 'controls',
        title: 'Кнопки и регуляторы колонки',
        summary:
          'Ниже показана настоящая верхняя панель. BASS микрофона и BASS BOOST музыки — разные регуляторы.',
        image: 'top',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'controls-music',
            title: 'Основная громкость и музыка',
            body: 'Большой правый регулятор Play меняет общую громкость; одно нажатие запускает/приостанавливает музыку. В поддерживаемых режимах два нажатия — следующий трек, три — предыдущий.',
          },
          {
            id: 'controls-lights',
            title: 'Подсветка LED',
            body: 'Левый регулятор со значком света: нажмите для включения/выключения эффектов, поворачивайте для смены рисунка. Не смотрите прямо на светящиеся элементы.',
          },
          {
            id: 'controls-bass',
            title: 'Бас музыки',
            body: 'Нажимайте BASS BOOST для выбора усиления или отключения. Начинайте с умеренной громкости; BASS в секции MICROPHONE относится только к микрофону.',
          },
          {
            id: 'controls-effects',
            title: 'Кнопки звуковых эффектов',
            body: 'Три цветные кнопки запускают специальные звуковые эффекты. Они не заменяют питание, Bluetooth или громкость микрофона.',
          },
          {
            id: 'controls-app',
            title: 'Приложение JBL PartyBox',
            body: 'Найдите JBL PartyBox от JBL/Harman в App Store или Google Play. Подключите колонку и используйте поддерживаемые настройки. Не обновляйте прошивку арендованной колонки самостоятельно.',
          },
          {
            id: 'controls-battery',
            title: 'Остаток заряда',
            body: 'Нажмите кнопку колонки, чтобы увидеть заряд на индикаторной полоске. Быстрое красное мигание означает низкий заряд; см. раздел зарядки.',
          },
        ],
      },
      {
        id: 'auracast',
        title: 'Соединение нескольких колонок Auracast',
        summary:
          'Bluetooth соединяет телефон с колонкой, Auracast — совместимые колонки. Шаги ниже рассчитаны на две Stage 320.',
        image: 'top',
        sources: ['manual', 'quickstart', 'firmware'],
        steps: [
          {
            id: 'auracast-compatibility',
            title: 'Сначала проверьте пару колонок',
            body: 'Включите обе Stage 320. Для другой модели уточните совместимость и прошивку у ĐiĐi Audio; не все JBL соединяются друг с другом. Не обновляйте арендуемую технику сами.',
          },
          {
            id: 'auracast-primary',
            title: 'Выберите колонку-источник',
            body: 'Подключите телефон по Bluetooth к одной колонке и включите музыку негромко. Эта колонка по умолчанию основная.',
          },
          {
            id: 'auracast-pair',
            title: 'Нажмите Auracast на каждой колонке',
            body: 'Используйте кнопку Auracast рядом с Bluetooth на верхней панели каждой Stage 320. Bluetooth подключает телефон, а не группу колонок.',
          },
          {
            id: 'auracast-check-exit',
            title: 'Проверьте звук и отключите группу',
            body: 'Проверьте музыку из обеих колонок. Для отключения нажмите Auracast ещё раз или выключите колонку согласно JBL. Не считайте передачу микрофона на все колонки гарантированной; уточните караоке-конфигурацию.',
          },
        ],
      },
      {
        id: 'charging',
        title: 'Зарядка и безопасное использование',
        summary:
          'Используйте выданный кабель, держите разъёмы сухими и проверяйте колонку перед переноской.',
        image: 'back',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'charging-ac',
            title: 'Заряжайте через AC-вход колонки',
            body: 'При сухих кабеле и разъёмах подключите выданный провод к заднему AC-входу и подходящей розетке. USB колонки не является входом зарядки её батареи.',
          },
          {
            id: 'charging-indicator',
            title: 'Следите за зарядкой',
            body: 'Медленное белое мигание означает зарядку, вся полоска белая — полный заряд. Не вскрывайте колонку, не вынимайте батарею и не меняйте питание на неподтверждённое.',
          },
          {
            id: 'charging-outdoor',
            title: 'Осторожно на улице',
            body: 'Stage 320 имеет защиту IPX4 от брызг, но не погружения. Для защиты закрывайте крышки, а перед AC-подключением высушите разъёмы. Избегайте сильного дождя, жары и неустойчивых мест.',
          },
          {
            id: 'charging-move',
            title: 'Хранение и переноска',
            body: 'Остановите музыку, выключите микрофоны и отсоедините провода перед перемещением. Держите колонку устойчиво, не садитесь и не опирайтесь на неё. При возврате проверьте комплект с ĐiĐi Audio.',
          },
        ],
      },
      {
        id: 'troubleshooting',
        title: 'Распространённые проблемы',
        summary:
          'Начните с простых проверок, затем обратитесь в поддержку ниже. Не сбрасывайте и не ремонтируйте арендованную колонку самостоятельно.',
        image: 'connections',
        sources: ['manual', 'firmware', 'feedback', 'd2manual'],
        steps: [],
        issues: [
          {
            id: 'not-found',
            title: 'Телефон не видит колонку',
            cause:
              'Нет режима сопряжения, подключён старый телефон или колонка выключена.',
            steps: [
              {
                id: 'issue-not-found-1',
                title: 'Телефон не видит колонку · 1',
                body: 'Проверьте питание колонки и включите Bluetooth телефона.',
              },
              {
                id: 'issue-not-found-2',
                title: 'Телефон не видит колонку · 2',
                body: 'Отключите старый телефон, затем нажмите Bluetooth колонки.',
              },
              {
                id: 'issue-not-found-3',
                title: 'Телефон не видит колонку · 3',
                body: 'Поднесите телефон, обновите список и выберите Stage 320.',
              },
            ],
          },
          {
            id: 'no-music',
            title: 'Bluetooth подключён, но нет музыки',
            cause: 'Пауза, неверный выход/громкость или активный USB/AUX.',
            steps: [
              {
                id: 'issue-no-music-1',
                title: 'Bluetooth подключён, но нет музыки · 1',
                body: 'Запустите музыку и выберите Stage 320 как выход телефона.',
              },
              {
                id: 'issue-no-music-2',
                title: 'Bluetooth подключён, но нет музыки · 2',
                body: 'Постепенно прибавьте громкость телефона и колонки с низкого уровня.',
              },
              {
                id: 'issue-no-music-3',
                title: 'Bluetooth подключён, но нет музыки · 3',
                body: 'Остановите USB/AUX, отсоедините ненужные входы и повторите Bluetooth.',
              },
            ],
          },
          {
            id: 'no-mic',
            title: 'Нет звука микрофона',
            cause:
              'Микрофон/приёмник D2 выключен, разряжены AA или приёмник, потеряна синхронизация A/B либо неверный вход MIC.',
            steps: [
              {
                id: 'issue-no-mic-1',
                title: 'Нет звука микрофона · 1',
                body: 'Проверьте 2 AA и их полярность в каждом микрофоне, дисплеи и питание/заряд приёмника.',
              },
              {
                id: 'issue-no-mic-2',
                title: 'Нет звука микрофона · 2',
                body: 'Убавьте VOL и проверьте плотность штекера 6,35 мм в MIC; для MIC 2/GUITAR выберите микрофон.',
              },
              {
                id: 'issue-no-mic-3',
                title: 'Нет звука микрофона · 3',
                body: 'Проверьте A/B. При необходимости совместите ИК-окна и кратко нажмите нужную CH-A/CH-B, затем плавно прибавьте громкость микрофонов D2 и VOL микрофона. Если звука нет — поддержка.',
              },
            ],
          },
          {
            id: 'feedback',
            title: 'Свист или искажение микрофона',
            cause:
              'Микрофон близко/направлен на колонку или слишком высокие VOL/GAIN.',
            steps: [
              {
                id: 'issue-feedback-1',
                title: 'Свист или искажение микрофона · 1',
                body: 'Сразу убавьте VOL микрофона, чтобы прекратить свист.',
              },
              {
                id: 'issue-feedback-2',
                title: 'Свист или искажение микрофона · 2',
                body: 'Отнесите микрофон от передней части колонки и смените положение певца.',
              },
              {
                id: 'issue-feedback-3',
                title: 'Свист или искажение микрофона · 3',
                body: 'Повторите негромко; при искажении уменьшите GAIN нужного входа, затем обратитесь за помощью.',
              },
            ],
          },
          {
            id: 'dropouts',
            title: 'Прерывается звук Bluetooth',
            cause:
              'Расстояние, препятствия, помехи или прерывание воспроизведения телефона.',
            steps: [
              {
                id: 'issue-dropouts-1',
                title: 'Прерывается звук Bluetooth · 1',
                body: 'Поднесите телефон и уберите препятствия между устройствами.',
              },
              {
                id: 'issue-dropouts-2',
                title: 'Прерывается звук Bluetooth · 2',
                body: 'Проверьте воспроизведение и попробуйте файл, уже имеющийся на телефоне.',
              },
              {
                id: 'issue-dropouts-3',
                title: 'Прерывается звук Bluetooth · 3',
                body: 'Переподключите Bluetooth; если сбои остаются, опишите ситуацию ĐiĐi Audio.',
              },
            ],
          },
          {
            id: 'no-power',
            title: 'Колонка не включается',
            cause:
              'Разряжена батарея, неплотно вставлен кабель или проблема с питанием.',
            steps: [
              {
                id: 'issue-no-power-1',
                title: 'Колонка не включается · 1',
                body: 'Убедитесь, что кабель/разъёмы сухие и целые. При влаге/повреждении не подключайте питание и звоните в поддержку.',
              },
              {
                id: 'issue-no-power-2',
                title: 'Колонка не включается · 2',
                body: 'Используйте выданный кабель, проверьте AC-подключение и нажмите питание.',
              },
              {
                id: 'issue-no-power-3',
                title: 'Колонка не включается · 3',
                body: 'Если реакции нет, прекратите использование и обратитесь в ĐiĐi Audio; не вскрывайте колонку и не меняйте батарею.',
              },
            ],
          },
          {
            id: 'multi-speaker',
            title: 'Колонки не соединяются в группу',
            cause:
              'Перепутаны Bluetooth/Auracast, нет источника музыки или несовместимы модели/прошивки.',
            steps: [
              {
                id: 'issue-multi-speaker-1',
                title: 'Колонки не соединяются в группу · 1',
                body: 'Проверьте каждую колонку отдельно и уточните её модель.',
              },
              {
                id: 'issue-multi-speaker-2',
                title: 'Колонки не соединяются в группу · 2',
                body: 'Для двух Stage 320 подключите телефон к одной, включите музыку и нажмите Auracast на обеих.',
              },
              {
                id: 'issue-multi-speaker-3',
                title: 'Колонки не соединяются в группу · 3',
                body: 'Для других моделей или при неудаче уточните совместимость у ĐiĐi Audio; не обновляйте и не сбрасывайте сами.',
              },
            ],
          },
        ],
      },
    ],
  },
  zh: {
    checklist: [
      {
        id: 'prep-placement',
        label: '音箱稳放于平面，接口干燥。',
      },
      {
        id: 'prep-power',
        label: '已备好随附电源线，或音箱电池已有电量。',
      },
      {
        id: 'prep-phone',
        label: '手机蓝牙可用，并从低音量开始。',
      },
      {
        id: 'prep-mic',
        label: 'D2 卡拉 OK：检查每支麦克风的 2 节 AA、电量及接收器 MIC 连接。',
      },
    ],
    topics: [
      {
        id: 'bluetooth',
        title: '通过蓝牙连接手机',
        summary: '适用于 iPhone 和 Android。先连接一部手机和一台音箱。',
        image: 'top',
        sources: ['manual', 'apple', 'android'],
        steps: [
          {
            id: 'bluetooth-power',
            title: '打开音箱电源',
            body: '按顶部控制面板靠前的电源符号按钮。电池耗尽时，请按充电章节使用随附电源线。',
          },
          {
            id: 'bluetooth-pair',
            title: '进入配对模式',
            body: '按顶部面板的蓝牙符号按钮。蓝牙指示灯快速闪白光表示正在等待配对。',
          },
          {
            id: 'bluetooth-phone',
            title: '打开手机蓝牙设置',
            body: 'iPhone：设置 → 蓝牙 → 打开。Android：进入蓝牙设置并选择配对新设备；菜单名称可能因机型而异。',
          },
          {
            id: 'bluetooth-select',
            title: '选择音箱',
            body: '点击设备列表中的“JBL PartyBox Stage 320”，如有提示请确认配对。若要求 PIN，JBL 文档指定为 0000。',
          },
          {
            id: 'bluetooth-test',
            title: '确认连接并播放音乐',
            body: '手机显示已连接，音箱蓝牙灯常亮白色。播放音乐，选择音箱作为音频输出，再逐渐调高音量。',
          },
          {
            id: 'bluetooth-switch',
            title: '断开或更换手机',
            body: '断开旧手机连接，或关闭旧手机蓝牙。按音箱蓝牙按钮，再配对新手机，无需恢复出厂设置。',
          },
        ],
      },
      {
        id: 'microphone',
        title: '连接麦克风与卡拉 OK',
        summary:
          'ĐiĐi Audio 已确认套装为 Alpha Works D2。手持麦克风使用 AA 电池，USB-C 充电接收器接入 Stage 320 的 MIC 输入。',
        image: 'connections',
        sources: ['manual', 'd2manual', 'd2product', 'feedback'],
        steps: [
          {
            id: 'microphone-identify',
            title: '准备电池并为 D2 接收器充电',
            body: '每支麦克风装入 2 节 AA，注意电池仓极性标记，并在屏幕查看电量。用随附 USB-C 线和合适 USB 电源为接收器充电；该线不能为手持麦克风充电。',
          },
          {
            id: 'microphone-power',
            title: '连接接收器并开机',
            body: '插接前降低音箱麦克风音量与 D2 麦克风音量。把接收器 6.35mm 插头接入 Stage 320 MIC；若使用 MIC 2/GUITAR，拨到麦克风图标。打开接收器开关，按各手持麦克风电源键，确认屏幕亮起。',
          },
          {
            id: 'microphone-input',
            title: '检查 A/B，必要时红外同步',
            body: '打开接收器与麦克风，查看 A/B 指示并分别试说话。未连接时，将手持麦克风与接收器 IR 窗靠近对准，短按对应 CH-A 或 CH-B，逐支检查。仅需同步时不要长按 CH，因为长按会启动频率扫描。',
          },
          {
            id: 'microphone-volume',
            title: '播放音乐并逐渐增加人声音量',
            body: '本方案请把手机连接 JBL PartyBox Stage 320，而不是 D2。逐渐调高接收器麦克风音量 和音箱 MICROPHONE VOL。音箱主旋钮控制音乐；失真时降低麦克风电平或对应输入 GAIN。',
          },
          {
            id: 'microphone-effects',
            title: '回声、防啸叫与关机',
            body: '先将 D2 ECHO 设低，再小幅调整 Stage 320 ECHO，避免两处同时加强回声。出现啸叫时立即降低麦克风 VOL，并远离音箱正面。结束后按住手持麦克风电源键超过 3 秒关机，再关闭接收器。',
          },
        ],
      },
      {
        id: 'controls',
        title: '了解音箱控制按钮',
        summary:
          '下方为真实顶部面板。麦克风 BASS 与音乐 BASS BOOST 是不同控制。',
        image: 'top',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'controls-music',
            title: '主音量与音乐播放',
            body: '转动右侧带 Play 图标的大旋钮调节主音量，按一次播放/暂停。在支持的模式下，按两次切换下一首，三次返回上一首。',
          },
          {
            id: 'controls-lights',
            title: 'LED 灯光',
            body: '左侧灯光图标旋钮：按下开启/关闭灯效，转动更换模式。不要直视点亮的发光部件。',
          },
          {
            id: 'controls-bass',
            title: '音乐低音',
            body: '按 BASS BOOST 切换低音增强等级或关闭。先使用适中音量；MICROPHONE 区域的 BASS 仅用于麦克风音频。',
          },
          {
            id: 'controls-effects',
            title: '音效按键',
            body: '三个彩色音效键用于触发特殊声音效果，不是电源、蓝牙或麦克风音量控制。',
          },
          {
            id: 'controls-app',
            title: 'JBL PartyBox 应用',
            body: '在 App Store 或 Google Play 查找 JBL/Harman 发布的 JBL PartyBox 应用。连接音箱后使用支持的自定义选项。不要自行更新租赁音箱固件。',
          },
          {
            id: 'controls-battery',
            title: '查看剩余电量',
            body: '按音箱上的按钮，在指示条查看电量。电池指示灯快速闪红光表示电量低，请参阅充电章节。',
          },
        ],
      },
      {
        id: 'auracast',
        title: '通过 Auracast 连接多台音箱',
        summary:
          '蓝牙连接手机与音箱，Auracast 连接兼容音箱。以下步骤以两台 Stage 320 为例。',
        image: 'top',
        sources: ['manual', 'quickstart', 'firmware'],
        steps: [
          {
            id: 'auracast-compatibility',
            title: '先检查音箱组合',
            body: '打开两台 Stage 320。若使用其他型号，请向 ĐiĐi Audio 确认兼容性与固件；并非所有 JBL 音箱都能互连。不要自行更新租赁设备。',
          },
          {
            id: 'auracast-primary',
            title: '选择接收音乐的音箱',
            body: '用蓝牙将手机连接到其中一台音箱，低音量播放音乐。连接手机的音箱默认是主音箱。',
          },
          {
            id: 'auracast-pair',
            title: '分别按下 Auracast',
            body: '按每台 Stage 320 顶部面板蓝牙键旁的 Auracast 图标按钮。蓝牙键用于配对手机，并非音箱组连接键。',
          },
          {
            id: 'auracast-check-exit',
            title: '检查播放并断开音箱组',
            body: '确认两台音箱都在播放音乐。按 JBL 说明，再按 Auracast 或关闭一台音箱以断开。不要假设麦克风声音会传到所有音箱；多音箱卡拉 OK 需另行确认。',
          },
        ],
      },
      {
        id: 'charging',
        title: '充电与安全使用',
        summary: '使用随附电源线，保持接口干燥，移动前检查设备。',
        image: 'back',
        sources: ['manual', 'quickstart'],
        steps: [
          {
            id: 'charging-ac',
            title: '通过音箱 AC 输入充电',
            body: '确保电源线与接口干燥，将随附电源线连接后部 AC 输入和合适插座。音箱 USB 插孔不是音箱电池充电口。',
          },
          {
            id: 'charging-indicator',
            title: '查看充电指示',
            body: '缓慢闪白光表示充电中，整条常亮白光表示充满。不要自行拆机、取下电池或更换未经确认的供电设备。',
          },
          {
            id: 'charging-outdoor',
            title: '谨慎户外使用',
            body: 'Stage 320 为 IPX4 防泼溅，不适合浸水。需要防泼溅时盖好保护盖，接 AC 电源前确保充电口干燥。避开斜雨、热源和不稳位置。',
          },
          {
            id: 'charging-move',
            title: '保管与移动',
            body: '移动前停止音乐、关闭麦克风并拔下所有线缆。音箱应直立稳放，不要坐靠。归还时与 ĐiĐi Audio 一起检查设备及配件。',
          },
        ],
      },
      {
        id: 'troubleshooting',
        title: '常见故障排查',
        summary:
          '先做简单检查；仍未解决时使用下方支持按钮。不要自行重置或维修租赁音箱。',
        image: 'connections',
        sources: ['manual', 'firmware', 'feedback', 'd2manual'],
        steps: [],
        issues: [
          {
            id: 'not-found',
            title: '手机找不到音箱',
            cause: '未进入配对模式、仍连接旧手机，或音箱未开机。',
            steps: [
              {
                id: 'issue-not-found-1',
                title: '手机找不到音箱 · 1',
                body: '检查音箱电源，并打开手机蓝牙。',
              },
              {
                id: 'issue-not-found-2',
                title: '手机找不到音箱 · 2',
                body: '断开旧手机连接，再按音箱蓝牙键。',
              },
              {
                id: 'issue-not-found-3',
                title: '手机找不到音箱 · 3',
                body: '靠近音箱，刷新设备列表并选择 Stage 320。',
              },
            ],
          },
          {
            id: 'no-music',
            title: '蓝牙已连接但没有声音',
            cause: '播放暂停、输出或音量设置不正确，或 USB/AUX 已切换为音源。',
            steps: [
              {
                id: 'issue-no-music-1',
                title: '蓝牙已连接但没有声音 · 1',
                body: '开始播放，并在手机上选择 Stage 320 作为音频输出。',
              },
              {
                id: 'issue-no-music-2',
                title: '蓝牙已连接但没有声音 · 2',
                body: '从低音量开始，逐渐调高手机与音箱主音量。',
              },
              {
                id: 'issue-no-music-3',
                title: '蓝牙已连接但没有声音 · 3',
                body: '停止 USB/AUX 播放，移除不用的输入后重试蓝牙音乐。',
              },
            ],
          },
          {
            id: 'no-mic',
            title: '麦克风没有声音',
            cause:
              'D2 手持麦克风/接收器未开启、AA 或接收器电量不足、A/B 失去同步，或 MIC 输入不正确。',
            steps: [
              {
                id: 'issue-no-mic-1',
                title: '麦克风没有声音 · 1',
                body: '检查每支麦克风的 2 节 AA 及极性、手持屏幕与接收器电源/充电。',
              },
              {
                id: 'issue-no-mic-2',
                title: '麦克风没有声音 · 2',
                body: '降低 VOL 后检查接收器 6.35mm 插头在 MIC 中稳固；使用 MIC 2/GUITAR 时选择麦克风模式。',
              },
              {
                id: 'issue-no-mic-3',
                title: '麦克风没有声音 · 3',
                body: '检查 A/B 指示；必要时对准 IR 窗并短按对应 CH-A/CH-B，再缓慢调高 D2 麦克风音量 与麦克风 VOL。仍无声时联系支持。',
              },
            ],
          },
          {
            id: 'feedback',
            title: '麦克风啸叫或失真',
            cause: '麦克风过近或朝向音箱，或 VOL/GAIN 过高。',
            steps: [
              {
                id: 'issue-feedback-1',
                title: '麦克风啸叫或失真 · 1',
                body: '立即降低麦克风 VOL，停止啸叫。',
              },
              {
                id: 'issue-feedback-2',
                title: '麦克风啸叫或失真 · 2',
                body: '将麦克风远离音箱正面，调整演唱位置。',
              },
              {
                id: 'issue-feedback-3',
                title: '麦克风啸叫或失真 · 3',
                body: '低音量重试；若失真，降低所用输入的 GAIN，仍有问题时联系支持。',
              },
            ],
          },
          {
            id: 'dropouts',
            title: '蓝牙音频断续',
            cause: '距离、障碍、干扰或手机播放中断。',
            steps: [
              {
                id: 'issue-dropouts-1',
                title: '蓝牙音频断续 · 1',
                body: '让手机靠近音箱，移除两者之间的障碍。',
              },
              {
                id: 'issue-dropouts-2',
                title: '蓝牙音频断续 · 2',
                body: '确认手机仍在播放，并尝试手机上已有的音频文件。',
              },
              {
                id: 'issue-dropouts-3',
                title: '蓝牙音频断续 · 3',
                body: '断开并重新连接蓝牙；若仍断续，请记录情况并联系 ĐiĐi Audio。',
              },
            ],
          },
          {
            id: 'no-power',
            title: '音箱无法开机',
            cause: '电池耗尽、电源线松动或供电有问题。',
            steps: [
              {
                id: 'issue-no-power-1',
                title: '音箱无法开机 · 1',
                body: '检查线缆与接口干燥且无损。若潮湿或损坏，请勿通电并联系支持。',
              },
              {
                id: 'issue-no-power-2',
                title: '音箱无法开机 · 2',
                body: '使用随附电源线，检查 AC 连接，再按音箱电源键。',
              },
              {
                id: 'issue-no-power-3',
                title: '音箱无法开机 · 3',
                body: '若仍无反应，请停止使用并联系 ĐiĐi Audio；不要拆机或自行更换电池。',
              },
            ],
          },
          {
            id: 'multi-speaker',
            title: '无法连接多台音箱',
            cause: '混淆蓝牙与 Auracast、没有音乐输入，或型号/固件不兼容。',
            steps: [
              {
                id: 'issue-multi-speaker-1',
                title: '无法连接多台音箱 · 1',
                body: '分别测试每台音箱能独立工作，并确认型号。',
              },
              {
                id: 'issue-multi-speaker-2',
                title: '无法连接多台音箱 · 2',
                body: '两台 Stage 320：手机连接其中一台，播放音乐，再分别按两台的 Auracast。',
              },
              {
                id: 'issue-multi-speaker-3',
                title: '无法连接多台音箱 · 3',
                body: '其他型号或仍失败时，请向 ĐiĐi Audio 确认兼容性，不要自行更新固件或重置。',
              },
            ],
          },
        ],
      },
    ],
  },
}
