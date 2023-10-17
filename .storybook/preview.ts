import type { Preview } from '@storybook/react'

import '../src/app/_layout/global.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color|fill|iconFill)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
