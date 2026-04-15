import { defaultLocale, type Locale } from '@/lib/i18n'

type RootCopy = {
  brandTagline: string
  navPricing: string
  navBlog: string
  ctaCallNow: string
}

type BlogCopy = {
  badge: string
  heading: string
  ctaBook: string
  readMore: string
}

type SuggestionCopy = {
  message: string
  switch: string
  keepCurrent: string
}

export const rootCopyByLocale: Record<Locale, RootCopy> = {
  vi: { brandTagline: 'Thuê loa kéo Đà Nẵng', navPricing: 'Bảng giá', navBlog: 'Blog', ctaCallNow: 'Gọi ngay' },
  en: { brandTagline: 'Speaker rental in Da Nang', navPricing: 'Pricing', navBlog: 'Blog', ctaCallNow: 'Call now' },
  ko: { brandTagline: '다낭 스피커 대여', navPricing: '요금', navBlog: '블로그', ctaCallNow: '지금 전화' },
  zh: { brandTagline: '岘港音响租赁', navPricing: '价格', navBlog: '博客', ctaCallNow: '立即致电' },
  ru: { brandTagline: 'Аренда колонок в Дананге', navPricing: 'Цены', navBlog: 'Блог', ctaCallNow: 'Позвонить' },
  fr: { brandTagline: 'Location d’enceintes à Da Nang', navPricing: 'Tarifs', navBlog: 'Blog', ctaCallNow: 'Appeler' },
  it: { brandTagline: 'Noleggio casse a Da Nang', navPricing: 'Prezzi', navBlog: 'Blog', ctaCallNow: 'Chiama ora' },
  es: { brandTagline: 'Alquiler de altavoces en Da Nang', navPricing: 'Precios', navBlog: 'Blog', ctaCallNow: 'Llamar ahora' },
  th: { brandTagline: 'เช่าลำโพงที่ดานัง', navPricing: 'ราคา', navBlog: 'บล็อก', ctaCallNow: 'โทรเลย' },
}

export const blogCopyByLocale: Record<Locale, BlogCopy> = {
  vi: { badge: 'Blog • SEO đa ngôn ngữ', heading: 'Kho kiến thức blog', ctaBook: 'Đặt loa ngay', readMore: 'Xem chi tiết' },
  en: { badge: 'Blog • Multilingual SEO', heading: 'Blog knowledge base', ctaBook: 'Book speaker now', readMore: 'Read more' },
  ko: { badge: '블로그 • 다국어 SEO', heading: '블로그 지식 모음', ctaBook: '지금 예약', readMore: '더 보기' },
  zh: { badge: '博客 • 多语言 SEO', heading: '博客知识库', ctaBook: '立即预订音响', readMore: '阅读更多' },
  ru: { badge: 'Блог • Мультиязычное SEO', heading: 'База знаний блога', ctaBook: 'Забронировать', readMore: 'Подробнее' },
  fr: { badge: 'Blog • SEO multilingue', heading: 'Base de connaissances du blog', ctaBook: 'Réserver maintenant', readMore: 'Lire la suite' },
  it: { badge: 'Blog • SEO multilingua', heading: 'Archivio del blog', ctaBook: 'Prenota ora', readMore: 'Leggi di più' },
  es: { badge: 'Blog • SEO multilingüe', heading: 'Base de conocimiento del blog', ctaBook: 'Reservar ahora', readMore: 'Leer más' },
  th: { badge: 'บล็อก • SEO หลายภาษา', heading: 'คลังความรู้บล็อก', ctaBook: 'จองลำโพงตอนนี้', readMore: 'อ่านเพิ่มเติม' },
}

export const localeSuggestionCopyByLocale: Record<Locale, SuggestionCopy> = {
  vi: {
    message: 'Chúng tôi phát hiện ngôn ngữ trình duyệt là {language}. Bạn có muốn chuyển ngay không?',
    switch: 'Chuyển ngôn ngữ',
    keepCurrent: 'Giữ ngôn ngữ hiện tại',
  },
  en: {
    message: 'We detected your browser language as {language}. Switch now?',
    switch: 'Switch',
    keepCurrent: 'Keep current',
  },
  ko: {
    message: '브라우저 언어가 {language}(으)로 감지되었습니다. 지금 전환할까요?',
    switch: '전환',
    keepCurrent: '현재 언어 유지',
  },
  zh: {
    message: '我们检测到您的浏览器语言为 {language}。现在切换吗？',
    switch: '切换',
    keepCurrent: '保持当前语言',
  },
  ru: {
    message: 'Мы определили язык вашего браузера как {language}. Переключить сейчас?',
    switch: 'Переключить',
    keepCurrent: 'Оставить текущий',
  },
  fr: {
    message: 'Nous avons détecté la langue de votre navigateur: {language}. Basculer maintenant ?',
    switch: 'Changer',
    keepCurrent: 'Garder la langue actuelle',
  },
  it: {
    message: 'Abbiamo rilevato la lingua del browser: {language}. Vuoi cambiare ora?',
    switch: 'Cambia lingua',
    keepCurrent: 'Mantieni attuale',
  },
  es: {
    message: 'Detectamos el idioma del navegador como {language}. ¿Cambiar ahora?',
    switch: 'Cambiar',
    keepCurrent: 'Mantener actual',
  },
  th: {
    message: 'เราตรวจพบว่าภาษาของเบราว์เซอร์คือ {language} ต้องการสลับตอนนี้หรือไม่?',
    switch: 'สลับภาษา',
    keepCurrent: 'ใช้ภาษาปัจจุบัน',
  },
}

export function getRootCopy(locale: Locale) {
  return rootCopyByLocale[locale] ?? rootCopyByLocale[defaultLocale]
}

export function getBlogCopy(locale: Locale) {
  return blogCopyByLocale[locale] ?? blogCopyByLocale[defaultLocale]
}

export function getLocaleSuggestionCopy(locale: Locale) {
  return localeSuggestionCopyByLocale[locale] ?? localeSuggestionCopyByLocale[defaultLocale]
}
