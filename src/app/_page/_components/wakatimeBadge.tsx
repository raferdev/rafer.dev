/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/components/Button'

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const WakatimeBadge = (props: ImageProps) => {
  return (
    <Button
      variant="outline"
      className="h-min border-none bg-inherit p-0 shadow-none"
      asChild
    >
      <a href="https://wakatime.com/@ac875cb4-d4ee-453f-b6fc-44cb2103c59d">
        <img
          className="w-52 object-cover"
          src="https://wakatime.com/badge/user/ac875cb4-d4ee-453f-b6fc-44cb2103c59d.svg"
          alt="Total time coded since Jan 17 2022"
          {...props}
        />
      </a>
    </Button>
  )
}
