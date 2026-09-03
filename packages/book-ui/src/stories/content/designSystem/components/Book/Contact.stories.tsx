import { Contact } from '@/Book/Contact'
import type { ContactChapter } from '@/Book/content'
import { Spread } from '@/Book/Spread'
import type { Meta, StoryObj } from '@storybook/react'

const sampleContent: ContactChapter = {
  id: 'contact',
  numeral: 'IV',
  title: 'Contact',
  folioLeft: 9,
  folioRight: 10,
  tocLabel: 'Contact',
  tocPage: '09',
  prose: [
    'Open to good conversations about product, back-end, and things built well.',
  ],
  links: [
    {
      label: 'email',
      href: 'mailto:contact@rafer.dev',
      value: 'contact@rafer.dev',
    },
    {
      label: 'linkedin',
      href: 'https://linkedin.com/in/raferdev',
      value: '/in/raferdev',
    },
    {
      label: 'github',
      href: 'https://github.com/raferdev',
      value: '/raferdev',
    },
  ],
  closing: {
    heading: 'Thanks for\nreading.',
    note: '— continues in the next edition.',
  },
}

const meta = {
  title: 'Design System/Components/Book/Contact',
  component: Contact.Links,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'book', 'component'],
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
} satisfies Meta<typeof Contact.Links>

export default meta
type Story = StoryObj<typeof meta>

export const Links: Story = {
  args: { content: sampleContent },
}

export const Closing: Story = {
  args: { content: sampleContent },
  render: (args) => <Contact.Closing {...args} />,
}
