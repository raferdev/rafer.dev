import * as React from 'react'
import { LinkProps } from '@/@types/components'
import { cn } from '@/utils/cn'

import { icons } from '../../../node_modules/lucide-react'
import { iconVariants } from './iconVariants'
import { linkVariants } from './linkVariants'

const Link = ({
  className,
  iconFillColor,
  variant = 'default',
  iconName,
  size,
  children,
  ...props
}: LinkProps) => {
  const Icon = iconName ? icons[iconName] : null
  const LinkPointer = icons['MousePointerClick']

  return (
    <>
      <a className={cn(linkVariants({ variant, size, className }))} {...props}>
        <span className="group-hover:text-accent">
          {Icon && (
            <Icon
              size={22}
              strokeWidth={1.6}
              color="#0e0c0c"
              className={cn(iconVariants({ color: iconFillColor }))}
            />
          )}
          {children}
        </span>
        {variant === 'default' && (
          <LinkPointer
            size={22}
            strokeWidth={2}
            color="#67e8f9"
            className="absolute right-4 space-x-2 opacity-0 group-hover:opacity-100"
          />
        )}
      </a>
    </>
  )
}

export { Link }
