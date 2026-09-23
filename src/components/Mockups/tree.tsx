import { cn } from '@/utils/cn'
import { FileText, Folder, Github } from 'lucide-react'

import { Window } from './window'

const nodes = [
  { name: 'backend/', depth: 0, folder: true },
  { name: 'nestjs-modules.md', depth: 1 },
  { name: 'event-driven.md', depth: 1, active: true },
  { name: 'frontend/', depth: 0, folder: true },
  { name: 'app-router.md', depth: 1 },
  { name: 'README.md', depth: 0 },
]

const Tree = () => (
  <Window>
    <p className="flex items-center gap-2 border-b border-line pb-2 text-ink-soft">
      <Github size={12} strokeWidth={1.75} />
      raferdev / notes
    </p>
    <ul className="mt-2 space-y-1.5">
      {nodes.map(({ name, depth, folder, active }) => {
        const Icon = folder ? Folder : FileText

        return (
          <li
            key={name}
            className={cn(
              'flex items-center gap-2 rounded px-1.5 py-0.5',
              depth === 1 && 'ml-4',
              active && 'bg-pen-soft text-pen'
            )}
          >
            <Icon
              size={12}
              strokeWidth={1.75}
              className={cn('shrink-0', folder && 'text-pen')}
            />
            {name}
          </li>
        )
      })}
    </ul>
  </Window>
)

export { Tree }
