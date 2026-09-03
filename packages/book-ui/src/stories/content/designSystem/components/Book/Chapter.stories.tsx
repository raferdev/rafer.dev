import { Chapter } from '@/Book/Chapter'
import type { Chapter as ChapterContent } from '@/Book/content'
import { Spread } from '@/Book/Spread'
import type { Meta, StoryObj } from '@storybook/react'

const sampleChapter: ChapterContent = {
  id: 'origin',
  numeral: 'I',
  title: 'The origin',
  folioLeft: 3,
  folioRight: 4,
  tocLabel: 'The origin',
  tocPage: '03',
  prose: [
    'Physics and mathematics came first. Not as a diploma, but as a way of reasoning: precision, method, the patience to understand a system before touching it.',
    "When I discovered programming, I recognized the same logic in a different language — and that's when I decided to build.",
  ],
  marginalia: { text: 'the way of thinking came before the code.' },
  dataList: [
    { key: 'base', value: 'Physics & logic — reasoning and modeling' },
    { key: 'turn', value: 'Discovering programming and web development' },
    { key: 'method', value: 'Understand → model → build → maintain' },
  ],
}

const meta = {
  title: 'Design System/Components/Book/Chapter',
  component: Chapter.Prose,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'book', 'component'],
  argTypes: {
    chapter: {
      description:
        'A chapter object matching the Chapter type from @raferdev/book-ui.',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[600px] w-[420px]">
        <Spread.Card>
          <Spread.Page>
            <Story />
          </Spread.Page>
        </Spread.Card>
      </div>
    ),
  ],
} satisfies Meta<typeof Chapter.Prose>

export default meta
type Story = StoryObj<typeof meta>

export const Prose: Story = {
  args: { chapter: sampleChapter },
}

export const Data: Story = {
  args: { chapter: sampleChapter },
  render: (args) => <Chapter.Data {...args} />,
}
