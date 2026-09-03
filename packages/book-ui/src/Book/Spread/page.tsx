import { cn } from '../../cn'
import { OptReactCompProps } from '../../components'

const SpreadPage = ({
  children,
  className,
  ...props
}: OptReactCompProps<HTMLDivElement>) => (
  <div
    className={cn(
      'bg-paper relative flex h-full flex-col overflow-hidden p-11 pb-20 md:p-14 md:pb-24',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { SpreadPage }
