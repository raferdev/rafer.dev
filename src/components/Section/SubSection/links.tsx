import { OptChildClassNameProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const Container = ({ children, className }: OptChildClassNameProps) => (
  <div
    className={cn(
      'grid min-h-[200px] w-full grid-cols-1 grid-rows-3 place-items-center justify-items-center md:gap-2',
      className
    )}
  >
    {children}
  </div>
)
const Links = { Container }

export { Links }
