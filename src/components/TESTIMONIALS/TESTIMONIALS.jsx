import React from 'react'

const TESTIMONIALS = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-center flex-col pt-40'>
                <div className='text-center'>
                    <h2 className='text-base  py-7'><span className='md:p-3 cardtextbg md:px-7'>TESTIMONIALS</span></h2>
                    <h1 className='k:text-2xl md:text-[1.8rem] text-head opacity-80'>Checkout what people are saying about their experiences.</h1>
                </div>
            </div>
            <div className='flex items-center justify-around flex-wrap gap-10 px-5 py-10'>
                <div className='flex justify-center gap-1 flex-col w-72 p-3 shadow-2xl rounded-lg'>
                    <h1 className='text-lg font-semibold'>PARITOSH</h1>
                    <small className='text-sm opacity-60'>05-02-2022</small>
                    <div>
                        ⭐⭐⭐⭐
                    </div>
                    <p className='text-sm leading-6 px-1'>YORE Care App made my ABHA creation very easy. It is a user-friendly app that empowers you to take control of your healthcare journey like never before.</p>
                </div>
                <div className='flex justify-center gap-1 flex-col w-96 p-3 shadow-2xl rounded-lg'>
                    <h1 className='text-lg font-semibold'>KETAKI</h1>
                    <small className='text-sm opacity-60'>05-02-2022</small>
                    <div>
                        ⭐⭐⭐⭐
                    </div>
                    <p className='text-sm leading-6 px-1'>I used the YORE Care app to make my ABHA ID. Now it is my go-to app. I have saved my health documents, and synced my health devices with it. Now I do not have to use multiple apps.</p>
                </div>
                <div className='flex justify-center gap-1 flex-col w-80 p-3 shadow-2xl rounded-lg'>
                    <h1 className='text-lg font-semibold'>ANUJ</h1>
                    <small className='text-sm opacity-60'>05-02-2022</small>
                    <div>
                        ⭐⭐⭐⭐
                    </div>
                    <p className='text-sm leading-6 px-1'>I find YORE Care very helpful it's very easy for me to order medicine online from my local chemist. Their team of pharmacists is outstanding.</p>
                </div>
            </div>
        </div>
    )
}

export default TESTIMONIALS
