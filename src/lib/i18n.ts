export const locales = ['vi', 'en', 'ko', 'zh', 'ru', 'fr', 'it', 'es', 'th'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'vi'
export const localePrefixSet = new Set(locales.filter((locale) => locale !== defaultLocale))

export const localeMeta: Record<Locale, { label: string; flag: string; languageTag: string; ogLocale: string }> = {
  vi: { label: 'Tiếng Việt', flag: '🇻🇳', languageTag: 'vi-VN', ogLocale: 'vi_VN' },
  en: { label: 'English', flag: '🇺🇸', languageTag: 'en-US', ogLocale: 'en_US' },
  ko: { label: '한국어', flag: '🇰🇷', languageTag: 'ko-KR', ogLocale: 'ko_KR' },
  zh: { label: '简体中文', flag: '🇨🇳', languageTag: 'zh-CN', ogLocale: 'zh_CN' },
  ru: { label: 'Русский', flag: '🇷🇺', languageTag: 'ru-RU', ogLocale: 'ru_RU' },
  fr: { label: 'Français', flag: '🇫🇷', languageTag: 'fr-FR', ogLocale: 'fr_FR' },
  it: { label: 'Italiano', flag: '🇮🇹', languageTag: 'it-IT', ogLocale: 'it_IT' },
  es: { label: 'Español', flag: '🇪🇸', languageTag: 'es-ES', ogLocale: 'es_ES' },
  th: { label: 'ไทย', flag: '🇹🇭', languageTag: 'th-TH', ogLocale: 'th_TH' },
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localeFromPath(pathname: string): Locale {
  const maybeLocale = pathname.split('/').filter(Boolean)[0]
  return maybeLocale && isLocale(maybeLocale) ? maybeLocale : defaultLocale
}

export function withLocalePrefix(locale: Locale, pathname: string) {
  if (locale === defaultLocale) return pathname
  if (pathname === '/') return `/${locale}`
  return `/${locale}${pathname}`
}

export function removeLocalePrefix(pathname: string) {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return '/'

  if (isLocale(parts[0])) {
    const next = `/${parts.slice(1).join('/')}`
    return next === '/' ? '/' : next.replace(/\/$/, '')
  }

  return pathname
}
