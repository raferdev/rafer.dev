import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const stroke = {
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
}

const Underline = ({ className }: OptClassName) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 240 14"
    preserveAspectRatio="none"
    className={cn('text-pen', className)}
  >
    <path d="M3 9 C 60 3, 150 2, 237 6" strokeWidth="3" {...stroke} />
    <path
      d="M40 12 C 100 8, 170 8, 220 10"
      strokeWidth="1.5"
      opacity="0.55"
      {...stroke}
    />
  </svg>
)

const Arrow = ({ className }: OptClassName) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 120 40"
    className={cn('text-pen', className)}
  >
    <path d="M4 30 C 40 36, 80 28, 114 12" strokeWidth="2" {...stroke} />
    <path d="M100 8 L114 12 L106 24" strokeWidth="2" {...stroke} />
  </svg>
)

const Scribble = { Underline, Arrow }

export { Scribble }
