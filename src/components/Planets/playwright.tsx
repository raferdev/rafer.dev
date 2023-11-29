import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Playwright = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute flex h-[90px] w-[90px] rotate-12 justify-center rounded-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-green-400 p-1 blur-sm lg:h-[100px] lg:w-[100px]',
      className
    )}
  >
    <img
      height="50px"
      width="auto"
      loading="lazy"
      decoding="async"
      className="object-contain"
      src="./logos/playwright.png"
      alt="Playwright"
    />
  </div>
)

export { Playwright }
