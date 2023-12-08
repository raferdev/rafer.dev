import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '@/components/Link'

const meta = {
  title: 'Design System/Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'link', 'component'],
  argTypes: {
    variant: {
      name: 'Link Variant',
      options: ['decorated', 'raw'],
      description: 'The link styles.',
    },
    hover: {
      name: 'Hover Style',
      description: 'The hover style and color.',
    },
    textColor: {
      name: 'Text Color',
      description: 'The link text.',
    },
    iconColor: {
      name: 'Icon Color',
      description: 'The svg icon color.',
      type: 'string',
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
    variant: 'decorated',
    children: 'Github',
    iconName: 'Github',
    hover: 'bgCyan',
    iconColor: '#60bf6e',
    textColor: 'gray',
    background: 'black1',
    iconFillColor: 'none',
    size: 'normal',
  },
}

export const Raw: Story = {
  args: {
    target: '_blank',
    variant: 'raw',
    children: 'Github',
    hover: 'textYellow',
    background: 'none',
    size: 'sm',
  },
}
