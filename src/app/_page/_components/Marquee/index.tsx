import { MarqueeProps } from '@/@types/elements'
import { cn } from '@/utils/cn'

import { LogosContainer } from './logosContainer'

const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn(
      'relative flex h-[70px] w-full select-none items-center gap-x-4 border-gray-400 py-[10px] blur-sm',
      className
    )}
    {...props}
  >
    <span className="sr-only">Some of my main stack </span>
    <div className="absolute left-0 top-0 h-full w-full bg-zinc-400"></div>
    <LogosContainer />
  </div>
)

export { Marquee }
