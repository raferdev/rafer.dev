import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { type VariantProps } from 'class-variance-authority'
import { icons } from 'lucide-react'

import { iconVariants } from './Link/iconVariants'
import { linkVariants } from './Link/linkVariants'

type iconColorProps = VariantProps<typeof iconVariants>

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

interface IllustrationImageProps extends OptClassName {
  src: StaticImport
  width?: number
  height?: number
  alt?: string
}

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  iconName?: keyof typeof icons
  iconFillColor?: iconColorProps['color']
  iconColor?: `#${string}`
}

interface OptReactCompProps<T>
  extends OptClassName,
    OptChildren,
    OptAsChild,
    OptProps<T> {}
