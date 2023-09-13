/* eslint-disable @next/next/no-img-element */
'use client'

import { cn } from '@/utils/cn'

import { Button } from '@/components/Button'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const WakatimeBadge = ({
  className = '',
  ...props
}: {
  className?: string
  props?: ImageProps
}) => {
  return (
    <Button variant="outline" asChild>
      <a href="https://wakatime.com/@ac875cb4-d4ee-453f-b6fc-44cb2103c59d">
        <img
          src="https://wakatime.com/badge/user/ac875cb4-d4ee-453f-b6fc-44cb2103c59d.svg"
          alt="Total time coded since Jan 17 2022"
          className={cn('w-52 object-cover', className)}
          {...props}
        />
      </a>
    </Button>
  )
}
