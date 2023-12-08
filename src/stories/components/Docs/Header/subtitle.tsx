import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const SubTitle = ({
  className,
  asChild,
  ...props
}: OptReactCompProps<HTMLHeadingElement>) => {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={cn(
        '!border-0 !font-sans !text-lg !font-normal !text-neutral-700 drop-shadow-lg md:!text-xl',
        className
      )}
      {...props}
    />
  )
}

export { SubTitle }
