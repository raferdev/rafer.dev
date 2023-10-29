import Image from 'next/image'
import { Docs } from '@/stories/components/Docs'
import Balancer from 'react-wrap-balancer'

import { Link } from '../../../components/Link'
import { __site } from '../../../config/site'
import billboard from '../../assets/billboard.png'
import HandWaving from '../../assets/handWaving.svg'

const AboutPage = () => {
  return (
    <Docs.Container>
      <Docs.Heading.Container>
        <Docs.Heading.Title>About</Docs.Heading.Title>
        <div className="flex items-baseline gap-4">
          <Docs.Heading.SubTitle>
            I will give you a brief overview!
          </Docs.Heading.SubTitle>
          <Image src={HandWaving} width={32} height={32} alt="" />
        </div>
      </Docs.Heading.Container>

      <Docs.Content.Container>
        <div className="order-1 m-0 flex max-h-80 w-full items-center justify-center border-0 align-middle md:order-2">
          <Image
            src={billboard}
            width={400}
            height={212}
            alt="The top of rafer.dev site showing logo and greetings text"
          />
        </div>
        <div className="flex flex-col gap-8 pl-4 pr-6 pt-6">
          <div className="flex flex-col">
            <Docs.Content.Topic>General</Docs.Content.Topic>
            <Balancer as={'div'}>
              <Docs.Content.Paragraph>
                Storybook is a developer tool that enable the development,
                testing and documentation of UI components, in an isolated
                environment, and is used to create a design system of your
                company, project, ect.
              </Docs.Content.Paragraph>
            </Balancer>
          </div>
          <div className="flex flex-col">
            <Docs.Content.Topic>This App</Docs.Content.Topic>

            <Balancer as={'div'}>
              <Docs.Content.Paragraph>
                Here you will see the docs of{' '}
                <a href={__site.metadata.url}>rafer.dev</a> website. It's more
                about documenting insights about this project than showing UI
                and design docs, what this tool is suitable, using this powerful
                tool to organize ideas.
              </Docs.Content.Paragraph>
            </Balancer>
          </div>

          <div className="flex flex-col">
            <Docs.Content.Topic>More</Docs.Content.Topic>

            <Balancer as={'div'}>
              <Docs.Content.Paragraph>
                <p>
                  This project is open source and you can access this repository{' '}
                  <a href={__site.metadata.links.github}>here</a>.
                </p>
              </Docs.Content.Paragraph>
            </Balancer>
          </div>
          <div className="grid h-full w-full grid-cols-1 grid-rows-4 place-items-center gap-4 md:grid-cols-2 md:grid-rows-2">
            <Link
              iconFillColor="github"
              iconName="Github"
              className="box-border  w-full  md:min-w-full  [&>span>p]:!m-0 [&>span>p]:!font-sans"
              href={__site.links.profile.github}
              target="_blank"
            >
              Github
            </Link>
            <Link
              iconFillColor="youtube"
              iconName="Youtube"
              className="box-border w-full  md:min-w-full [&>span>p]:!m-0 [&>span>p]:!font-sans"
              href={__site.links.profile.youtube}
              target="_blank"
            >
              Youtube
            </Link>
            <Link
              iconFillColor="linkedin"
              iconName="Linkedin"
              className="box-border w-full  md:min-w-full [&>span>p]:!m-0 [&>span>p]:!font-sans"
              href={__site.links.profile.linkedin}
              target="_blank"
            >
              Linkedin
            </Link>
            <Link
              iconFillColor="white"
              iconName="Mail"
              className="box-border w-full  md:min-w-full [&>span>p]:!m-0 [&>span>p]:!font-sans"
              href={__site.links.profile.email.raferdev}
              target="_blank"
            >
              Email
            </Link>
          </div>
        </div>
      </Docs.Content.Container>
    </Docs.Container>
  )
}

export { AboutPage }
