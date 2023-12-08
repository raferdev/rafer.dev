import Image from 'next/image'
import { IllustrationImageProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const IllustrationImg = ({
  className,
  src,
  width,
  height,
  alt,
}: IllustrationImageProps) => {
  return (
    <div
      className={cn(
        'z-10 m-0 flex w-full items-end justify-end border-0 px-12 align-middle md:px-28',
        className
      )}
    >
      <Image
        src={src}
        loading="lazy"
        width={width || 256}
        height={height || 256}
        alt={alt || ''}
      />
    </div>
  )
}

export { IllustrationImg }
