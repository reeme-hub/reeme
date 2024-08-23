import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Add Tidio script */}
        <script src="https://chat.zerobot.ai/agent.js?a=Y1umVSmHX" async></script>
       
           {/* Add DelightChat WhatsApp Widget script before the closing body tag */}
        /*<script
          async
          src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'
        ></script>*/
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var wa_btnSetting = {
                "btnColor":"#16BE45",
                "ctaText":"WhatsApp Us",
                "cornerRadius":40,
                "marginBottom":20,
                "marginLeft":20,
                "marginRight":20,
                "btnPosition":"leftt",
                "whatsAppNumber":"+917051292040",
                "welcomeMessage":"Hello!\\nPlease help with traveling in Leh",
                "zIndex":999999,
                "btnColorScheme":"light"
              };
              window.onload = () => {
                _waEmbed(wa_btnSetting);
              };
            `,
          }}
        ></script>
      
      </body>
    </Html>
  )
}
