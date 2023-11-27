import { type VariantProps } from 'class-variance-authority'
import { icons } from 'lucide-react'

import { iconVariants } from '@/components/Link/iconVariants'
import { linkVariants } from '@/components/Link/linkVariants'
import { animationVariants } from '@/components/Section/SubSection/animations'

type iconColorProps = VariantProps<typeof iconVariants>
type AnimationVariantProps = VariantProps<typeof animationVariants>
type AnimationColor = VariantProps<typeof animationVariants>

type Children = {
  children: React.ReactNode
}

type OptChildren = {
  children?: React.ReactNode
}

type OptClassName = {
  className?: string
}

type OptAsChild = {
  asChild?: boolean
}

type OptProps<T> = {
  props?: React.HTMLAttributes<T>
}

type OptChildClassNameProps = {
  children?: React.ReactNode
  className?: string
}

type NextErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  iconName?: keyof typeof icons
  iconFillColor?: iconColorProps['color']
}

interface AnimationBacklightProps
  extends Required<Pick<AnimationVariantProps, 'color_big'>>,
    Required<Pick<AnimationVariantProps, 'color_small'>> {}

interface OptReactCompProps<T>
  extends OptClassName,
    OptChildren,
    OptAsChild,
    OptProps<T> {}

interface IllustrationProps extends AnimationBacklightProps {
  children: React.ReactNode
}
