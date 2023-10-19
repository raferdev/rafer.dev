import { create } from '@storybook/theming/create'

import imageLogo from './public/logo-dark-theme.png'

export default create({
  base: 'dark',
  brandTitle: 'Raferdev Storybook',
  brandUrl: 'https://storybook.rafer.dev',
  brandImage: imageLogo,
  brandTarget: '_self',
})
