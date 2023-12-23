import React from 'react'
import mobail from '../image/herro2.png'
import man from '../image/herro1.png'
const HerroSection = () => {
  return (
    <div className='flex-col flex md:flex-row items-center flex-wrap k:justify-center sm:justify-center md:justify-center lg:justify-between md:px-20 k:py-24 sm:py-24 md:py-24  w-full h-auto sticky top-0 -z-50'>
      <div className='k:w-[100%] sm:w-[100%] md:w-[600px] lg:pb-28 k:px-10 sm:px-10  '>
        <h1 className='text-head k:text-[2rem] sm:text-[2rem] md:text-[3.1rem] k:leading-[2rem]  md:leading-[3.6rem]'><span className='opacity-80'>Digitize, Preserve & Empower</span> <span className='text-indigo-700 '>Healthcare</span> </h1>
        <p className='sm:text-xl  md:text-3xl md:leading-[130%]  '>Your comprehensive online healthcare solution, we provide 24x7 access to personalized healthcare services, seamless integration of health devices, and daily health updates, all within a unified and empowering ecosystem.</p>
        <div className='flex items-center gap-7 py-2'>
          <button className="bg-[#4448c6] hover:bg-blue-700 text-white font-bold p-2 px-9 border k:mx-auto sm:mx-auto md:mx-0 k:px-20 k:p-1 k:text-[15px] sm:text-sm md:text-lg k:mt-2 rounded">
          <i className="fa-brands fa-google-play"></i>   Button
          </button>
          <button type="button" className="text-gray-900 hidden md:block hover:text-white border border-gray-800 hover:bg-gray-900 p-2 px-9 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded  sm:text-sm md:text-lg ">  <i className="fa-brands fa-apple"></i> App Store</button>
        </div>
      </div>

      <div className='flex items-center flex-row-reverse relative '>
        <img className='k:w-52 sm:w-[30vw] md:w-[25vw] k:h-full  xl:h-[10%]' src={mobail} alt="" />
        <img className='md:w-72 absolute lg:right-20 z-30 anime' src={man} alt="" />
      </div>
    </div>
  )
}

export default HerroSection
