import type { GuideLocale } from '@/lib/product-guide'
type Messages = {
  micConfirmed: string
  microphoneSetup: string
  title: string
  description: string
  eyebrow: string
  teaserTitle: string
  teaserBody: string
  openGuide: string
  home: string
  breadcrumb: string
  language: string
  search: string
  placeholder: string
  clearSearch: string
  navigation: string
  checklist: string
  checklistIntro: string
  step: string
  complete: string
  completed: string
  progress: string
  topics: string
  noResults: string
  resetSearch: string
  video: string
  source: string
  help: string
  call: string
  zalo: string
  rental: string
  top: string
  cause: string
  solution: string
  micPending: string
  microphoneNote: string
  verified: string
  topImage: string
  connectionsImage: string
  backImage: string
  imageNote: string
  sessionNote: string
  viewSources: string
}
export const guideMessages: Record<GuideLocale, Messages> = {
  vi: {
    title: 'Hướng dẫn kết nối & sử dụng JBL PartyBox Stage 320',
    description:
      'Hướng dẫn JBL 320 cho người mới: kết nối Bluetooth, điều khiển loa, chỉnh micro karaoke, Auracast, sạc pin và xử lý lỗi thường gặp.',
    eyebrow: 'ĐiĐi Audio · Đồng hành sau khi nhận loa',
    teaserTitle: 'Mới dùng JBL PartyBox Stage 320?',
    teaserBody:
      'Mở hướng dẫn từng bước để kết nối điện thoại, hiểu các nút điều khiển và tìm cách xử lý khi chưa có tiếng.',
    openGuide: 'Mở hướng dẫn sử dụng',
    home: 'Trang chủ',
    breadcrumb: 'Đường dẫn trang',
    language: 'Ngôn ngữ',
    search: 'Tìm trong hướng dẫn',
    placeholder: 'Bluetooth, micro, pin, tiếng hú…',
    clearSearch: 'Xóa tìm kiếm',
    navigation: 'Truy cập nhanh theo chủ đề',
    checklist: 'Trước khi bắt đầu',
    checklistIntro:
      'Kiểm tra bộ thiết bị bạn vừa nhận, rồi đánh dấu những mục đã sẵn sàng.',
    step: 'Bước',
    complete: 'Đã hoàn thành bước này',
    completed: 'Đã hoàn thành · Bấm để bỏ đánh dấu',
    progress: 'Hoàn thành',
    topics: 'chủ đề',
    noResults:
      'Chưa tìm thấy nội dung phù hợp. Thử Bluetooth, micro, pin hoặc tiếng hú.',
    resetSearch: 'Xem tất cả hướng dẫn',
    video: 'Xem video hướng dẫn',
    source: 'Tài liệu tham khảo',
    help: 'Bạn vẫn chưa kết nối được loa?',
    call: 'Gọi hỗ trợ',
    zalo: 'Liên hệ Zalo',
    rental: 'Trang thuê JBL PartyBox Stage 320',
    top: 'Quay lại đầu hướng dẫn',
    cause: 'Nguyên nhân thường gặp',
    solution: 'Cách xử lý',
    micPending: 'Cần xác nhận bộ micro được giao',
    microphoneNote:
      'ĐiĐi Audio có cung cấp micro không dây, nhưng model, cách cấp nguồn và đầu thu của bộ đang giao chưa được xác nhận cho hướng dẫn này. Hãy đối chiếu với bộ đã nhận hoặc gọi/Zalo trước khi thao tác riêng trên micro. Các bước chỉnh trên loa bên dưới dành cho Stage 320.',
    verified: 'Đối chiếu JBL & Alpha Works',
    topImage: 'Bảng điều khiển thật của JBL PartyBox Stage 320, nhìn từ trên',
    connectionsImage:
      'Các cổng micro, công tắc micro/guitar và GAIN phía sau Stage 320',
    backImage: 'Mặt sau JBL PartyBox Stage 320 với các nắp cổng kết nối',
    imageNote:
      'Ảnh đúng Stage 320. Nhấn ảnh để xem lớn; từng bước giải thích nút và cổng liên quan.',
    sessionNote: 'Dấu hoàn thành được giữ trong phiên của tab này.',
    viewSources: 'Nguồn và phạm vi hướng dẫn',
    micConfirmed: 'Bộ micro Alpha Works D2',
    microphoneSetup:
      'Tay micro dùng pin AA; cáp USB-C sạc đầu thu. Trong cách kết nối này, điện thoại ghép với JBL PartyBox Stage 320 để phát nhạc. Bluetooth mang tên D2 là ngõ nhận nhạc của đầu thu, không phải cách ghép tay micro. Mic First của D2 chỉ tác động nhạc đi qua đầu thu.',
  },
  en: {
    title: 'JBL PartyBox Stage 320 connection & user guide',
    description:
      'A beginner’s JBL 320 guide: Bluetooth, speaker controls, karaoke microphone levels, Auracast, charging and common connection problems.',
    eyebrow: 'ĐiĐi Audio · After pickup',
    teaserTitle: 'New to the JBL PartyBox Stage 320?',
    teaserBody:
      'Follow the steps to connect your phone, understand the controls and troubleshoot missing sound.',
    openGuide: 'Open the user guide',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    language: 'Language',
    search: 'Search the guide',
    placeholder: 'Bluetooth, microphone, battery, feedback…',
    clearSearch: 'Clear search',
    navigation: 'Quick topics',
    checklist: 'Before you start',
    checklistIntro:
      'Check the equipment you received, then tick the items that are ready.',
    step: 'Step',
    complete: 'Mark this step complete',
    completed: 'Completed · Press to undo',
    progress: 'Completed',
    topics: 'topics',
    noResults:
      'No matching instructions. Try Bluetooth, microphone, battery or feedback.',
    resetSearch: 'Show all instructions',
    video: 'Watch the guide video',
    source: 'References',
    help: 'Still unable to connect your speaker?',
    call: 'Call support',
    zalo: 'Contact on Zalo',
    rental: 'JBL PartyBox Stage 320 rental',
    top: 'Back to the guide top',
    cause: 'Common causes',
    solution: 'What to try',
    micPending: 'Confirm your supplied microphone kit',
    microphoneNote:
      'ĐiĐi Audio supplies wireless microphones, but the model, power and receiver of the current rental kit have not been confirmed for this guide. Check your supplied kit or call/Zalo before microphone-specific operations. The speaker controls below apply to Stage 320.',
    verified: 'Checked against JBL & Alpha Works',
    topImage: 'Actual JBL PartyBox Stage 320 top control panel',
    connectionsImage:
      'Stage 320 rear microphone sockets, microphone/guitar switch and GAIN controls',
    backImage: 'JBL PartyBox Stage 320 rear panel and connector covers',
    imageNote:
      'Stage 320 images. Tap to enlarge; each step explains the relevant control.',
    sessionNote: 'Completion marks stay in this tab’s session.',
    viewSources: 'Sources and scope',
    micConfirmed: 'Alpha Works D2 microphone kit',
    microphoneSetup:
      'AA batteries power the handhelds; USB-C charges the receiver. For this setup, pair your phone with JBL PartyBox Stage 320 for music. The D2 Bluetooth name is the receiver’s music input, not handheld pairing. D2 Mic First only affects music routed through its receiver.',
  },
  ko: {
    title: 'JBL PartyBox Stage 320 연결 및 사용 가이드',
    description:
      '초보자를 위한 JBL 320 가이드: 블루투스, 조작 버튼, 노래방 마이크 음량, Auracast, 충전 및 문제 해결.',
    eyebrow: 'ĐiĐi Audio · 수령 후 사용 안내',
    teaserTitle: 'JBL PartyBox Stage 320이 처음이신가요?',
    teaserBody:
      '휴대폰 연결, 조작 버튼 및 소리가 나지 않을 때의 해결 방법을 단계별로 확인하세요.',
    openGuide: '사용 가이드 열기',
    home: '홈',
    breadcrumb: '현재 위치',
    language: '언어',
    search: '가이드 검색',
    placeholder: 'Bluetooth, 마이크, 배터리, 하울링…',
    clearSearch: '검색 지우기',
    navigation: '주제 바로가기',
    checklist: '시작 전 확인',
    checklistIntro: '수령한 장비를 확인한 뒤 준비된 항목을 표시하세요.',
    step: '단계',
    complete: '이 단계 완료 표시',
    completed: '완료 · 누르면 취소',
    progress: '완료',
    topics: '주제',
    noResults:
      '일치하는 내용이 없습니다. Bluetooth, 마이크, 배터리 또는 하울링을 검색하세요.',
    resetSearch: '전체 가이드 보기',
    video: '사용 안내 영상 보기',
    source: '참고 자료',
    help: '아직 스피커를 연결하지 못하셨나요?',
    call: '지원 전화',
    zalo: 'Zalo 문의',
    rental: 'JBL PartyBox Stage 320 대여',
    top: '가이드 맨 위로',
    cause: '주요 원인',
    solution: '해결 방법',
    micPending: '제공된 마이크 구성 확인 필요',
    microphoneNote:
      'ĐiĐi Audio는 무선 마이크를 제공하지만 현재 대여 구성의 모델, 전원 방식과 수신기는 이 가이드용으로 확인되지 않았습니다. 마이크별 조작 전 수령 장비를 확인하거나 전화/Zalo로 문의하세요. 아래 스피커 조작법은 Stage 320용입니다.',
    verified: 'JBL 및 Alpha Works 문서 대조',
    topImage: 'JBL PartyBox Stage 320 실제 상단 조작 패널',
    connectionsImage:
      'Stage 320 후면 마이크 단자, 마이크/기타 스위치 및 GAIN 조절부',
    backImage: 'JBL PartyBox Stage 320 후면 패널과 단자 덮개',
    imageNote:
      'Stage 320 사진입니다. 누르면 크게 볼 수 있으며 각 단계에서 조작부를 설명합니다.',
    sessionNote: '완료 표시는 이 탭의 세션에 유지됩니다.',
    viewSources: '출처 및 안내 범위',
    micConfirmed: 'Alpha Works D2 마이크 구성',
    microphoneSetup:
      '핸드 마이크는 AA 배터리, 수신기는 USB-C 충전을 사용합니다. 이 구성에서는 휴대폰을 JBL PartyBox Stage 320에 연결해 음악을 재생하세요. D2 Bluetooth는 수신기의 음악 입력이며 핸드 마이크 페어링이 아닙니다. D2 Mic First는 수신기를 통과하는 음악에만 적용됩니다.',
  },
  ru: {
    title: 'Подключение и использование JBL PartyBox Stage 320',
    description:
      'JBL 320 для начинающих: Bluetooth, управление, микрофоны караоке, Auracast, зарядка и решение распространённых проблем.',
    eyebrow: 'ĐiĐi Audio · После получения колонки',
    teaserTitle: 'Впервые пользуетесь JBL PartyBox Stage 320?',
    teaserBody:
      'Подключите телефон, разберитесь с кнопками и найдите решение, если нет звука.',
    openGuide: 'Открыть руководство',
    home: 'Главная',
    breadcrumb: 'Навигационная цепочка',
    language: 'Язык',
    search: 'Поиск в руководстве',
    placeholder: 'Bluetooth, микрофон, батарея, свист…',
    clearSearch: 'Очистить поиск',
    navigation: 'Быстрый переход по темам',
    checklist: 'Перед началом',
    checklistIntro:
      'Проверьте полученное оборудование и отметьте готовые пункты.',
    step: 'Шаг',
    complete: 'Отметить шаг выполненным',
    completed: 'Выполнено · Нажмите для отмены',
    progress: 'Выполнено',
    topics: 'тем',
    noResults:
      'Ничего не найдено. Попробуйте Bluetooth, микрофон, батарея или свист.',
    resetSearch: 'Все инструкции',
    video: 'Посмотреть видеоинструкцию',
    source: 'Источники',
    help: 'Всё ещё не удаётся подключить колонку?',
    call: 'Позвонить в поддержку',
    zalo: 'Связаться в Zalo',
    rental: 'Аренда JBL PartyBox Stage 320',
    top: 'К началу руководства',
    cause: 'Частые причины',
    solution: 'Что делать',
    micPending: 'Уточните комплект микрофонов',
    microphoneNote:
      'ĐiĐi Audio предоставляет беспроводные микрофоны, но модель, питание и приёмник текущего комплекта для этого руководства не подтверждены. Перед действиями с микрофоном сверьте комплект или позвоните/напишите в Zalo. Инструкции управления колонкой ниже относятся к Stage 320.',
    verified: 'Сверено с JBL и Alpha Works',
    topImage: 'Настоящая верхняя панель JBL PartyBox Stage 320',
    connectionsImage:
      'Микрофонные входы, переключатель микрофон/гитара и GAIN сзади Stage 320',
    backImage: 'Задняя панель JBL PartyBox Stage 320 и крышки разъёмов',
    imageNote:
      'Фото Stage 320. Нажмите для увеличения; шаги объясняют нужные регуляторы.',
    sessionNote: 'Отметки сохраняются в сеансе этой вкладки.',
    viewSources: 'Источники и границы руководства',
    micConfirmed: 'Комплект микрофонов Alpha Works D2',
    microphoneSetup:
      'Микрофоны работают от AA; USB-C заряжает приёмник. В этой схеме телефон подключается к JBL PartyBox Stage 320 для музыки. Bluetooth D2 — музыкальный вход приёмника, а не сопряжение ручных микрофонов. Mic First D2 влияет только на музыку через приёмник.',
  },
  zh: {
    title: 'JBL PartyBox Stage 320 连接与使用指南',
    description:
      '面向新手的 JBL 320 指南：蓝牙连接、控制按钮、卡拉 OK 麦克风音量、Auracast、充电与常见故障排查。',
    eyebrow: 'ĐiĐi Audio · 取机后使用支持',
    teaserTitle: '第一次使用 JBL PartyBox Stage 320？',
    teaserBody: '按步骤连接手机、了解控制按钮，并在没有声音时查找解决办法。',
    openGuide: '打开使用指南',
    home: '首页',
    breadcrumb: '面包屑导航',
    language: '语言',
    search: '搜索指南',
    placeholder: 'Bluetooth、麦克风、电池、啸叫…',
    clearSearch: '清除搜索',
    navigation: '主题快速导航',
    checklist: '开始前检查',
    checklistIntro: '检查收到的设备，再勾选已准备好的项目。',
    step: '步骤',
    complete: '标记此步骤已完成',
    completed: '已完成 · 点击取消',
    progress: '已完成',
    topics: '个主题',
    noResults: '未找到匹配内容。请尝试 Bluetooth、麦克风、电池或啸叫。',
    resetSearch: '显示全部指南',
    video: '观看使用视频',
    source: '参考资料',
    help: '仍然无法连接音箱？',
    call: '致电支持',
    zalo: '联系 Zalo',
    rental: '租赁 JBL PartyBox Stage 320',
    top: '返回指南顶部',
    cause: '常见原因',
    solution: '处理方法',
    micPending: '请确认收到的麦克风套装',
    microphoneNote:
      'ĐiĐi Audio 提供无线麦克风，但本指南尚未确认当前租赁套装的型号、供电方式和接收器。进行麦克风专用操作前，请核对套装或致电/Zalo 咨询。下方音箱操作适用于 Stage 320。',
    verified: '已对照 JBL 与 Alpha Works 文档',
    topImage: 'JBL PartyBox Stage 320 真实顶部控制面板',
    connectionsImage: 'Stage 320 后部麦克风插孔、麦克风/吉他开关与 GAIN 控制',
    backImage: 'JBL PartyBox Stage 320 后面板与接口保护盖',
    imageNote: '图片均为 Stage 320。点击可放大；每个步骤说明相关控制。',
    sessionNote: '完成标记保留在此标签页的会话中。',
    viewSources: '来源与适用范围',
    micConfirmed: 'Alpha Works D2 麦克风套装',
    microphoneSetup:
      '手持麦克风使用 AA 电池；USB-C 为接收器充电。本连接方案中，手机连接 JBL PartyBox Stage 320 播放音乐。名为 D2 的蓝牙是接收器的音乐输入，不是手持麦克风配对。D2 Mic First 仅影响经过接收器的音乐。',
  },
}
