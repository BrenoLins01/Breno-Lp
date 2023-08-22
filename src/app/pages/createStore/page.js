'use client'

import { Montserrat } from 'next/font/google'
import style from '../../../app/pages/createStore/style.module.css'
const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })
import { scrollToDiv } from '@/utils/scrollToDiv'

export default function CreateStore() {
    return (
        <div className={`${style.bg_createStore} xl:h-[68rem] sm:h-[55rem] h-[30rem] bg-[#F6F6F6]`}>
            <h1 className={`${montserrat.className} text-secondaryDefault  lg:translate-y-24 translate-y-[2rem] 2xl:text-5xl lg:text-4xl sm:text-3xl text-xl text-center `}>
                CRIE SUA LOJA COM OS<br /> MELHORES DO MERCADO
            </h1>
            <div onClick={()=>scrollToDiv('plans')} className='w-80 xl:translate-y-[49rem] lg:translate-y-[40rem] sm:translate-y-[37rem] translate-y-[20rem] m-auto'>
                <button className={`${montserrat.className} text-lg tracking-wide hover:brightness-125 duration-200 w-80 rounded-xl h-14 shadow-shadowButton bg-[#00D208] text-white `}>Criar agora</button>
            </div>
        </div>
    )
}