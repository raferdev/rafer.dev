import { __site } from '@/config/site'
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

export const LinksSection = () => {
  const { links } = __site
  return (
    <Section.Container className="w-full border-0 bg-inherit shadow-none">
      <Section.Header className="space-y-1">
        <Section.Title id="links" className="text-2xl">
          See more
        </Section.Title>
        <Section.Description>
          You can see more about me in the following links
        </Section.Description>
      </Section.Header>
      <Section.Content className="min-h-40 grid w-full grid-cols-1 place-content-center justify-items-center gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          iconFillColor="github"
          iconName="Github"
          href={links.profile.github}
          target="_blank"
        >
          Github
        </Link>
        <Link
          iconFillColor="youtube"
          iconName="Youtube"
          href={links.profile.youtube}
          target="_blank"
        >
          Youtube
        </Link>
        <Link
          iconFillColor="linkedin"
          iconName="Linkedin"
          href={links.profile.linkedin}
          target="_blank"
        >
          Linkedin
        </Link>
        <Link
          iconFillColor="white"
          iconName="Mail"
          href={links.profile.email.raferdev}
          target="_blank"
        >
          Email
        </Link>
        <Link
          iconFillColor="twitter"
          iconName="Twitter"
          href={links.profile.twitter}
          target="_blank"
        >
          Twitter / X
        </Link>
        <Link
          iconFillColor="instagram"
          iconName="Instagram"
          href={links.profile.instagram}
          target="_blank"
        >
          Instagram
        </Link>
      </Section.Content>
    </Section.Container>
  )
}
