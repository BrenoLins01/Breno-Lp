import Head from 'next/head';
import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import { ScreenSizeProvider } from '@/context/screenSizeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lojas - Dropshipping',
  description: 'Criado por DeniLandingPages',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <ScreenSizeProvider>
          <body className={inter.className}>{children}</body>
        </ScreenSizeProvider>
      </html>
    </>
  );
}
