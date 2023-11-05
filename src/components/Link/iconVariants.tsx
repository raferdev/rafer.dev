import { cva } from 'class-variance-authority'

const iconVariants = cva('group-hover:fill-accent', {
  variants: {
    variant: {
      default: '',
    },
    color: {
      default: 'fill-none',
      youtube: 'fill-red-300',
      github: 'fill-neutral-800',
      linkedin: 'fill-blue-700',
      twitter: 'fill-celestial-500',
      instagram: 'fill-amethyst-400',
      storybook: 'fill-rose-400',
      'bell-plus': 'fill-yellow-200',
      home: 'fill-ice-300',
      white: 'fill-white',
    },
  },
  defaultVariants: {
    variant: 'default',
    color: 'default',
  },
})

export { iconVariants }
