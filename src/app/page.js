import Head from 'next/head';
import Presentation from './pages/presentation/page';
import Highlights from './pages/highlights/page';
import CreateStore from './pages/createStore/page';
import NextStep from './pages/nextStep/page';
import ExamplesToSee from './pages/examplesToSee/page';
import FeedBackClients from './pages/feedbackClients/page';
import CardPlan from './pages/cardPlan/page';
import Faq from './pages/faq/page';
import { InteractiveScroll } from '@/utils/interactiveScroll';
import Script from 'next/script';
import FacebookPixel from '@/utils/facebookPixel';

export default function Home() {
  return (
    <>
      <FacebookPixel/>
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
  );
}
