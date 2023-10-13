/* eslint-disable @next/next/no-img-element */

import Balancer from 'react-wrap-balancer'

import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'
import { Section } from '@/components/Section'

export const ChessInviteSection = () => {
  return (
    <Section.Container className="min-h-64 w-full border-0 bg-inherit shadow-none">
      <Section.Header className="space-y-1">
        <Section.Title className="text-2xl">Let's play a Chess?</Section.Title>
        <Section.Description>
          Invite me to play a chess game on chess.com
        </Section.Description>
      </Section.Header>
      <Section.Content className="grid w-full grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <div className="flex items-center">
          <img
            loading="lazy"
            decoding="async"
            className="mr-6 h-20 w-20"
            src="./logos/chess-icon.png"
            alt="chess.com logo"
          />

          <Balancer className="text-secondary-foreground text-base font-normal sm:text-lg">
            I started to play chess in 2022, and i'm accepting new daily games,
            have mercy pls
          </Balancer>
        </div>
        <div className="grid w-full grid-cols-1 place-content-center justify-items-center gap-2">
          <Button asChild>
            <a
              href="https://www.chess.com/play/online/new?isInvited=1&opponent=raferdev"
              target="_blank"
            >
              <p className="flex text-sm font-bold text-muted-foreground">
                Chess.com
              </p>
              <span className="ml-2 flex w-full text-center font-normal text-foreground ">
                <Icons.bellsPlus
                  size={16}
                  className="mr-2 fill-icons-yellow-200"
                />
                Invite
              </span>
            </a>
          </Button>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
