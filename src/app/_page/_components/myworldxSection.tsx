/* eslint-disable @next/next/no-img-element */
import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { links } = __site
const { Container, Header, Title, Description, Content, SubSection } = Section

const MyworldxSection = () => (
  <Container>
    <Header>
      <Title asChild>
        <h2>Check this out</h2>
      </Title>
      <Description>My new open source project</Description>
    </Header>
    <Content>
      <SubSection.Content.Container>
        <SubSection.Content.Illustration
          color_big="gray_400"
          color_small="gray_300"
        >
          <img
            loading="lazy"
            decoding="async"
            height="96"
            width="108"
            className="h-24 w-auto"
            src="./logos/myworldx-logo.png"
            alt=""
          />
        </SubSection.Content.Illustration>
        <SubSection.Content.Description>
          <p>
            MyWorldx is built for GitHub, so users can show their content more
            easily based on markdown files on their repos. It creates a content
            tree that can be organized better, among other things that you can
            find in the links.
          </p>
        </SubSection.Content.Description>
      </SubSection.Content.Container>
      <SubSection.Links.Container>
        <Link
          iconName="Home"
          iconFillColor="home"
          href={links.myworldx.home}
          aria-label="MyWorldx home"
          target="_blank"
        >
          Home
        </Link>
        <Link
          iconName="FileText"
          iconFillColor="white"
          href={links.myworldx.raferdev}
          aria-label="MyWorldx profile page"
          target="_blank"
        >
          My page
        </Link>
        <Link
          iconFillColor="github"
          iconName="Github"
          href={links.myworldx.repository}
          aria-label="MyWorldx github repository"
          target="_blank"
        >
          Repository
        </Link>
      </SubSection.Links.Container>
    </Content>
  </Container>
)

export { MyworldxSection }
