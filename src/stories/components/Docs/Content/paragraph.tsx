import { ParagraphProps } from '@/@types/stories'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Paragraph = ({ className, asChild, ...props }: ParagraphProps) => {
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp
      className={cn(
        '!ml-2 !text-justify !font-sans !text-base !font-normal  !text-muted-foreground md:!text-lg',
        className
      )}
      {...props}
    />
  )
}

export { Paragraph }
