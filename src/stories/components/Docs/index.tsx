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
        'box-border grid h-[calc(100vh-128px)] w-full grid-cols-1 flex-col items-center justify-center gap-8 overflow-hidden text-clip md:grid-cols-2',
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
