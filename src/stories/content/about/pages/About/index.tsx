import manInARocket from '@/stories/assets/man-riding-a-rocket.png'
import presentationImage from '@/stories/assets/studying.png'
import { Docs } from '@/stories/components/Docs'
import { IllustrationImg } from '@/stories/components/illustrationImage'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'

const { Container, Content, Header } = Docs

const AboutPage = () => {
  return (
    <Container className="relative">
      <IllustrationImg
        src={presentationImage}
        className="absolute right-0 top-0"
      />
      <Header.Container className="relative">
        <div className="flex flex-col items-baseline gap-4">
          <Header.Title>About</Header.Title>
          <Header.SubTitle>I will give you a brief overview!</Header.SubTitle>
        </div>
      </Header.Container>

      <div className="relative z-20 flex flex-col gap-8 py-16 pl-4 pr-6 pt-6">
        <div className="flex flex-col py-14">
          <Content.Topic>General</Content.Topic>
          <Content.Paragraph>
            Storybook is a developer tool that enables the development, testing,
            and documentation of UI components in an isolated environment and is
            used to create a design system for your company, project, etc.
          </Content.Paragraph>
        </div>
        <div className="flex flex-col pb-14">
          <Content.Topic>This App</Content.Topic>

          <Content.Paragraph>
            Here you will see the documents on the{' '}
            <a
              className="!font-bold !text-slate-800"
              aria-label="Raferdev website"
              href={__site.metadata.url}
            >
              rafer.dev
            </a>{' '}
            website. It's more about documenting insights about this project
            than showing UI and design documents, what this tool is suitable
            for, and using this powerful tool to organize ideas.
          </Content.Paragraph>
        </div>

        <div className="flex flex-col pb-14">
          <Content.Topic>More</Content.Topic>

          <Content.Paragraph>
            This project is open source, and you can access this repository
            here:{' '}
            <a
              href={__site.metadata.links.github}
              className="!font-bold !text-slate-800"
              aria-label="Github Repository"
              target="_blank"
            >
              github.com
            </a>
            .
          </Content.Paragraph>
        </div>
        <div className="grid  h-full w-full grid-cols-1 grid-rows-4 place-items-center gap-4 pb-36 pt-8 md:grid-cols-2 md:grid-rows-2">
          <Link
            iconFillColor="github"
            iconName="Github"
            textColor="black"
            hover="bgCyan"
            className="relative  z-20 box-border w-full !font-bold md:min-w-full"
            href={__site.links.profile.github}
            target="_blank"
          >
            Github
          </Link>
          <Link
            iconFillColor="youtube"
            iconName="Youtube"
            textColor="black"
            hover="bgCyan"
            className="relative z-20 box-border w-full !font-bold md:min-w-full"
            href={__site.links.profile.youtube}
            target="_blank"
          >
            Youtube
          </Link>
          <Link
            iconFillColor="linkedin"
            iconName="Linkedin"
            textColor="black"
            hover="bgCyan"
            className="relative z-20 box-border w-full !font-bold md:min-w-full"
            href={__site.links.profile.linkedin}
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            iconFillColor="white"
            textColor="black"
            hover="bgCyan"
            iconName="Mail"
            className="relative z-20 box-border w-full  !font-bold  md:min-w-full"
            href={__site.links.profile.email.raferdev}
            target="_blank"
          >
            Email
          </Link>
          <IllustrationImg
            src={manInARocket}
            className="absolute bottom-0 right-0 justify-center"
          />
        </div>
      </div>
    </Container>
  )
}

export { AboutPage }
