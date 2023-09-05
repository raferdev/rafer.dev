import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/PageHeading'

import { WakatimeBadge } from './wakatimeBadge'

export const PresentationSection = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className="flex gap-4">
          Software Engineer <WakatimeBadge />
        </PageHeaderHeading>
        <PageHeaderDescription>
          Working building web solutions with NodeJS, NextJS, tests with Jest,
          database SQL and NoSQL, Docker, and more. Deploy on server and
          serveless environments with CI/CD.
        </PageHeaderDescription>
      </PageHeader>
    </>
  )
}
