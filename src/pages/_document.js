import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      	<Head>
            <script src="https://kit.fontawesome.com/2718e057a9.js" crossorigin="anonymous"></script>
            {/* <link rel="shortcut icon" href="/images/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-2.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-3.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-4.png"/> */}
      	</Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
