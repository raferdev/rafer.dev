import { __env } from '@/config/env'

import { TailwindScreenIndicator } from './tailwindScreenIndicator'

const Tools = () => (
  <>
    <TailwindScreenIndicator />
  </>
)
const DevTools = __env.NODE_ENV === 'development' ? Tools : () => <></>

export { DevTools }
