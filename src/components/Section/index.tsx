import * as React from 'react'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

import { SectionContent } from './content'
import { SectionDescription } from './description'
import { SectionFooter } from './footer'
import { SectionHeader } from './header'
import { SectionTitle } from './title'

const Container = React.forwardRef<
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

Container.displayName = 'Section'

const Section = {
  Container,
  Header: SectionHeader,
  Footer: SectionFooter,
  Title: SectionTitle,
  Description: SectionDescription,
  Content: SectionContent,
}

export { Section }
