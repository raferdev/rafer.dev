/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        script: ['var(--font-script)'],
      },
      colors: {
        paper: {
          DEFAULT: 'hsl(var(--paper))',
          2: 'hsl(var(--paper-2))',
        },
        ink: 'hsl(var(--ink))',
        backdrop: 'hsl(var(--backdrop))',
        book: {
          slate: 'hsl(var(--book-slate))',
          muted: 'hsl(var(--book-muted))',
          'muted-ink': 'hsl(var(--book-muted-ink))',
          pen: 'hsl(var(--pen))',
          'pen-soft': 'var(--pen-soft)',
          cover: 'hsl(var(--cover))',
          'cover-2': 'hsl(var(--cover-2))',
          edge: 'hsl(var(--edge))',
        },
      },
    },
  },
}
