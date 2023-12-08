import { __site } from '@/config/site'
import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

const { Container, Header, Title, Description, Content } = Section
const { MongoDB, Decorative } = Planets

const PresentationSection = () => (
  <Container className="mb-32 w-full border-0 bg-inherit shadow-none lg:mb-52">
    <Header className="bg-gradient-to-l from-emerald-200 from-10% to-white bg-clip-text text-transparent">
      <MongoDB className="-top-28 right-0 -z-10" />
      <Title>Software Engineer</Title>
      <Description>Pragmatism and creativity to create new things</Description>
      <Decorative className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-cyan-500 blur-sm" />
    </Header>
    <Content className="relative gap-8 align-middle lg:grid-cols-2">
      <Decorative className="absolute bottom-0 right-20 h-1 w-1 rounded-full bg-cyan-500 blur-sm" />

      <Decorative className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-yellow-500 blur-sm" />
      <div>
        <p>
          I have worked since 2019 with development using VBA, Python to create
          macros and other automations, and Nocode websites. Since January 2022,
          I've been working with FullStack web development. I'm graduating from
          physics and starting a software engineering degree.
        </p>
        <p>
          I'm working on building web solutions with NodeJS, NextJS, and tests
          with Jest, database SQL and NoSQL, Docker, deploy servers, and
          serveless environments with CI/CD. I selected other languages to be
          familiar with and probably work with.
        </p>
      </div>
      <div>
        <p>
          The objective is to build a solid base of knowledge and experience to
          solve problems and create new things, regardless of the tools,
          framework, or technology. Until then, I will become a specialist in
          what I do now.
        </p>
      </div>
    </Content>
  </Container>
)

export { PresentationSection }
