import * as React from 'react'
import { SectionHeaderProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionHeader = ({
  children,
  className,
  ...props
}: SectionHeaderProps) => (
  <div className={cn('flex flex-col space-y-1 p-6', className)} {...props}>
    {children}
  </div>
)

export { SectionHeader }
