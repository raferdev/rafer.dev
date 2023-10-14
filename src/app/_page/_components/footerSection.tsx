import Balancer from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

export const FooterSection = () => {
  const { links } = __site
  return (
    <Section.Container
      className="min-h-64 w-full border-0 bg-inherit shadow-none"
      asChild
    >
      <footer>
        <Section.Content className="grid w-full grid-rows-2 gap-2">
          <div className="flex w-full items-center">
            <Balancer className="text-secondary-foreground text-base font-normal sm:text-lg">
              This landing page are open source and you can find it
              <Link
                href={links.self.repository}
                target="_blank"
                variant="link"
                size="sm"
              >
                <span className="text-base sm:text-lg">here</span>
              </Link>
              , see you soon!
            </Balancer>
          </div>
        </Section.Content>
        <Section.Footer className="flex w-full items-center justify-center text-sm text-muted-foreground">
          @raferdev 2023
        </Section.Footer>
      </footer>
    </Section.Container>
  )
}
