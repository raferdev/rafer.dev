import { TopicProps } from '@/@types/stories'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Topic = ({ className, asChild, ...props }: TopicProps) => {
  const Comp = asChild ? Slot : 'h3'

  return (
    <Comp
      className={cn(
        '!m-0 !font-sans !text-lg !font-bold !text-foreground md:!text-xl',
        className
      )}
      {...props}
    />
  )
}

export { Topic }
