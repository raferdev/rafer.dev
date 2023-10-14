import * as React from 'react'
import { LinkProps } from '@/@types/components'
import { cn } from '@/utils/cn'

import { icons } from '../../../node_modules/lucide-react'
import { linkVariants } from './linkVariants'

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, iconFill, label, variant, iconName, size, children, ...props },
    ref
  ) => {
    const LucideIcon = iconName ? icons[iconName] : null

    return (
      <>
        <a
          className={cn(linkVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {label && (
            <p className="flex text-sm font-bold text-muted-foreground ">
              {label}
            </p>
          )}
          <span className="ml-2 flex w-full text-center font-normal text-foreground">
            {LucideIcon && (
              <LucideIcon size={16} className={cn('mr-2', iconFill)} />
            )}
            {children}
          </span>
        </a>
      </>
    )
  }
)

Link.displayName = 'Link'

export { Link }
