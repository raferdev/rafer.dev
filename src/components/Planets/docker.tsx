import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Docker = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[75px] w-[75px] rotate-6 justify-center rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-blue-800 p-1 blur-sm sm:h-[80px] sm:w-[80px] lg:h-[100px] lg:w-[100px]',
      className
    )}
  >
    <img
      width="auto"
      height="50px"
      loading="lazy"
      className="object-contain"
      decoding="async"
      src="./logos/docker.png"
      alt="Docker"
    />
  </div>
)

export { Docker }
