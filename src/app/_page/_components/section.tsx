import React from 'react'
import { cn } from '@/utils/cn'

export const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      'flex w-full flex-wrap items-center gap-x-8 px-14',
      className
    )}
    {...props}
  />
))

Section.displayName = 'Section'
