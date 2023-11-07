import * as React from 'react'
import { SectionDescriptionProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionDescription = ({
  className,
  children,
  ...props
}: SectionDescriptionProps) => (
  <p
    className={cn(
      'max-w-[750px] text-lg text-muted-foreground sm:text-[1.15rem] md:text-xl',
      className
    )}
    {...props}
  >
    {children}
  </p>
)

export { SectionDescription }
