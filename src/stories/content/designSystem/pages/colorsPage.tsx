import { ColorItem, ColorPalette } from '@storybook/blocks'

const ColorsThemePage = () => (
  <div className="rounded-md !border-2 !bg-white !p-4 [&>div]:!font-sans ">
    <ColorPalette>
      <ColorItem
        title="Gray Scale"
        subtitle="White theme"
        colors={{
          white: 'hsl(0 0% 100%)',
          'platium-100': 'hsl(20 6% 90%)',
          'neutral-200': 'hsl(0 0% 86%)',
          'gray-400': 'hsl(218 11% 65%)',
          'zinc-400': 'hsl(240 5% 65%)',
          'slate-500': 'hsl(215 16% 47%)',
          'slate-600': 'hsl(215 19% 35%)',
          'gunmetal-700': 'hsl(215.4 16.3% 21.9%)',
          'neutral-800': 'hsl(0 0% 17%)',
          'gray-900': 'hsl(221 39% 11%)',
          'stone-900': 'hsl(24 10% 10%)',
          'night-950': 'hsl(0, 8%, 5%)',
          'neutral-950': 'hsl(0 0% 4%)',
        }}
      />
      <ColorItem
        title="Foreground"
        subtitle="Text color"
        colors={{
          'night-950': 'hsl(0, 8%, 5%)',
          'gunmetal-700': 'hsl(215.4 16.3% 21.9%)',
        }}
      />
      <ColorItem
        title="Primary"
        subtitle="Primary, Muted and Foreground"
        colors={{
          'platium-100': 'hsl(20 6% 90%)',
          'Anti-flash white': '#F1F5F9',
          'Night#2': '#0A0A0A',
        }}
      />
      <ColorItem
        title="Secondary"
        subtitle="Secondary colors"
        colors={{
          'gray-500': 'hsl(20 6% 50%)',
          'blue-600': 'hsl(202 94% 37%)',
          'neutral-200': 'hsl(0 0% 86%)',
        }}
      />
      <ColorItem
        title="Accent"
        subtitle="Accent colors"
        colors={{
          'blue-400': 'hsl(187 92% 69%)',
          'blue-800': 'hsl(222.2 47.4% 11.2%)',
        }}
      />
      <ColorItem
        title="Red Scale"
        subtitle="White theme"
        colors={{
          'red-300': 'hsl(0 91% 71%)',
          'rose-400': 'hsl(340 100% 64%)',
        }}
      />
      <ColorItem
        title="Green"
        subtitle="White theme"
        colors={{
          'green-600': 'hsl(92 42% 43%)',
        }}
      />
      <ColorItem
        title="Yellow"
        subtitle="White theme"
        colors={{
          'yellow-200': 'hsl(60 100% 75%)',
        }}
      />
      <ColorItem
        title="Blue Scale"
        subtitle="White theme"
        colors={{
          'amethyst-400': 'hsl(278, 52%, 68%)',
          'blue-700': 'hsl(200 98% 39%)',
          'celestial-500': 'hsl(203 89% 53%)',
          'ice-300': 'hsl(176 100% 74%)',
        }}
      />
    </ColorPalette>
  </div>
)

export { ColorsThemePage }
