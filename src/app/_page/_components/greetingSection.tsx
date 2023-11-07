/* eslint-disable @next/next/no-img-element */

import { Section } from '@/components/Section'

import { LogoImage } from './logoImage'

const GreetingSection = () => (
  <Section.Container className="flex h-screen flex-col flex-wrap content-center items-center justify-center">
    <div className="relative flex flex-col content-center items-center justify-center gap-20 lg:flex-row">
      <LogoImage />

      <article className="items-baseline text-neutral-950">
        <div className="w-full justify-center">
          <p className="text-2xl font-light leading-tight tracking-tighter  sm:text-3xl md:text-[2.5rem]">
            Hi! My name's <span className="font-bold">Rafael</span>
          </p>
        </div>
        <p className="block text-2xl font-light leading-tight tracking-tighter sm:text-3xl md:text-[2.5rem]">
          I like to <span className="font-bold">solve problems</span>
        </p>
        <p className="block text-2xl font-light leading-tight tracking-tighter sm:text-3xl md:text-[2.5rem]">
          And <span className="font-bold">build solutions</span>
        </p>
        <p className="block text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-[2.5rem]">
          Code is just a consequence
        </p>
      </article>
    </div>
  </Section.Container>
)

export { GreetingSection }
