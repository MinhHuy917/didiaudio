import type { VideoCategory, VideoLocale } from '@/lib/product-videos'

type Messages = {
  filterLabel: string
  languageLabel: string
  breadcrumbLabel: string
  title: string
  intro: string
  eyebrow: string
  all: string
  categories: Record<VideoCategory, string>
  play: string
  share: string
  more: string
  library: string
  rent: string
  close: string
  youtube: string
  source: string
  official: string
  notice: string
  loading: string
  unavailable: string
  copied: string
  copyFailed: string
  copyLink: string
  shared: string
  empty: string
  showing: string
  of: string
  videos: string
  home: string
  languages: Record<'vi' | 'en' | 'de', string>
}
export const videoMessages: Record<VideoLocale, Messages> = {
  vi: {
    filterLabel: 'Lọc video theo chủ đề',
    languageLabel: 'Ngôn ngữ',
    breadcrumbLabel: 'Đường dẫn trang',
    title: 'Video thực tế JBL PartyBox Stage 320',
    eyebrow: 'Xem trước khi thuê',
    intro:
      'Xem hướng dẫn từ JBL, review, test âm thanh và karaoke từ các kênh trải nghiệm. Chọn chủ đề bạn muốn tìm hiểu trước khi thuê tại Đà Nẵng.',
    all: 'Tất cả',
    categories: {
      review: 'Review JBL PartyBox Stage 320',
      sound: 'Test bass & chất lượng âm thanh',
      karaoke: 'Test karaoke với micro',
      bluetooth: 'Hướng dẫn kết nối Bluetooth',
      usage: 'Hướng dẫn sử dụng',
      outdoor: 'Ngoài trời & tiệc tùng',
    },
    play: 'Phát video',
    share: 'Chia sẻ video',
    more: 'Xem thêm video',
    library: 'Xem toàn bộ thư viện',
    rent: 'Thuê JBL 320 ngay',
    close: 'Đóng video',
    youtube: 'Mở trên YouTube',
    source: 'Nguồn',
    official: 'JBL chính thức',
    notice:
      'Âm thanh trong video phụ thuộc cách thu và thiết bị phát. Micro, phụ kiện trong video có thể khác bộ cho thuê; vui lòng xác nhận với ĐiĐi Audio.',
    loading: 'Đang tải trình phát YouTube…',
    unavailable:
      'Không thể phát video tại đây. Bạn có thể mở trực tiếp trên YouTube.',
    copied: 'Đã sao chép liên kết video.',
    copyFailed: 'Chưa sao chép được. Hãy chọn và sao chép liên kết bên dưới.',
    copyLink: 'Liên kết video',
    shared: 'Đã chia sẻ video.',
    empty: 'Chưa có video cho chủ đề này. Hãy chọn chủ đề khác.',
    showing: 'Đang hiển thị',
    of: '/',
    videos: 'video',
    home: 'Trang chủ',
    languages: { vi: 'Tiếng Việt', en: 'Tiếng Anh', de: 'Tiếng Đức' },
  },
  en: {
    filterLabel: 'Filter videos by topic',
    languageLabel: 'Language',
    breadcrumbLabel: 'Breadcrumb',
    title: 'JBL PartyBox Stage 320 videos',
    eyebrow: 'Watch before you rent',
    intro:
      'Explore JBL guides, reviews, sound tests and karaoke videos from their original creators. Choose a topic before renting in Da Nang.',
    all: 'All',
    categories: {
      review: 'JBL PartyBox Stage 320 reviews',
      sound: 'Bass & sound tests',
      karaoke: 'Karaoke with microphones',
      bluetooth: 'Bluetooth connection guides',
      usage: 'How to use your speaker',
      outdoor: 'Outdoors & parties',
    },
    play: 'Play video',
    share: 'Share video',
    more: 'Show more videos',
    library: 'Browse the full library',
    rent: 'Rent JBL 320 now',
    close: 'Close video',
    youtube: 'Open on YouTube',
    source: 'Source',
    official: 'Official JBL',
    notice:
      'Recorded sound depends on the recording and your playback device. Microphones and accessories may differ from the rental package; confirm with ĐiĐi Audio.',
    loading: 'Loading the YouTube player…',
    unavailable:
      'This video cannot be played here. You can open it directly on YouTube.',
    copied: 'Video link copied.',
    copyFailed: 'Could not copy. Select and copy the link below.',
    copyLink: 'Video link',
    shared: 'Video shared.',
    empty: 'No videos in this category yet. Choose another topic.',
    showing: 'Showing',
    of: '/',
    videos: 'videos',
    home: 'Home',
    languages: { vi: 'Vietnamese', en: 'English', de: 'German' },
  },
  ko: {
    filterLabel: '주제별 영상 필터',
    languageLabel: '언어',
    breadcrumbLabel: '현재 위치',
    title: 'JBL PartyBox Stage 320 실제 영상',
    eyebrow: '대여 전에 확인하세요',
    intro:
      'JBL 사용 가이드, 리뷰, 사운드 및 노래방 테스트를 원본 채널에서 확인하세요. 다낭에서 대여하기 전에 관심 주제를 선택하세요.',
    all: '전체',
    categories: {
      review: 'JBL PartyBox Stage 320 리뷰',
      sound: '베이스 및 사운드 테스트',
      karaoke: '마이크 노래방 테스트',
      bluetooth: '블루투스 연결 가이드',
      usage: '스피커 사용 가이드',
      outdoor: '야외 및 파티',
    },
    play: '영상 재생',
    share: '영상 공유',
    more: '영상 더 보기',
    library: '전체 영상 보기',
    rent: 'JBL 320 대여하기',
    close: '영상 닫기',
    youtube: 'YouTube에서 열기',
    source: '출처',
    official: 'JBL 공식',
    notice:
      '영상의 소리는 녹음 방식과 재생 기기에 따라 달라집니다. 마이크 및 액세서리가 대여 구성과 다를 수 있으니 ĐiĐi Audio에 확인하세요.',
    loading: 'YouTube 플레이어 로딩 중…',
    unavailable:
      '여기서 영상을 재생할 수 없습니다. YouTube에서 직접 열 수 있습니다.',
    copied: '영상 링크를 복사했습니다.',
    copyFailed: '복사하지 못했습니다. 아래 링크를 선택하여 복사하세요.',
    copyLink: '영상 링크',
    shared: '영상을 공유했습니다.',
    empty: '이 주제의 영상이 없습니다. 다른 주제를 선택하세요.',
    showing: '표시 중',
    of: '/',
    videos: '영상',
    home: '홈',
    languages: { vi: '베트남어', en: '영어', de: '독일어' },
  },
  ru: {
    filterLabel: 'Фильтр видео по теме',
    languageLabel: 'Язык',
    breadcrumbLabel: 'Навигационная цепочка',
    title: 'Видео JBL PartyBox Stage 320',
    eyebrow: 'Посмотрите перед арендой',
    intro:
      'Руководства JBL, обзоры, тесты звука и караоке от авторов видео. Выберите тему перед арендой в Дананге.',
    all: 'Все',
    categories: {
      review: 'Обзоры JBL PartyBox Stage 320',
      sound: 'Тесты баса и звука',
      karaoke: 'Караоке с микрофонами',
      bluetooth: 'Подключение Bluetooth',
      usage: 'Как пользоваться колонкой',
      outdoor: 'На улице и на вечеринках',
    },
    play: 'Смотреть видео',
    share: 'Поделиться видео',
    more: 'Показать ещё видео',
    library: 'Все видео',
    rent: 'Арендовать JBL 320',
    close: 'Закрыть видео',
    youtube: 'Открыть на YouTube',
    source: 'Источник',
    official: 'Официальный JBL',
    notice:
      'Звук в видео зависит от записи и устройства воспроизведения. Микрофоны и аксессуары могут отличаться от комплекта аренды; уточните в ĐiĐi Audio.',
    loading: 'Загрузка проигрывателя YouTube…',
    unavailable: 'Здесь видео недоступно. Его можно открыть прямо на YouTube.',
    copied: 'Ссылка на видео скопирована.',
    copyFailed: 'Не удалось скопировать. Выделите и скопируйте ссылку ниже.',
    copyLink: 'Ссылка на видео',
    shared: 'Видео отправлено.',
    empty: 'В этой категории пока нет видео. Выберите другую тему.',
    showing: 'Показано',
    of: '/',
    videos: 'видео',
    home: 'Главная',
    languages: { vi: 'Вьетнамский', en: 'Английский', de: 'Немецкий' },
  },
  zh: {
    filterLabel: '按主题筛选视频',
    languageLabel: '语言',
    breadcrumbLabel: '面包屑导航',
    title: 'JBL PartyBox Stage 320 实际体验视频',
    eyebrow: '租赁前先了解',
    intro:
      '观看 JBL 官方指南、评测、音质与卡拉 OK 测试，视频来自原作者。租赁岘港音箱前，选择您感兴趣的主题。',
    all: '全部',
    categories: {
      review: 'JBL PartyBox Stage 320 评测',
      sound: '低音与音质测试',
      karaoke: '麦克风卡拉 OK 测试',
      bluetooth: '蓝牙连接指南',
      usage: '音箱使用指南',
      outdoor: '户外与派对',
    },
    play: '播放视频',
    share: '分享视频',
    more: '查看更多视频',
    library: '浏览完整视频库',
    rent: '立即租赁 JBL 320',
    close: '关闭视频',
    youtube: '在 YouTube 上打开',
    source: '来源',
    official: 'JBL 官方',
    notice:
      '视频音效取决于录音方式和播放设备。视频中的麦克风与配件可能与租赁套装不同，请向 ĐiĐi Audio 确认。',
    loading: '正在加载 YouTube 播放器…',
    unavailable: '无法在此播放视频。您可以直接在 YouTube 上打开。',
    copied: '视频链接已复制。',
    copyFailed: '复制失败。请选择并复制下方链接。',
    copyLink: '视频链接',
    shared: '视频已分享。',
    empty: '此类别暂无视频，请选择其他主题。',
    showing: '显示',
    of: '/',
    videos: '个视频',
    home: '首页',
    languages: { vi: '越南语', en: '英语', de: '德语' },
  },
}
