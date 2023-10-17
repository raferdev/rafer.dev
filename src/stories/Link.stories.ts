import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '@/components/Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Link',
    iconName: 'Link',
    label: 'Link',
    iconFillColor: 'yellow-200',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Link',
    iconName: 'Link',
    iconFillColor: 'yellow-200',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}
