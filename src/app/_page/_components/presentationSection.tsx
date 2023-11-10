import { PresentationSectionProps } from '@/@types/elements'
import { cn } from '@/utils/cn'

import { __site } from '@/config/site'
import { Section } from '@/components/Section'

const { Container, Header, Title, Description, Content } = Section

const PresentationSection = ({
  children,
  className,
}: PresentationSectionProps) => (
  <Container
    className={cn('w-full border-0 bg-inherit shadow-none', className)}
  >
    <Header>
      <Title className="z-10">Software Engineer</Title>
      <Description className="z-10">
        Pragmatism and creativity to create new things
      </Description>
    </Header>
    <Content className="flex flex-col pl-8 align-middle lg:grid lg:grid-cols-2">
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
    {children}
  </Container>
)

export { PresentationSection }
