import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Boilerplate Nextjs</title>
        <link rel="shortcut icon" href="img/icon-512.png" />
        <link rel="apple-touch-icon" href="img/icon-192.png" />
        <meta
          name="description"
          content="Boilerplate Nextjs, ReactJs, Typescript and StyledComponents"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App