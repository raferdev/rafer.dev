import Head from 'next/head'

const colors = {
  paper: 'hsl(45 22% 96%)',
  ink: 'hsl(220 13% 10%)',
  soft: 'hsl(220 9% 25%)',
  pen: 'hsl(224 69% 46%)',
}

const mono =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'

const link = { color: colors.pen, textUnderlineOffset: 4 }

const NotFound = () => (
  <>
    <Head>
      <title>404 | Raferdev</title>
      <style>{`body { margin: 0; background: ${colors.paper}; }`}</style>
    </Head>
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: '6rem 1.5rem',
        background: colors.paper,
        color: colors.ink,
        fontFamily: mono,
      }}
    >
      <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
        <p style={{ color: colors.pen, fontSize: 12 }}>&lt; 404 /&gt;</p>
        <h1 style={{ fontSize: 32, margin: '0.75rem 0 0' }}>Page not found</h1>
        <p lang="pt-BR" style={{ color: colors.soft, fontSize: 14 }}>
          Página não encontrada
        </p>
        <p style={{ marginTop: '2rem', fontSize: 14 }}>
          <a href="/" style={link}>
            Return home
          </a>
          <span style={{ color: colors.soft }}> · </span>
          <a href="/pt" lang="pt-BR" style={link}>
            Voltar ao início
          </a>
        </p>
      </div>
    </main>
  </>
)

export default NotFound
