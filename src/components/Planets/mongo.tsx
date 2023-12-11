import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const MongoDB = ({ className }: OptClassName) => (
  <div
    className={cn(
      'from-20 absolute flex h-[70px] w-[70px] -rotate-45 justify-center  rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-white from-10% via-emerald-500 to-lime-800 p-1 opacity-50 blur-sm lg:h-[120px] lg:w-[120px]',
      className
    )}
  >
    <img
      height="50"
      width="24"
      loading="lazy"
      decoding="async"
      className="h-auto w-full object-contain"
      src="./logos/mongo.png"
      alt=""
    />
  </div>
)
export { MongoDB }
