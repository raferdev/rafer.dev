import Balancer from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { links } = __site

const FooterSection = () => (
  <Section.Container
    className="flex min-h-[200px] flex-col items-end justify-end align-bottom"
    asChild
  >
    <footer>
      <Section.Content className="flex flex-col py-0 md:items-end md:justify-end md:gap-0 lg:flex lg:flex-col lg:items-end lg:justify-end">
        <Balancer className="max-h-50px w-full text-center text-slate-500 drop-shadow-md lg:text-start">
          This landing page is open source, and you can find it here,
          <Link
            href={links.self.repository}
            target="_blank"
            variant="raw"
            aria-label="Github Repository"
            className="focus-visible: m-0 w-0 min-w-min p-0 text-muted-foreground md:min-w-min"
          >
            <span
              className="text-base sm:text-lg"
              aria-label="github repository"
            >
              github.com
            </span>
          </Link>
          . See you soon!
        </Balancer>
      </Section.Content>
      <Section.Footer className="flex w-full items-center justify-center text-sm text-slate-500">
        raferdev@2023
      </Section.Footer>
    </footer>
  </Section.Container>
)

export { FooterSection }