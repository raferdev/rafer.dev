import { __env } from '@/config/env'

import { TailwindScreenIndicator } from './tailwindScreenIndicator'

export function DevTools() {
  if (!(__env.NODE_ENV === 'development')) return null

  return (
    <>
      <TailwindScreenIndicator />
    </>
  )
}
