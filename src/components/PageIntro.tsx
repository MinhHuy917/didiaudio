import clsx from 'clsx'

import { Container } from '@/components/Container'

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <div>
        <h1>
          <span className="block !font-[system-ui] font-display text-base font-semibold text-white">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6  block max-w-5xl font-display text-5xl font-medium tracking-tight text-white sm:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl !font-[system-ui] text-xl text-white',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      </div>
    </Container>
  )
}
