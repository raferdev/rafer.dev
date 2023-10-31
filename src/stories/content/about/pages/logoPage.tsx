import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { Docs } from '../../../components/Docs'
import FigmaIcon from '../../assets/figma-icon.png'
import LogoDraft from '../../assets/logo-drafts.png'
import LogoExplainBottom from '../../assets/logo-explain-bottom.png'
import LogoExplainTop from '../../assets/logo-explain-top.png'

const LogoPage = () => {
  const { Container, Content, Heading } = Docs
  return (
    <Container>
      <Content.Container>
        <div className="m-0 flex max-h-80 w-full items-center justify-center border-0 align-middle md:order-2">
          <Image src={LogoDraft} width={400} height={280} alt="" />
        </div>
      </Content.Container>

      <Content.Container>
        <Heading.Container>
          <Heading.Title>Logo</Heading.Title>
          <div className="flex items-baseline gap-4">
            <Heading.SubTitle>Made with love.</Heading.SubTitle>
          </div>
        </Heading.Container>
        <div className="flex flex-col gap-8 pl-4 pr-6 pt-6">
          <div className="flex flex-col">
            <Content.Topic>Overview</Content.Topic>
            <Balancer as={'div'}>
              <Content.Paragraph>
                This logo was designed thinking on make something that looks
                simple but with a lot of information, minimalist and dark but
                with some colorful. Trying to pass the identity of pragmatism,
                matematical and logical think but with a creativity and people
                oriented.
              </Content.Paragraph>
            </Balancer>
          </div>
          <div className="flex flex-col">
            <Content.Topic>Structure Analisys</Content.Topic>
            <Content.SubTopic>Top</Content.SubTopic>
            <div className="align-center !my-8 flex w-full justify-center">
              <Image src={LogoExplainTop} width={200} height={280} alt="" />
            </div>
            <Balancer as={'div'}>
              <Content.Paragraph>
                The top part of this logo was designed to be the expression of
                the criativity and oriented on user, to deliver things thinking
                on people. The piece of code showed on the top of this logo is a
                css code that i use on my first html + css project. And taking
                advantage of the fact this language is well-known for transform
                the same content on something enjoyable and understandable.
              </Content.Paragraph>
            </Balancer>
            <Content.SubTopic>Bottom</Content.SubTopic>
            <div className="align-center !my-4 flex w-full justify-center">
              <Image src={LogoExplainBottom} width={200} height={280} alt="" />
            </div>
            <Balancer as={'div'}>
              <Content.Paragraph>
                On the other hand this part takes the view of logical basis, the
                mathematics and physics aspects knowledge and interest. Using
                the binary numbers representation to show it all have a
                beginning, by two states, zeros and ones, to all the
                abstractions that we discovered and will discover. And I use a
                little difference by the text weight to make number lines with
                the binary representation of a knowing phrase in Portuguese.
              </Content.Paragraph>
            </Balancer>
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
      </Content.Container>
    </Container>
  )
}

export { LogoPage }
