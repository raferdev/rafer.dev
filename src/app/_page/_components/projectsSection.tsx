import { ArrowUpRight } from 'lucide-react'

import { getContent } from '@/config/content'
import { Locale } from '@/config/i18n'
import { trackable } from '@/lib/analytics'
import { Container } from '@/components/Container'

import { ProjectRow } from './projectRow'
import { SectionHeader } from './sectionHeader'

const ProjectsSection = ({ locale }: { locale: Locale }) => {
  const { personal, projects, ui } = getContent(locale)

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      data-ga-section="projects"
    >
      <Container>
        <SectionHeader
          id="projects-title"
          label={personal.label}
          title={personal.title}
          intro={personal.intro}
        />

        <ol>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} ui={ui} />
          ))}
        </ol>

        <p className="border-b border-line py-6 font-mono text-[13px] leading-6 text-ink-soft">
          {personal.archive.text}{' '}
          <a
            href={personal.archive.href}
            target="_blank"
            rel="noreferrer"
            {...trackable('select_content', {
              content_type: 'profile',
              content_id: 'archive',
            })}
            className="inline-flex items-center gap-1 text-pen underline underline-offset-4 hover:text-ink"
          >
            {personal.archive.label}
            <ArrowUpRight aria-hidden="true" size={12} strokeWidth={1.75} />
            <span className="sr-only"> {ui.newTab}</span>
          </a>
        </p>
      </Container>
    </section>
  )
}

export { ProjectsSection }
