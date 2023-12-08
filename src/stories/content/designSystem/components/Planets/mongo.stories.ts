import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { MongoDB } = Planets

const meta = {
  title: 'Design System/Components/Planets/MongoDB',
  component: MongoDB,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'mongodb', 'planets', 'component'],
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Tailwind class name.',
      type: 'string',
    },
  },
} satisfies Meta<typeof MongoDB>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
