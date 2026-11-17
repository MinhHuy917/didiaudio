import { Hand } from 'lucide-react'
import styles from './DragHint.module.css'

export default function DragHint({ animated = true }: { animated?: boolean }) {
  return (
    <div
      data-drag-hint=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
    >
      <div
        className={`${styles.hand} ${animated ? styles.animate : ''} translate-x-8`}
      >
        <div className="rounded-full bg-black/30 p-3 ring-1 ring-white/30">
          <Hand
            className="h-10 w-10 fill-white stroke-gray-900"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  )
}
