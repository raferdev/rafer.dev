import type { Preview } from '@storybook/react'

import '../src/app/_layout/global.css'
import './public/css/font.css'
import './public/css/bgTransparent.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Site color theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, { globals }) => {
      document.documentElement.setAttribute('data-theme', globals.theme)
      return Story()
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color|fill|iconFill)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: `#e9e9f2`,
        },
        {
          name: 'dark',
          value: `#2d2d30`,
        },
      ],
    },
  },
}

export default preview
