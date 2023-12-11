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
        <div className="flex w-full items-center justify-center">
          <img
            className=" h-64 w-auto object-contain"
            height="256px"
            width="256px"
            loading="lazy"
            decoding="async"
            alt=""
            src="./idea-launch.png"
          />
        </div>

        <Balancer
          className="max-h-50px flex w-full flex-row justify-start text-center text-neutral-800"
          as={'p'}
        >
          This landing page is open source, and you can find it here,
          <Link
            href={links.self.repository}
            target="_blank"
            variant="raw"
            hover="textYellow"
            background="none"
            size="sm"
            aria-label="Github Repository"
          >
            github.com
          </Link>
          . See you soon!
        </Balancer>
      </Section.Content>
      <Section.Footer className="flex w-full flex-col items-center justify-center text-sm text-neutral-800">
        <span>
          Illustration source:{' '}
          <Link
            href="https://popsy.co/"
            target="_blank"
            variant="raw"
            hover="textYellow"
            background="none"
            size="none"
            aria-label="Popsy Home"
            className="m-0 inline-block w-0 min-w-min p-0 md:min-w-min"
          >
            popsy
          </Link>
        </span>
        raferdev@2023
      </Section.Footer>
    </footer>
  </Section.Container>
)

export { FooterSection }
