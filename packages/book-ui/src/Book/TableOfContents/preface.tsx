import { PrefaceContent } from '../content'
import { Folio } from '../Folio'
import { Marginalia } from '../Marginalia'

type PrefaceProps = {
  content: PrefaceContent
}

const Preface = ({ content }: PrefaceProps) => {
  const { kicker, title, prose, marginalia, folio } = content

  return (
    <>
      <p className="font-script text-book-pen text-2xl">{kicker}</p>
      <h2 className="mt-0.5 font-serif text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.05] tracking-tight">
        {title}
      </h2>
      <div className="book-rule" />

      {prose.map((paragraph, index) => (
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

      {marginalia && <Marginalia>{marginalia.text}</Marginalia>}

      <Folio n={folio} />
    </>
  )
}

export { Preface }
