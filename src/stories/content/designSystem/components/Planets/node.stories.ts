import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { Node } = Planets

const meta = {
  title: 'Design System/Components/Planets/Node',
  component: Node,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'node', 'planets', 'component'],
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Tailwind class name.',
      type: 'string',
    },
  },
} satisfies Meta<typeof Node>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
