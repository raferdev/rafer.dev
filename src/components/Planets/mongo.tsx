import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const MongoDB = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[90px] w-[90px] rotate-12 justify-center rounded-full bg-gradient-to-b from-emerald-500 to-lime-600 p-1 blur-sm lg:h-[100px] lg:w-[100px]',
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
