import Image from 'next/image'
import billboard from '@/stories/assets/billboard.png'
import { cn } from '@/utils/cn'

const IllustrationImg = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'm-0 flex max-h-80 w-full items-center justify-center border-0 align-middle md:overflow-hidden',
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
}

export { IllustrationImg }
