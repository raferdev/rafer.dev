import Balancer from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

export const FooterSection = () => {
  const { links } = __site
  return (
    <Section.Container
      className="flex w-full content-end justify-center border-0 bg-inherit shadow-none"
      asChild
    >
      <footer>
        <Section.Content className="flex h-full w-full justify-center align-bottom">
          <Balancer className="text-base font-normal sm:text-lg">
            This landing page is open source and you can find it
            <Link
              href={links.self.repository}
              target="_blank"
              variant="raw"
              className="m-0 p-0"
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