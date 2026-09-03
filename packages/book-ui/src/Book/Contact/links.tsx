import { ContactChapter } from '../content'
import { Folio } from '../Folio'

type ContactLinksProps = {
  content: ContactChapter
}

const ContactLinks = ({ content }: ContactLinksProps) => {
  const { numeral, title, prose, links, folioLeft } = content

  return (
    <>
      <p className="font-script text-book-pen text-2xl">Chapter {numeral}</p>
      <h2 className="mt-0.5 font-serif text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.05] tracking-tight">
        {title}
      </h2>
      <div className="book-rule" />

      {prose.map((paragraph, index) => (
        <p
          key={index}
          className="text-book-slate max-w-[46ch] text-[15.5px] leading-relaxed"
        >
          {paragraph}
        </p>
      ))}

      <div className="mt-6 flex flex-col">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="border-book-edge text-ink group flex w-full items-baseline gap-3.5 border-b py-3 no-underline"
          >
            <span className="font-script text-book-pen min-w-[96px] text-xl">
              {link.label}
            </span>
            <span className="text-book-slate group-hover:text-book-pen text-[15.5px] transition-colors">
              {link.value}
            </span>
          </a>
        ))}
      </div>

      <Folio n={folioLeft} />
    </>
  )
}

export { ContactLinks }
