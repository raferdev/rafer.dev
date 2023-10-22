import * as React from 'react'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

import { Content } from './content'
import { Heading } from './heading'

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      ref={ref}
      className={cn(
        'flex min-h-[17rem] w-full flex-wrap items-center gap-x-8 rounded-xl px-0 sm:px-14',
        className
      )}
      {...props}
    />
  )
})

Container.displayName = 'Docs.Container'

const Docs = {
  Container,
  Heading,
  Content,
}

export { Docs }
