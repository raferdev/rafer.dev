import { useState } from 'react'
import { PageMenu } from '@/Book/PageMenu'
import type { Meta, StoryObj } from '@storybook/react'

const LABELS = [
  'Cover',
  'Contents',
  'Preface',
  'I — The origin',
  'I — Details',
  'II — The craft',
  'II — Details',
  'III — In production',
  'III — Details',
  'IV — Contact',
  'IV — Closing',
]

type DemoArgs = {
  current: number
  total: number
  labels: string[]
}

const PageMenuDemo = (args: DemoArgs) => {
  const [open, setOpen] = useState(false)
  return (
    <PageMenu
      {...args}
      onSelect={() => {}}
      open={open}
      onOpenChange={setOpen}
    />
  )
}

const meta = {
  title: 'Design System/Components/Book/PageMenu',
  component: PageMenuDemo,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="bg-paper relative h-40 w-96">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs', 'book', 'component'],
  argTypes: {
    current: {
      name: 'Current page',
      description: 'Zero-based index of the active page.',
    },
    labels: {
      description: 'Short label shown for each page, in order.',
    },
  },
} satisfies Meta<typeof PageMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    current: 3,
    total: LABELS.length,
    labels: LABELS,
  },
}
