/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],

  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'scroll-left': 'scroll 10s linear infinite',
      },
      colors: {
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
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        icons: {
          github: 'hsl(var(--icon-github))',
          linkedin: 'hsl(var(--icon-linkedin))',
          youtube: 'hsl(var(--icon-youtube))',
          instagram: 'hsl(var(--icon-instagram))',
          twitter: 'hsl(var(--icon-twitter))',
          white: 'hsl(var(--icon-white))',
          'yellow-200': 'hsl(var(--icon-yellow-200))',
          'cyan-200': 'hsl(var(--icon-cyan-200))',
          'greetings-hand': 'hsl(var(--icon-greetings-hand))',
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
      gridTemplateColumns: {
        default: 'minmax(200px, 300px) 1fr minmax(200px, 300px)',
      },
    },
  },

  plugins: [require('tailwindcss-animated')],
}
