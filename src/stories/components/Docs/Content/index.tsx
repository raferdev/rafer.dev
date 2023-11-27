import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

import { MainContent } from './main'
import { Paragraph } from './paragraph'
import { Span } from './span'
import { SubTopic } from './subTopic'
import { Topic } from './topic'

const Container = ({
  className,
  asChild = false,
  ...props
}: OptReactCompProps<HTMLDivElement>) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(
        'custom-scroll box-border flex h-full w-full flex-col gap-8 overflow-y-scroll text-clip !text-base md:!text-lg',
        className
      )}
      {...props}
    />
  )
}

const Content = {
  Container,
  Main: MainContent,
  Paragraph,
  Span,
  SubTopic,
  Topic,
}

export { Content }
