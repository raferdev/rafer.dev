import Image from 'next/image'
import { OptClassName } from '@/@types/components'
import billboard from '@/stories/assets/opengraph-image.jpg'
import { cn } from '@/utils/cn'

const IllustrationImg = ({ className }: OptClassName) => (
  <div
    className={cn(
      'm-0 flex max-h-80 w-full items-center justify-center border-0 align-middle opacity-60 md:opacity-90',
      className
    )}
  >
    <Image
      src={billboard}
      width={400}
      height={212}
      alt="The top of rafer.dev site showing logo and greetings text"
    />
  </div>
)

export { IllustrationImg }
