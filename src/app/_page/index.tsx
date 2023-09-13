import { ChessInviteSection } from './_components/chessInviteSection'
import { FooterSection } from './_components/footerSection'
import { GreetingSection } from './_components/greetingSection'
import { LinksSection } from './_components/linksSection'
import { Marquee } from './_components/Marquee'
import { MyworldxSection } from './_components/myworldxSection'
import { PresentationSection } from './_components/presentationSection'

export default function DefaultPage() {
  return (
    <>
      <main className="relative flex w-screen flex-col items-center gap-4 overflow-x-hidden">
        <GreetingSection />
        <PresentationSection />
        <Marquee className="my-14" />
        <MyworldxSection />
        <ChessInviteSection />
        <LinksSection />
        <FooterSection />
      </main>
    </>
  )
}
