import type { ProductVideo } from '@/lib/product-videos'

// Guide-only manufacturer tutorial. Not added to the Stage 320 video catalog.
// official=false is the shared catalog's JBL-only badge; creator is Alpha Works.
// Watch-page metadata allows embedding, but live playback returned error150.
// Respect the observed restriction and use a direct YouTube link.
export const rentalMicrophoneVideo: ProductVideo = {
  id: 'ZhCmbAet46M',
  originalTitle: '[TUTORIAL] HƯỚNG DẪN SỬ DỤNG & CÀI ĐẶT MICRO ALPHA WORKS D2',
  channel: 'Alpha Works',
  channelId: 'UCcPIEI3hubYqBL13iAbG6YQ',
  official: false,
  language: 'vi',
  uploadDate: '2026-03-04T23:28:36-08:00',
  durationSeconds: 182,
  thumbnail: 'https://i.ytimg.com/vi/ZhCmbAet46M/hqdefault.jpg',
  categories: ['karaoke', 'usage'],
  embeddable: false,
  verifiedAt: '2026-11-18',
  copy: {
    vi: {
      title: 'Hướng dẫn sử dụng Alpha Works D2',
      description: 'Hướng dẫn tay micro, đầu thu và đồng bộ D2 từ Alpha Works.',
    },
    en: {
      title: 'How to use Alpha Works D2',
      description:
        'Alpha Works explains the D2 handhelds, receiver and synchronization.',
    },
    ko: {
      title: 'Alpha Works D2 사용 가이드',
      description: 'Alpha Works가 D2 마이크, 수신기 및 동기화를 설명합니다.',
    },
    ru: {
      title: 'Как пользоваться Alpha Works D2',
      description:
        'Alpha Works объясняет работу микрофонов D2, приёмника и синхронизации.',
    },
    zh: {
      title: 'Alpha Works D2 使用指南',
      description: 'Alpha Works 介绍 D2 手持麦克风、接收器与同步方法。',
    },
  },
}
