// Importing the bare `lucide-react` specifier here breaks Next's webpack
// build under transpilePackages (it tries to resolve a nonexistent
// dist/esm/icons/icons path) — reaching directly into the package avoids it.
import { icons } from '../../node_modules/lucide-react'
import { cn } from '../cn'
import { LinkProps } from '../components'
import { iconVariants } from './iconVariants'
import { linkVariants } from './linkVariants'

const Link = ({
  className,
  iconFillColor,
  variant = 'decorated',
  iconName,
  hover,
  iconColor,
  textColor,
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
        linkVariants({ variant, textColor, size, className, background, hover })
      )}
      {...props}
    >
      <span>
        {Icon && (
          <Icon
            size={22}
            strokeWidth={1.4}
            color={iconColor || '#171717'}
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
