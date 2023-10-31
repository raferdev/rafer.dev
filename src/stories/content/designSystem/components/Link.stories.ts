import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '@/components/Link'

const meta = {
  title: 'Design System/Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Link Variant',
      options: ['default', 'outline', 'raw'],
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
    label: {
      name: 'Link Label',
      description:
        'The text that will be showed on the left of this component.',
    },
    iconVariant: {
      name: 'Icon Variant',
      description: 'The icon styles.',
      defaultValue: 'default',
      options: ['default'],
    },
    iconFillColor: {
      name: 'Icon Fill Color',
      description: 'The icon fill color.',
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Link',
    iconName: 'Link',
    label: 'Link',
    iconVariant: 'default',
    iconFillColor: 'cyan-200',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Link',
    iconName: 'Link',
    iconFillColor: 'cyan-200',
  },
}
