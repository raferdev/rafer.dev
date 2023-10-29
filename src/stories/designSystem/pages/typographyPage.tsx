import { Typeset } from '@storybook/blocks'

import { fontSans } from '@/lib/fonts'

import { Docs } from '../../components/Docs'

export const typography = {
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

export const SampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

const TypographyPage = () => {
  return (
    <>
      <Docs.Heading.Title asChild>
        <h1>Typography</h1>
      </Docs.Heading.Title>

      <Docs.Heading.SubTitle asChild>
        <h2>Font: Ubuntu</h2>
      </Docs.Heading.SubTitle>

      <div className="pl-2">
        <Docs.Content.Topic asChild>
          <h3>Weights:</h3>
        </Docs.Content.Topic>
        <Docs.Content.SubTopic asChild>
          <h4>Thin - 300</h4>
        </Docs.Content.SubTopic>

        <Typeset
          fontSizes={[
            typography.size.sm,
            typography.size.base,
            typography.size.lg,
            typography.size.xl,
            typography.size['2xl'],
          ]}
          fontWeight={typography.weight.thin}
          sampleText={SampleText}
          fontFamily={typography.type.primary}
        />
        <Docs.Content.SubTopic asChild>
          <h4>Regular - 400</h4>
        </Docs.Content.SubTopic>
        <Typeset
          fontSizes={[
            typography.size.sm,
            typography.size.base,
            typography.size.lg,
            typography.size.xl,
            typography.size['2xl'],
          ]}
          fontWeight={typography.weight.regular}
          sampleText={SampleText}
          fontFamily={typography.type.primary}
        />
        <Docs.Content.SubTopic asChild>
          <h4>Semibold - 500</h4>
        </Docs.Content.SubTopic>
        <Typeset
          fontSizes={[
            typography.size.sm,
            typography.size.base,
            typography.size.lg,
            typography.size.xl,
            typography.size['2xl'],
          ]}
          fontWeight={typography.weight.semibold}
          sampleText={SampleText}
          fontFamily={typography.type.primary}
        />
        <Docs.Content.SubTopic asChild>
          <h4>Bold - 700</h4>
        </Docs.Content.SubTopic>
        <Typeset
          fontSizes={[
            typography.size.sm,
            typography.size.base,
            typography.size.lg,
            typography.size.xl,
            typography.size['2xl'],
          ]}
          fontWeight={typography.weight.bold}
          sampleText={SampleText}
          fontFamily={typography.type.primary}
        />
      </div>
    </>
  )
}

export { TypographyPage }
