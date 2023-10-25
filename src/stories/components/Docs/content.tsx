import * as React from 'react'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      ref={ref}
      className={cn('grid h-full w-full grid-cols-1 md:grid-cols-2', className)}
      {...props}
    />
  )
})

Container.displayName = 'Docs.Content.Container'

const Topic = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'h3'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!m-0 !text-lg !font-extrabold !text-foreground md:!text-xl',
        className
      )}
      {...props}
    />
  )
})

Topic.displayName = 'Topic'

const SubTopic = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'h4'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!m-0 !ml-2 !text-lg !font-extrabold !text-secondary',
        className
      )}
      {...props}
    />
  )
})

SubTopic.displayName = 'SubTopic'

const Paragraph = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!text-md !ml-2 !text-justify !font-thin !text-muted-foreground md:!text-lg',
        className
      )}
      {...props}
    />
  )
})

const Span = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      ref={ref}
      className={cn('!text-lg !font-extrabold !text-stone-900', className)}
      {...props}
    />
  )
})

Paragraph.displayName = 'Span'

const Content = {
  Container,
  Topic,
  SubTopic,
  Paragraph,
  Span,
}

export { Content }
