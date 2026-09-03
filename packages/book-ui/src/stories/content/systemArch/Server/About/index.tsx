import { Docs } from '@/stories/components/Docs'

const { Container, Content, Header } = Docs

const ServerPage = () => (
  <Container>
    <Header.Container className="overflow-visible">
      <div className="flex flex-col items-baseline gap-4">
        <Header.Title>Server</Header.Title>
        <Header.SubTitle>Provided by nginx</Header.SubTitle>
      </div>
    </Header.Container>

    <div className="flex flex-col gap-8 px-6">
      <div className="flex flex-col py-6">
        <Content.Topic>Overview</Content.Topic>
        <Content.Paragraph>
          Using Nginx as a server, you can understand more about the web
          structure. How the requests are made and how the responses are sent to
          serve this simple static page.
        </Content.Paragraph>
      </div>
      <div className="flex flex-col !pb-14">
        <Content.Topic>HTTP</Content.Topic>
        <Content.SubTopic className="!mt-6">
          CSP (Content-Security-Policy)
        </Content.SubTopic>

        <Content.Paragraph>
          <Content.Paragraph>
            <span className="font-bold">X-Frame-Options:</span> same origin
          </Content.Paragraph>
          <Content.Paragraph>
            <span className="font-bold">X-XSS-Protection:</span> 1, mode: block.
          </Content.Paragraph>
          <Content.Paragraph>
            <span className="font-bold">Content-Security-Policy:</span>{' '}
            worker-src blob:| script-src: 'self', 'unsafe-inline',
            'unsafe-eval', *.googletagmanager.com, *.datadoghq-browser-agent.com
            | frame-src: 'self', *.youtube.com, object-src, 'none'| base-uri:
            'self'| form-action: 'none' | frame-ancestors: 'self'| img-src:
            'self', data:| font-src: 'self' | manifest-src 'self'
          </Content.Paragraph>
          <Content.Paragraph>
            <span className="font-bold">Strict-Transport-Security:</span> max
            age:31536000 | includeSubDomains | preload
          </Content.Paragraph>
          <Content.Paragraph>
            <span className="font-bold">Referrer-Policy:</span> strict origin
          </Content.Paragraph>
          <Content.Paragraph>
            <span className="font-bold">Permissions-Policy:</span> geolocation:
            (self), midi:(), sync xhr:(), microphone:(), camera:(),
            magnetometer:(), gyroscope:(), fullscreen:(), payment:()
          </Content.Paragraph>
          <Content.Paragraph>
            <span className="font-bold">X-Content-Type-Options:</span> nosniff
          </Content.Paragraph>
        </Content.Paragraph>
        <Content.SubTopic className="!mt-16 !pb-14">
          Server Domains
        </Content.SubTopic>

        <Content.Paragraph>
          https://storybook.rafer.dev && https://rafer.dev
        </Content.Paragraph>
        <Content.SubTopic className="!mt-16 !pb-14">Redirect</Content.SubTopic>

        <Content.Paragraph>
          https://raferdev.com to: rafer.dev, status: 401
        </Content.Paragraph>
      </div>
    </div>
  </Container>
)

export { ServerPage }
