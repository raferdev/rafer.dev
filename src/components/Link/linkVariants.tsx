import { cva } from 'class-variance-authority'

const linkVariants = cva(
  'inline-flex items-end justify-center rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'group relative w-full border-2 border-slate-700 bg-white/30 text-base font-bold text-black shadow-md hover:border-white hover:opacity-70 [&>span]:flex [&>span]:min-w-[122px] [&>span]:gap-4',
        raw: 'text-accent-foreground underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 w-full max-w-lg p-2 px-6 md:min-w-[277px]',
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
