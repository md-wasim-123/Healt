import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './Bannerstyle.css';
import img1 from '../image/Website-Banner-2.jpg'
import img2 from '../image/Website-Banner-3.jpg'
import img3 from '../image/Website-Banner-4.jpg'
// import required modules
import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='p-16 bg-white'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
            <div className='flex items-center justify-center flex-col py-20'>
                <div className='text-center'>
                    <h2 className='text-base  py-7'><span className='md:p-4 cardtextbg md:px-7'>STREAMLINED HEALTH RECORD MANAGEMENT MADE EFFORTLESS</span></h2>
                    <h1 className='k:text-2xl md:text-[3.1rem] text-head opacity-80'>NOW Link Your Health Records with ABHA ID</h1>
                    <p className='k:text-base md:text-2xl py-7'>Experience a cutting-edge solution for effortless management of your health records. Gain secure and convenient digital access.
                    </p>
                </div>
                <div className='flex items-start justify-center  gap-2'>
                    <button type="button" className="py-[12px] px-5 mr-2 mb-2 text-[2vw] md:text-base  font-bold text-white focus:outline-none bg-[#494ed3] rounded-lg border border-gray-200 ">Upload Now&nbsp; <i className="fa-solid fa-arrow-right"></i></button>
                    <button type="button" className="py-[11px] px-7 mr-2 mb-2 text-[2vw] md:text-base  font-bold text-black focus:outline-none border-black opacity-75  rounded-lg border  ">KNOW MORE</button>


                </div>
            </div>
        </div>
    )
}

export default Banner
