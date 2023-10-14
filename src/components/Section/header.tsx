import * as React from 'react'
import { cn } from '@/utils/cn'

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
SectionHeader.displayName = 'SectionHeader'

export { SectionHeader }
