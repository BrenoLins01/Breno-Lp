'use client'
import Head from 'next/head';
import Image from 'next/image'
import Presentation from './pages/presentation/page'
import Highlights from './pages/highlights/page'
import CreateStore from './pages/createStore/page'
import NextStep from './pages/nextStep/page'
import ExamplesToSee from './pages/examplesToSee/page'
import FeedBackClients from './pages/feedbackClients/page'
import CardPlan from './pages/cardPlan/page'
import Faq from './pages/faq/page'
import { InteractiveScroll } from '@/utils/interactiveScroll'

export default function Home() {
  return (
    <>
    <Head>
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
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1504448120101551&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <InteractiveScroll />
      <Presentation />
      <Highlights />
      <CreateStore />
      <NextStep />
      <ExamplesToSee />
      <FeedBackClients />
      <CardPlan />
      <Faq />
    </>
  )
}
