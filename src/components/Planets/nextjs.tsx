import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const NextJs = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[60px] w-[60px] rotate-12 justify-center rounded-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-1 blur-sm sm:h-[70px] sm:w-[70px] lg:h-[90px] lg:w-[90px]',
      className
    )}
  >
    <img
      height="60px"
      width="auto"
      loading="lazy"
      decoding="async"
      className="object-contain"
      src="./logos/nextjs.png"
      alt="Nextjs"
    />
  </div>
)
export { NextJs }
