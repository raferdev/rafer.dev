import * as React from 'react'
import { SectionContentProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionContent = ({
  children,
  className,
  ...props
}: SectionContentProps) => (
  <div
    className={cn(
      'flex w-full flex-col gap-8 border-0 bg-inherit p-6 pl-4 pt-0 indent-2 text-base font-normal text-neutral-800 shadow-none sm:text-lg md:min-h-[200px] md:grid-rows-1 md:gap-y-16 lg:grid lg:grid-cols-section-content lg:gap-8',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { SectionContent }
