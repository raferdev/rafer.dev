import { useEffect, useState } from 'react'
import mermaid from 'mermaid'

const MermaidChart = `
graph TD
    AB(Client) --> A[DNS]
    A --> AB
    AB --> B[AWS Route 53 -]
    B --> A
    B -->C[AWS Load Balance -]
    C -->B
    C -->D[AWS ECS Group -]
    D -->C
    D -->E(NGINX)
    E -->D
    subgraph AWS EC2/
    E .->F[storybook.rafer.dev - static files]
    E .->FF[rafer.dev - static files]
    end
`
const DiagramSVG = async () => {
  mermaid.initialize({
    startOnLoad: false,
    fontFamily: 'Ubuntu',
    theme: 'default',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      padding: 10,
      curve: 'basis',
    },
  })

  const { svg } = await mermaid.render('ArchitectureSVG', MermaidChart)

  return svg
}

const ArchtecturePage = () => {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    ;(async () => {
      setSvg(await DiagramSVG())
    })()
  }, [])

  return (
    <pre
      className="flex h-full w-full justify-center"
      dangerouslySetInnerHTML={{ __html: svg }}
    ></pre>
  )
}

export { ArchtecturePage }
