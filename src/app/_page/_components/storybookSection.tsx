/* eslint-disable @next/next/no-img-element */

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content, SubSection } = Section

const StorybookSection = () => (
  <Container>
    <Header>
      <Title asChild>
        <h3>Storybook</h3>
      </Title>
      <Description>You can view the documents on StoryBook</Description>
    </Header>
    <Content>
      <SubSection.Content.Container>
        <SubSection.Content.Illustration
          color_big="rose_250"
          color_small="rose_200"
        >
          <img
            loading="lazy"
            decoding="async"
            height="96px"
            width="108px"
            src="./logos/storybook.png"
            alt="storybook logo"
          />
        </SubSection.Content.Illustration>
        <SubSection.Content.Description>
          <p>
            I'm not a professional designer or UI/UX, but I love documentation,
            and Storybook nailed it. You can see more about the components,
            logos, and even system architecture of this website here.
          </p>
        </SubSection.Content.Description>
      </SubSection.Content.Container>
      <SubSection.Links.Container>
        <Link
          iconFillColor="storybook"
          iconName="BookOpen"
          target="_blank"
          className="md:row-start-2"
          aria-label="Storybook Home"
          href={links.storybook}
        >
          About
        </Link>
      </SubSection.Links.Container>
    </Content>
  </Container>
)

export { StorybookSection }
