import React, { useEffect, useState } from 'react'
import mobaile1 from '../image/colMobaile.png'
import ren1 from '../image/renColl1.png'
import ren2 from '../image/renColl2.png'
import ren3 from '../image/renColl3.png'
import img1 from '../image/img1.png'
import img2 from '../image/img2.png'
import img3 from '../image/img3.png'
import img4 from '../image/img4.png'
import img5 from '../image/img5.png'

const Collapse = () => {
    const [count, setCount] = useState(1);
  
    function add() {
        setCount((con) => (con === 3 ? 1 : con + 1));
    }

    useEffect(() => {
        const intervalId = setInterval(add, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='flex items-center  justify-center md:justify-evenly flex-col-reverse  md:flex-row w-full h-auto  bg-white'>
            <div className='flex items-center flex-col gap-3 pt-20 '>
                <div className={`${count === 1 ? "border-2  border-gray-500/50 transition-all duration-200" : "border-0"}   flex flex-col w-[20rem] h-auto md:w-[550px] md:h-32 rounded-2xl `} onClick={() => add()}>
                  
                    <div className={`${count === 1 ? 'py-10' : 'colla rounded-2xl'} flex items-center gap-3 py-5 px-5 w-full`}>
                        <img className={`${count === 1 ? 'pb-6' : 'pb-0'} w-14  `} src={ren1} alt="" />
                        <div>
                            <h3 className='text-2xl font-bold opacity-80 '>Unique and Reliable Identity</h3>
                            <p className={` ${count === 1 ? "block" : "hidden"} leading-6`}>Health ID cards offer a highly secure and encrypted platform. User consent is mandatory for accessing their PHR every time.</p>
                        </div>
                    </div>
                </div>
                <div className={`${count === 2 ? "border-2  border-gray-500/50 transition-all duration-200" : "border-0"}   flex flex-col w-[20rem] h-auto md:w-[550px] md:h-32  rounded-2xl `} onClick={() => add()}>
                
                    <div className={`${count === 2 ? 'py-10' : 'colla rounded-2xl'} flex items-center gap-3 py-5 px-5 w-full`}>
                        <img className={`${count === 2 ? 'pb-6' : 'pb-0'} w-14  `} src={ren2} alt="" />
                        <div>
                            <h3 className='text-2xl font-bold opacity-80 '>Consolidated Benefits Platform</h3>
                            <p className={` ${count === 2 ? "block" : "hidden"} leading-6`}>Effortlessly link diverse healthcare benefits, from public health programs to insurance schemes, with your ABHA number.</p>
                        </div>
                    </div>
                </div>
                <div className={`${count === 3 ? "border-2 border-gray-500/50  transition-all  rounded-2xl " : "border-0"}   flex flex-col w-[20rem] h-auto md:w-[550px] md:h-32   rounded-2xl`} onClick={() => add()}>
        
                    <div className={`${count === 3 ? 'py-10 ' : 'colla rounded-2xl'} flex items-center gap-3 px-5 py-5 w-full `}>
                        <img className={`${count === 3 ? 'pb-6' : 'pb-0'} w-14  `} src={ren3} alt="" />
                        <div>
                            <h3 className='text-2xl font-bold opacity-80 '>Quick and Easy Registration</h3>
                            <p className={` ${count === 3 ? "block" : "hidden"} leading-6`}>Register swiftly by entering basic information and validating your Aadhaar or mobile number to generate your Health ID card.</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='flex items-center flex-row-reverse relative '>
                <img className='k:w-52 sm:w-[30vw] md:w-[25vw] k:h-full  xl:h-[10%]' src={mobaile1} alt="" />
                <img className={`${count === 1 ? 'block' : 'hidden'} md:w-72 absolute lg:right-20  anime-up`}
                    src={img1}
                    alt="" />
                <img className={`${count === 2 ? 'block' : 'hidden'} w-40 md:w-60 absolute top-30 left-1  anime`}
                    src={img3}
                    alt="" />
                <img className={`${count === 2 ? 'block' : 'hidden'} w-40 md:w-60 absolute -right-14 md:-right-32 top-60   anime-m-up`}
                    src={img4}
                    alt="" />
                <img className={`${count === 2 ? 'block' : 'hidden'} w-40 md:w-60 absolute -left-6 md:left-0 top-[60%]  anime-b-lef`}
                    src={img5}
                    alt="" />
                <img className={`${count === 3 ? 'block' : 'hidden'} md:w-72 absolute lg:right-20 anime`}
                    src={img2}
                    alt="" />

            </div>

        </div>
    )
}

export default Collapse
