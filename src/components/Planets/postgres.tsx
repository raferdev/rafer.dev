import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Postgres = ({ className }: OptClassName) => (
  <div
    className={cn(
      'flex h-[100px] w-[100px] justify-center rounded-full bg-slate-50 p-2',
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
