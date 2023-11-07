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
      <Section.Content className="flex flex-col py-0 md:items-end md:justify-end md:gap-0 lg:grid lg:grid-cols-1 lg:items-end lg:justify-end">
        <Balancer className="max-h-50px w-full text-center text-slate-500 drop-shadow-md lg:text-start">
          This landing page is open source, and you can find it
          <Link
            href={links.self.repository}
            target="_blank"
            variant="raw"
            size="sm"
            className="focus-visible: m-0 p-0"
          >
            <span className="text-base sm:text-lg">here</span>
          </Link>
          . See you soon!
        </Balancer>
      </Section.Content>
      <Section.Footer className="flex w-full items-center justify-center text-sm text-muted-foreground">
        raferdev@2023
      </Section.Footer>
    </footer>
  </Section.Container>
)

export { FooterSection }
