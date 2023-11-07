import { ChessInviteSection } from './_components/chessInviteSection'
import { FooterSection } from './_components/footerSection'
import { GreetingSection } from './_components/greetingSection'
import { LinksSection } from './_components/linksSection'
import { Marquee } from './_components/Marquee'
import { MyworldxSection } from './_components/myworldxSection'
import { PresentationSection } from './_components/presentationSection'
import { StorybookSection } from './_components/storybookSection'

const DefaultPage = () => (
  <>
    <main className="relative flex w-screen flex-col items-center gap-4 overflow-x-hidden">
      <GreetingSection />
      <PresentationSection className="relative">
        <Marquee className="absolute -top-3  left-0" />
      </PresentationSection>
      <MyworldxSection />
      <StorybookSection />
      <ChessInviteSection />
      <LinksSection />
      <FooterSection />
    </main>
  </>
)

export default DefaultPage
