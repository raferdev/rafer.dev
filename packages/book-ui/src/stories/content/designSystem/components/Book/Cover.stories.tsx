import type { CoverContent } from '@/Book/content'
import { Cover } from '@/Book/Cover'
import { Spread } from '@/Book/Spread'
import type { Meta, StoryObj } from '@storybook/react'

const sampleContent: CoverContent = {
  kicker: 'a book about building',
  name: 'Rafael',
  role: 'Product Engineer',
  manifesto: ['logic', 'value', 'craft', 'people'],
}

const meta = {
  title: 'Design System/Components/Book/Cover',
  component: Cover,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="h-[600px] w-[420px]">
        <Spread.Card>
          <Story />
        </Spread.Card>
      </div>
    ),
  ],
  tags: ['autodocs', 'book', 'component'],
} satisfies Meta<typeof Cover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { content: sampleContent },
}
