import React from 'react'
import img1 from '../image/Accessibility.png'
import img2 from '../image/Convenience.png'
import img3 from '../image/Security.png'

const Down = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-around flex-wrap gap-5 px-4'>
                <div className='flex items-center justify-between px-5 w-96 h-32 border border-blue-700 rounded-3xl'>
                    <p className='text-3xl font-bold'>Convenience</p>
                    <img className='w-24' src={img2} alt="" />
                </div>
                <div className='flex items-center justify-between px-5 w-96 h-32 border border-blue-700 rounded-3xl'>
                    <p className='text-3xl font-bold'>Accessibility</p>
                    <img className='w-24' src={img1} alt="" />
                </div>
                <div className='flex items-center justify-between px-5 w-96 h-32 border border-blue-700 rounded-3xl'>
                    <p className='text-3xl font-bold'>Security</p>
                    <img className='w-24' src={img3} alt="" />
                </div>

            </div>
            <div className='flex items-center justify-center flex-col pt-40'>
                <div className='text-center'>
                    <h2 className='text-base  py-7'><span className='md:p-4 cardtextbg md:px-7'>SYNC, TRANSFORM, GET FIT WITH SMART HEALTH</span></h2>
                    <h1 className='k:text-2xl md:text-[2.7rem] text-head opacity-80'>Connect to the fitness galaxy and embark on an adventure</h1>
                    <p className='k:text-base md:text-2xl py-7 px-24'>Sync your healthcare devices, elevate consistency, and be on the path of a transformational journey like never before!
                    </p>
                </div>
                <div className='flex items-start justify-center  gap-2'>
                    <button type="button" className="py-[12px] px-5 mr-2 mb-2 text-[2vw] md:text-base  font-bold text-white focus:outline-none bg-[#494ed3] rounded-lg border border-gray-200 ">Download App&nbsp; <i className="fa-solid fa-arrow-right"></i></button>
                    <button type="button" className="py-[11px] px-7 mr-2 mb-2 text-[2vw] md:text-base  font-bold text-black focus:outline-none border-black opacity-75  rounded-lg border  ">KNOW MORE</button>
                </div>
            </div>
        </div>

    )
}

export default Down
