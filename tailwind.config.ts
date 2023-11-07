/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],

  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/stories/**/*.{mdx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        default: 'minmax(200px, 300px) 1fr minmax(200px, 300px)',
        'section-1': '200px 1fr',
        'section-content': '1fr 300px',
      },
      gridTemplateRows: {
        'stories-docs': '5.5rem 1fr',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      animation: {
        'scroll-left': 'scroll 10s linear infinite',
      },
      colors: {
        yellow: {
          200: 'hsl(var(--yellow-200))',
        },
        celestial: {
          500: 'hsl(var(--celestial-500))',
        },
        red: {
          300: 'hsl(var(--red-300))',
        },
        blue: {
          700: 'hsl(var(--blue-700))',
        },
        amethyst: {
          400: 'hsl(var(--amethyst-400))',
        },
        ice: {
          300: 'hsl(var(--ice-300))',
        },
        gray: {
          400: 'hsl(var(--gray-400))',
          900: 'hsl(var(--gray-900))',
        },
        green: {
          600: 'hsl(var(--green-600))',
        },
        zinc: {
          400: 'hsl(var(--zinc-400))',
        },
        slate: {
          500: 'hsl(var(--slate-500))',
          600: 'hsl(var(--slate-600))',
        },
        neutral: {
          800: 'hsl(var(--neutral-800))',
          950: 'hsl(var(--neutral-950))',
        },
        stone: {
          900: 'hsl(var(--stone-900))',
        },
        rose: {
          400: 'hsl(var(--rose-400))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          'blue-300': 'hsl(var(--secondary-blue-300))',
          'neutral-300': 'hsl(var(--secondary-neutral-300))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' },
        },
      },
    },
  },

  plugins: [require('tailwindcss-animated')],
}
