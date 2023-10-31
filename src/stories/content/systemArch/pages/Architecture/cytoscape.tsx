import React, { useEffect } from 'react'
import cytoscape from 'cytoscape'

const CytoscapeGraph = () => {
  useEffect(() => {
    cytoscape({
      container: document.getElementById('cy'),
      zoomingEnabled: false,
      elements: [
        {
          data: { id: 'Development' },
        },
        {
          data: { id: 'Github' },
        },
        {
          data: { id: 'Github Self Runner', parent: 'Ec2 Instance' },
        },
        {
          data: { id: 'Github Runner' },
        },
        {
          data: { id: 'Ngnix', parent: 'Github Self Runner' },
        },
        {
          data: { id: 'Builder', parent: 'Github Self Runner' },
        },
        {
          data: { id: 'Development' },
        },
        {
          data: { id: 'Client' },
          css: {
            'background-color': 'green',
            'background-image': "url('https://i.imgur.com/8z4FzvX.png')",
            'background-fit': 'cover',
          },
        },
        {
          data: { id: 'DNS' },
        },
        {
          data: { id: 'AWS' },
        },
        {
          data: {
            id: 'Load Balancer',
            parent: 'AWS',
          },
          css: { 'background-color': 'blue', content: 'Load Balancer' },
        },
        {
          data: { id: 'Route 53', parent: 'AWS' },
        },
        {
          data: { id: 'Ec2 Instance', parent: 'AWS' },
          css: {
            'background-color': 'red',
          },
        },
        {
          data: { id: 'Connection', source: 'Client', target: 'DNS' },
        },
        {
          data: {
            id: 'Connection#2',
            source: 'Client',
            target: 'Route 53',
          },
        },
        {
          data: {
            id: 'Connection#3',
            source: 'Route 53',
            target: 'Load Balancer',
          },
        },
        {
          data: {
            id: 'Connection#4',
            source: 'Load Balancer',
            target: 'Ec2 Instance',
          },
        },
      ],

      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#f2f2f2',
            label: 'data(id)',
          },
        },

        {
          selector: 'edge',
          style: {
            width: 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
          },
        },
      ],

      layout: {
        name: 'grid',
        rows: 1,
      },
    })
  }, [])

  return (
    <div
      id="cy"
      style={{ width: 'calc(100vw - 128px)', height: 'calc(100vh - 128px)' }}
    ></div>
  )
}

export { CytoscapeGraph }
