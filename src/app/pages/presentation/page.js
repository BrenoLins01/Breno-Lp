'use client'

import Image from 'next/image'
import ImgPresentation from '../../../assets/presentation/Group 4.svg'

import { Montserrat } from 'next/font/google'
import style from '../../pages/presentation/style.module.css'
import { scrollToDiv } from '@/utils/scrollToDiv'

import { FaArrowUp, FaRocket, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })

export default function Presentation() {

    return (
        <div className=''>
            <a href='https://wa.me/+5591985381212?text=Olá, estou com dúvida sobre a Criação da minha loja, pode me ajudar? Por gentileza' aria-label='whatsapp' target='__blank' className='fixed right-5 bottom-6 text-5xl text-transparent  cursor-pointer z-50'>
                <span id='blink' className={`absolute z-[9999] h-full w-full rounded-full  opacity-80`}></span>
                <FaWhatsappSquare className='text-green-500 text-6xl ' />
            </a>
            <div id='header' className='bg-white lg:h-10 flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-2'>
                <h1 className='text-center lg:tracking-widest text-xs'>
                    AQUI ESTÁ A SUA OPORTUNIDADE DE TER O SEU PRÓPRIO NEGÓCIO
                </h1>
                <FaRocket className='text-secondaryDefault' />
            </div>
            <div className={`${style.bg_presentation} h-[55rem] bg-cover `}>
                <div className='flex lg:flex-row flex-col-reverse items-center justify-center h-[55rem] max-w-[1300px] m-auto px-4'>
                    <div className='flex flex-col lg:gap-8 gap-4'>
                        <h1 className={`${montserrat.className} 2xl:w-[43rem] lg:text-left text-center leading-tight text-white 2xl:text-5xl lg:text-4xl text-2xl`}>
                            TENHA SUA PRÓPRIA LOJA VIRTUAL COMPLETA COM FORNECEDORES 100% NACIONAIS!
                        </h1>
                        <p className='font-inter text-white text-xl lg:text-left text-center'>
                            Saia na frente da maioria e comece com uma loja profissional! Tenha uma loja pronta para decolar em vendas e poder fazer sua primeira venda em 24 horas.
                        </p>
                        <div onClick={() => scrollToDiv('plans')} className='w-80 lg:m-0 m-auto'>
                            <button className={`${montserrat.className} text-lg tracking-wide hover:brightness-125 duration-200 w-80 rounded-xl h-14 shadow-shadowButton bg-[#00D208] text-white `}>Adquirir loja profissional</button>
                        </div>
                    </div>
                    <Image src={ImgPresentation} className='lg:w-[650px] w-[400px]' />
                </div>
            </div>
        </div>
    )
}