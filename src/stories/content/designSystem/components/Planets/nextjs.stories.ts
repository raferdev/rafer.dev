import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { NextJs } = Planets

const meta = {
  title: 'Design System/Components/Planets/NextJs',
  component: NextJs,
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
} satisfies Meta<typeof NextJs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
