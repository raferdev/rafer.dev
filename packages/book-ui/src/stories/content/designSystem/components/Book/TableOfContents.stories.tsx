import type { TocContent } from '@/Book/content'
import { BookNavContext } from '@/Book/Shell/context'
import { Spread } from '@/Book/Spread'
import { TableOfContents } from '@/Book/TableOfContents'
import type { Meta, StoryObj } from '@storybook/react'

const sampleContent: TocContent = {
  title: 'Contents',
  subtitle: 'where to begin',
  colophon:
    'No infinite scroll, no glamour. A site you page through like you read — one idea per page, blue ink, light paper.',
  folio: 1,
  entries: [
    {
      id: 'origin',
      numeral: 'I',
      tocLabel: 'The origin',
      tocPage: '03',
      pageIndex: 2,
    },
    {
      id: 'craft',
      numeral: 'II',
      tocLabel: 'The craft',
      tocPage: '05',
      pageIndex: 3,
    },
    {
      id: 'production',
      numeral: 'III',
      tocLabel: 'In production',
      tocPage: '07',
      pageIndex: 4,
    },
    {
      id: 'contact',
      numeral: 'IV',
      tocLabel: 'Contact',
      tocPage: '09',
      pageIndex: 5,
    },
  ],
}

const meta = {
  title: 'Design System/Components/Book/TableOfContents',
  component: TableOfContents,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <BookNavContext.Provider
        value={{ current: 1, total: 11, goToPage: () => {} }}
      >
        <div className="h-[600px] w-[420px]">
          <Spread.Card>
            <Spread.Page>
              <Story />
            </Spread.Page>
          </Spread.Card>
        </div>
      </BookNavContext.Provider>
    ),
  ],
  tags: ['autodocs', 'book', 'component'],
} satisfies Meta<typeof TableOfContents>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { content: sampleContent },
}
