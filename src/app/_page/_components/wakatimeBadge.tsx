/* eslint-disable @next/next/no-img-element */
'use client'

import { cn } from '@/utils/cn'

import { Link } from '@/components/Link'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const WakatimeBadge = ({
  className = '',
  profileLink,
  badgeLink,
  ...props
}: {
  className?: string
  props?: ImageProps
  profileLink: string
  badgeLink: string
}) => {
  return (
    <Link className="p-0" href={profileLink} variant="outline" size="none">
      <img
        loading="lazy"
        decoding="async"
        src={badgeLink}
        alt="Total time coded since Jan 17 2022"
        className={cn('object-cover', className)}
        {...props}
      />
    </Link>
  )
}
