import * as React from 'react'
import { cn } from '@/utils/cn'

const SectionTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]',
      className
    )}
    {...props}
  />
))
SectionTitle.displayName = 'SectionTitle'

export { SectionTitle }
