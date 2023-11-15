import { type VariantProps } from 'class-variance-authority'
import { icons } from 'lucide-react'

import { iconVariants } from '@/components/Link/iconVariants'
import { linkVariants } from '@/components/Link/linkVariants'
import { animationVariants } from '@/components/Section/SubSection/animations'

type iconColorProps = VariantProps<typeof iconVariants>

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  iconName?: keyof typeof icons
  iconFillColor?: iconColorProps['color']
}

type SectionTitleProps = {
  className?: string
  children: React.ReactNode
  asChild?: boolean
  props?: React.HTMLAttributes<HTMLHeadingElement>
}

type SectionProps = {
  className?: string
  children: React.ReactNode
  props?: React.HTMLAttributes<HTMLDivElement>
  asChild?: boolean
}

type SectionHeaderProps = {
  className?: string
  children: React.ReactNode
  props?: React.HTMLAttributes<HTMLDivElement>
}

type SectionFooterProps = {
  className?: string
  children: React.ReactNode
  props?: React.HTMLAttributes<HTMLDivElement>
}
type SectionDescriptionProps = {
  className?: string
  children: React.ReactNode
  props?: React.HTMLAttributes<HTMLParagraphElement>
}

type SectionContentProps = {
  className?: string
  children: React.ReactNode
  props?: React.HTMLAttributes<HTMLDivElement>
}

type ReactChildrenProps = {
  children: React.ReactNode
}

type AnimationColor = VariantProps<typeof animationVariants>

interface IllustrationProps extends AnimationBacklightProps {
  children: React.ReactNode
}

type ContainerProps = {
  className?: string
  asChild?: boolean
  children?: React.ReactNode
  props?: React.HTMLAttributes<HTMLDivElement>
}

type AnimationVariantProps = VariantProps<typeof animationVariants>

interface AnimationBacklightProps
  extends Required<Pick<AnimationVariantProps, 'color_big'>>,
    Required<Pick<AnimationVariantProps, 'color_small'>> {}

export {
  LinkProps,
  ReactChildrenProps,
  IllustrationProps,
  AnimationBacklightProps,
  SectionTitleProps,
  SectionProps,
  SectionHeaderProps,
  SectionFooterProps,
  SectionDescriptionProps,
  SectionContentProps,
}
