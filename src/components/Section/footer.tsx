import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionFooter = ({
  children,
  className,
  ...props
}: OptReactCompProps<HTMLDivElement>) => (
  <div
    className={cn('flex items-center p-6 pt-0 text-white', className)}
    {...props}
  >
    {children}
  </div>
)

export { SectionFooter }
