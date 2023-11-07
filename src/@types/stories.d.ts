import { type VariantProps } from 'class-variance-authority'
import { icons } from 'lucide-react'

import { iconVariants } from '@/components/Link/iconVariants'
import { linkVariants } from '@/components/Link/linkVariants'

type iconProps = VariantProps<typeof iconVariants>
type linkProps = VariantProps<typeof linkVariants>

type _iconColorProps = iconProps['color']
type _iconVariantProps = iconProps['variant']
type _linkVariantProps = linkProps['variant']
type _linkSizeProps = linkProps['size']

type iconColorProps = NonNullable<_iconColorProps>
type iconVariantProps = NonNullable<_iconVariantProps>
type linkVariantProps = NonNullable<_linkVariantProps>
type linkSizeProps = NonNullable<_linkSizeProps>

export interface LinkStoriesProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  label?: string
  iconName?: keyof typeof icons
  iconVariant?: iconColorProps
  iconFillColor?: iconVariantProps
  variant?: linkVariantProps
  size?: linkSizeProps
}

type MainCntentProps = {
  className?: React
  children?: React.ReactNode
  asChild?: boolean
  props: React.HTMLAttributes<HTMLHeadingElement>
}

type IllustrationContentProps = {
  className?: string
  asChild?: boolean
  children?: React.ReactNode
  props?: React.HTMLAttributes<HTMLHeadingElement>
}

type ContainerProps = {
  className?: string
  asChild?: boolean
  children?: React.ReactNode
  props?: React.HTMLAttributes<HTMLDivElement>
}

type ParagraphProps = {
  className?: string
  asChild?: boolean
  children?: React.ReactNode
  props?: React.HTMLAttributes<HTMLParagraphElement>
}

type SpanProps = {
  className?: string
  asChild?: boolean
  children?: React.ReactNode
  props?: React.HTMLAttributes<HTMLSpanElement>
}

type SubTopicProps = {
  className?: string
  asChild?: boolean
  children?: React.ReactNode
  props?: React.HTMLAttributes<HTMLHeadingElement>
}

type TopicProps = {
  className?: string
  asChild?: boolean
  children?: React.ReactNode
  props?: React.HTMLAttributes<HTMLHeadingElement>
}

type TitleProps = {
  className?: string
  children?: React.ReactNode
  asChild?: boolean
  props?: React.HTMLAttributes<HTMLHeadingElement>
}
