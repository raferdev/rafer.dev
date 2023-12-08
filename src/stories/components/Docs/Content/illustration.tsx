import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const IllustrationContent = ({
  className,
  asChild,
  ...props
}: OptReactCompProps<HTMLSpanElement>) => {
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

export { IllustrationContent }
