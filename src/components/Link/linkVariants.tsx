import { cva } from 'class-variance-authority'

const linkVariants = cva(
  'focus-visible:ring-ring inline-flex items-center justify-start rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-accent-foreground hover:bg-accent hover:opacity-70',
        outline:
          'box-content border-2 border-slate-400	bg-inherit p-2 shadow-none hover:bg-accent hover:text-accent-foreground',
        raw: 'text-accent-foreground underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-22 w-full max-w-lg p-2 px-6 md:w-auto md:min-w-[16rem]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export { linkVariants }
