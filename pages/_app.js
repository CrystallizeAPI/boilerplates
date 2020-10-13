import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import Head from 'next/head'
import { fetcher } from 'lib/graphql'
import { screen } from 'ui/screen'
import { responsive } from 'ui/responsive'

import '@vime/core/themes/default.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background:#000;
    * {
      box-sizing: border-box;
    }
  }
`

const theme = {
  screen,
  responsive,
  styles: {
    borderRadius: '12px',
  },
  colors: {
    primary: '#0070f3',
    productBg: '#f6f6f6',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}
