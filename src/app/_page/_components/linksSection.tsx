import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'
import { Section } from '@/components/Section'

export function LinksSection() {
  return (
    <Section.Container className="min-h-64 w-full border-0 bg-inherit shadow-none">
      <Section.Header className="space-y-1">
        <Section.Title id="links" className="text-2xl">
          See more
        </Section.Title>
        <Section.Description>
          You can see more about me in the following links
        </Section.Description>
      </Section.Header>
      <Section.Content className="min-h-40 grid w-full grid-cols-1 place-content-center justify-items-center gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <Button asChild>
          <a href="https://github.com/raferdev" target="_blank">
            <Icons.github className="mr-2 h-4 w-4 fill-icons-github" />
            Github
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://www.youtube.com/channel/UClg1tYQi4CvnPRL2SAswVcg"
            target="_blank"
          >
            <Icons.youtube className="mr-2 h-4 w-4 fill-icons-youtube" />
            Youtube
          </a>
        </Button>
        <Button asChild>
          <a href="https://linkedin.com/u/raferdev" target="_blank">
            <Icons.linkedin className="mr-2 h-4 w-4 fill-icons-linkedin" />
            Linkedin
          </a>
        </Button>
        <Button asChild>
          <a
            href="mailto:contact@rafer.dev?subject=Contact&body=Hello, i want talk about..."
            target="_blank"
          >
            <Icons.email className="mr-2 h-4 w-4 fill-icons-white" />
            Email
          </a>
        </Button>
        <Button asChild>
          <a href="https://twitter.com/raferdev" target="_blank">
            <Icons.twitter className="mr-2 h-4 w-4 fill-icons-twitter" />
            Twitter / X
          </a>
        </Button>
        <Button asChild>
          <a href="https://instagram.com/raferdev" target="_blank">
            <Icons.instagram className="mr-2 h-4 w-4 fill-icons-instagram" />
            Instagram
          </a>
        </Button>
      </Section.Content>
    </Section.Container>
  )
}
