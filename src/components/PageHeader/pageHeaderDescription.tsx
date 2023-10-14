import { cn } from '@/utils/cn'
import Balancer from 'react-wrap-balancer'

const PageHeaderDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <Balancer
      className={cn(
        'max-w-[750px] text-lg text-muted-foreground sm:text-xl',
        className
      )}
      {...props}
    />
  )
}

export { PageHeaderDescription }
