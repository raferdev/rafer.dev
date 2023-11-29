import { OptClassName } from '@/@types/components'
import { cn } from '@/utils/cn'

const Node = ({ className }: OptClassName) => (
  <div
    className={cn(
      'absolute hidden h-[100px] w-[100px] justify-center rounded-full bg-green-100 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-emerald-500 to-lime-600 p-2 blur-sm md:flex',
      className
    )}
  >
    <img
      height="50px"
      width="auto"
      loading="lazy"
      decoding="async"
      className="m-2 object-contain"
      src="./logos/nodejs.png"
      alt="Nodejs"
    />
  </div>
)

export { Node }
