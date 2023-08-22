'use client'
import { Montserrat } from 'next/font/google'
import style from '../../pages/highlights/style.module.css'
import { useEffect } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })

export default function Highlights() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.lordicon.com/bhenfmcm.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={`${style.bg_highlight} lg:h-[50rem] bg-cover`}>
            <div className='flex flex-col items-center justify-center gap-5 py-20 max-w-[1100px] m-auto px-4'>
                <p className='lg:text-2xl text-xs text-primaryDefault font-medium text-center'>LOJA COMPLETAMENTE AUTOMATIZADA, CONFIGURADA E PRONTA PARA GERAR VENDAS.</p>
                <h1 className={`${montserrat.className} 2xl:text-5xl lg:text-4xl text-xl text-center text-primaryDefault`}>
                    CONFIRA OS DESTAQUES DA SUA NOVA<br className='lg:flex hidden'/> LOJA DE <strong className='text-secondaryDefault'>ALTA CONVERSÃO.</strong>
                </h1>
                <div className=' mt-10 flex lg:flex-row flex-col items-center gap-5 justify-between w-full'>
                    <div className='animatedElementUp shadow-2xl flex justify-center bg-white rounded-xl w-80 lg:h-[30rem] h-[20rem]'>
                        <div className='flex flex-col items-center '>
                            <lord-icon
                                src="https://cdn.lordicon.com/wloilxuq.json"
                                trigger="loop"
                                colors="primary:#121331,secondary:#ff7e03"
                                style={{ width: '100px', height: '100px' }}
                            >
                            </lord-icon>
                            <h1 className={`${montserrat.className} text-primaryDefault text-xl`}>Design Profissional</h1>
                            <p className='text-center px-2 w-64 mt-7 lg:text-xl'>Vamos criar a sua loja de acordo com sua marca, passando confiabilidade e se destacando do mercado.</p>
                        </div>
                    </div>
                    <div className='animatedElementUp shadow-2xl flex justify-center bg-white rounded-xl w-80 lg:h-[30rem] h-[20rem]'>
                        <div className='flex flex-col items-center '>
                            <lord-icon
                                src="https://cdn.lordicon.com/gqdnbnwt.json"
                                trigger="loop"
                                colors="primary:#121331,secondary:#ff7e03"
                                style={{ width: '100px', height: '100px' }}
                            >
                            </lord-icon>
                            <h1 className={`${montserrat.className} text-primaryDefault text-xl`}>Estrutura Completa</h1>
                            <p className='text-center px-2 w-64 mt-7 lg:text-xl'>Sua loja completamente configurada, com meios de pagamento e pronta pra vender!</p>
                        </div>
                    </div>
                    <div className='animatedElementUp shadow-2xl flex justify-center bg-white rounded-xl w-80 lg:h-[30rem] h-[20rem]'>
                        <div className='flex flex-col items-center '>
                            <lord-icon
                                src="https://cdn.lordicon.com/nkmsrxys.json"
                                trigger="loop"
                                colors="primary:#121331,secondary:#ff7e03"
                                style={{ width: '100px', height: '100px' }}
                            >
                            </lord-icon>
                            <h1 className={`${montserrat.className} text-primaryDefault text-center text-xl`}>
                                80 Produtos minerados por especialistas
                            </h1>
                            <p className='text-center px-2 w-64 mt-7 lg:text-xl'>Você receberá a sua loja com 80 produtos altamente lucrativos que foram minerados e validados por especialistas do mercado de dropshipping.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}