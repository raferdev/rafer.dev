import { type VariantProps } from 'class-variance-authority'
import { icons } from 'lucide-react'

import { iconVariants } from '@/components/Link/iconVariants'
import { linkVariants } from '@/components/Link/linkVariants'

type iconColorProps = VariantProps<typeof iconVariants>

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  label?: string
  iconName?: keyof typeof icons
  iconVariant?: iconColorProps['variant']
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

type AnimationColor = 'gray-900' | 'green-700' | 'rose-400'

type IllustrationProps = {
  children: React.ReactNode
  animationColor: AnimationColor
}

export {
  LinkProps,
  ReactChildrenProps,
  IllustrationProps,
  SectionTitleProps,
  SectionProps,
  SectionHeaderProps,
  SectionFooterProps,
  SectionDescriptionProps,
  SectionContentProps,
}
