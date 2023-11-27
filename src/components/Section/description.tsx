import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionDescription = ({
  className,
  children,
  ...props
}: OptReactCompProps<HTMLParagraphElement>) => (
  <p
    className={cn(
      'tex-neutral-900 max-w-[750px] text-lg sm:text-[1.15rem] md:text-xl',
      className
    )}
    {...props}
  >
    {children}
  </p>
)

export { SectionDescription }
