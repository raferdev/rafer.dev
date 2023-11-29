import { __site } from '@/config/site'
import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

const { Container, Header, Title, Description, Content } = Section
const { MongoDB } = Planets

const PresentationSection = () => (
  <Container className="mb-24 w-full border-0 bg-inherit shadow-none lg:mb-44">
    <Header className="bg-gradient-to-l from-emerald-200 from-10% to-white bg-clip-text text-transparent">
      <MongoDB className="-top-10 right-0 -z-10 animate-wiggle animate-duration-[40s] animate-infinite" />
      <Title>Software Engineer</Title>
      <Description>Pragmatism and creativity to create new things</Description>
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-cyan-500 blur-sm"></div>
    </Header>
    <Content className="relative flex flex-col px-8 align-middle lg:grid lg:grid-cols-2">
      <div className="absolute bottom-0 right-20 h-1 w-1 rounded-full bg-cyan-500 blur-sm"></div>

      <div className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-yellow-500 blur-sm"></div>
      <div>
        <p>
          I have worked since 2019 with development using VBA, Python to create
          macros and other automations, and Nocode websites. Since January 2022,
          I've been working with FullStack web development. I'm graduating from
          physics and starting a software engineering degree.
        </p>
      </div>
      <div>
        <p>
          I'm working on building web solutions with NodeJS, NextJS, and tests
          with Jest, database SQL and NoSQL, Docker, deploy servers, and
          serveless environments with CI/CD. I selected other languages to be
          familiar with and probably work with. The objective is to build a
          solid base of knowledge and experience to solve problems and create
          new things, regardless of the tools, framework, or technology. Until
          then, I will become a specialist in what I do now.
        </p>
      </div>
    </Content>
  </Container>
)

export { PresentationSection }
