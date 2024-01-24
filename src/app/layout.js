import Head from 'next/head'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import { ScreenSizeProvider } from '@/context/screenSizeContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lojas - Dropshipping',
  description: 'Criado por DeniLandingPages ',
}

export default function RootLayout({ children }) {

  return (
    <>
    <Head>
        <title>Captura - Identidade Empreendedora</title>
        <meta name="description" content='Captura - identidade empreendedora' />
        <meta name="author" content='Captura - identidade empreendedora' key='desc' />
        <meta property='og:description' content='Captura - identidade empreendedora' />
        <meta property='og:title' content='Captura - identidade empreendedora' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        
        {/* Adicione o script do pixel do Facebook aqui */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1504448120101551');
              fbq('track', 'PageView');
            `,
          }}
        />
       <noscript>
          <img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=1504448120101551&ev=PageView&noscript=1"/>
        </noscript>
      </Head>
    <html lang="en">
      <ScreenSizeProvider>
        <body className={inter.className}>{children}</body>
      </ScreenSizeProvider>
    </html>
    </>
  )
}
