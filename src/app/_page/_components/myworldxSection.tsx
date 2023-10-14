/* eslint-disable @next/next/no-img-element */
import Balance from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

export const MyworldxSection = () => {
  const { links } = __site
  return (
    <Section.Container className="min-h-64 w-full border-0 bg-inherit shadow-none">
      <Section.Header className="space-y-1">
        <Section.Title className="text-2xl">Check This Out</Section.Title>
        <Section.Description>
          My new open source project Myworldx
        </Section.Description>
      </Section.Header>
      <Section.Content className="grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <div className="flex items-center">
          <img
            loading="lazy"
            decoding="async"
            className="mr-4 h-20"
            src="./logos/myworldx-logo.png"
            alt=""
          />
          <Balance className="text-secondary-foreground text-base font-normal sm:text-lg">
            Myworldx it's builded to github user's can show your content more
            easily based on markdown files on your repo's.
          </Balance>
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-3 place-content-center justify-items-center gap-y-4">
          <Link
            iconFill="fill-icons-cyan-200"
            iconName="Home"
            label="Myworldx"
            href={links.myworldx.home}
            target="_blank"
          >
            Home
          </Link>
          <Link
            iconFill="fill-icons-white"
            iconName="FileText"
            label="Myworldx"
            href={links.myworldx.raferdev}
            target="_blank"
          >
            My page
          </Link>
          <Link
            iconFill="fill-icons-github"
            iconName="Github"
            label="Myworldx"
            href={links.myworldx.repository}
            target="_blank"
          >
            Repository
          </Link>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
