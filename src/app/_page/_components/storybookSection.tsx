import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content, SubSection } = Section
const { Tailwind } = Planets

const StorybookSection = () => (
  <Container className="lg:mb-44">
    <Header className="bg-gradient-to-l from-blue-200 from-10% to-white bg-clip-text text-transparent">
      <div className="absolute bottom-0 left-20 h-1 w-1 rounded-full bg-cyan-500 blur-sm"></div>

      <Tailwind className="-bottom-10 right-0 -z-10 animate-wiggle animate-duration-[40s] animate-infinite sm:-bottom-10 sm:-right-10 lg:-right-14 lg:bottom-0" />
      <Title asChild>
        <h3>Storybook</h3>
      </Title>
      <Description>You can view the documents on StoryBook</Description>
    </Header>
    <Content className="relative px-8">
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-cyan-500 blur-sm"></div>

      <SubSection.Content.Container>
        <SubSection.Content.Illustration
          color_big="rose_250"
          color_small="rose_200"
        >
          <div className="relative rounded-full">
            <div className="absolute left-0 top-0 -z-20 h-[96px] w-[96px] rounded-full bg-white blur-sm"></div>
            <div className=" absolute left-0 top-0 -z-10 h-[96px] w-[96px] rounded-full bg-gradient-to-br from-red-400 via-gray-300 to-blue-500"></div>
            <img
              height="96px"
              width="108px"
              loading="lazy"
              decoding="async"
              className="h-24 w-auto shadow-black drop-shadow-lg"
              src="./logos/storybook.png"
              alt="storybook logo"
            />
          </div>
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
          hover="cyan"
          text="white"
          target="_blank"
          color="#d9d9d9"
          iconName="BookOpen"
          background="black2"
          iconFillColor="none"
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
