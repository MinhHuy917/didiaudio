import type { Locale } from '@/lib/i18n'

export const homeSeoByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[]; localKeyword: string }
> = {
  vi: {
    title: 'Cho Thuê Loa Kéo Đà Nẵng | JBL Chính Hãng - ĐiĐi Audio',
    description: 'Dịch vụ cho thuê loa kéo JBL tại Đà Nẵng, giao nhanh, setup miễn phí, hỗ trợ 24/7.',
    keywords: ['thuê loa kéo đà nẵng', 'cho thuê loa jbl đà nẵng', 'loa karaoke đà nẵng'],
    localKeyword: 'thuê loa kéo Đà Nẵng',
  },
  en: {
    title: 'Speaker Rental Da Nang | JBL Portable Speakers - ĐiĐi Audio',
    description: 'Reliable JBL speaker rental in Da Nang with fast delivery and on-site setup support.',
    keywords: ['speaker rental da nang', 'jbl speaker rental', 'portable audio da nang'],
    localKeyword: 'speaker rental Da Nang',
  },
  ko: {
    title: '다낭 스피커 대여 | JBL 포터블 음향 - ĐiĐi Audio',
    description: '다낭에서 빠른 배송과 설치 지원이 가능한 JBL 스피커 대여 서비스.',
    keywords: ['다낭 스피커 대여', 'JBL 스피커 대여', '다낭 이동식 음향'],
    localKeyword: '다낭 스피커 대여',
  },
  zh: {
    title: '岘港音响租赁 | JBL便携音响 - ĐiĐi Audio',
    description: '岘港JBL音响租赁，快速配送，提供活动现场安装支持。',
    keywords: ['岘港音响租赁', 'JBL音响租赁', '岘港活动音响'],
    localKeyword: '岘港音响租赁',
  },
  ru: {
    title: 'Аренда колонок в Дананге | JBL - ĐiĐi Audio',
    description: 'Аренда JBL-акустики в Дананге: быстрая доставка и помощь с установкой.',
    keywords: ['аренда колонок дананг', 'jbl дананг', 'звук для мероприятий дананг'],
    localKeyword: 'аренда колонок Дананг',
  },
  fr: {
    title: 'Location d’enceinte à Da Nang | JBL - ĐiĐi Audio',
    description: 'Service de location d’enceintes JBL à Da Nang avec livraison rapide et installation.',
    keywords: ['location enceinte da nang', 'enceinte jbl da nang', 'audio événement da nang'],
    localKeyword: 'location enceinte Da Nang',
  },
  it: {
    title: 'Noleggio casse a Da Nang | JBL - ĐiĐi Audio',
    description: 'Noleggio casse JBL a Da Nang con consegna rapida e supporto setup sul posto.',
    keywords: ['noleggio casse da nang', 'casse jbl da nang', 'audio eventi da nang'],
    localKeyword: 'noleggio casse Da Nang',
  },
  es: {
    title: 'Alquiler de altavoces en Da Nang | JBL - ĐiĐi Audio',
    description: 'Alquiler de altavoces JBL en Da Nang con entrega rápida y soporte de instalación.',
    keywords: ['alquiler altavoces da nang', 'jbl da nang', 'sonido eventos da nang'],
    localKeyword: 'alquiler de altavoces Da Nang',
  },
  th: {
    title: 'เช่าลำโพง ดานัง | JBL - ĐiĐi Audio',
    description: 'บริการเช่าลำโพง JBL ในดานัง ส่งไว พร้อมช่วยติดตั้งหน้างาน',
    keywords: ['เช่าลำโพง ดานัง', 'ลำโพง JBL ดานัง', 'ระบบเสียงงานอีเวนต์ ดานัง'],
    localKeyword: 'เช่าลำโพง ดานัง',
  },
}
