import * as React from 'react'
import { cn } from '@/utils/cn'

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('box-border h-full w-full', className)}
      {...props}
    />
  )
})

const Title1 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        '!text-xl !font-bold !leading-tight !tracking-tighter md:!text-2xl lg:!leading-[1.1]',
        className
      )}
      {...props}
    />
  )
})

Title1.displayName = 'PageHeading.H1'

const Title2 = React.forwardRef<
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

Title2.displayName = 'PageHeading.H2'

const Title3 = React.forwardRef<
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

Title3.displayName = 'PageHeading.H3'

const Heading = {
  Container,
  Title1,
  Title2,
  Title3,
}

export { Heading }
