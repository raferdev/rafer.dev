'use client'
/* eslint-disable @next/next/no-img-element */

export const LogosContainer = () => {
  return (
    <div className="flex h-[50px] min-w-full flex-none animate-scroll-left items-center justify-around gap-x-4">
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/aws.png" alt="AWS" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/mongo.png" alt="mongodb" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/jest.png" alt="jest" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/nodejs.png" alt="nodejs" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/nextjs.png" alt="nextjs" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/docker.png" alt="docker" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/tailwind.png" alt="Tailwind" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/postgresql.png" alt="postgresql" />
      </div>
      <div className="flex h-[50px] w-[100px] justify-center">
        <img src="./logos/cypress.png" alt="cypress" />
      </div>
    </div>
  )
}
