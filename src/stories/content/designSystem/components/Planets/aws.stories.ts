import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { Aws } = Planets

const meta = {
  title: 'Design System/Components/Planets/Aws',
  component: Aws,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'aws', 'planets', 'component'],
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Tailwind class name.',
      type: 'string',
    },
  },
} satisfies Meta<typeof Aws>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
