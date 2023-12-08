import { useEffect, useState } from 'react'
import mermaid from 'mermaid'

const MermaidChart = `
graph TD
    AB(Github) --> A[Github Actions]
    A ---|Tests|B[Github Hosted Runner]
    B ---|Deploy|C[Docker]
    subgraph AWS EC2 - Self Hosted Runner /
    C .->E[volumes]
    C .->EA[Container]
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

  const { svg } = await mermaid.render('CicdSVG', MermaidChart)

  return svg
}

const CicdPage = () => {
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

export { CicdPage }
