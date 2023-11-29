import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

const { links } = __site
const { Container, Header, Title, Description, Content, SubSection } = Section
const { Postgres } = Planets

const MyworldxSection = () => (
  <Container className="mb-24 lg:mb-44">
    <Header className="bg-gradient-to-l from-blue-300 from-10% to-white bg-clip-text text-transparent">
      <Postgres className="bottom-0 right-0 sm:-right-20 sm:bottom-0 lg:bottom-0 lg:right-0" />
      <Title asChild>
        <h2>Check this out</h2>
      </Title>
      <Description>My new open source project</Description>
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-cyan-500 blur-sm"></div>
    </Header>
    <Content className="relative px-8">
      <div className="absolute bottom-0 left-20 h-1 w-1 rounded-full bg-red-500 blur-sm"></div>
      <div className="absolute bottom-0 right-20 h-1 w-1 animate-pulse rounded-full bg-white blur-sm"></div>

      <SubSection.Content.Container>
        <SubSection.Content.Illustration
          color_big="gray_400"
          color_small="gray_300"
        >
          <div className="relative rounded-full">
            <div className="absolute left-0 top-0 -z-20 h-24 w-24 rounded-full bg-white blur-sm"></div>
            <div className=" absolute left-0 top-0 -z-10 h-24 w-24 rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200"></div>
            <img
              loading="lazy"
              decoding="async"
              height="24rem"
              width="auto"
              className="h-24 w-auto"
              src="./logos/myworldx-logo.png"
              alt=""
            />
          </div>
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
          text="white"
          hover="cyan"
          color="#d9d9d9"
          target="_blank"
          iconName="Home"
          background="black3"
          iconFillColor="none"
          href={links.myworldx.home}
          aria-label="MyWorldx home"
        >
          Home
        </Link>
        <Link
          text="white"
          hover="cyan"
          target="_blank"
          color="#d9d9d9"
          iconName="FileText"
          background="black3"
          iconFillColor="none"
          href={links.myworldx.raferdev}
          aria-label="MyWorldx profile page"
        >
          My page
        </Link>
        <Link
          text="white"
          hover="cyan"
          target="_blank"
          color="#d9d9d9"
          iconName="Github"
          background="black3"
          iconFillColor="none"
          href={links.myworldx.repository}
          aria-label="MyWorldx github repository"
        >
          Repository
        </Link>
      </SubSection.Links.Container>
    </Content>
  </Container>
)

export { MyworldxSection }
