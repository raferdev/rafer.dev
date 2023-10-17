import { type VariantProps } from 'class-variance-authority'
import { icons } from 'lucide-react'

import { iconVariants } from '@/components/Link/iconVariants'
import { linkVariants } from '@/components/Link/linkVariants'

type iconColorProps = VariantProps<typeof iconVariants>

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  label?: string
  iconName?: keyof typeof icons
  iconVariant?: iconColorProps['variant']
  iconFillColor?: iconColorProps['color']
}
