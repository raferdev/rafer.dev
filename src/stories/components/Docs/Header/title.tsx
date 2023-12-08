import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Title = ({
  className,
  asChild,
  ...props
}: OptReactCompProps<HTMLHeadingElement>) => {
  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      className={cn(
        '!font-sans !text-xl  !font-thin !italic !leading-tight !tracking-tighter !text-neutral-800 md:!text-2xl md:!leading-[1.1]',
        className
      )}
      {...props}
    />
  )
}

export { Title }
