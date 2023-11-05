import { cva } from 'class-variance-authority'

const linkVariants = cva(
  'inline-flex items-end justify-center rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'group relative w-full border-neutral-500 bg-neutral-600 text-base font-bold text-white hover:opacity-70 [&>span]:flex [&>span]:min-w-[122px] [&>span]:gap-4',
        outline:
          'box-content border-2 border-slate-400 bg-inherit p-2 shadow-none hover:bg-accent hover:text-accent-foreground',
        raw: 'text-accent-foreground underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 w-full max-w-lg p-2 px-6 md:min-w-[277px]',
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
