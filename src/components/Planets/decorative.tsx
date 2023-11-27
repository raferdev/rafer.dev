import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Decorative = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[30px] w-[30px] justify-center rounded-full bg-red-600',
      className
    )}
  ></div>
)

export { Decorative }
