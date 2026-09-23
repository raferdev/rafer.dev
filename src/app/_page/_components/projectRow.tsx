import { ArrowUpRight } from 'lucide-react'

import type { Project, Ui } from '@/config/content'
import { trackable } from '@/lib/analytics'
import { Mockup } from '@/components/Mockups'

import { StackColumn } from './stackColumn'

type ProjectRowProps = {
  project: Project
  ui: Pick<Ui, 'newTab' | 'stack'>
}

const ProjectRow = ({ project, ui }: ProjectRowProps) => {
  const { index, title, subtitle, status, links, details } = project

  return (
    <li className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 gap-y-6 border-b border-line py-10 lg:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,0.7fr)] lg:gap-x-8">
      <p aria-hidden="true" className="pt-1 font-mono text-lg text-pen">
        {index}
      </p>

      <div>
        <h3 className="font-sans text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-1 font-mono text-sm text-ink-soft">{subtitle}</p>
        {status && (
          <p className="mt-2 font-mono text-xs text-ink-subtle">{status}</p>
        )}

        <dl className="mt-5 space-y-4 font-mono text-[13px] leading-6 text-ink-soft">
          {details.map(({ label, text }) => (
            <div key={label}>
              <dt className="inline font-bold text-pen">{label}:</dt>{' '}
              <dd className="inline">{text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                {...trackable('select_content', {
                  content_type: 'project',
                  content_id: link.id,
                })}
                className="inline-flex items-center gap-1 text-pen underline underline-offset-4 hover:text-ink"
              >
                {link.label}
                <ArrowUpRight aria-hidden="true" size={12} strokeWidth={1.75} />
                <span className="sr-only">
                  {' '}
                  {title} {ui.newTab}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Mockup type={project.mockup} className="col-start-2 lg:col-start-auto" />

      <div className="col-start-2 lg:col-start-auto">
        <StackColumn label={ui.stack} stack={project.stack} />
      </div>
    </li>
  )
}

export { ProjectRow }
