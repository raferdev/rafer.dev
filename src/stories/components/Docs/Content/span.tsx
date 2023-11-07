import { SpanProps } from '@/@types/stories'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Span = ({ className, asChild, ...props }: SpanProps) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(
        '!font-sans !text-lg  !font-bold !text-stone-900',
        className
      )}
      {...props}
    />
  )
}

export { Span }