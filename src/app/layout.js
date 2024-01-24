import Head from 'next/head';
import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import { ScreenSizeProvider } from '@/context/screenSizeContext';
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Lojas - Dropshipping',
  description: 'Criado por DeniLandingPages',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <ScreenSizeProvider>
          <body className={montserrat.className}>{children}</body>
        </ScreenSizeProvider>
      </html>
    </>
  );
}
