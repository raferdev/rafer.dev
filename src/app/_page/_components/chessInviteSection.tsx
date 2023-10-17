/* eslint-disable @next/next/no-img-element */

import Balancer from 'react-wrap-balancer'

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

export const ChessInviteSection = () => {
  const { links } = __site
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
          <Link
            iconFillColor="yellow-200"
            iconName="BellPlus"
            label="Chess.com"
            target="_blank"
            href={links.chess.invite}
          >
            Invite
          </Link>
        </div>
      </Section.Content>
    </Section.Container>
  )
}
