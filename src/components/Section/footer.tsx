import * as React from 'react'
import { cn } from '@/utils/cn'

const SectionFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
SectionFooter.displayName = 'SectionFooter'

export { SectionFooter }
