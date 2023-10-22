import * as React from 'react'
import { cn } from '@/utils/cn'

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        '!border-0 !text-2xl !font-extrabold !text-stone-900',
        className
      )}
      {...props}
    />
  )
})

const H1 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        '!border-0 !text-2xl !font-extrabold !text-stone-900',
        className
      )}
      {...props}
    />
  )
})

H1.displayName = 'PageHeading.H1'

const H2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        '!border-0 !text-xl !font-extrabold !text-stone-900',
        className
      )}
      {...props}
    />
  )
})

H2.displayName = 'PageHeading.H2'

const H3 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('!text-lg !font-extrabold !text-stone-900', className)}
      {...props}
    />
  )
})

H3.displayName = 'PageHeading.H3'

export { H1, H2, H3 }
