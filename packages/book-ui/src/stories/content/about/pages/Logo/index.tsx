import Image from 'next/image'
import FigmaIcon from '@/stories/assets/figma-icon.png'
import homeOffice from '@/stories/assets/home-office.png'
import LogoDraft from '@/stories/assets/logo-drafts.png'
import LogoExplainBottom from '@/stories/assets/logo-explain-bottom.png'
import LogoExplainTop from '@/stories/assets/logo-explain-top.png'
import { Docs } from '@/stories/components/Docs'
import { IllustrationImg } from '@/stories/components/illustrationImage'

const { Container, Content, Header } = Docs

const LogoPage = () => (
  <Container>
    <Header.Container className="overflow-visible">
      <div className="flex flex-col items-baseline gap-4">
        <Header.Title>Logo</Header.Title>
        <Header.SubTitle>Designer by a day (just tried it).</Header.SubTitle>
      </div>
    </Header.Container>

    <div className="flex flex-col gap-8 px-6">
      <div className="flex flex-col py-6">
        <Content.Topic>Overview</Content.Topic>
        <Content.Paragraph>
          This logo was created to be simple but informative, minimalist and
          dark but with some color. Trying to pass on the identity of pragmatism
          and mathematical and logical thinking but with creativity and
          people-oriented thinking.
        </Content.Paragraph>
        <IllustrationImg
          src={LogoDraft}
          width={400}
          height={280}
          className="align-center !my-16 flex w-full justify-center"
        />
      </div>
      <div className="flex flex-col !pb-14">
        <Content.Topic>Structure Analisys</Content.Topic>
        <Content.SubTopic className="!mt-6">Top</Content.SubTopic>

        <IllustrationImg
          src={LogoExplainTop}
          width={200}
          height={280}
          className="align-center !my-16 flex w-full justify-center"
        />

        <Content.Paragraph>
          The top part of this logo was designed to be the expression of the
          criativity and oriented on user, to deliver things thinking on people.
          The piece of code showed on the top of this logo is a css code that i
          use on my first html + css project. And taking advantage of the fact
          this language is well-known for transform the same content on
          something enjoyable and understandable.
        </Content.Paragraph>
        <Content.SubTopic className="!mt-16 !pb-14">Bottom</Content.SubTopic>
        <IllustrationImg
          src={LogoExplainBottom}
          width={200}
          height={280}
          className="align-center !my-16 flex w-full justify-center"
        />

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

      <div className="relative flex flex-col  !pb-14">
        <Content.Topic>Details</Content.Topic>
        <div className="!my-8 flex w-full justify-start opacity-90 drop-shadow-md">
          <a
            aria-label="Figma website"
            href="https://figma.com"
            target="_blank"
          >
            <Image
              src={FigmaIcon}
              loading="lazy"
              width={27}
              height={30}
              alt=""
            />
          </a>
          <Content.Paragraph className="!mb-14 !font-thin">
            This logo was designed on{' '}
            <a
              className="!text-lg  !font-normal !text-neutral-700 drop-shadow-md hover:opacity-75 md:!text-xl"
              aria-label="Figma website"
              href="https://figma.com"
              target="_blank"
            >
              figma
            </a>
            .
          </Content.Paragraph>
        </div>
        <div className="relative flex">
          <div className="w-40 text-start">
            <Content.SubTopic className="!text-xl !font-normal">
              Font
            </Content.SubTopic>
            <Content.Paragraph className="!text-base !font-thin">
              <Content.Span className="!font-normal">Family: </Content.Span>
              Mplus1 1p
            </Content.Paragraph>
            <Content.Paragraph className="!text-base !font-thin">
              <Content.Span className="!font-normal">Weight: </Content.Span>
              Extrabold
            </Content.Paragraph>
            <Content.Paragraph className="!flex !items-center !text-base !font-thin">
              <Content.Span className="!font-normal">
                Letter Spacing:
              </Content.Span>{' '}
              -10%
            </Content.Paragraph>
          </div>

          <IllustrationImg
            src={homeOffice}
            className="absolute bottom-0 right-0 justify-center"
          />
        </div>
      </div>
    </div>
  </Container>
)

export { LogoPage }
