'use client'
import style from '../../../app/pages/feedbackClients/style.module.css'
import { Montserrat } from "next/font/google"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import img1 from '../../../assets/feedbackClients/Group 15.svg'
import img2 from '../../../assets/feedbackClients/Group 16.svg'
import img3 from '../../../assets/feedbackClients/Group 18.svg'
import img4 from '../../../assets/feedbackClients/Group 17.svg'
import { useScreenSize } from '@/context/screenSizeContext';
import { useEffect, useState } from 'react';
const montserrat = Montserrat({ subsets: ['latin'], weight: '900' })

export default function FeedBackClients() {
    const { screenX } = useScreenSize()
    const [innerWidth, setiInnerWidth] = useState()
    useEffect(() => {
        setiInnerWidth(window.innerWidth)
    }, [screenX])
    return (
        <div className={`${style.bg_Feedback}  pb-20 `}>
            <h1 className={`${montserrat.className} pt-20 2xl:text-5xl lg:text-4xl text-xl text-center text-primaryDefault`}>
                FEEDBACK DE <strong className="text-secondaryDefault">CLIENTES</strong>
            </h1>
            <div className={`2xl:w-[65rem] ${innerWidth < 889 ? 'w-[17rem]' : 'w-[55rem]'}   m-auto mt-10 px-2 select-none`}>
                <Swiper slidesPerView={innerWidth < 889 ? 1 : 3} spaceBetween={20} navigation={true} modules={[Navigation, FreeMode]} className="mySwiper">
                    <SwiperSlide>
                        <Image src={img1} width={300} alt="Feedback 1"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img2} width={300} alt="Feedback 2"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={img3} width={300} alt="Feedback 3"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img4} width={300} alt="Feedback 4"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}