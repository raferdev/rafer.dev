import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Topic = ({
  className,
  asChild,
  ...props
}: OptReactCompProps<HTMLHeadingElement>) => {
  const Comp = asChild ? Slot : 'h3'

  return (
    <Comp
      className={cn(
        '!m-0 !font-sans !text-lg !font-normal !text-neutral-800 md:!text-xl',
        className
      )}
      {...props}
    />
  )
}

export { Topic }
