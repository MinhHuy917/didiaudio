import img0 from '@/images/blog/0.jpeg'
import { defaultLocale, type Locale } from '@/lib/i18n'

export type LocalizedSeo = {
  title: string
  description: string
  keywords: string[]
}

export type LocalizedArticle = {
  slug: string
  title: string
  description: string
  content: string
  seo: LocalizedSeo
}

export type MultilingualArticle = {
  id: string
  image: string
  date: string
  translations: Record<Locale, LocalizedArticle>
}

export const multilingualArticles: MultilingualArticle[] = [
  {
    id: 'speaker-rental-da-nang-guide',
    image: img0.src,
    date: '2026-03-15',
    translations: {
      vi: {
        slug: 'thue-loa-keo-da-nang-cam-nang',
        title: 'Thuê loa kéo Đà Nẵng: Cẩm nang chọn nhanh, đúng nhu cầu',
        description:
          'Hướng dẫn chọn loa kéo tại Đà Nẵng theo số lượng khách, không gian và ngân sách để sự kiện chạy mượt.',
        seo: {
          title: 'Thuê loa kéo Đà Nẵng | Cẩm nang chọn loa cho tiệc & du lịch',
          description:
            'Cẩm nang thuê loa kéo Đà Nẵng: chọn công suất đúng, tối ưu chi phí, tránh hú micro và setup nhanh trong 15 phút.',
          keywords: ['thuê loa kéo đà nẵng', 'loa karaoke đà nẵng', 'cho thuê loa jbl đà nẵng'],
        },
        content:
          '<h2>Tổng quan</h2><p>Bài viết này giúp bạn chọn đúng cấu hình loa kéo theo quy mô sự kiện và địa điểm tổ chức tại Đà Nẵng.</p><h2>Checklist nhanh</h2><ul><li>10-20 khách: 1 loa gọn + 2 micro.</li><li>20-50 khách: công suất cao hơn, có dây AUX dự phòng.</li><li>Ngoài trời: đặt loa cao và tránh vật cản.</li></ul>',
      },
      en: {
        slug: 'speaker-rental-da-nang-guide',
        title: 'Speaker Rental Da Nang: Practical Setup Guide',
        description:
          'A practical guide to choosing portable speakers in Da Nang based on event size, location, and budget.',
        seo: {
          title: 'Speaker Rental Da Nang | Fast Setup Guide for Events',
          description:
            'Learn how to choose the right speaker rental in Da Nang, avoid feedback, and run smooth outdoor events.',
          keywords: ['speaker rental da nang', 'portable speaker rental', 'karaoke speaker da nang'],
        },
        content:
          '<h2>Overview</h2><p>This guide helps you pick the right speaker setup in Da Nang for parties, travel groups, and mini events.</p><h2>Quick checklist</h2><ul><li>10-20 guests: compact speaker + 2 microphones.</li><li>20-50 guests: higher output and AUX backup.</li><li>Outdoor events: raise speaker height and clear obstacles.</li></ul>',
      },
      ko: {
        slug: 'danang-seupikeo-daeyeo-gaideu',
        title: '다낭 스피커 대여 실전 가이드',
        description: '행사 규모, 장소, 예산에 맞춰 다낭에서 스피커를 선택하는 방법을 정리했습니다.',
        seo: {
          title: '다낭 스피커 대여 | 행사 운영 체크리스트',
          description: '다낭 스피커 대여 시 출력 선택, 하울링 방지, 야외 세팅 핵심 팁을 확인하세요.',
          keywords: ['다낭 스피커 대여', '다낭 가라오케 스피커', '야외 음향 세팅'],
        },
        content:
          '<h2>개요</h2><p>이 글은 다낭 행사에서 적절한 스피커 구성을 빠르게 고를 수 있도록 돕습니다.</p><h2>빠른 체크리스트</h2><ul><li>10-20명: 소형 스피커 1대 + 무선 마이크 2개.</li><li>20-50명: 더 높은 출력과 AUX 예비선.</li><li>야외: 스피커 높이를 올리고 장애물을 피하세요.</li></ul>',
      },
      zh: {
        slug: 'danang-yinxiang-zulin-zhinan',
        title: '岘港音响租赁实用指南',
        description: '按人数、场地和预算选择岘港便携音响，提升活动体验。',
        seo: {
          title: '岘港音响租赁｜活动快速部署指南',
          description: '了解岘港音响租赁的功率选择、防啸叫技巧与户外活动部署方法。',
          keywords: ['岘港音响租赁', '岘港KTV音响', '户外活动音响'],
        },
        content:
          '<h2>概览</h2><p>本指南帮助你根据活动规模快速选择合适的音响方案。</p><h2>快速清单</h2><ul><li>10-20人：1台便携音响+2支麦克风。</li><li>20-50人：更高功率并准备AUX备份。</li><li>户外场景：提高音箱摆位并避免遮挡。</li></ul>',
      },
      ru: {
        slug: 'arenda-kolonok-danang-gid',
        title: 'Аренда колонок в Дананге: практический гид',
        description: 'Как выбрать акустику в Дананге по формату мероприятия, площадке и бюджету.',
        seo: {
          title: 'Аренда колонок Дананг | Чек-лист для мероприятий',
          description: 'Подбор мощности, защита от фидбэка и быстрая настройка звука для мероприятий в Дананге.',
          keywords: ['аренда колонок дананг', 'караоке колонка дананг', 'звук для мероприятий'],
        },
        content:
          '<h2>Обзор</h2><p>Материал поможет быстро подобрать правильный комплект звука для мероприятий в Дананге.</p><h2>Быстрый чек-лист</h2><ul><li>10-20 гостей: компактная колонка и 2 микрофона.</li><li>20-50 гостей: больше мощности и резерв AUX.</li><li>На улице: ставьте колонку выше и без преград.</li></ul>',
      },
      fr: {
        slug: 'location-enceinte-da-nang-guide',
        title: 'Location d’enceinte à Da Nang : guide pratique',
        description: 'Choisissez la bonne enceinte selon la taille de votre événement, le lieu et le budget.',
        seo: {
          title: 'Location enceinte Da Nang | Guide setup événement',
          description: 'Conseils pour choisir la puissance, éviter le larsen et réussir une installation rapide à Da Nang.',
          keywords: ['location enceinte da nang', 'enceinte karaoke da nang', 'sonorisation événement'],
        },
        content:
          '<h2>Vue d’ensemble</h2><p>Ce guide vous aide à sélectionner rapidement la bonne configuration audio à Da Nang.</p><h2>Checklist rapide</h2><ul><li>10-20 personnes : 1 enceinte compacte + 2 micros.</li><li>20-50 personnes : puissance supérieure + câble AUX de secours.</li><li>Extérieur : placez l’enceinte en hauteur, sans obstacle.</li></ul>',
      },
      it: {
        slug: 'noleggio-casse-da-nang-guida',
        title: 'Noleggio casse a Da Nang: guida pratica',
        description: 'Come scegliere le casse giuste a Da Nang in base a ospiti, location e budget.',
        seo: {
          title: 'Noleggio casse Da Nang | Guida setup eventi',
          description: 'Suggerimenti su potenza, anti-feedback e configurazione veloce per eventi a Da Nang.',
          keywords: ['noleggio casse da nang', 'cassa karaoke da nang', 'audio per eventi'],
        },
        content:
          '<h2>Panoramica</h2><p>Questa guida ti aiuta a scegliere in fretta il setup audio corretto per eventi a Da Nang.</p><h2>Checklist veloce</h2><ul><li>10-20 ospiti: 1 cassa compatta + 2 microfoni.</li><li>20-50 ospiti: più potenza e backup AUX.</li><li>Outdoor: alza la cassa ed evita ostacoli.</li></ul>',
      },
      es: {
        slug: 'alquiler-altavoz-da-nang-guia',
        title: 'Alquiler de altavoces en Da Nang: guía práctica',
        description: 'Guía para elegir altavoces en Da Nang según aforo, espacio y presupuesto.',
        seo: {
          title: 'Alquiler de altavoces Da Nang | Guía rápida para eventos',
          description: 'Aprende a elegir potencia, evitar acoples y montar audio rápido para eventos en Da Nang.',
          keywords: ['alquiler altavoces da nang', 'altavoz karaoke da nang', 'sonido para eventos'],
        },
        content:
          '<h2>Resumen</h2><p>Esta guía te ayuda a elegir el sistema de audio correcto para eventos en Da Nang.</p><h2>Checklist rápido</h2><ul><li>10-20 invitados: altavoz compacto + 2 micrófonos.</li><li>20-50 invitados: mayor potencia y respaldo AUX.</li><li>Exterior: coloca el altavoz en alto y sin obstáculos.</li></ul>',
      },
      th: {
        slug: 'cheao-lao-lam-phong-danang-guide',
        title: 'คู่มือเช่าลำโพงดานังสำหรับงานอีเวนต์',
        description: 'แนวทางเลือกเช่าลำโพงในดานังตามจำนวนคน สถานที่ และงบประมาณ',
        seo: {
          title: 'เช่าลำโพง ดานัง | คู่มือติดตั้งเสียงงานอีเวนต์',
          description: 'เลือกกำลังขับให้เหมาะ ลดเสียงหวีด และติดตั้งระบบเสียงกลางแจ้งในดานังได้อย่างรวดเร็ว',
          keywords: ['เช่าลำโพง ดานัง', 'ลำโพงคาราโอเกะ ดานัง', 'ระบบเสียงงานอีเวนต์'],
        },
        content:
          '<h2>ภาพรวม</h2><p>บทความนี้ช่วยให้คุณเลือกชุดลำโพงที่เหมาะกับงานในดานังได้รวดเร็ว</p><h2>เช็กลิสต์ด่วน</h2><ul><li>10-20 คน: ลำโพงขนาดกะทัดรัด 1 ตัว + ไมค์ 2 ตัว</li><li>20-50 คน: ใช้กำลังขับสูงขึ้นและมีสาย AUX สำรอง</li><li>กลางแจ้ง: วางลำโพงให้สูงและไม่มีสิ่งกีดขวาง</li></ul>',
      },
    },
  },
]

const indexByLocaleSlug = new Map<string, MultilingualArticle>()
const indexById = new Map<string, MultilingualArticle>()

for (const article of multilingualArticles) {
  indexById.set(article.id, article)
  for (const locale of Object.keys(article.translations) as Locale[]) {
    indexByLocaleSlug.set(`${locale}:${article.translations[locale].slug}`, article)
  }
}

export function getArticleByLocaleSlug(locale: Locale, slug: string) {
  return indexByLocaleSlug.get(`${locale}:${slug}`)
}

export function getLocalizedArticle(locale: Locale, slug: string) {
  const article = getArticleByLocaleSlug(locale, slug)
  if (!article) return null
  return {
    ...article,
    localized: article.translations[locale],
  }
}

export function getDefaultLocaleArticleById(id: string) {
  const article = indexById.get(id)
  if (!article) return null
  return article.translations[defaultLocale]
}

export function mapLocalizedSlug(slug: string, fromLocale: Locale, toLocale: Locale) {
  const sourceArticle = getArticleByLocaleSlug(fromLocale, slug)
  if (!sourceArticle) return slug
  return sourceArticle.translations[toLocale].slug
}
