import * as React from 'react'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'section'
  return (
    <Comp
      ref={ref}
      className={cn(
        'flex w-full flex-wrap items-center gap-x-8 rounded-xl px-0 sm:px-14',
        className
      )}
      {...props}
    />
  )
})

Section.displayName = 'Section'

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

const SectionTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]',
      className
    )}
    {...props}
  />
))
SectionTitle.displayName = 'SectionTitle'

const SectionDescription = React.forwardRef<
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

const SectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
SectionContent.displayName = 'SectionContent'

const SectionFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
SectionFooter.displayName = 'SectionFooter'

export {
  Section,
  SectionHeader,
  SectionFooter,
  SectionTitle,
  SectionDescription,
  SectionContent,
}
