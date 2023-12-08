import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

const { links } = __site

const { Container, Header, Title, Description, Content, SubSection } = Section
const { Playwright, Decorative } = Planets

const ChessInviteSection = () => (
  <Container className="relative mb-32 md:mb-40 lg:mb-52">
    <Decorative className="left-32 top-0 h-1 w-1 bg-yellow-100 blur-sm" />

    <Header className="bg-gradient-to-r from-white from-10% via-red-200 to-green-400 bg-clip-text text-transparent">
      <Playwright className="right-0 top-0 -z-10 sm:-right-12 sm:bottom-0 lg:-right-20 lg:bottom-0" />
      <Title asChild>
        <h4>Let's play chess</h4>
      </Title>
      <Description>Invite me to play a chess game on chess.com</Description>
    </Header>
    <Content className="text-neutral-300">
      <SubSection.Content.Container>
        <SubSection.Content.Illustration>
          <div className="relative rounded-full">
            <Decorative className="absolute left-0 top-0 -z-20 h-24 w-24 rounded-full bg-white blur-sm" />
            <Decorative className=" absolute left-0 top-0 -z-10 h-24 w-24 rounded-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white from-40% via-green-500 to-green-900" />

            <img
              width="auto"
              loading="lazy"
              height="24rem"
              decoding="async"
              alt="chess.com logo"
              src="./logos/chess-icon.png"
              className="h-24 w-auto opacity-80 shadow-black drop-shadow-lg"
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

      <SubSection.Links.Container className="flex items-center justify-center">
        <Link
          hover="bgCyan"
          target="_blank"
          iconColor="#60bf6e"
          textColor="gray"
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
