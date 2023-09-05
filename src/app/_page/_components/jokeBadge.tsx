import { Card } from '@/components/Card'

import { WakatimeBadge } from './wakatimeBadge'

export const JokeBadge = () => {
  return (
    <Card className="h-min border-none bg-inherit shadow-none">
      <WakatimeBadge />
      <div className="flex">
        <p className="flex gap-4">
          <span className="mr-2 text-lg font-medium text-stone-900 sm:text-xl">
            Solftskills:
          </span>
        </p>
        <p className="flex text-lg font-normal">100% ❤️</p>
      </div>
      <div className="flex">
        <p>
          <span className="mr-2 text-lg font-medium text-stone-900 sm:text-xl">
            Social Live:
          </span>
        </p>

        <p className="flex text-base font-bold  text-red-700">NULL</p>
      </div>
    </Card>
  )
}
