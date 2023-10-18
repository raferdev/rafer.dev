import Balancer from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'

export const PresentationSection = () => {
  return (
    <Section.Container className="flex min-h-[12rem] items-end">
      <PageHeader.Container>
        <Section.Header>
          <PageHeader.Heading className="flex flex-wrap content-start items-baseline gap-4">
            Software Engineer
          </PageHeader.Heading>
          <PageHeader.HeadingDescription>
            Pragmatism with creativity to create new things
          </PageHeader.HeadingDescription>
        </Section.Header>
      </PageHeader.Container>
      <Section.Content className="ml-4">
        <Balancer className="text-secondary-foreground text-base font-normal sm:text-lg">
          Working building web solutions with NodeJS, NextJS, tests with Jest,
          database SQL and NoSQL, Docker, and more. Deploy on server and
          serveless environments with CI/CD.
        </Balancer>
      </Section.Content>
    </Section.Container>
  )
}
