import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content, SubSection } = Section
const { Playwright } = Planets

const ChessInviteSection = () => (
  <Container className="lg:mb-44">
    <Header className="bg-gradient-to-r from-white from-10% via-red-200 to-green-400 bg-clip-text text-transparent">
      <Playwright className="right-0 top-0 -z-10 sm:-right-12 sm:bottom-0 lg:-right-20 lg:bottom-0" />
      <Title asChild>
        <h4>Let's play chess</h4>
      </Title>
      <Description>Invite me to play a chess game on chess.com</Description>
    </Header>
    <Content className="px-8 text-neutral-300">
      <SubSection.Content.Container>
        <SubSection.Content.Illustration
          color_big="green_300"
          color_small="green_200"
        >
          <div className="relative rounded-full">
            <div className="absolute left-0 top-0 -z-20 h-24 w-24 rounded-full bg-white blur-sm"></div>
            <div className=" absolute left-0 top-0 -z-10 h-24 w-24 rounded-full bg-gradient-to-br from-green-200 via-green-500 to-green-900"></div>

            <img
              width="auto"
              loading="lazy"
              height="24rem"
              decoding="async"
              alt="chess.com logo"
              src="./logos/chess-icon.png"
              className="h-24 w-auto shadow-black drop-shadow-lg"
            />
          </div>
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
          text="gray"
          hover="cyan"
          target="_blank"
          color="#d4d4d4"
          iconName="BellPlus"
          background="black1"
          iconFillColor="none"
          href={links.chess.invite}
          aria-label='Chess.com "Play with a friend" page'
        >
          Invite
        </Link>
      </SubSection.Links.Container>
    </Content>
  </Container>
)

export { ChessInviteSection }
