import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Container = ({
  className,
  asChild = false,
  ...props
}: OptReactCompProps<HTMLDivElement>) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(
        'custom-scroll box-border flex h-full w-full flex-col gap-8 overflow-y-scroll text-clip',
        className
      )}
      {...props}
    />
  )
}

export { Container }
