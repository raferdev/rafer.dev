import { TitleProps } from '@/@types/stories'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const Title = ({ className, asChild, ...props }: TitleProps) => {
  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      className={cn(
        '!font-sans !text-xl !font-bold !leading-tight !tracking-tighter !text-foreground md:!text-2xl md:!leading-[1.1]',
        className
      )}
      {...props}
    />
  )
}

export { Title }
