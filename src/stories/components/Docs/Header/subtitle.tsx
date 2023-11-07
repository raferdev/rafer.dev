import { TitleProps } from '@/@types/stories'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const SubTitle = ({ className, asChild, ...props }: TitleProps) => {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={cn(
        '!border-0 !font-sans !text-lg !font-bold !text-secondary md:!text-xl',
        className
      )}
      {...props}
    />
  )
}

export { SubTitle }
