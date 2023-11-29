import { cva } from 'class-variance-authority'

const iconVariants = cva('group-hover:fill-none', {
  variants: {
    color: {
      default: 'fill-none',
      youtube: 'fill-red-300',
      github: 'fill-neutral-900',
      linkedin: 'fill-blue-700',
      twitter: 'fill-celestial-500',
      instagram: 'fill-amethyst-400',
      storybook: 'fill-rose-200',
      'bell-plus': 'fill-yellow-200',
      home: 'fill-steal-800',
      white: 'fill-white',
      none: '',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

export { iconVariants }
