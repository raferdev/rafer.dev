import * as React from 'react'
import { cn } from '@/utils/cn'

const P = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return <p ref={ref} className={cn('!text-lg', className)} {...props} />
})

P.displayName = 'PageTexting.P'

const Span = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('!border-0 !text-stone-700', className)}
      {...props}
    />
  )
})

Span.displayName = 'PageTexting.Span'

export { P, Span }
