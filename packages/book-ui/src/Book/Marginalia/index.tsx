import { cn } from '../../cn'
import { OptReactCompProps } from '../../components'

const Marginalia = ({
  children,
  className,
  ...props
}: OptReactCompProps<HTMLDivElement>) => (
  <div
    className={cn(
      'border-book-pen-soft font-script text-book-pen mt-6 max-w-[34ch] border-l-2 pl-4 text-xl leading-snug opacity-90',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { Marginalia }
