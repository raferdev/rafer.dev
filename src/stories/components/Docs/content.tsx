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
      className={cn(
        'custom-scroll box-border flex h-full w-full flex-col gap-8 overflow-y-scroll text-clip',
        className
      )}
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
        '!m-0 !font-sans !text-lg !font-bold !text-foreground md:!text-xl',
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
        '!m-0 !ml-2 !font-sans !text-lg !font-bold !text-secondary',
        className
      )}
      {...props}
    />
  )
})

SubTopic.displayName = 'SubTopic'

const Paragraph = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLParagraphElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!text-md !ml-2 !text-justify !font-sans  !font-light !text-muted-foreground md:!text-lg',
        className
      )}
      {...props}
    />
  )
})

const Span = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLSpanElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!font-sans !text-lg  !font-bold !text-stone-900',
        className
      )}
      {...props}
    />
  )
})

const MainContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!font-sans !text-lg  !font-bold !text-stone-900',
        className
      )}
      {...props}
    />
  )
})

const IllustrationContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      ref={ref}
      className={cn(
        '!font-sans !text-lg  !font-bold !text-stone-900',
        className
      )}
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
  MainContent,
  IllustrationContent,
}

export { Content }
