import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Tailwind = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[90px] w-[90px] rotate-12 justify-center rounded-full bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 p-1 blur-sm lg:h-[100px] lg:w-[100px]',
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
      alt="Tailwind"
    />
  </div>
)

export { Tailwind }
