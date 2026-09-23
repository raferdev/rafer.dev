import { OptClassName } from '@/@types/components'

import type { Mockup as MockupType } from '@/config/content'

import { Tree } from './tree'

type MockupProps = OptClassName & {
  type: MockupType
}

const Mockup = ({ type, className }: MockupProps) => (
  <div aria-hidden="true" className={className}>
    {type === 'tree' && <Tree />}
  </div>
)

export { Mockup }
