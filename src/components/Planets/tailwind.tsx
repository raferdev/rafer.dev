import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Tailwind = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[90px] w-[90px] rotate-12 justify-center rounded-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-white via-blue-800 to-purple-600 p-2 opacity-60 blur-sm lg:h-[130px] lg:w-[130px]',
      className
    )}
  >
    <img
      height="50px"
      width="auto"
      loading="lazy"
      className="object-contain"
      decoding="async"
      src="./logos/tailwind.png"
      alt=""
    />
  </div>
)

export { Tailwind }
