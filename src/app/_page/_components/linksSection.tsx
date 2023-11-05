import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content } = Section

const LinksSection = () => (
  <Container>
    <Header className="space-y-1">
      <Title className="text-2xl" asChild>
        <h5>See more</h5>
      </Title>
      <Description>
        You can see more about me at the following links:
      </Description>
    </Header>
    <Content className="min-h-40 grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-4 p-8 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-0">
      <Link
        iconFillColor="github"
        iconName="Github"
        href={links.profile.github}
        target="_blank"
      >
        Github
      </Link>
      <Link
        iconFillColor="youtube"
        iconName="Youtube"
        href={links.profile.youtube}
        target="_blank"
      >
        Youtube
      </Link>
      <Link
        iconFillColor="linkedin"
        iconName="Linkedin"
        href={links.profile.linkedin}
        target="_blank"
      >
        Linkedin
      </Link>
      <Link
        iconFillColor="white"
        iconName="Mail"
        href={links.profile.email.raferdev}
        target="_blank"
      >
        Email
      </Link>
      <Link
        iconFillColor="twitter"
        iconName="Twitter"
        href={links.profile.twitter}
        target="_blank"
      >
        Twitter / X
      </Link>
      <Link
        iconFillColor="instagram"
        iconName="Instagram"
        href={links.profile.instagram}
        target="_blank"
      >
        Instagram
      </Link>
    </Content>
  </Container>
)

export { LinksSection }
