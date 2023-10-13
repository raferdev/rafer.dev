import * as React from 'react'
import { cn } from '@/utils/cn'

export const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'max-w-[750px] text-lg text-muted-foreground sm:text-xl',
      className
    )}
    {...props}
  />
))
SectionDescription.displayName = 'SectionDescription'
