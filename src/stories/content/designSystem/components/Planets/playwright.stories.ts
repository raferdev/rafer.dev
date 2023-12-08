import type { Meta, StoryObj } from '@storybook/react'

import { Planets } from '@/components/Planets'

const { Playwright } = Planets

const meta = {
  title: 'Design System/Components/Planets/Playwright',
  component: Playwright,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'playwright', 'planets', 'component'],
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Tailwind class name.',
      type: 'string',
    },
  },
} satisfies Meta<typeof Playwright>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
