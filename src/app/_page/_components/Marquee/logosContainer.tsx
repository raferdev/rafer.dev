'use client'
/* eslint-disable @next/next/no-img-element */

export const LogosContainer = () => {
  return (
    <div className="flex h-[50px] min-w-full flex-none animate-scroll-left items-center justify-around gap-x-4">
      <div className="flex h-[50px] w-[100px] justify-center">
        <img loading="lazy" decoding="async" src="./logos/aws.png" alt="AWS" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="./logos/mongo.png"
          alt="Mongodb"
        />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="./logos/jest.png"
          alt="Jest"
        />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="./logos/nodejs.png"
          alt="Nodejs"
        />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="./logos/nextjs.png"
          alt="Nextjs"
        />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="./logos/docker.png"
          alt="Docker"
        />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="./logos/tailwind.png"
          alt="Tailwind"
        />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="./logos/postgresql.png"
          alt="Postgresql"
        />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img
          loading="lazy"
          decoding="async"
          src="./logos/playwright.png"
          alt="Playwright"
        />
      </div>
    </div>
  )
}
