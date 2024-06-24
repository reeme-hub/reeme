import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
     {/* Add DelightChat WhatsApp Widget script before the closing body tag */}
        <Script
          src="https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js"
          strategy="beforeInteractive"
        />
        <Script id="whatsapp-widget" strategy="beforeInteractive">
          {`
            var wa_btnSetting = {
              btnColor: "#16BE45",
              ctaText: "WhatsApp Us",
              cornerRadius: 40,
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              btnPosition: "left",
              whatsAppNumber: "+919419352015",
              welcomeMessage: "Welcome to ReeMeAdventure",
              zIndex: 999999,
              btnColorScheme: "light"
            };
            window.onload = () => {
              _waEmbed(wa_btnSetting);
            };
          `}
        </Script>
      </body>
    </Html>
  )
}
