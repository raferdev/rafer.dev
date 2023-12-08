import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { Jest } = Planets

const meta = {
  title: 'Design System/Components/Planets/Jest',
  component: Jest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'jest', 'planets', 'component'],
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Tailwind class name.',
      type: 'string',
    },
  },
} satisfies Meta<typeof Jest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
