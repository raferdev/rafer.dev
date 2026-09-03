'use client'

import { TocContent } from '../content'
import { Folio } from '../Folio'
import { useBookNav } from '../Shell/context'

type TableOfContentsProps = {
  content: TocContent
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const { goToPage } = useBookNav()
  const { title, subtitle, colophon, folio, entries } = content

  return (
    <>
      <h2 className="mb-1 font-serif text-[34px] font-semibold">{title}</h2>
      <p className="font-script text-book-pen mb-7 text-2xl">{subtitle}</p>

      <nav
        className="mt-1.5 flex flex-col gap-0.5"
        aria-label="Table of contents"
      >
        {entries.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => goToPage(entry.pageIndex)}
            className="hover:bg-book-pen-soft flex items-baseline gap-3 rounded px-1.5 py-3 text-left transition-colors"
          >
            <span className="text-book-pen min-w-[34px] font-serif text-lg font-semibold">
              {entry.numeral}
            </span>
            <span className="text-ink text-[17px] font-medium">
              {entry.tocLabel}
            </span>
            <span className="book-dotted-leader mx-2 mb-1 flex-1" />
            <span className="text-book-muted-ink font-serif text-sm">
              {entry.tocPage}
            </span>
          </button>
        ))}
      </nav>

      <p className="border-book-edge text-book-slate mt-auto border-t pt-4 text-[12.5px] leading-relaxed">
        <b className="text-ink">About this edition.</b> {colophon}
      </p>

      <Folio n={folio} />
    </>
  )
}

export { TableOfContents }
