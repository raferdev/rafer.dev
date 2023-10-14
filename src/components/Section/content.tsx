import * as React from 'react'
import { cn } from '@/utils/cn'

const SectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))

SectionContent.displayName = 'SectionContent'

export { SectionContent }
