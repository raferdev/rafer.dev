import { Chapter } from '../content'
import { Folio } from '../Folio'
import { Marginalia } from '../Marginalia'

type ChapterProseProps = {
  chapter: Chapter
}

const ChapterProse = ({ chapter }: ChapterProseProps) => (
  <>
    <p className="font-script text-book-pen text-2xl">
      Chapter {chapter.numeral}
    </p>
    <h2 className="mt-0.5 font-serif text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.05] tracking-tight">
      {chapter.title}
    </h2>
    <div className="book-rule" />

    {chapter.prose.map((paragraph, index) => (
      <p
        key={index}
        className={
          index === 0
            ? 'book-dropcap text-book-slate max-w-[46ch] text-[15.5px] leading-relaxed'
            : 'text-book-slate mt-3.5 max-w-[46ch] text-[15.5px] leading-relaxed'
        }
      >
        {paragraph}
      </p>
    ))}

    {chapter.marginalia && <Marginalia>{chapter.marginalia.text}</Marginalia>}

    <Folio n={chapter.folioLeft} />
  </>
)

export { ChapterProse }
