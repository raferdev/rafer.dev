import { TailwindScreenIndicator } from './tailwindScreenIndicator'

export function DevTools() {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <>
      <TailwindScreenIndicator />
    </>
  )
}
