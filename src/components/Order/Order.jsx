import React from 'react'
import card1 from '../image/card2.png'
import card2 from '../image/card1.png'
import Button from '../Button/Button'

const Order = () => {
    const text = {
        navText: "CREATE ABHA",
        color: "#4448c6",
        shadow: "rgba(118, 53, 220, 0.24)",
        hoverColor: "#431A9E",
        font:"3rem",
        padding:"3rem"
    }

    return (
        <div>
            <section  className="bg-white ">
                <div  className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-28 lg:px-12">
                    <div  className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <div className='max-w-md relative'>
                            <img className='w-full object-cover' src={card1} alt="" />
                            <button  className="button pulses absolute k:top-[55%] mt-1 k:left-2  sm:top-[55%] md:top-[55%] bg-green-500  left-4 rounded-3xl sm:text-[15px]  md:text-[21px] text-white font-bold p-[6px] tracking-wide sm:px-5 sm:p-[5px] k:px-5 k:p-[4px] md:px-7"><i  className="fa-brands fa-whatsapp"></i> Book Now</button>
                        </div>
                        <div className='max-w-md relative'>
                            <img className='w-full object-cover' src={card2} alt="" />
                            <button  className="button pulses absolute k:top-[50%] mt-1 k:left-3  sm:top-[48%] md:top-[54%] bg-sky-600  left-4 rounded-3xl sm:text-[15px]  md:text-[21px] text-white font-bold p-[6px] tracking-wide sm:px-5 sm:p-[5px] k:px-5 k:p-[4px] md:px-7 ">Book Now</button>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xs  py-7'><span className='md:p-4 cardtextbg md:px-7'>ABHA ID YOUR UNIQUE & TRUSTABLE HEALTH ID</span></h2>
                        <h1 className='k:text-2xl md:text-[3.1rem] text-head opacity-80'>Unlock India's Digital Health Ecosystem with Seamless Access</h1>
                        <p className='k:text-base md:text-2xl py-7'>Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.</p>
                    </div>
                    <div className='flex items-start justify-center  gap-2'>
                        <button type="button"  className="py-[12px] px-5 mr-2 mb-2 text-[2vw] md:text-base font-bold text-white focus:outline-none bg-[#494ed3] rounded-lg border border-gray-200 ">CREATE ABHA &nbsp; <i  className="fa-solid fa-arrow-right"></i></button>
                        <button type="button"  className="py-[11px] px-7 mr-2 mb-2 text-[2vw] md:text-base  font-bold text-black focus:outline-none border-black opacity-75  rounded-lg border  ">KNOW MORE</button>
                  
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order
