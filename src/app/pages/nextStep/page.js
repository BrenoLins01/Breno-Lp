'use client'
import { Montserrat } from 'next/font/google'
import imgNextStep from '../../../assets/nextStep/WhatsApp-Image-2023-04-19-at-14.46 2.svg'
import Image from 'next/image'
import { useScreenSize } from '@/context/screenSizeContext'
import { useEffect, useState } from 'react'
import { FaCheckDouble, FaRocket, FaWpforms } from 'react-icons/fa'
const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })

export default function NextStep() {

    const { screenX } = useScreenSize()
    const [innerWidth, setiInnerWidth] = useState()
    useEffect(() => {
        setiInnerWidth(window.innerWidth)
    }, [screenX])
    return (
        <div className='lg:h-[45rem]  flex flex-col  justify-center items-center'>
            <h1 className={`${montserrat.className} lg:pb-20 pt-20 2xl:text-5xl lg:text-4xl text-xl text-center text-primaryDefault`}>
                <strong className='text-secondaryDefault'>PRÓXIMO PASSO PARA</strong> TER SUA LOJA <br className='lg:flex hidden'/>ONLINE E COMEÇAR A FATURAR
            </h1>
            {innerWidth < 1024 ? <div>
                <div className='flex flex-row items-start gap-10  overflow-hidden'>
                    <div className='flex flex-col gap-5'>
                        <div className='animatedElementRight hover:scale-105 duration-200 lg:mt-0 mt-20'>
                            <div className='lg:w-96 w-80 h-[22rem] border rounded-lg  bg-secondaryDefault'>
                                <div className='flex flex-col items-center '>
                                    <div className='w-20 h-20 rounded-full bg-white flex justify-center items-center border border-secondaryDefault -translate-y-10'>
                                        <FaCheckDouble className='text-4xl text-secondaryDefault' />
                                    </div>
                                    <h1 className={`${montserrat.className} -translate-y-10 pt-4 text-6xl text-center text-white`}>
                                        01
                                    </h1>
                                    <h1 className={`${montserrat.className} pt-4 text-xl text-center text-white -translate-y-10 z-10`}>COMPRA APROVADA</h1>
                                    <p className='text-white text-center pt-7 px-2  -translate-y-10'>Após decidir começar a vender online, nossa equipe enviará no seu whatsapp os passos.</p>
                                </div>
                            </div>
                        </div>
                        <div className='animatedElementLeft hover:scale-105 duration-200 mt-20'>
                            <div className='flex flex-col items-center'>
                                <div className='lg:w-96 w-80 h-[22rem] border rounded-lg bg-secondaryDefault'>
                                    <div className='flex flex-col items-center'>
                                        <div className='w-20 h-20 rounded-full bg-white flex justify-center items-center border border-secondaryDefault -translate-y-10'>
                                            <FaWpforms className='text-4xl text-secondaryDefault' />
                                        </div>
                                        <h1 className={`${montserrat.className} pt-4 text-6xl text-center text-white -translate-y-10`}>
                                            02
                                        </h1>
                                        <h1 className={`${montserrat.className} pt-4  text-center text-white text-xl -translate-y-10`}>PREENCHER FORMULARIO</h1>
                                        <p className='text-white text-center pt-7 px-2 -translate-y-10' >Enviaremos um formulário para que você preencha. Em seguida, nossa equipe de profissionais entra em ação!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='animatedElementRight hover:scale-105 duration-200 mt-20'>
                            <div className='lg:w-96 w-80 h-[22rem] border rounded-lg bg-secondaryDefault'>
                                <div className='flex flex-col items-center'>
                                    <div className='w-20 h-20 rounded-full bg-white flex justify-center items-center border border-secondaryDefault -translate-y-10'>
                                        <FaRocket className='text-4xl text-secondaryDefault' />
                                    </div>
                                    <h1 className={`${montserrat.className} pt-4 text-6xl text-center text-white -translate-y-10`}>
                                        03
                                    </h1>
                                    <h1 className={`${montserrat.className} pt-4 text-xl text-center text-white -translate-y-10`}>LOJA PRONTA</h1>
                                    <p className='text-white text-center pt-7 px-2 -translate-y-10'>Parabéns, em 24h você receberá sua loja de alta conversão e estará pronta para decolar em vendas.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                :
                <div>
                    <div className='flex flex-row items-start gap-10'>
                        <div className={``}>
                            <Image src={imgNextStep} width={500} />
                            <div class="w-[31rem] h-[10rem] -translate-y-[10.3rem] rounded-2xl border border-solid border-orange-500 bg-orange-400/80 shadow-md absolute">
                                <h1 className={`text-center ${montserrat.className} text-[#FF3003] text-2xl text-center`}>Satisfação 100% garantida</h1>
                                <p className='text-white px-2 text-center'>Nós adotamos a política de 100% de satisfação. Nosso objetivo é garantir sua felicidade com nosso trabalho. Se houver algo que não lhe agrade, colaboraremos para solucionar em sua loja. É simples assim.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='hover:scale-105 duration-200 lg:mt-0 mt-20'>
                                <div className='w-16 h-16 absolute rounded-full flex justify-center items-center bg-white shadow-secondaryDefault shadow-shadowButton -translate-x-6 -translate-y-4'>
                                    <h1 className={`${montserrat.className} text-2xl`}>01</h1>
                                </div>
                                <div className='lg:w-96 w-80 h-[9.6rem] border rounded-lg  bg-secondaryDefault'>
                                    <div className='flex flex-col items-center '>
                                        <h1 className={`${montserrat.className} pt-4 lg:text-xl text-center text-white  z-10`}>COMPRA APROVADA</h1>
                                        <p className='text-white text-center pt-7'>Após decidir começar a vender online, nossa equipe enviará no seu whatsapp os passos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hover:scale-105 duration-200'>
                                <div className='w-16 h-16 absolute rounded-full flex justify-center items-center bg-white shadow-secondaryDefault shadow-shadowButton -translate-x-6 -translate-y-4'>
                                    <h1 className={`${montserrat.className} text-2xl`}>02</h1>
                                </div>
                                <div className='flex flex-col items-center'>

                                    <div className='lg:w-96 w-80 h-[9.6rem] border rounded-lg bg-secondaryDefault'>
                                        <div className='flex flex-col items-center'>
                                            <h1 className={`${montserrat.className} pt-4 lg:text-xl text-center text-white`}>PREENCHER FORMULARIO</h1>
                                            <p className='text-white text-center pt-7'>Enviaremos um formulário para que você preencha. Em seguida, nossa equipe de profissionais entra em ação!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='hover:scale-105 duration-200'>
                                <div className='w-16 h-16 absolute rounded-full flex justify-center items-center bg-white shadow-secondaryDefault shadow-shadowButton -translate-x-6 -translate-y-4'>
                                    <h1 className={`${montserrat.className} text-2xl`}>03</h1>
                                </div>
                                <div className='lg:w-96 w-80 h-[9.6rem] border rounded-lg bg-secondaryDefault'>
                                    <div className='flex flex-col items-center'>
                                        <h1 className={`${montserrat.className} pt-4 lg:text-xl text-center text-white`}>LOJA PRONTA</h1>
                                        <p className='text-white text-center pt-7'>Parabéns, em 24h você receberá sua loja de alta conversão e estará pronta para decolar em vendas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}