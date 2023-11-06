import Image from 'next/image'
import LogoDraft from '@/stories/assets/logo-drafts.jpg'
import { cn } from '@/utils/cn'

const IllustrationImg = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        '-z-10 m-0 flex max-h-80 w-full items-center justify-center border-0 align-middle opacity-60 md:opacity-60',
        className
      )}
    >
      <Image src={LogoDraft} width={400} height={280} alt="" />
    </div>
  )
}

export { IllustrationImg }
