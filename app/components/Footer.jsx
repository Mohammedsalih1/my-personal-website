import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const Year = new Date();
    return (
        <div className='mt-20'>
            <div className='text-center '>
                <Image src={assets.my_logo} alt='logo' className='w-36 mx-auto mb-2' />

                <div className='flex items-center gap-2 mx-auto w-max'>
                    <Image src={assets.mail_icon} alt='logo' className='w-6' />
                    mohammedsalih2203@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>&#169; {Year.getFullYear()} Mohammed. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a href="https://github.com/Mohammedsalih1" target='_blank'>Github</a></li>
                    <li><a href="https://www.linkedin.com/in/mohammed-salih03" target='_blank'>LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
