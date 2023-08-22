'use client'

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
