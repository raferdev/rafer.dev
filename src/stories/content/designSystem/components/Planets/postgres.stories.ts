import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { Postgres } = Planets

const meta = {
  title: 'Design System/Components/Planets/Postgres',
  component: Postgres,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'postgres', 'planets', 'component'],
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Tailwind class name.',
      type: 'string',
    },
  },
} satisfies Meta<typeof Postgres>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
