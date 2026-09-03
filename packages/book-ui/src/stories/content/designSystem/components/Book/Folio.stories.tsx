import { Folio } from '@/Book/Folio'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Components/Book/Folio',
  component: Folio,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="bg-paper relative h-24 w-64">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs', 'book', 'component'],
  argTypes: {
    n: {
      name: 'Page number',
      description: 'The folio number printed at the foot of the page.',
    },
  },
} satisfies Meta<typeof Folio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { n: 3 },
}
