import { ChessInvite } from './_components/chessInvite'
import { FooterSection } from './_components/footerSection'
import { GreetingSection } from './_components/greetingSection'
import { LinksSection } from './_components/LinksSection'
import { Marquee } from './_components/Marquee'
import { MyworldxCard } from './_components/myworldxCard'
import { PresentationSection } from './_components/presentationSection'
import { Section } from './_components/section'

export default function DefaultPage() {
  return (
    <>
      <main className="relative flex w-screen flex-col items-center gap-4 overflow-x-hidden">
        <Section className="flex h-screen flex-wrap content-center items-center justify-center">
          <GreetingSection />
        </Section>
        <Section className="flex items-end">
          <PresentationSection />
        </Section>
        <Marquee className="my-14" />
        <Section>
          <MyworldxCard />
        </Section>
        <Section>
          <ChessInvite />
        </Section>
        <Section>
          <LinksSection />
        </Section>
        <Section>
          <FooterSection />
        </Section>
      </main>
    </>
  )
}
