import 'tailwindcss/tailwind.css'
import '../src/app/_layout/global.css'

import type { Preview } from '@storybook/react'

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
          value: '#fdfbf1',
        },
      ],
    },
  },
}

export default preview
