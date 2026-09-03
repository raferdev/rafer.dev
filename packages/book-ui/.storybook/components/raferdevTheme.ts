import { create } from '@storybook/theming/create'

import imageLogo from '../public/logo-dark-theme.png'

const raferdevTheme = create({
  base: 'light',
  brandTitle: 'Raferdev Storybook',
  brandUrl: 'https://storybook.rafer.dev',
  brandImage: imageLogo.toString(),
  brandTarget: '_self',

  appBg: '#9ccfff',
  appContentBg: '#f5f4df',
  appBorderColor: '#a7a7a7',
  appBorderRadius: 4,

  barBg: '#2585b8',
  barTextColor: '#fff',

  fontBase: 'var(--font-sans)',
})

export default raferdevTheme
