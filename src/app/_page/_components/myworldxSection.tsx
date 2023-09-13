/* eslint-disable @next/next/no-img-element */
import Balance from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/Section'

export const MyworldxSection = () => {
  return (
    <Section className="w-full border-0 bg-inherit shadow-none">
      <SectionHeader className="space-y-1">
        <SectionTitle className="text-2xl">Check This Out</SectionTitle>
        <SectionDescription>
          My new open source project Myworldx
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <div className="flex items-center">
          <img
            className="mr-4 h-20"
            src="myworldx-logo.png"
            alt="myworldx logo"
          />
          <Balance className="text-secondary-foreground text-base font-normal sm:text-lg">
            Myworldx it's builded to github user's can show your content more
            easily based on markdown files on your repo's.
          </Balance>
        </div>
        <div className="grid grid-rows-3 place-content-center gap-2">
          <Button asChild>
            <a href="https://myworldx.dev">
              <p className="flex text-sm font-bold text-muted-foreground">
                Myworldx -{' '}
                <span className="flex text-center font-normal text-foreground">
                  <Icons.home size={35} className="h-5" />
                  Home
                </span>
              </p>
            </a>
          </Button>
          <Button asChild>
            <a href="https://myworldx.dev/raferdev">
              <p className="flex text-sm font-bold text-muted-foreground ">
                Myworldx -{' '}
                <span className="flex text-center font-normal text-foreground ">
                  <Icons.fileText size={35} className="h-5" />
                  My page
                </span>
              </p>
            </a>
          </Button>
          <Button asChild>
            <a href="https://github.com/myworldx/myworldx">
              <p className="flex text-sm font-bold text-muted-foreground ">
                Myworldx -{' '}
                <span className="flex text-center font-normal text-foreground ">
                  <Icons.github size={35} className="h-5" />
                  Repo
                </span>
              </p>
            </a>
          </Button>
        </div>
      </SectionContent>
    </Section>
  )
}
