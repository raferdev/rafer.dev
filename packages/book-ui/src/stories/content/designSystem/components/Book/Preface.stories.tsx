import type { PrefaceContent } from '@/Book/content'
import { Spread } from '@/Book/Spread'
import { Preface } from '@/Book/TableOfContents/preface'
import type { Meta, StoryObj } from '@storybook/react'

const sampleContent: PrefaceContent = {
  kicker: 'preface',
  title: 'Why a book',
  prose: [
    'I started in physics and logic, where you learn to think before you act. I carried that into software: understand the problem, model it, then build. This site is a short version of that story.',
  ],
  marginalia: { text: 'humanity above all — the rest is tooling.' },
  folio: 2,
}

const meta = {
  title: 'Design System/Components/Book/Preface',
  component: Preface,
  parameters: {
    layout: 'centered',
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
  tags: ['autodocs', 'book', 'component'],
} satisfies Meta<typeof Preface>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { content: sampleContent },
}
