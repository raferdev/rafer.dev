import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Jest = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute hidden h-[90px] w-[90px] rotate-12 justify-center rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-white from-40% via-yellow-600 to-yellow-500 p-2 opacity-50 blur-sm sm:flex lg:h-[100px] lg:w-[100px]',
      className
    )}
  >
    <img
      loading="lazy"
      decoding="async"
      height="50px"
      width="auto"
      className=" m-[10px] object-contain"
      src="./logos/jest.png"
      alt=""
    />
  </div>
)

export { Jest }
