import Image from 'next/image'

import { Icons } from '@/components/Icons'
import { Section } from '@/components/Section'

export const GreetingSection = () => {
  return (
    <Section className="flex h-screen flex-wrap content-center items-center justify-center">
      <div className="h-[175px] w-[175px] md:ml-8 md:h-[250px] md:w-[250px]">
        <Image
          height={250}
          width={250}
          alt=""
          src="/android-chrome-512x512.png"
        />
      </div>
      <article className="items-center pt-10 text-neutral-950 md:pt-4">
        <div className="w-full justify-center">
          <h3 className="mr-9 flex text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Hello,
            <Icons.handMetal
              color="#000"
              className="ml-4 h-6 w-6 fill-neutral-200 md:h-8 md:w-8"
            />
          </h3>
          <h2 className="text-xl font-thin leading-tight tracking-tighter md:text-3xl">
            my name's <span className="font-bold">Rafael</span>
          </h2>
        </div>
        <h2 className="block text-xl font-thin leading-tight tracking-tighter md:text-3xl">
          I like to <span className="font-bold">solve problems</span>
        </h2>
        <h2 className="block text-xl font-thin leading-tight tracking-tighter md:text-3xl">
          And <span className="font-bold">build solutions</span>
        </h2>
        <p className="block text-xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Code is just consequence
        </p>
      </article>
    </Section>
  )
}
