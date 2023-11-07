import { SubTopicProps } from '@/@types/stories'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const SubTopic = ({ className, asChild, ...props }: SubTopicProps) => {
  const Comp = asChild ? Slot : 'h4'

  return (
    <Comp
      className={cn(
        '!m-0 !ml-2 !font-sans !text-lg !font-bold !text-secondary',
        className
      )}
      {...props}
    />
  )
}

export { SubTopic }
