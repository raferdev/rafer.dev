import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const MongoDB = ({ className }: OptClassName) => (
  <div
    className={cn(
      'flex h-[80px] w-[80px] justify-center rounded-full bg-slate-50 p-2',
      className
    )}
  >
    <img
      height="50px"
      width="auto"
      loading="lazy"
      decoding="async"
      className="object-contain"
      src="./logos/mongo.png"
      alt="Mongodb"
    />
  </div>
)
export { MongoDB }
