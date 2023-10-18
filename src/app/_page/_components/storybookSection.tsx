/* eslint-disable @next/next/no-img-element */

import Balancer from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

export const StorybookSection = () => {
  const { links } = __site
  return (
    <Section.Container className="w-full border-0 bg-inherit shadow-none">
      <Section.Header className="space-y-1">
        <Section.Title className="text-2xl">Storybook</Section.Title>
        <Section.Description>
          You can view the docs on storybook
        </Section.Description>
      </Section.Header>
      <Section.Content className="grid w-full grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <div className="flex items-center">
          <img
            loading="lazy"
            decoding="async"
            className="mr-6 h-20 w-20"
            src="./logos/storybook.png"
            alt="storybook logo"
          />

          <Balancer className="text-secondary-foreground text-base font-normal sm:text-lg">
            I'm not a designer, UI/UX, but i love documentation and storybook.
            You can see more about components, logo, and more here.
          </Balancer>
        </div>
        <div className="grid w-full grid-cols-1 place-content-center justify-items-center gap-2">
          <Link
            iconFillColor="storybook"
            iconName="BookOpen"
            label="Storybook"
            target="_blank"
            href={links.storybook}
          >
            Docs
          </Link>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
