/* eslint-disable @next/next/no-img-element */
import { Icons } from '@/components/Icons'
import { Section } from '@/components/Section'

export const GreetingSection = () => {
  return (
    <Section.Container className="flex h-screen flex-wrap content-center items-center justify-center">
      <div className="h-[175px] w-[175px] md:ml-8 md:h-[250px] md:w-[250px]">
        <img height={250} width={250} alt="" src="/logo-250x250.png" />
      </div>
      <article className="items-center px-4 pt-10 text-neutral-950 md:pt-4">
        <div className="w-full justify-center">
          <p className="mr-9 flex text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Hello,
            <Icons.handMetal
              color="#000"
              className="ml-4 h-6 w-6 fill-icons-greetings-hand md:h-8 md:w-8"
            />
          </p>
          <p className="text-xl font-thin leading-tight tracking-tighter md:text-3xl">
            my name's <span className="font-bold">Rafael</span>
          </p>
        </div>
        <p className="block text-xl font-thin leading-tight tracking-tighter md:text-3xl">
          I like to <span className="font-bold">solve problems</span>
        </p>
        <p className="block text-xl font-thin leading-tight tracking-tighter md:text-3xl">
          And <span className="font-bold">build solutions</span>
        </p>
        <p className="block text-xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Code is just consequence
        </p>
      </article>
    </Section.Container>
  )
}
