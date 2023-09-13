import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/Section'

export function LinksSection() {
  return (
    <Section className="w-full border-0 bg-inherit shadow-none">
      <SectionHeader className="space-y-1">
        <SectionTitle className="text-2xl">See more</SectionTitle>
        <SectionDescription>
          You can see more about me in the following links
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="grid h-40 w-full place-content-center items-center gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button asChild>
            <a href="https://github.com/raferdev" target="_blank">
              <Icons.github className="mr-2 h-4 w-4 fill-black" />
              Github
            </a>
          </Button>
          <Button asChild>
            <a href="https://youtube.com/raferdev" target="_blank">
              <Icons.youtube className="mr-2 h-4 w-4 fill-red-400" />
              Youtube
            </a>
          </Button>
          <Button asChild>
            <a href="https://linkedin.com/u/raferdev" target="_blank">
              <Icons.linkedin className="mr-2 h-4 w-4 fill-sky-600" />
              Linkedin
            </a>
          </Button>
          <Button asChild>
            <a
              href="mailto:contact@rafer.dev?subject=Contact&body=Hello, i want talk about..."
              target="_blank"
            >
              <Icons.email className="mr-2 h-4 w-4 fill-white" />
              Email
            </a>
          </Button>
        </div>
      </SectionContent>
    </Section>
  )
}
