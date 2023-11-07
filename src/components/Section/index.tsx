import * as React from 'react'
import { SectionProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

import { SectionContent } from './content'
import { SectionDescription } from './description'
import { SectionFooter } from './footer'
import { SectionHeader } from './header'
import { SubSection } from './SubSection'
import { SectionTitle } from './title'

const Container = ({
  children,
  className,
  asChild = false,
  ...props
}: SectionProps) => {
  const Comp = asChild ? Slot : 'section'
  return (
    <Comp
      className={cn(
        'flex  w-full max-w-[90rem] flex-wrap items-center gap-8 rounded-xl px-0 sm:px-14 md:min-h-[17rem] md:gap-y-10',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

const Section = {
  Container,
  Header: SectionHeader,
  Footer: SectionFooter,
  Title: SectionTitle,
  Description: SectionDescription,
  Content: SectionContent,
  SubSection,
}

export { Section }
