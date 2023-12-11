import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Postgres = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute -z-10 flex h-[90px] w-[90px] rotate-12 justify-center rounded-full bg-gradient-to-tr from-sky-400 to-blue-800 p-[12px] opacity-60 blur-sm',
      className
    )}
  >
    <img
      height="50"
      width="48"
      loading="lazy"
      decoding="async"
      className="h-auto w-full object-contain"
      src="./logos/postgresql.png"
      alt=""
    />
  </div>
)

export { Postgres }
