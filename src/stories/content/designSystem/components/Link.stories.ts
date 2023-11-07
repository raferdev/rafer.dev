import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '@/components/Link'

const meta = {
  title: 'Design System/Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'Link', 'Component'],
  argTypes: {
    variant: {
      name: 'Link Variant',
      options: ['default', 'raw'],
      description: 'The link styles.',
    },
    iconName: {
      name: 'Icon Name',
      description: 'The svg icon showed in the component.',
    },
    children: {
      name: 'Icon Main Text',
      description:
        'The text that will be showed on the center of this component.',
    },
    iconFillColor: {
      name: 'Icon Fill Color',
      description: 'The icon fill color.',
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Github',
    iconName: 'Github',
    iconFillColor: 'github',
  },
}

export const Raw: Story = {
  args: {
    variant: 'raw',
    children: 'Github',
  },
}
