import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content } = Section

const LinksSection = () => (
  <Container className="mb-32 lg:mb-28">
    <Header className="text-neutral-800">
      <Title className="text-2xl" asChild>
        <h5>See more</h5>
      </Title>
      <Description>
        You can see more about me at the following links
      </Description>
    </Header>
    <Content className="min-h-40 grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-4 p-8 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-0">
      <Link
        text="black"
        target="_blank"
        iconName="Github"
        iconFillColor="github"
        href={links.profile.github}
        aria-label='Github "raferdev" profile'
      >
        Github
      </Link>
      <Link
        text="black"
        target="_blank"
        iconName="Youtube"
        iconFillColor="youtube"
        href={links.profile.youtube}
        aria-label='Youtube "raferdev" channel'
      >
        Youtube
      </Link>
      <Link
        text="black"
        target="_blank"
        iconName="Linkedin"
        iconFillColor="linkedin"
        href={links.profile.linkedin}
        aria-label='Linkedin "raferdev" profile'
      >
        Linkedin
      </Link>
      <Link
        text="black"
        target="_blank"
        iconName="Mail"
        aria-label="Email"
        iconFillColor="white"
        href={links.profile.email.raferdev}
      >
        Email
      </Link>
      <Link
        text="black"
        target="_blank"
        iconName="Twitter"
        iconFillColor="twitter"
        href={links.profile.twitter}
        aria-label='Twitter "raferdev" profile'
      >
        Twitter / X
      </Link>
      <Link
        text="black"
        target="_blank"
        iconName="Instagram"
        iconFillColor="instagram"
        href={links.profile.instagram}
        aria-label='Instagram "raferdev" profile'
      >
        Instagram
      </Link>
    </Content>
  </Container>
)

export { LinksSection }
