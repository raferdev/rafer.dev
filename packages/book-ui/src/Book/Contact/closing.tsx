import { ContactChapter } from '../content'
import { Folio } from '../Folio'

type ContactClosingProps = {
  content: ContactChapter
}

const ContactClosing = ({ content }: ContactClosingProps) => {
  const { closing, folioRight } = content

  return (
    <>
      <p className="font-script text-book-pen text-2xl">the end</p>
      <h2 className="mt-0.5 whitespace-pre-line font-serif text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.05] tracking-tight">
        {closing.heading}
      </h2>
      <div className="book-rule" />

      <p className="text-book-slate mt-auto text-right font-serif text-base italic">
        {closing.note}
      </p>

      <Folio n={folioRight} />
    </>
  )
}

export { ContactClosing }
