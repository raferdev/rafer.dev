import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import { Section, SectionContent, SectionFooter } from '@/components/Section'

export const FooterSection = () => {
  return (
    <Section className="w-full border-0 bg-inherit shadow-none" asChild>
      <footer>
        <SectionContent className="grid w-full grid-rows-2 gap-2">
          <div className="flex w-full items-center">
            <Balancer className="text-secondary-foreground text-base font-normal sm:text-lg">
              This landing page are open source and you can find it
              <Button variant="link" asChild>
                <a
                  href="https://github.com/raferdev/landing-page"
                  target="_blank"
                >
                  <span className="text-lg">here</span>
                </a>
              </Button>
              , see you soon!
            </Balancer>
          </div>
        </SectionContent>
        <SectionFooter className="flex w-full items-center justify-center text-sm text-muted-foreground">
          @raferdev 2023
        </SectionFooter>
      </footer>
    </Section>
  )
}
