import { MainCntentProps } from '@/@types/stories'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

const MainContent = ({ className, asChild, ...props }: MainCntentProps) => {
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

export { MainContent }
