import Image from 'next/image'
import LogoDraft from '@/stories/assets/logo-drafts.png'
import { cn } from '@/utils/cn'

const IllustrationImg = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        'm-0 flex max-h-80 w-full items-center justify-center border-0 align-middle md:overflow-hidden',
        className
      )}
    >
      <Image src={LogoDraft} width={400} height={280} alt="" />
    </div>
  )
}

export { IllustrationImg }
