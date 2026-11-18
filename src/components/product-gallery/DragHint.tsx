import { Hand, MoveHorizontal } from 'lucide-react'
import styles from './DragHint.module.css'

export default function DragHint() {
  return (
    <div
      data-drag-hint=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center gap-4"
    >
      <div
        className={`${styles.swipe} flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-white shadow-lg backdrop-blur-sm`}
      >
        <MoveHorizontal className="h-5 w-10" strokeWidth={1.5} />
        <Hand
          className={`${styles.hand} h-9 w-9 fill-white stroke-gray-900`}
          strokeWidth={1.5}
        />
      </div>
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-white shadow-lg backdrop-blur-sm">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-14 w-14"
        >
          <g className={styles.pinchStart}>
            <path
              d="M22 22 9 9m0 10V9h10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="25" cy="25" r="5" fill="white" stroke="none" />
            <circle cx="25" cy="25" r="9" strokeOpacity=".4" />
          </g>
          <g className={styles.pinchEnd}>
            <path
              d="m42 42 13 13m-10 0h10V45"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="39" cy="39" r="5" fill="white" stroke="none" />
            <circle cx="39" cy="39" r="9" strokeOpacity=".4" />
          </g>
        </svg>
      </div>
    </div>
  )
}
