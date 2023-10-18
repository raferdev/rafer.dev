import Balancer from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

export const FooterSection = () => {
  const { links } = __site
  return (
    <Section.Container
      className="w-full border-0 bg-inherit shadow-none"
      asChild
    >
      <footer>
        <Section.Content className="flex h-full w-full content-end items-baseline justify-center align-bottom">
          <Balancer className="text-base font-normal sm:text-lg">
            This landing page are open source and you can find it
            <Link
              href={links.self.repository}
              target="_blank"
              variant="raw"
              size="sm"
            >
              <span className="text-base sm:text-lg">here</span>
            </Link>
            , see you soon!
          </Balancer>
        </Section.Content>
        <Section.Footer className="flex w-full items-center justify-center text-sm text-muted-foreground">
          @raferdev 2023
        </Section.Footer>
      </footer>
    </Section.Container>
  )
}
