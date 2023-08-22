'use client'
import { Montserrat } from "next/font/google"
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/examplesToSee/WhatsApp-Image-2023-04-19-at-14.46.00-1.webp'
import img2 from '../../../assets/examplesToSee/WhatsApp-Image-2023-04-19-at-14.46.00-2.jpg'
import img3 from '../../../assets/examplesToSee/WhatsApp-Image-2023-04-19-at-14.46.00-3.jpg'
import img4 from '../../../assets/examplesToSee/WhatsApp-Image-2023-04-19-at-14.46.00-6.jpg'
import img5 from '../../../assets/examplesToSee/WhatsApp-Image-2023-04-19-at-14.46.00.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { scrollToDiv } from '@/utils/scrollToDiv'


// import required modules
import { Navigation } from 'swiper/modules';
import Image from "next/image";
const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })

export default function ExamplesToSee() {

    return (
        <div className="lg:my-48 my-28">
            <h1 className={`${montserrat.className} 2xl:text-5xl lg:text-4xl text-xl text-center text-primaryDefault`}>
                EXEMPLO DE COMO FICARÁ <br /><strong className="text-secondaryDefault">A SUA LOJA</strong>
            </h1>
            <div className="2xl:w-[35rem] xl:w-[25rem] sm:w-[29rem] m-auto mt-10 px-2 select-none">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Image src={img1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img5} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div onClick={()=>scrollToDiv('plans')} className='w-80  m-auto mt-10 '>
                <button className={`${montserrat.className} text-lg tracking-wide hover:brightness-125 duration-200 w-80 rounded-xl h-14 shadow-shadowButton bg-[#00D208] text-white `}>Quero minha loja profissional</button>
            </div>
        </div>
    )
} 