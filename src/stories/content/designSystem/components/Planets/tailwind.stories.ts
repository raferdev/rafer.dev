import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { Tailwind } = Planets

const meta = {
  title: 'Design System/Components/Planets/Tailwind',
  component: Tailwind,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'tailwind', 'planets', 'component'],
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Tailwind class name.',
      type: 'string',
    },
  },
} satisfies Meta<typeof Tailwind>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
