import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionHeader = ({
  children,
  className,
  ...props
}: OptReactCompProps<HTMLDivElement>) => (
  <div
    className={cn(
      'relative flex flex-col space-y-1 px-10 py-6 text-8xl font-extrabold text-white  md:min-w-[502px]',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { SectionHeader }
