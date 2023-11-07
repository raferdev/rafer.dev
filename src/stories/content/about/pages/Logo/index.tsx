import Image from 'next/image'
import FigmaIcon from '@/stories/assets/figma-icon.png'
import LogoExplainBottom from '@/stories/assets/logo-explain-bottom.png'
import LogoExplainTop from '@/stories/assets/logo-explain-top.png'
import { Docs } from '@/stories/components/Docs'
import Balancer from 'react-wrap-balancer'

import { IllustrationImg } from './illustrationImg'

const { Container, Content, Header } = Docs

const LogoPage = () => (
  <Container>
    <Header.Container className="overflow-visible">
      <div className="flex flex-col items-baseline gap-4">
        <Header.Title>Logo</Header.Title>
        <Header.SubTitle>I tried to be a designer by a day.</Header.SubTitle>
      </div>
      <IllustrationImg className="flex overflow-visible" />
    </Header.Container>

    <div className="flex flex-col gap-8 pl-4 pr-6 pt-6">
      <div className="flex flex-col">
        <Content.Topic>Overview</Content.Topic>
        <Content.Paragraph className="bg-white bg-opacity-80">
          This logo was created to be simple but informative, minimalist and
          dark but with some color. Trying to pass on the identity of pragmatism
          and mathematical and logical thinking but with creativity and
          people-oriented thinking.
        </Content.Paragraph>
      </div>
      <div className="flex flex-col">
        <Content.Topic>Structure Analisys</Content.Topic>
        <Content.SubTopic>Top</Content.SubTopic>
        <div className="align-center !my-8 flex w-full justify-center">
          <Image src={LogoExplainTop} width={200} height={280} alt="" />
        </div>
        <Content.Paragraph>
          The top part of this logo was designed to be the expression of the
          criativity and oriented on user, to deliver things thinking on people.
          The piece of code showed on the top of this logo is a css code that i
          use on my first html + css project. And taking advantage of the fact
          this language is well-known for transform the same content on
          something enjoyable and understandable.
        </Content.Paragraph>
        <Content.SubTopic>Bottom</Content.SubTopic>
        <div className="align-center !my-4 flex w-full justify-center">
          <Image src={LogoExplainBottom} width={200} height={280} alt="" />
        </div>
        <Content.Paragraph>
          On the other hand, this part takes a logical basis, as do the
          mathematics and physics aspects of knowledge and interest. Using the
          binary numbers representation to show it all has a beginning, by two
          states, zeros and ones, to all the abstractions that we have
          discovered and will discover. And I use a little difference in the
          text weight to make number lines with the binary representation of a
          knowing phrase in Portuguese.
        </Content.Paragraph>
      </div>

      <div className="flex flex-col">
        <Content.Topic>Details</Content.Topic>
        <div className="!my-8 flex w-full justify-center">
          <a href="https://figma.com" target="_blank">
            <Image src={FigmaIcon} width={27} height={30} alt="" />
          </a>
          <Balancer as={'div'}>
            <Content.Paragraph>
              This logo was designed on{' '}
              <a href="https://figma.com" target="_blank">
                figma
              </a>
              .
            </Content.Paragraph>
          </Balancer>
        </div>
        <div>
          <Content.SubTopic>Font</Content.SubTopic>
          <Balancer className="!ml-2" as={'div'}>
            <Content.Paragraph>
              <Content.Span>Family: </Content.Span>
              Mplus1 1p
            </Content.Paragraph>
            <Content.Paragraph>
              <Content.Span>Weight: </Content.Span>
              Extrabold
            </Content.Paragraph>
            <Content.Paragraph>
              <Content.Span>Letter Spacing: </Content.Span>
              -10%
            </Content.Paragraph>
          </Balancer>
        </div>
      </div>
    </div>
  </Container>
)

export { LogoPage }
