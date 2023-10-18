import { cva } from 'class-variance-authority'

const iconVariants = cva(
  'focus-visible:ring-ring inline-flex items-center justify-start rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'mr-2',
      },
      color: {
        default: 'fill-none',
        youtube: 'fill-icons-youtube',
        github: 'fill-icons-github',
        linkedin: 'fill-icons-linkedin',
        twitter: 'fill-icons-twitter',
        instagram: 'fill-icons-instagram',
        greetingsHand: 'fill-icons-greetings-hand',
        storybook: 'fill-icons-storybook',
        'yellow-200': 'fill-icons-yellow-200',
        'cyan-200': 'fill-icons-cyan-200',
        white: 'fill-icons-white',
      },
    },
    defaultVariants: {
      variant: 'default',
      color: 'default',
    },
  }
)

export { iconVariants }
