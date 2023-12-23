import React, { useEffect, useState } from 'react'
import logo from '../image/logo.png'
import drop from '../image/icons8-dropdown-30.png'
import nav1 from '../image/navimg1.png'
import nav2 from '../image/navimg2.png'
import nav3 from '../image/navimg3.png'

import Button from '../Button/Button'
const Navbar = () => {
    const text = {
        navText: "Download Now",
        color: "#4448c6",
        shadow: "rgba(118, 53, 220, 0.24)",
        hoverColor: "#431A9E",
        padding : "3rem"
    }

    const [scroll, setScroll] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, [])
    const [click, setclick] = useState(false)
    const [close, setclose] = useState(false)


    useEffect(() => {
        const handleClickOutside = () => {
            if (close) {
                setclick(true)
            }
            else {
                setclick(false)
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [close])

    const show = () => {
        setclose(!close)
    }
    const [dropDown, setdropDown] = useState(false)

    const dropevent = (e) => {
        const element = e.target.id

        switch (element) {
            case 'ele1':
                setdropDown(!dropDown)
                break;

            case 'ele2':
                setdropDown(!dropDown)
                break;

            default:
                break;
        }

    };

    return (
        <>
            <nav className={`w-full ${scroll ? "scroolnavcolor" : "bg-white"} flex items-center justify-between k:px-1  lg:px-10  fixed top-0 z-30`}>
                <div className="img-box k:w-[40vw] sm:w-[30vw] md:w-56">
                    <img className='object-cover w-full k:pt-1' src={logo} alt="" />
                </div>
                {/* this is menu button */}
                <div className='flex items-center justify-center  md:hidden'>
                    <Button padding={text.padding} navText={text.navText} color={text.color} shadow={text.shadow} hoverColor={text.hoverColor} />
                    <button onClick={show} type="button" className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger"  >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>

                    </button>

                </div>

                {/* this item section */}
                <ul className="hidden md:flex items-center justify-around px-6 navtext ">
                    <li className='px-5 text-[#7635DC] hover:opacity-60 cursor-pointer'><i className="fa-solid fa-circle text-[6px] align-middle "></i> Home</li>

                    <div className='px-5 flex items-center hover:opacity-50 cursor-pointer relative' >
                        <span onMouseEnter={dropevent} id='ele1'> App Features </span>
                        <img className='w-[14px]' src={drop} alt="" />
                    </div>
                    <li className='px-8'>About Us</li>
                    <li>
                        <Button navText={text.navText} color={"#4448c6"} shadow={text.shadow} hoverColor={text.hoverColor} />
                    </li>
                </ul>

            </nav>

            {/* this drop down in desktop  */}
            {dropDown &&
                <div className='py-14 hidden md:block w-full absolute  px-20'>
                    <ul className='flex items-center justify-center pt-7  w-full dropdownColor mx-auto max-w-screen-xl rounded-xl'>
                        <li className='w-80 m-5 mb-1'>
                            <p className='px-5'>ABHA</p>
                            <img className='w-full' src={nav1} alt="" />
                        </li>
                        <li className='w-80 m-5 mb-1'>
                            <p className='px-5'>HEALTH LOCKER</p>
                            <img className='w-full' src={nav2} alt="" />
                        </li>
                        <li className='w-80 m-5 mb-1'>
                            <p className='px-5'>SMART HEALTH</p>
                            <img className='w-full' src={nav3} alt="" />
                        </li>

                    </ul>
                </div>
            }

            {/*  mobile section*/}
            {click ?
                <div className='md:hidden h-[1000px] sm:w-[50%] k:w-[60%] absolute sidenav   '>
                    <div>
                        <div className='flex items-center justify-center gap-7'>
                            <div className="  ">
                                <img className='object-cover w-[2.5wv] ' src={logo} alt="" />
                            </div>
                            <div className='px-3 pb-5'>
                                <i onClick={show} className="fa-solid fa-xmark text-2xl"></i>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <ul className=" flex flex-col items-center justify-center gap-5 py-10">
                        <li className='px-5 text-[#7635DC] hover:opacity-60 cursor-pointer'><i className="fa-solid fa-circle text-[6px] align-middl"></i>
                            Home</li>
                        <li id='ele2' onClick={dropevent} className='px-5 flex items-center gap-2' data-value="2">
                            <span> App Features </span>
                            <img className='w-[14px]' src={drop} alt="" />

                        </li>

                        {dropDown &&
                            <div className='block md:hidden'>
                                <ul className='flex items-center flex-col justify-center  w-full '>
                                    <li className='w-40'>
                                        <p className='px-5'>ABHA</p>
                                        <img className='w-full' src={nav1} alt="" />
                                    </li>
                                    <li className='w-40'>
                                        <p className='px-5'>HEALTH LOCKER</p>
                                        <img className='w-full' src={nav1} alt="" />
                                    </li>
                                    <li className='w-40'>
                                        <p className='px-5'>SMART HEALTH</p>
                                        <img className='w-full' src={nav1} alt="" />
                                    </li>

                                </ul>
                            </div>

                        }
                        <li className='px-8'>About Us</li>
                        <li>
                            <Button navText={text.navText} color={text.color} shadow={text.shadow} hoverColor={text.hoverColor} />
                        </li>
                    </ul>
                </div>
                : null}

        </>
    )
}

export default Navbar
