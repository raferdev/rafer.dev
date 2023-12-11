import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Docker = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[75px] w-[75px] rotate-6 justify-center rounded-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white from-70% via-gray-600 to-blue-800 p-1 opacity-50 blur-sm sm:h-[80px] sm:w-[80px] lg:h-[200px] lg:w-[200px]',
      className
    )}
  >
    <img
      width="88"
      height="50"
      loading="lazy"
      className="h-auto w-full object-contain"
      decoding="async"
      src="./logos/docker.png"
      alt=""
    />
  </div>
)

export { Docker }
