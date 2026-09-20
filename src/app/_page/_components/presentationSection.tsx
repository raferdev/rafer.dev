import { __site } from '@/config/site'
import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

const { Container, Header, Title, Description, Content } = Section
const { MongoDB, Decorative } = Planets

const PresentationSection = () => (
  <Container className="mb-32 w-full border-0 bg-inherit shadow-none lg:mb-52">
    <Header className="bg-gradient-to-l from-emerald-200 from-10% to-white bg-clip-text text-transparent">
      <MongoDB className="-top-28 right-0 -z-10" />
      <Title>Product Engineer</Title>
      <Description>
        Building products end to end, from the first commit to scaling in
        production
      </Description>
      <Decorative className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-cyan-500 blur-sm" />
    </Header>
    <Content className="relative gap-8 align-middle lg:grid-cols-2">
      <Decorative className="absolute bottom-0 right-20 h-1 w-1 rounded-full bg-cyan-500 blur-sm" />

      <Decorative className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-yellow-500 blur-sm" />
      <div>
        <p>
          I build software end to end, with a strong foundation in backend and
          system design. My main stack is Node.js, TypeScript and NestJS, plus
          Java, building REST APIs, microservices and event-driven systems, with
          SQL and NoSQL databases, Docker, AWS and CI/CD.
        </p>
        <p>
          I've shipped features to production in systems handling real money,
          where reliability isn't optional. That shaped how I care about
          observability, performance and clean, maintainable code. My path
          started in physics and logic, moved through automation and full-stack
          development, and taught me to understand a problem deeply before
          writing a line of code.
        </p>
      </div>
      <div>
        <p>
          More than shipping features, I care about the product and the people
          around it. Technology should be used to help people, and I want to
          build things that make that the rule.
        </p>
      </div>
    </Content>
  </Container>
)

export { PresentationSection }
