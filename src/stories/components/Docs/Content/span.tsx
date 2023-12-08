import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Span = ({
  className,
  asChild,
  ...props
}: OptReactCompProps<HTMLSpanElement>) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(
        '!font-sans !text-lg  !font-bold !text-neutral-800',
        className
      )}
      {...props}
    />
  )
}

export { Span }
