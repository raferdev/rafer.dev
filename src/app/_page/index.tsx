import { Locale } from '@/config/i18n'

import { EngineeringSection } from './_components/engineeringSection'
import { HeroSection } from './_components/heroSection'
import { InterestsSection } from './_components/interestsSection'
import { JourneySection } from './_components/journeySection'
import { OpenSourceSection } from './_components/openSourceSection'
import { ProjectsSection } from './_components/projectsSection'
import { WorkSection } from './_components/workSection'

const HomePage = ({ locale }: { locale: Locale }) => (
  <main id="main">
    <HeroSection locale={locale} />
    <WorkSection locale={locale} />
    <OpenSourceSection locale={locale} />
    <ProjectsSection locale={locale} />
    <EngineeringSection locale={locale} />
    <JourneySection locale={locale} />
    <InterestsSection locale={locale} />
  </main>
)

export default HomePage
