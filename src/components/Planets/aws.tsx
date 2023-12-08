import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Aws = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[80px] w-[80px] rotate-6 justify-center rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-white from-40% via-yellow-300 to-pink-300 p-2 opacity-50 blur-sm sm:h-[85px] sm:w-[85px] lg:h-[100px] lg:w-[100px]  ',
      className
    )}
  >
    <img
      loading="lazy"
      decoding="async"
      height="50px"
      className="object-contain"
      width="auto"
      src="./logos/aws.png"
      alt=""
    />
  </div>
)

export { Aws }
