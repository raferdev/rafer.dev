import Balancer from 'react-wrap-balancer'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/PageHeading'
import { Section, SectionContent, SectionHeader } from '@/components/Section'

import { WakatimeBadge } from './wakatimeBadge'

export const PresentationSection = () => {
  return (
    <Section className="flex items-end">
      <PageHeader>
        <SectionHeader>
          <PageHeaderHeading className="flex flex-wrap content-start items-baseline gap-4">
            Software Engineer
            <WakatimeBadge className="w-44 md:w-52" />
          </PageHeaderHeading>
          <PageHeaderDescription>
            Pragmatism with creativity to create new things
          </PageHeaderDescription>
        </SectionHeader>
      </PageHeader>
      <SectionContent className="ml-4">
        <Balancer className="text-secondary-foreground text-base font-normal sm:text-lg">
          Working building web solutions with NodeJS, NextJS, tests with Jest,
          database SQL and NoSQL, Docker, and more. Deploy on server and
          serveless environments with CI/CD.
        </Balancer>
      </SectionContent>
    </Section>
  )
}
