'use client';
import { Montserrat } from "next/font/google"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import { FaWhatsapp } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })

export default function Faq() {

    return (
        <>
            <h1 className={`${montserrat.className} py-20 2xl:text-5xl lg:text-4xl text-xl text-center text-primaryDefault`}>
                PERGUNTAS FREQUENTES
            </h1>
            <div className='max-w-[1200px] m-auto pb-20'>
                <Accordion defaultIndex={[0]} allowMultiple bg={'#FF7E03'} p={10} roundedTop={20}>
                    <AccordionItem p={20} className='hover:bg-[#E57000] duration-100 rounded-2xl'>
                        <h2>
                            <AccordionButton>
                                <Box className='text-white font-bold' as="span" flex='1' textAlign='left'>
                                    Quanto tempo fica pronta?
                                </Box>
                                <AccordionIcon textColor={'#fff'} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className="text-white" pb={4}>
                            Em até 24h corridos após responder o formulário que lhe será enviado ao finalizar
                            a compra e responder todas as informações que estiverem pendentes para que possamos prosseguir
                            com a criação da sua loja!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem p={20} className='hover:bg-[#E57000] duration-100 rounded-2xl'>
                        <h2>
                            <AccordionButton>
                                <Box className='text-white font-bold' as="span" flex='1' textAlign='left'>
                                    Quais gastos eu vou ter?
                                </Box>
                                <AccordionIcon textColor={'#fff'} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className="text-white" pb={4}>
                            O Shopify tem um custo de US$ 1 por mês, nos primeiros 3 meses. O valor da mensalidade é diretamente enviada para a plataforma.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem p={20} className='hover:bg-[#E57000] duration-100 rounded-2xl'>
                        <h2>
                            <AccordionButton>
                                <Box className='text-white font-bold' as="span" flex='1' textAlign='left'>
                                    Qual plataforma é usada?
                                </Box>
                                <AccordionIcon textColor={'#fff'} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="text-white">
                            Utilizamos Somente a plataforma Shopify, uma das maiores do mundo. Escolhemos ela como parceira por simplificar a vida dos empreendedores digitais,
                            seguindo uma dinâmica totalmente intuitiva para pessoas que nunca tiveram contato com uma loja online.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem p={20} className='hover:bg-[#E57000] duration-100 rounded-2xl'>
                        <h2>
                            <AccordionButton>
                                <Box className='text-white font-bold' as="span" flex='1' textAlign='left'>
                                    Quais são os produtos? Posso escolher os produtos?
                                </Box>
                                <AccordionIcon textColor={'#fff'} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="text-white">
                            São produtos genéricos. Ou seja, de várias categorias. Todos estes produtos são minerados pela nossa equipe e incluso na sua loja.
                            Caso após a loja pronta você desejar incluir mais produtos, você terá tutoriais em vídeo para te auxiliar nesse processo ou oferecemos pacotes a parte para inserção de mais produtos.

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem p={20} className='hover:bg-[#E57000] duration-100 rounded-2xl'>
                        <h2>
                            <AccordionButton>
                                <Box className='text-white font-bold' as="span" flex='1' textAlign='left'>
                                    Vocês escolhem o nome? Logo? Como funciona essa parte?
                                </Box>
                                <AccordionIcon textColor={'#fff'} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="text-white">
                            No processo de criação da sua loja você terá duas opções: Você mesmo escolher a logomarca, banners, e nome ou deixar por conta do nosso time de especialista. Ficará a seu critério!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem p={20} className='hover:bg-[#E57000] duration-100 rounded-2xl'>
                        <h2>
                            <AccordionButton>
                                <Box className='text-white font-bold' as="span" flex='1' textAlign='left'>
                                    Caso eu não goste?
                                </Box>
                                <AccordionIcon textColor={'#fff'} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="text-white">
                            No processo de criação da sua loja você terá duas opções: Você mesmo escolher a logomarca, banners, e nome ou deixar por conta do nosso time de especialista. Ficará a seu critério!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem p={20} className='hover:bg-[#E57000] duration-100 rounded-2xl'>
                        <h2>
                            <AccordionButton>
                                <Box className='text-white font-bold' as="span" flex='1' textAlign='left'>
                                    Já possuo conta na Shopify e loja pronta, vcs refazem toda ela no seu pacote?
                                </Box>
                                <AccordionIcon textColor={'#fff'} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="text-white">
                            Sim. Porém indicamos sempre a criação de uma conta nova, até para que você possa ganhar novos descontos na Shopify.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex flex-col justify-center items-center text-green-500 py-20">
                <FaWhatsapp className="text-6xl" />
                <h1 className={`${montserrat.className} py-6 2xl:text-5xl lg:text-4xl text-xl text-center text-primaryDefault`}>
                    HÁ ALGUMA DÚVIDA?
                </h1>
                <h1 className={`${montserrat.className}  2xl:text-5xl lg:text-4xl text-xl text-center text-secondaryDefault`}>
                ENTRE EM CONTATO COM A GENTE!
                </h1>
                <a  href='https://wa.me/+5591985381212?text=Olá, estou com dúvida sobre a Criação da minha loja, pode me ajudar? Por gentileza' target="_blank">
                    <button className={`${montserrat.className} mt-10 text-lg tracking-wide hover:brightness-125 duration-200 lg:w-96 w-72 rounded-xl h-14 shadow-shadowButton bg-[#00D208] text-white `}>CHAMAR NO WHATSAPP</button>
                </a>
            </div>
        </>
    )
}