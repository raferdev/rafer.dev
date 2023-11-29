import { ChessInviteSection } from './_components/chessInviteSection'
import { FooterSection } from './_components/footerSection'
import { GreetingSection } from './_components/greetingSection'
import { LinksSection } from './_components/linksSection'
import { MyworldxSection } from './_components/myworldxSection'
import { PresentationSection } from './_components/presentationSection'
import { StorybookSection } from './_components/storybookSection'

const HomePage = () => (
  <>
    <main className="relative flex w-screen flex-col items-center gap-4 overflow-hidden">
      <GreetingSection />
      <PresentationSection />
      <MyworldxSection />
      <StorybookSection />
      <ChessInviteSection />
      <LinksSection />
      <FooterSection />
    </main>
  </>
)

export default HomePage
