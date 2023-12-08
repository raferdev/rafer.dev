import { cva } from 'class-variance-authority'

const linkVariants = cva(
  'font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        decorated:
          'border-gradient-to-r group relative flex w-full items-center justify-center rounded-full px-8 text-base font-medium shadow-sm shadow-white lg:text-lg [&>span]:flex [&>span]:min-w-full [&>span]:gap-4',
        raw: 'inline-block',
      },
      background: {
        white: 'bg-white/20',
        black1: 'bg-black/10',
        black2: 'bg-black/20',
        black3: 'bg-black/30',
        none: '',
      },
      textColor: {
        black: '[&>span]:text-neutral-800 [&>span]:hover:text-white',
        gray: '[&>span]:text-neutral-300 ',
        white: '[&>span]:text-white ',
      },
      hover: {
        bgGreen: 'hover:bg-lime-300/30',
        bgCyan: 'hover:bg-cyan-300/30',
        textYellow: 'hover:text-yellow-500',
      },
      size: {
        normal: 'h-12 w-full  min-w-[200px]',
        none: '',
        sm: 'm-0 inline-block w-0 min-w-min p-0 text-base sm:text-lg md:min-w-min',
      },
    },
    defaultVariants: {
      variant: 'decorated',
      size: 'normal',
      hover: 'bgGreen',
      background: 'white',
    },
  }
)

export { linkVariants }
