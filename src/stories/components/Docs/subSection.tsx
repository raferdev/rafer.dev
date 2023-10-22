import * as React from 'react'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const ContentContainer = React.forwardRef<
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

ContentContainer.displayName = 'Docs.Content.Container'

export { ContentContainer }
