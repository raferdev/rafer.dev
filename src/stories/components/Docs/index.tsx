import * as React from 'react'
import { ContainerProps } from '@/@types/stories'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

import { Content } from './Content'
import { Header } from './Header'

const Container = ({
  className,
  asChild = false,
  ...props
}: ContainerProps) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(
        'custom-scroll box-border grid h-[calc(100vh-128px)] w-full grid-cols-1 flex-col items-center justify-center gap-8 overflow-hidden overflow-y-scroll text-clip',
        className
      )}
      {...props}
    />
  )
}

const Docs = {
  Container,
  Header,
  Content,
}

export { Docs }
