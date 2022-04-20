import type { NextPage } from 'next'
import Head from 'next/head'

import { Button } from 'components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>template-nextjs-typescript/</title>
      </Head>

      <main>
        <Button variant="primary" onClick={() => alert('teste')}>
          button primary
        </Button>
        <hr />
        <Button variant="secondary">button secondary</Button>
        <hr />
        <Button isFullWidth>button isFullWidth</Button>
        <hr />
      </main>
    </div>
  )
}

export default Home
