import * as React from 'react'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      ref={ref}
      className={cn('box-border h-[5.5rem] w-full', className)}
      {...props}
    />
  )
})

const Title = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!font-sans !text-xl !font-bold !leading-tight !tracking-tighter !text-foreground md:!text-2xl md:!leading-[1.1]',
        className
      )}
      {...props}
    />
  )
})

Title.displayName = 'Title'

const SubTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!border-0 !font-sans !text-lg !font-bold !text-secondary md:!text-xl',
        className
      )}
      {...props}
    />
  )
})

SubTitle.displayName = 'SubTitle'

const Heading = {
  Container,
  Title,
  SubTitle,
}

export { Heading }
