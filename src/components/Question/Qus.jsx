import React, { useState } from 'react'

const Qus = () => {
    const data = [
        {
            Ques: "What is YORE Care?",
            Ans: "YORE Care is a mobile application that allows users to create their ABHA ID, which is a secure and NHA (National Health Authority) approved identification for accessing healthcare services. YORE Care also provides various other features to enhance your healthcare experience."
        },
        {
            Ques: "Is it safe to create an ABHA ID through the Your Care App?",
            Ans: "Yes, it is completely safe to create an ABHA ID using the YORE Care app. We prioritize the security and privacy of our users. All data stored in the app is kept confidential and is not shared with anyone."
        },
        {
            Ques: "Can you local medical shops partner with Your Care?",
            Ans: "Yes, YORE Care welcomes partnerships with local medical shops. By partnering with us, medical shops can provide convenient online medicine ordering services to their customers through our app. Click here to partner with us!"
        },
    ]
    const [according, setAccording] = useState(-1)
    const clickCollaps = (index) => {
        if (according === index) {
            setAccording(-1);
            return
        }
        setAccording(index);
    }

    return (
        <div className='bg-white py-16'>
            <h1 className='text-center font-bold opacity-75 text-4xl py-10'>Frequently Asked Questions</h1>
            {
                data.map((item, index) => (
                    <div key={index} className="  mx-5 p-3 rounded-md shadow-md py-8 shadow-gray-400  transition-all duration-500" onClick={() => clickCollaps(index)}>
                        <div className='flex items-start justify-between'>
                            <h2 className='font-bold text-xl'>{item.Ques}</h2>
                            <p><i className={`${according === index ? "rotate-0" : "rotate-180"} fa-solid fa-angle-up transition-all duration-200 `}></i></p>
                        </div>
                        <div>
                            <p className={`${according === index ? "block" : "hidden"} text-sm py-3 transition-all duration-300`}>{item.Ans}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Qus
