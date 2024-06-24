import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Add Tidio script */}
        <script
          src="//code.tidio.co/85rovogevbzji14mrsjotewxts0hogyr.js"
          async
        ></script>
         
      
      </body>
    </Html>
  )
}
