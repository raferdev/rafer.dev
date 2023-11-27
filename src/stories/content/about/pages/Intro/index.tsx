import { Docs } from '@/stories/components/Docs'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'

import { IllustrationImg } from './illustrationImg'

const { Container, Content, Header } = Docs

const IntroPage = () => {
  return (
    <Container>
      <Header.Container>
        <div className="flex flex-col items-baseline gap-4">
          <Header.Title>About</Header.Title>
          <Header.SubTitle>I will give you a brief overview!</Header.SubTitle>
        </div>
        <IllustrationImg className="flex" />
      </Header.Container>

      <div className="flex flex-col gap-8 pl-4 pr-6 pt-6">
        <div className="flex flex-col">
          <Content.Topic>General</Content.Topic>
          <Content.Paragraph>
            Storybook is a developer tool that enables the development, testing,
            and documentation of UI components in an isolated environment and is
            used to create a design system for your company, project, etc.
          </Content.Paragraph>
        </div>
        <div className="flex flex-col">
          <Content.Topic>This App</Content.Topic>

          <Content.Paragraph>
            Here you will see the documents on the{' '}
            <a href={__site.metadata.url}>https://rafer.dev</a> website. It's
            more about documenting insights about this project than showing UI
            and design documents, what this tool is suitable for, and using this
            powerful tool to organize ideas.
          </Content.Paragraph>
        </div>

        <div className="flex flex-col">
          <Content.Topic>More</Content.Topic>

          <Content.Paragraph>
            This project is open source, and you can access this repository{' '}
            <a href={__site.metadata.links.github}>here</a>.
          </Content.Paragraph>
        </div>
        <div className="grid h-full w-full grid-cols-1 grid-rows-4 place-items-center gap-4 pb-16 pt-8 md:grid-cols-2 md:grid-rows-2">
          <Link
            iconFillColor="github"
            iconName="Github"
            className="box-border  w-full  md:min-w-full [&>span>p]:!m-0 [&>span>p]:!font-sans [&>span]:!text-white"
            href={__site.links.profile.github}
            target="_blank"
          >
            Github
          </Link>
          <Link
            iconFillColor="youtube"
            iconName="Youtube"
            className="box-border w-full  md:min-w-full [&>span>p]:!m-0 [&>span>p]:!font-sans [&>span]:!text-white"
            href={__site.links.profile.youtube}
            target="_blank"
          >
            Youtube
          </Link>
          <Link
            iconFillColor="linkedin"
            iconName="Linkedin"
            className="box-border w-full  md:min-w-full [&>span>p]:!m-0 [&>span>p]:!font-sans [&>span]:!text-white"
            href={__site.links.profile.linkedin}
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            iconFillColor="white"
            iconName="Mail"
            className="box-border w-full  md:min-w-full  [&>span>p]:!m-0 [&>span>p]:!font-sans [&>span]:!text-white"
            href={__site.links.profile.email.raferdev}
            target="_blank"
          >
            Email
          </Link>
        </div>
      </div>
    </Container>
  )
}

export { IntroPage }
