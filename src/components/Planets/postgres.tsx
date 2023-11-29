import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Postgres = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute -z-10 flex h-[90px] w-[90px] rotate-12 justify-center rounded-full bg-gradient-to-tr from-sky-400 to-blue-800 p-[12px] blur-sm',
      className
    )}
  >
    <img
      height="50px"
      width="auto"
      loading="lazy"
      decoding="async"
      className="object-contain"
      src="./logos/postgresql.png"
      alt="Postgresql"
    />
  </div>
)

export { Postgres }
