import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      	<Head>
            <script src="https://kit.fontawesome.com/2718e057a9.js" crossOrigin="anonymous"></script>
            <link rel="shortcut icon" href="/images/favicon.ico" />

      	</Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
