import { Planets } from '@/components/Planets'
import { Section } from '@/components/Section'

import { LogoImage } from './logoImage'

const { Aws, Docker, Jest, NextJs, Node, Decorative } = Planets

const GreetingSection = () => (
  <Section.Container className="relative flex h-screen flex-col flex-wrap content-center items-center justify-center">
    <Aws className="left-[calc(100vw/8)] top-[calc((100vh/8)-20px)] lg:left-[calc(100vw/8)] lg:top-[calc(100vw/8)]" />
    <Docker className="right-[calc(100vw/8-40px)] top-[calc((100vh/5)-40px)] sm:right-[calc(100vw/8-40px)] sm:top-14 lg:-top-10" />
    <Jest className="left-8 top-[calc((100vh/2)+100px)]" />
    <NextJs className="right-4 top-auto" />
    <Node className="left-auto top-[calc((100vh/5)-50px)] md:top-[calc((100vh/5)-200px)] lg:top-[calc((100vh/5)-50px)]" />
    <Decorative className="right-40 top-40 h-[6px] w-[6px] animate-pulse bg-cyan-300 blur-sm lg:left-40 lg:top-80" />
    <Decorative className="right-40 top-40 h-[4px] w-[4px] bg-blue-100  blur-sm lg:left-40 lg:top-60" />
    <Decorative className="right-20 top-40 hidden h-1 w-1 bg-yellow-100 blur-sm" />

    <div className="relative flex flex-col content-center items-center justify-center gap-12 sm:gap-14 md:gap-16 lg:flex-row lg:gap-20">
      <LogoImage />

      <article className="items-baseline text-slate-100">
        <div className="w-full justify-center">
          <p className="bg-clip-text text-2xl font-normal leading-tight tracking-tighter sm:text-3xl md:text-[2.5rem]">
            Hi! My name's <span className="font-bold">Rafael</span>
          </p>
        </div>
        <p className="block bg-clip-text  text-2xl font-normal leading-tight tracking-tighter sm:text-3xl md:text-[2.5rem]">
          I like to <span className="font-bold">solve problems</span>
        </p>
        <p className="block text-2xl font-normal leading-tight tracking-tighter sm:text-3xl md:text-[2.5rem]">
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
