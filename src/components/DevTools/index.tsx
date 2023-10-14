import { TailwindScreenIndicator } from './tailwindScreenIndicator'

export function DevTools() {
  if (!(process.env.NODE_ENV === 'development')) return null

  return (
    <>
      <TailwindScreenIndicator />
    </>
  )
}
