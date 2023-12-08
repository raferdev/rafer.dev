import { Children } from '@/@types/components'
import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '@/components/Link'
import { Section } from '@/components/Section'

const { Container, Header, Footer, Title, Description, Content, SubSection } =
  Section

const Illustration = () => (
  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-800 text-xl font-bold text-white">
    Image
  </div>
)

const SectionLayout = ({ children }: Children) => (
  <Container>
    <Header>
      <Title>Section Title</Title>
      <Description>Section Description</Description>
    </Header>

    <Content>
      <SubSection.Content.Container>
        <SubSection.Content.Illustration>
          <Illustration />
        </SubSection.Content.Illustration>
        <SubSection.Content.Description>
          {children}
        </SubSection.Content.Description>
      </SubSection.Content.Container>
      <SubSection.Links.Container>
        <Link textColor="black" target="_blank" hover="bgCyan" iconName="Link2">
          Link
        </Link>
      </SubSection.Links.Container>
    </Content>

    <Footer>Section Footer</Footer>
  </Container>
)

const meta = {
  title: 'Design System/Components/Section/Container',
  component: SectionLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['section', 'component'],
  argTypes: {
    children: {
      name: 'Text',
      description:
        'The text that will be showed on the center of this component.',
    },
  },
} satisfies Meta<typeof SectionLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, accusamus at quas enim distinctio consequuntur, ut illum delectus nisi libero voluptas quo eligendi!',
  },
}
