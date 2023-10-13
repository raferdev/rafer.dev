import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const FooterSection = () => {
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
              <Button variant="link" size="sm" asChild>
                <a
                  href="https://github.com/raferdev/landing-page"
                  target="_blank"
                >
                  <span className="text-base sm:text-lg">here</span>
                </a>
              </Button>
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
