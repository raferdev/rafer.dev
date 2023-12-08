import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const SubTopic = ({
  className,
  asChild,
  ...props
}: OptReactCompProps<HTMLHeadingElement>) => {
  const Comp = asChild ? Slot : 'h4'

  return (
    <Comp
      className={cn(
        '!m-0 !ml-2 !font-sans !text-lg !font-normal !text-neutral-800',
        className
      )}
      {...props}
    />
  )
}

export { SubTopic }
