import cytoscape from 'cytoscape'

const ArchitecturePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id="cy"></div>
      <div id="a"></div>
      <div id="b"></div>
      <div id="ab"></div>
      {children}
    </>
  )
}

const createCytoscapeInstance = () => {
  const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      { data: { id: 'a' } },
      { data: { id: 'b' } },
      {
        data: {
          id: 'ab',
          source: 'a',
          target: 'b',
        },
      },
    ],
  })

  return cy
}

export { ArchitecturePage, createCytoscapeInstance }
