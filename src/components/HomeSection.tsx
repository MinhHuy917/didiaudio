import type { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import styles from './HomeSection.module.css'

type Tone =
  | 'hero'
  | 'photos'
  | 'product'
  | 'process'
  | 'resources'
  | 'explore'
  | 'faq'

const widths = {
  narrow: 'max-w-xl',
  medium: 'max-w-4xl',
  wide: 'max-w-6xl',
}

export function HomeSection({
  tone,
  width = 'wide',
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'section'> & {
  tone: Tone
  width?: keyof typeof widths
}) {
  return (
    <section
      {...props}
      className={clsx(
        'relative isolate w-full scroll-mt-28',
        tone === 'hero'
          ? 'pb-6 pt-32 sm:pb-8 sm:pt-36'
          : 'border-t border-white/10 py-12 sm:py-16 lg:py-20',
        styles[tone],
        className,
      )}
    >
      <div className={clsx('mx-auto px-4 sm:px-6', widths[width])}>
        {children}
      </div>
    </section>
  )
}
