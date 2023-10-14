import { type VariantProps } from 'class-variance-authority'
import { icons } from 'lucide-react'

import { linkVariants } from '@/components/Link/linkVariants'

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  label?: string
  iconName?: keyof typeof icons
  iconFill?: `fill-${string}`
}
