import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content } = Section

const LinksSection = () => (
  <Container className="mb-28 md:mb-32">
    <Header>
      <Title className="text-2xl text-neutral-300" asChild>
        <h5>See more</h5>
      </Title>
      <Description className="text-neutral-300">
        You can see more about me at the following links
      </Description>
    </Header>
    <Content className="min-h-40 grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-4 p-8 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-0">
      <Link
        textColor="black"
        target="_blank"
        hover="bgCyan"
        iconName="Github"
        iconFillColor="github"
        href={links.profile.github}
      >
        Github
      </Link>
      <Link
        textColor="black"
        target="_blank"
        hover="bgCyan"
        iconName="Youtube"
        iconFillColor="youtube"
        href={links.profile.youtube}
      >
        Youtube
      </Link>
      <Link
        textColor="black"
        target="_blank"
        hover="bgCyan"
        iconName="Linkedin"
        iconFillColor="linkedin"
        href={links.profile.linkedin}
      >
        Linkedin
      </Link>
      <Link
        textColor="black"
        target="_blank"
        hover="bgCyan"
        iconName="Mail"
        iconFillColor="white"
        href={links.profile.email.raferdev}
      >
        Email
      </Link>
      <Link
        textColor="black"
        target="_blank"
        hover="bgCyan"
        iconName="Twitter"
        iconFillColor="twitter"
        href={links.profile.twitter}
      >
        Twitter / X
      </Link>
      <Link
        textColor="black"
        target="_blank"
        hover="bgCyan"
        iconName="Instagram"
        iconFillColor="instagram"
        href={links.profile.instagram}
      >
        Instagram
      </Link>
    </Content>
  </Container>
)

export { LinksSection }
