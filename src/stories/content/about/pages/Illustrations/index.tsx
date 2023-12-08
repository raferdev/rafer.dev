import ideiaLaunch from '@/../public/idea-launch.png'
import hommerOffice from '@/stories/assets/home-office.png'
import manInRocket from '@/stories/assets/man-riding-a-rocket.png'
import studying from '@/stories/assets/studying.png'
import { Docs } from '@/stories/components/Docs'
import { IllustrationImg } from '@/stories/components/illustrationImage'

const { Container, Header } = Docs

const IllustrationPage = () => (
  <Container>
    <Header.Container className="overflow-visible">
      <div className="flex flex-col items-baseline gap-4">
        <Header.Title>Illustrations</Header.Title>
        <Header.SubTitle>
          All the illustrations are sourced by:{' '}
          <a
            className="!text-lg  !font-normal !text-neutral-800 hover:opacity-75 md:!text-xl"
            aria-label="Popsy website"
            href="https://popsy.co/"
            target="_blank"
          >
            popsy.co
          </a>
          .
        </Header.SubTitle>
      </div>
    </Header.Container>

    <div className="flex flex-row flex-wrap items-center justify-center gap-2 pb-20 pl-4 pr-6">
      <IllustrationImg src={hommerOffice} className="flex w-64 p-0 md:p-0" />
      <IllustrationImg src={ideiaLaunch} className="flex w-64 p-0 md:p-0" />
      <IllustrationImg src={studying} className="flex w-64 p-0 md:p-0" />
      <IllustrationImg src={manInRocket} className="flex w-64 p-0 md:p-0" />
    </div>
  </Container>
)

export { IllustrationPage }
