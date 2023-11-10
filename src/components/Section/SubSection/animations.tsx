import { AnimationBacklightProps } from '@/@types/components'
import { cn } from '@/utils/cn'
import { cva } from 'class-variance-authority'

export const animationVariants = cva('', {
  variants: {
    color_small: {
      gray_300: 'bg-gray-300',
      gray_400: 'bg-slate-400',
      rose_200: 'bg-rose-200',
      rose_250: 'bg-rose-250',
      green_200: 'bg-green-200',
      green_300: 'bg-green-300',
    },
    color_big: {
      gray_300: 'bg-gray-300',
      gray_400: 'bg-slate-400',
      rose_200: 'bg-rose-200',
      rose_250: 'bg-rose-250',
      green_200: 'bg-green-200',
      green_300: 'bg-green-300',
    },
  },
})

const AnimationBacklight = ({
  color_small,
  color_big,
}: AnimationBacklightProps) => {
  return (
    <>
      <div
        className={
          'absolute left-0 top-0 -z-10 h-24 w-64 animate-spin animate-duration-[120s]'
        }
      >
        <div
          className={cn(
            animationVariants({
              color_small,
              className:
                'absolute left-0 top-0 h-4 w-4 animate-bounce rounded-full blur-sm animate-duration-[180s]',
            })
          )}
        ></div>
      </div>
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
                'absolute left-0 top-0 h-8 w-8 animate-bounce rounded-full blur-sm animate-duration-[180s]',
            })
          )}
        ></div>
      </div>
    </>
  )
}

export { AnimationBacklight }
