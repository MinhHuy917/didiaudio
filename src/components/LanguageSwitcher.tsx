'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { mapLocalizedSlug } from '@/data/blog-i18n'
import {
  defaultLocale,
  localeFromPath,
  localeMeta,
  locales,
  removeLocalePrefix,
  type Locale,
  withLocalePrefix,
} from '@/lib/i18n'

function buildLocalizedPath(pathname: string, targetLocale: Locale) {
  const sourceLocale = localeFromPath(pathname)
  const normalizedPath = removeLocalePrefix(pathname)
  const parts = normalizedPath.split('/').filter(Boolean)

  if (parts[0] === 'blog' && parts[1]) {
    const localizedSlug = mapLocalizedSlug(parts[1], sourceLocale, targetLocale)
    return withLocalePrefix(targetLocale, `/blog/${localizedSlug}`)
  }

  return withLocalePrefix(targetLocale, normalizedPath)
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const currentLocale = localeFromPath(pathname)

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/30 p-1 backdrop-blur">
      {locales.map((locale) => {
        const language = localeMeta[locale]
        const href = buildLocalizedPath(pathname, locale)
        const isActive = locale === currentLocale

        return (
          <Link
            key={locale}
            href={href}
            hrefLang={language.languageTag}
            prefetch={false}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.localStorage.setItem('preferred-locale', locale)
                document.cookie = `preferred-locale=${locale}; path=/; max-age=31536000`
              }
            }}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm transition ${
              isActive
                ? 'bg-cyan-500/40 ring-1 ring-cyan-300/60'
                : 'hover:bg-white/10'
            }`}
            title={language.label}
            aria-label={language.label}
          >
            <span role="img" aria-hidden="true">
              {language.flag}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
