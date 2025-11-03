import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({IsDarkMode, setIsDarkMode}) => {

    const [isScroll, setScroll] = useState(false);

    const mobileMenuRef = useRef();
    const openMobileMenu = () => {
        // mobileMenuRef.current.style.right = "0";
        mobileMenuRef.current.style.transform = "translateX(-16rem)";
    }
    const closeMobileMenu = () => {
        // mobileMenuRef.current.style.right = "-16rem";
        mobileMenuRef.current.style.transform = "translateX(16rem)";
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setScroll(true)
            } else {
                setScroll(false)

            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%]'>
                <Image src={assets.header_bg_color} alt='header background' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    <Image src={assets.my_logo} className='w-28 cursor-pointer mr-14' alt='my name logo'/>
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm btg-opacity-50" }`}>
                    <li><a className='ovo' href="#top">Home</a></li>
                    <li><a className='ovo' href="#about">About me</a></li>
                    <li><a className='ovo' href="#services">Services</a></li>
                    <li><a className='ovo' href="#work">My work</a></li>
                    <li><a className='ovo' href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    {/* <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={IsDarkMode ? assets.sun_icon : assets.moon_icon } className='w-6 cursor-pointer' alt=''/>
                    </button> */}
                    <a className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-2.5 ovo' href="#contact">Contact <Image src={assets.arrow_icon} className='w-3' alt='arrow'/></a>
                    
                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMobileMenu}>
                        <Image src={assets.menu_black} className='w-6' alt=''/>
                    </button>
                </div>
                {/* mobite menu  */}
                <ul ref={mobileMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6 ' onClick={closeMobileMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='ovo' onClick={closeMobileMenu} href="#top">Home</a></li>
                    <li><a className='ovo' onClick={closeMobileMenu} href="#about">About me</a></li>
                    <li><a className='ovo' onClick={closeMobileMenu} href="#services">Services</a></li>
                    <li><a className='ovo' onClick={closeMobileMenu} href="#work">My work</a></li>
                    <li><a className='ovo' onClick={closeMobileMenu} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
