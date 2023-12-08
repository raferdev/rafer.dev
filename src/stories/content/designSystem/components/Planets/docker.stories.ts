import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { Docker } = Planets

const meta = {
  title: 'Design System/Components/Planets/Docker',
  component: Docker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'docker', 'planets', 'component'],
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Tailwind class name.',
      type: 'string',
    },
  },
} satisfies Meta<typeof Docker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
