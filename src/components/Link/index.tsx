import * as React from 'react'
import { LinkProps } from '@/@types/components'
import { cn } from '@/utils/cn'

import { icons } from '../../../node_modules/lucide-react'
import { iconVariants } from './iconVariants'
import { linkVariants } from './linkVariants'

const Link = ({
  className,
  iconFillColor,
  variant = 'decorated',
  iconName,
  hover,
  color,
  text,
  background,
  size,
  children,
  ...props
}: LinkProps) => {
  const Icon = iconName ? icons[iconName] : null
  const LinkPointer = icons['ArrowUpRight']

  return (
    <a
      className={cn(
        linkVariants({ variant, text, size, className, background, hover })
      )}
      {...props}
    >
      <span>
        {Icon && (
          <Icon
            size={22}
            strokeWidth={1.8}
            color={color || '#171717'}
            className={cn(iconVariants({ color: iconFillColor }))}
          />
        )}
        {children}
      </span>
      {variant === 'decorated' && (
        <LinkPointer
          size={22}
          strokeWidth={2}
          color="#fff"
          className="absolute right-4 space-x-2 opacity-0 group-hover:opacity-100"
        />
      )}
    </a>
  )
}

export { Link }
