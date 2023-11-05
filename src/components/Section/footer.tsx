import * as React from 'react'
import { SectionFooterProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionFooter = ({
  children,
  className,
  ...props
}: SectionFooterProps) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props}>
    {children}
  </div>
)

export { SectionFooter }
