import { cn } from '@/utils/cn'

const PageHeaderHeading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        'text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]',
        className
      )}
      {...props}
    />
  )
}

export { PageHeaderHeading }
