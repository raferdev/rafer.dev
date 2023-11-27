import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionHeader = ({
  children,
  className,
  ...props
}: OptReactCompProps<HTMLDivElement>) => (
  <div
    className={cn(
      'via-red flex flex-col space-y-1 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-red-400 to-transparent to-50% px-10 py-6 text-neutral-950 md:min-w-[502px]',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { SectionHeader }
