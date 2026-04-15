import { localeMeta, locales, type Locale, withLocalePrefix } from '@/lib/i18n'

export const SITE_URL = 'https://www.didi-audio.com'

export function buildLocaleAlternates(pathname: string) {
  const languages: Record<string, string> = {}

  for (const locale of locales) {
    const href = `${SITE_URL}${withLocalePrefix(locale, pathname)}`
    languages[localeMeta[locale].languageTag] = href
  }

  languages['x-default'] = `${SITE_URL}${pathname}`
  return languages
}
