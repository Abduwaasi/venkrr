import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document{
    render() {
        return (
          <Html lang='en'>
            <Head>
                <link rel="preload" href="../public/fonts/Inter-Black.ttf" as="font" crossOrigin='anonymous'/>
                <link rel="preload" href="../public/fonts/Inter-Bold.ttf" as="font" crossOrigin='anonymous'/>
                <link rel="preload" href="../public/fonts/Inter-ExtraBold.ttf" as="font" crossOrigin='anonymous'/>
                <link rel="preload" href="../public/fonts/Inter-ExtraLIght.ttf" as="font" crossOrigin='anonymous'/>
                <link rel="preload" href="../public/fonts/Inter-Light.ttf" as="font" crossOrigin='anonymous'/>
                <link rel="preload" href="../public/fonts/Inter-Medium.ttf" as="font" crossOrigin='anonymous'/>
                <link rel="preload" href="../public/fonts/Inter-Regular.ttf" as="font" crossOrigin='anonymous'/>
                <link rel="preload" href="../public/fonts/Inter-SemiBold.ttf" as="font" crossOrigin='anonymous'/>
                <link rel="preload" href="../public/fonts/Inter-Thin.ttf" as="font" crossOrigin='anonymous'/>
            </Head>

            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }}

export default AppDocument