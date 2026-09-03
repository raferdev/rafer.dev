import { CoverContent } from '../content'

type CoverProps = {
  content: CoverContent
}

const Cover = ({ content }: CoverProps) => {
  const { kicker, name, role, manifesto } = content

  return (
    <div className="relative flex h-full flex-col justify-center bg-[radial-gradient(120%_140%_at_20%_10%,hsl(var(--cover))_0%,hsl(var(--cover-2))_70%)] px-8 py-12 text-[#eef1f8] md:px-[90px]">
      <div className="max-w-[560px] border border-white/30 p-9 md:p-11">
        <p className="font-script mb-2 text-2xl text-[#9db4e8] md:text-[30px]">
          {kicker}
        </p>
        <h1 className="font-serif text-[44px] font-semibold leading-none tracking-tight md:text-[80px]">
          {name}
        </h1>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-[#aeb9d6]">
          {role}
        </p>
      </div>

      <div className="absolute bottom-20 left-8 text-[13px] tracking-wide text-[#8fa0c8] md:left-[90px]">
        <span>current edition · </span>
        <span className="font-script text-xl text-[#9db4e8]">
          {manifesto.map((word, index) => (
            <span key={word}>
              {word === 'people' ? (
                <span className="font-semibold text-white">{word}</span>
              ) : (
                word
              )}
              {index < manifesto.length - 1 && ' · '}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}

export { Cover }
