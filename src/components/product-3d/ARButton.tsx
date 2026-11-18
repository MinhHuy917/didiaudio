import type { Ref } from 'react'

export function ARButton({
  active,
  onClick,
  buttonRef,
  label = 'AR · Kích hoạt xem 360°',
}: {
  active: boolean
  onClick: () => void
  buttonRef?: Ref<HTMLButtonElement>
  label?: string
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`absolute bottom-3 right-3 z-20 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#f32d0b] bg-white px-3 py-2 text-[#f32d0b] shadow-lg transition-opacity focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${active ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        className="h-9 w-9"
      >
        <path
          d="m24 3 18 10.5v21L24 45 6 34.5v-21L24 3Z"
          strokeDasharray="7 4"
          strokeWidth="2"
        />
        <path d="M24 3v42M6 13.5l36 21M42 13.5 6 34.5" />
        <path
          d="m19.5 5.6 4.5-2.6 4.5 2.6M6 19v-5.5l4.5-2.6M37.5 10.9l4.5 2.6V19M42 29v5.5l-4.5 2.6M28.5 42.4 24 45l-4.5-2.6M10.5 37.1 6 34.5V29"
          strokeWidth="2"
        />
      </svg>
      <span aria-hidden="true" className="text-3xl font-normal leading-none">
        AR
      </span>
    </button>
  )
}
