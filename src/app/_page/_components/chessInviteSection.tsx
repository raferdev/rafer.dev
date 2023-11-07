/* eslint-disable @next/next/no-img-element */

import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content, SubSection } = Section

const ChessInviteSection = () => (
  <Container>
    <Header>
      <Title asChild>
        <h4>Let's play chess</h4>
      </Title>
      <Description>Invite me to play a chess game on chess.com</Description>
    </Header>
    <Content>
      <SubSection.Content.Container>
        <SubSection.Content.Illustration animationColor="green-700">
          <img
            loading="lazy"
            decoding="async"
            className="h-24"
            src="./logos/chess-icon.png"
            alt="chess.com logo"
          />
        </SubSection.Content.Illustration>
        <SubSection.Content.Description>
          <p>
            I started to play chess in 2022, and I'm accepting new daily games
            to practice. Have mercy, please.
          </p>
        </SubSection.Content.Description>
      </SubSection.Content.Container>

      <SubSection.Links.Container>
        <Link
          iconFillColor="bell-plus"
          iconName="BellPlus"
          target="_blank"
          className="md:row-start-2"
          href={links.chess.invite}
        >
          Invite
        </Link>
      </SubSection.Links.Container>
    </Content>
  </Container>
)

export { ChessInviteSection }
