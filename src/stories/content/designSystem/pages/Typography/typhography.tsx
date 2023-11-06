import { fontSans } from '@/lib/fonts'

const typography = {
  type: {
    primary: fontSans.style.fontFamily,
  },
  weight: {
    thin: 300,
    regular: 400,
    semibold: 500,
    bold: 700,
  },
  size: {
    sm: '0.875rem',
    base: '1.000rem',
    lg: '1.125rem',
    xl: '1.250rem',
    '2xl': '1.500rem',
  },
}

export { typography }
