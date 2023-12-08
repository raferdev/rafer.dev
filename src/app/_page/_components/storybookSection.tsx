import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content, SubSection } = Section
const { Tailwind, Decorative } = Planets

const StorybookSection = () => (
  <Container className="relative mb-52 lg:mb-64">
    <Decorative className="right-40 top-0 h-1 w-1 bg-yellow-100 blur-sm" />
    <Decorative className="right-72 top-32 h-1 w-1 bg-red-100 blur-sm" />

    <Header className="relative bg-gradient-to-l from-blue-200 from-10% to-white bg-clip-text text-transparent">
      <Tailwind className="-top-20 -z-10 lg:-top-20 lg:right-32" />
      <Decorative className="absolute bottom-0 left-20 h-1 w-1 rounded-full bg-cyan-500 blur-sm" />
      <Title asChild>
        <h3>Storybook</h3>
      </Title>
      <Description>You can view the documents on StoryBook</Description>
    </Header>
    <Content className="relative">
      <Decorative className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-cyan-500 blur-sm" />

      <SubSection.Content.Container>
        <SubSection.Content.Illustration>
          <div className="relative rounded-full">
            <Decorative className="absolute left-0 top-0 -z-20 h-[96px] w-[96px] rounded-full bg-white blur-sm" />
            <Decorative className=" absolute left-0 top-0 -z-10 h-[96px] w-[96px] rounded-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-400 via-gray-300 to-blue-500" />
            <img
              height="96px"
              width="108px"
              loading="lazy"
              decoding="async"
              className="h-24 w-auto opacity-80 shadow-black drop-shadow-lg"
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
      <SubSection.Links.Container className="flex items-center justify-center">
        <Link
          hover="bgCyan"
          textColor="white"
          target="_blank"
          iconColor="#f78bd2"
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
