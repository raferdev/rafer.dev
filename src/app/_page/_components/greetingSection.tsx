import Image from 'next/image'

import { Icons } from '@/components/Icons'

export const GreetingSection = () => {
  return (
    <>
      <div className="ml-8 h-[200px] w-[200px]">
        <Image
          height={200}
          width={200}
          alt=""
          src="/android-chrome-512x512.png"
        />
      </div>
      <article className="items-center pt-4">
        <div className="w-full justify-center">
          <h3 className="mr-9 flex text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
            Hello,
            <Icons.HandMetal className="ml-4" scale={100} />
          </h3>
          <h2 className="text-xl font-thin leading-tight tracking-tighter md:text-2xl">
            my name's <span className="font-bold">Rafael</span>
          </h2>
        </div>
        <h2 className="block text-xl font-thin leading-tight tracking-tighter md:text-2xl">
          I like to <span className="font-bold">solve problems</span>
        </h2>
        <h2 className="block text-xl font-thin leading-tight tracking-tighter md:text-2xl">
          And <span className="font-bold">build solutions</span>
        </h2>
        <p className="block text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Code is just consequence
        </p>
      </article>
    </>
  )
}
