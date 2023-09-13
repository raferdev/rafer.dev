/* eslint-disable @next/next/no-img-element */

import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/Section'

export const ChessInviteSection = () => {
  return (
    <Section className="w-full border-0 bg-inherit shadow-none">
      <SectionHeader className="space-y-1">
        <SectionTitle className="text-2xl">Let's play a Chess?</SectionTitle>
        <SectionDescription>
          Invite me to play a chess game on chess.com
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="grid w-full grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <div className="flex items-center">
          <img
            className="mr-6 h-20 w-20"
            src="chess-icon.png"
            alt="chess.com logo"
          />

          <Balancer className="text-secondary-foreground text-base font-normal sm:text-lg">
            I started to play chess a few months, have mercy please
          </Balancer>
        </div>
        <div className="grid place-content-center">
          <Button asChild>
            <a
              href="https://www.chess.com/play/online/new?isInvited=1&opponent=raferdev"
              target="_blank"
            >
              <p className="flex text-sm font-bold text-muted-foreground">
                Chess.com -{' '}
                <span className="flex text-center font-normal text-foreground">
                  <Icons.bellsPlus size={35} className="h-5" />
                  Invite
                </span>
              </p>
            </a>
          </Button>
        </div>
      </SectionContent>
    </Section>
  )
}
