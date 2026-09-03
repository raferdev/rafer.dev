import { cn } from '../../cn'
import { OptReactCompProps } from '../../components'

const SpreadCard = ({
  children,
  className,
  ...props
}: OptReactCompProps<HTMLDivElement>) => (
  <div
    className={cn(
      'book-page-card grid h-full w-full overflow-hidden rounded-[5px] shadow-[0_24px_60px_rgba(28,31,38,0.20),0_3px_10px_rgba(28,31,38,0.10)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { SpreadCard }
