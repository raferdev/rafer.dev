import { Marginalia } from '@/Book/Marginalia'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Components/Book/Marginalia',
  component: Marginalia,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="bg-paper w-72 p-6">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs', 'book', 'component'],
  argTypes: {
    children: {
      name: 'Note',
      description: 'The handwritten pen-blue side note text.',
    },
  },
} satisfies Meta<typeof Marginalia>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'humanity above all — the rest is tooling.',
  },
}
