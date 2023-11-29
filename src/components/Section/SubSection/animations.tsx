import { AnimationBacklightProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { cva } from 'class-variance-authority'

export const animationVariants = cva('', {
  variants: {
    color_big: {
      gray_300: 'bg-gray-300',
      gray_400: 'bg-gradient-to-tl from-gray-400 via-gray-900 to-black',
      rose_200: 'bg-rose-200',
      rose_250: 'bg-gradient-to-tl from-gray-300 via-pink-400 to-pink-600',
      green_200: 'bg-green-200',
      green_300: 'bg-gradient-to-tl from-gray-300 via-green-500 to-green-700',
    },
  },
})

const AnimationBacklight = ({ color_big }: AnimationBacklightProps) => {
  return (
    <>
      <div
        className={
          'absolute bottom-0 left-0 -z-10 h-24 w-44 animate-spin  animate-duration-[120s]'
        }
      >
        <div
          className={cn(
            animationVariants({
              color_big,
              className:
                'absolute left-0 top-0 h-6 w-6 animate-bounce rounded-full animate-duration-[180s]',
            })
          )}
        ></div>
      </div>
    </>
  )
}

export { AnimationBacklight }
