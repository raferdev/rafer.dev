import { Chapter } from '../content'
import { Folio } from '../Folio'
import { DataList } from './dataList'

type ChapterDataProps = {
  chapter: Chapter
}

const ChapterData = ({ chapter }: ChapterDataProps) => (
  <>
    <p className="font-script text-book-pen text-2xl">
      Chapter {chapter.numeral}
    </p>
    <h2 className="mt-0.5 font-serif text-2xl font-semibold leading-tight tracking-tight">
      {chapter.title}
    </h2>
    <div className="book-rule" />
    <DataList items={chapter.dataList} />
    <Folio n={chapter.folioRight} />
  </>
)

export { ChapterData }
