import { Montserrat } from "next/font/google"
import { FaCheckCircle } from "react-icons/fa"
const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })

export default function CardPlan() {

    return (
        <div className="my-20">
            <h1 className={`${montserrat.className} pb-12 2xl:text-5xl lg:text-4xl text-xl text-center text-primaryDefault`}>
                OPORTUNIDADE <strong className="text-secondaryDefault">ÚNICA!</strong>
            </h1>
            <div id="plans" className=" sm:w-[30rem] w-[20rem] pb-10 m-auto shadow-shadow7xl rounded-2xl">
                <h1 className={`${montserrat.className} pt-10 text-3xl text-center text-secondaryDefault`}>
                    GENÉRICA
                </h1>
                <div className="">
                    <h1 className={`font-semibold pt- text-lg text-center text-secondaryDefault`}>
                        DE R$ 997,00
                    </h1>
                    <div className="border-b-[3px] border-black absolute w-32 sm:translate-x-44 translate-x-24 -translate-y-4"></div>
                </div>
                <h1 className={`${montserrat.className} tracking-[0.4em]  text-center text-secondaryDefault`}>
                    POR APENAS 12x DE
                </h1>
                <h1 className={`${montserrat.className} pt-2 text-5xl text-center text-secondaryDefault`}>
                    R$16,49
                </h1>
                <h1 className={`${montserrat.className} tracking-[0.1em]  pt-4 text-md text-center text-secondaryDefault`}>
                    OU R$197,90 A VISTA
                </h1>

                <div className="mt-10 flex justify-center flex-col items-center">

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600" />
                            <p className="sm:text-base text-xs text-secondaryDefault ">
                                Loja pronta totalmente personalizada
                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600" />
                            <p className="sm:text-base text-xs text-secondaryDefault ">
                                Tema de alta Conversão
                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600" />
                            <p className="sm:text-base text-xs text-secondaryDefault ">
                                Logo Profissional

                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600" />
                            <p className="sm:text-base text-xs text-secondaryDefault ">
                                3 Banners profissionais

                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>


                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600" />
                            <p className="sm:text-base text-xs text-secondaryDefault ">
                                6 Categorias profissionais
                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600 " />
                            <p className="sm:text-base sm:w-52 text-xs text-secondaryDefault ">
                                80 Produtos Minerados e cadastrados com copy
                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600 " />
                            <p className="sm:text-base sm:w-52 text-xs text-secondaryDefault ">
                                Checkout transparente (Maior conversão)
                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600" />
                            <p className="sm:text-base text-xs text-secondaryDefault ">
                                Gateway integrado (Mercado pago)

                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600" />
                            <p className="sm:text-base text-xs text-secondaryDefault ">
                                Botão de WhatsApp
                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className="flex flex-col py-1">
                        <div className="flex items-center gap-3 w-[310px]">
                            <FaCheckCircle className="text-green-600" />
                            <p className="sm:text-base text-xs text-secondaryDefault ">
                                2 Bônus Exclusivos
                            </p>
                        </div>
                        <div className="border-b-2 w-[300px] mt-2"></div>
                    </div>

                    <div className='lg:w-80 w-72  m-auto mt-10'>
                        <button className={`${montserrat.className} sm:text-lg tracking-wide hover:brightness-125 duration-200 lg:w-80 w-72 rounded-xl h-14 shadow-shadowButton bg-[#00D208] text-white `}>EU QUERO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}