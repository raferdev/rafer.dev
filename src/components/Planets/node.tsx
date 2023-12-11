import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Node = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute hidden h-[150px] w-[150px] items-center justify-center rounded-full bg-green-300 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-white from-50% via-emerald-600 to-lime-800 p-2 pt-4 opacity-50 blur-sm md:flex',
      className
    )}
  >
    <img
      height="50"
      width="82"
      loading="lazy"
      decoding="async"
      className="h-auto w-full rotate-6 object-contain"
      src="./logos/nodejs.png"
      alt=""
    />
  </div>
)

export { Node }
