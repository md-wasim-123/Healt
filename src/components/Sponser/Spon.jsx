import React from 'react'


import { Spon1 } from './Data'
import { Spon2 } from './Data'

const Spon = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-center flex-col py-20'>
                <div className='text-center'>
                    <h2 className='text-base  py-7'><span className='md:p-4 cardtextbg md:px-7'>STAY TUNED: SOMETHING AMAZING IS COMING!</span></h2>
                    <h1 className='k:text-2xl md:text-[3.1rem] text-head '><span className='text-[#4d13d7]'>YORE Care</span>  app</h1>
                    <p className='k:text-base md:text-2xl py-7'>Empowering YOU with a unified healthcare platform for informed health choices.
                    </p>
                </div>
                <div className='flex items-start justify-center  gap-2'>
                    <button type="button" className="py-[12px] px-5 mr-2 mb-2 text-[2vw] md:text-base  font-bold text-white focus:outline-none bg-[#494ed3] rounded-lg border border-gray-200 ">Upload Now&nbsp; <i className="fa-solid fa-arrow-right"></i></button>
                    <button type="button" className="py-[11px] px-7 mr-2 mb-2 text-[2vw] md:text-base  font-bold text-black focus:outline-none border-black opacity-75  rounded-lg border  ">KNOW MORE</button>


                </div>
            </div>
            <div className='flex items-start justify-center flex-wrap  py-10 gap-9 font-medium'>
                {
                    Spon1.map((items, index) => (
                        <div key={index} className='flex flex-col items-center justify-center w-48 h-64  gap-5 text-center px-2 logohover' >
                            <img className='w-24' src={items.img} alt="" />
                            <h2 className='text-xl'>{items.head}</h2>
                            <p>{items.des}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-start justify-center flex-wrap py-10 gap-9 font-medium'>
                {
                    Spon2.map((items, index) => (
                        <div key={index} className='flex flex-col items-center justify-center w-48 h-64  gap-5 text-center px-2 logohover' >
                            <img className='w-24' src={items.img} alt="" />
                            <h2 className='text-xl'>{items.head}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Spon
