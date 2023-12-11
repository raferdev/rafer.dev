import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const NextJs = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[60px] w-[60px] rotate-12 justify-center rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-white p-1 opacity-70 blur-sm sm:h-[70px] sm:w-[70px] lg:h-[90px] lg:w-[90px]',
      className
    )}
  >
    <img
      height="96"
      width="96"
      loading="lazy"
      decoding="async"
      className="h-auto w-full object-contain"
      src="./logos/nextjs.png"
      alt=""
    />
  </div>
)
export { NextJs }
