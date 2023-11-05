import { IllustrationProps, ReactChildrenProps } from '@/@types/components'

import {
  AnimationBacklightGray900,
  AnimationBacklightGreen700,
  AnimationBacklightRose400,
} from './animations'

const Container = ({ children }: ReactChildrenProps) => (
  <div className="flex flex-col items-center gap-16 md:grid md:grid-cols-section-1 md:gap-0">
    {children}
  </div>
)

const Illustration = ({ children, animationColor }: IllustrationProps) => (
  <div className="relative flex justify-center">
    {animationColor === 'gray-900' && <AnimationBacklightGray900 />}
    {animationColor === 'green-700' && <AnimationBacklightGreen700 />}
    {animationColor === 'rose-400' && <AnimationBacklightRose400 />}
    {children}
  </div>
)

const Description = ({ children }: ReactChildrenProps) => (
  <div className="pl-4">{children}</div>
)

const Content = {
  Container,
  Illustration,
  Description,
}

export { Content }
