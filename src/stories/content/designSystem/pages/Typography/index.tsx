import { Docs } from '@/stories/components/Docs'
import { Typeset } from '@storybook/blocks'

import { typography } from './typhography'

const { Header, Content } = Docs

const SampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

const TypographyPage = () => (
  <>
    <Header.Title asChild>
      <h1>Typography</h1>
    </Header.Title>

    <Header.SubTitle asChild>
      <h2>Font: Ubuntu</h2>
    </Header.SubTitle>

    <div className="pl-2">
      <Content.Topic asChild>
        <h3>Weights:</h3>
      </Content.Topic>
      <Content.SubTopic asChild>
        <h4>Thin - 300, Regular - 400, Semibold - 500, Bold - 700</h4>
      </Content.SubTopic>

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
    </div>
  </>
)

export { TypographyPage }
