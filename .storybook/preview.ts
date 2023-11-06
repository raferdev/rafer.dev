import type { Preview } from '@storybook/react'

import '../src/app/_layout/global.css'
import './public/css/font.css'
import './public/css/bgTransparent.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color|fill|iconFill)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#fff',
        },
      ],
    },
  },
}

export default preview
