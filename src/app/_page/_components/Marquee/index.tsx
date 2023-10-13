import React from 'react'
import { cn } from '@/utils/cn'

import { LogosContainer } from './logosContainer'

export const Marquee = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-[90px] w-full items-center gap-x-4 overflow-hidden bg-primary py-[10px]',
      className
    )}
    {...props}
  >
    <span className="sr-only">Some of my main stack </span>
    <LogosContainer />
    <LogosContainer />
  </div>
))

Marquee.displayName = 'Marquee'
