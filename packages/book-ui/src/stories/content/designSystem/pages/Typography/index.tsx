import { Docs } from '@/stories/components/Docs'
import { Typeset } from '@storybook/blocks'

import { typography } from './typhography'

const { Header, Content } = Docs

const SampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

const TypographyPage = () => (
  <>
    <Header.Title>Typography</Header.Title>

    <Header.SubTitle>Font Ubuntu</Header.SubTitle>

    <div className="pl-2">
      <Content.SubTopic className="flex gap-4" asChild>
        <div>
          <p className="!text-xl !font-thin !text-neutral-800 md:!text-lg">
            Thin - 300,
          </p>{' '}
          <p className="!text-xl !font-normal !text-neutral-800 md:!text-lg">
            Regular - 400,
          </p>{' '}
          <p className="!text-xl !font-semibold !text-neutral-800 md:!text-lg">
            Semibold - 500,
          </p>
          <p className="!text-xl !font-bold !text-neutral-800 md:!text-lg">
            Bold - 700
          </p>
        </div>
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
