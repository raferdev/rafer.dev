import { ColorItem, ColorPalette } from '@storybook/blocks'

const ColorsThemePage = () => {
  return (
    <div className="rounded-md !border-2 !bg-white !p-4 [&>div]:!font-sans ">
      <ColorPalette>
        <ColorItem
          title="Background"
          subtitle="White theme"
          colors={{ 'Floral white': '#FDFBF1' }}
        />
        <ColorItem
          title="Foreground"
          subtitle="Text color"
          colors={{ Gunmetal: '#2F3641', 'Night#1': '#0E0C0C' }}
        />
        <ColorItem
          title="Primary"
          subtitle="Primary, Muted and Foreground"
          colors={{
            'Platium#2': '#E7E5E4',
            'Anti-flash white': '#F1F5F9',
            'Night#2': '#0A0A0A',
          }}
        />
        <ColorItem
          title="Secondary"
          subtitle="Secondary colors"
          colors={{
            'Platium#3': '#DBDBDB',
            'Honolulu Blue': '#0676B7',
            Gray: '#877D78',
          }}
        />
        <ColorItem
          title="Icons"
          subtitle="Icons fill colors"
          colors={{
            White: '#FFFFFF',
            'Platium#1': '#E6E6E6',
            'Platium#3': '#DBDBDB',
            Icterine: '#FFFF4D',
            'Light Red': '#F87272',
            'Lavender (floral)': '#B983D8',
            'French Rose': '#FF4785',
            'Picton Blue': '#2AADF8',
            'Celestial Blue': '#1CA0F2',
            'Blue (NCS)': '#0284C5',
            Black: '#000000',
          }}
        />
      </ColorPalette>
    </div>
  )
}

export { ColorsThemePage }
