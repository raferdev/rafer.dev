import { getContent } from '@/config/content'
import { Locale } from '@/config/i18n'
import { Container } from '@/components/Container'

import { ExperienceRow } from './experienceRow'
import { SectionHeader } from './sectionHeader'

const WorkSection = ({ locale }: { locale: Locale }) => {
  const { experience, work, ui } = getContent(locale)

  return (
    <section id="work" aria-labelledby="work-title" data-ga-section="work">
      <Container>
        <SectionHeader
          id="work-title"
          label={work.label}
          title={work.title}
          intro={work.intro}
        />

        <ol>
          {experience.map((item) => (
            <ExperienceRow key={item.id} item={item} stackLabel={ui.stack} />
          ))}
        </ol>
      </Container>
    </section>
  )
}

export { WorkSection }
