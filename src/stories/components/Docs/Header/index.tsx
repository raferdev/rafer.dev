import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { Slot } from '@radix-ui/react-slot'

import { SubTitle } from './subtitle'
import { Title } from './title'

const Container = ({
  className,
  asChild,
  ...props
}: OptReactCompProps<HTMLDivElement>) => {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn(
        'box-border grid h-[12rem] w-full grid-cols-1 md:grid-cols-2',
        className
      )}
      {...props}
    />
  )
}

const Header = {
  Container,
  SubTitle,
  Title,
}

export { Header }
