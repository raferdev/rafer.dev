import * as React from 'react'
import { SectionTitleProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const SectionTitle = ({
  children,
  asChild,
  className,
  ...props
}: SectionTitleProps) => {
  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      className={cn(
        'text-xl font-bold leading-tight tracking-tighter sm:text-[1.30rem] md:text-2xl lg:leading-[1.1]',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { SectionTitle }
