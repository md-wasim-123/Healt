import React, { useState, useEffect } from 'react'
import ren1 from '../image/colimg1.png'
import ren2 from '../image/colimg2.png'
import ren3 from '../image/colimg3.png'
import mob1 from '../image/Health+Locker+frame.png'
import mob2 from '../image/smart1.jpg'
import mob3 from '../image/smart2.jpg'
import img1 from '../image/Ac1.png'
import img2 from '../image/Ac2.png'
import img3 from '../image/Ac3.png'
import img4 from '../image/Rectangle+2150.png'
import img5 from '../image/Frame+9817.png'


const Ac = () => {
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
        <div className='flex items-center  justify-center md:justify-evenly flex-col-reverse  md:flex-row w-full h-auto  bg-white py-10'>
            <div className='flex items-center flex-col flex-wrap gap-3 pt-20 '>
                <div className={`${count === 1 ? "border-2  border-gray-500/50 transition-all duration-200" : "border-0"}   flex flex-col w-[20rem] h-auto md:w-[550px] md:h-32 gap-5  rounded-2xl `} onClick={() => add()}>
                
                    <div className={`${count === 1 ? 'py-10' : 'colla rounded-2xl'} flex items-center gap-3 py-5 px-5 w-full`}>
                        <img className={`${count === 1 ? 'pb-6' : 'pb-0'} w-14  `} src={ren1} alt="" />
                        <div>
                            <h3 className='text-2xl font-bold opacity-80 '>Digitrack</h3>
                            <p className={` ${count === 1 ? "block" : "hidden"} leading-6`}>Effortlessly record and manage digital details of your medical treatments. the patients in one practice

                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${count === 2 ? "border-2  border-gray-500/50 transition-all duration-200" : "border-0"}   flex flex-col w-[20rem] h-auto md:w-[550px] md:h-32  gap-5    rounded-2xl `} onClick={() => add()}>
               
                    <div className={`${count === 2 ? 'py-10' : 'colla rounded-2xl'} flex items-center gap-3 py-5 px-5 w-full`}>
                        <img className={`${count === 2 ? 'pb-6' : 'pb-0'} w-14  `} src={ren3} alt="" />
                        <div>
                            <h3 className='text-2xl font-bold opacity-80 '>MedTrack</h3>
                            <p className={` ${count === 2 ? "block" : "hidden"} leading-6`}>Centralize medical documents, including diagnostic test reports and prescriptions, for easy future reference..</p>
                        </div>
                    </div>
                </div>
                <div className={`${count === 3 ? "border-2 border-gray-500/50  transition-all  rounded-2xl " : "border-0"}   flex flex-col w-[20rem] h-auto md:w-[550px] md:h-32  gap-5    rounded-2xl`} onClick={() => add()}>
                  
                    <div className={`${count === 3 ? 'py-10 ' : 'colla rounded-2xl'} flex items-center gap-3 px-5 py-5 w-full `}>
                        <img className={`${count === 3 ? 'pb-6' : 'pb-0'} w-14  `} src={ren2} alt="" />
                        <div>
                            <h3 className='text-2xl font-bold opacity-80 '>CareTrack</h3>
                            <p className={` ${count === 3 ? "block" : "hidden"} leading-6`}>Enable doctors to access your comprehensive medical files, treatment history, and diagnostic reports </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className={`${count === 1 ? 'block' : 'hidden'} flex items-center flex-row-reverse relative `}>
                <img className='k:w-52 sm:w-[30vw] md:w-[25vw] k:h-full  xl:h-[10%]' src={mob1} alt="" />
                <img className="w-40 md:w-60 absolute top-30 -left-10  anime"
                    src={img1}
                    alt="" />
                <img className="w-40 md:w-60 absolute -right-16 md:-right-28 top-52   anime-m-up"
                    src={img3}
                    alt="" />
                <img className="w-40 md:w-60 absolute top-[60%] -left-10 md:left-0   anime-b-lef"
                    src={img2}
                    alt="" />
            </div>

            <div className={`${count === 2 ? 'block' : 'hidden'} flex items-center flex-row-reverse relative `}>
                <img className='k:w-52 sm:w-[30vw] md:w-[25vw] k:h-full  xl:h-[10%]' src={mob2} alt="" />
                <img className=" w-60 absolute lg:right-20 anime"
                    src={img4}
                    alt="" />
                
            </div>

            <div className={`${count === 3 ? 'block' : 'hidden'} flex items-center flex-row-reverse relative `}>
                <img className='k:w-52 sm:w-[30vw] md:w-[25vw] k:h-full  xl:h-[10%]' src={mob3} alt="" />
                <img className="w-40 md:w-60 absolute lg:right-20 anime"
                    src={img5}
                    alt="" />
            </div>
           

        </div>
    )
}

export default Ac
