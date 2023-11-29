import Balancer from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { links } = __site

const FooterSection = () => (
  <Section.Container
    className="relative flex min-h-[350px] flex-col items-center justify-start align-bottom"
    asChild
  >
    <footer>
      <Section.Content className="flex flex-col justify-start py-0 md:items-start md:justify-end md:gap-0 lg:flex  lg:flex-col lg:items-end lg:justify-end">
        <img
          className="absolute -bottom-10 right-0 h-64 w-auto object-contain opacity-80"
          height="256px"
          width="256px"
          loading="lazy"
          decoding="async"
          src="./idea-launch.png"
        />

        <Balancer
          className="max-h-50px flex w-full flex-row justify-start text-center text-neutral-800 drop-shadow-md md:max-w-sm lg:max-w-none lg:text-start"
          as={'p'}
        >
          This landing page is open source, and you can find it here,
          <Link
            href={links.self.repository}
            target="_blank"
            variant="raw"
            hover="textGreen"
            background="none"
            size="none"
            aria-label="Github Repository"
            className="m-0 inline-block w-0 min-w-min p-0 text-base sm:text-lg md:min-w-min"
          >
            github.com
          </Link>
          . See you soon!
        </Balancer>
      </Section.Content>
      <Section.Footer className="flex w-full items-center justify-center text-sm text-neutral-700">
        raferdev@2023
      </Section.Footer>
    </footer>
  </Section.Container>
)

export { FooterSection }
