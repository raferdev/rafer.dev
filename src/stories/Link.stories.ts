import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '@/components/Link'

const meta = {
  title: 'Link',
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
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
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
