import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image className="rounded-full w-32" src={assets.profile_img} alt='' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl md-3 font-ovo'>Hi! i'm Mohammed Salih <Image className="w-6" src={assets.hand_icon} alt='' /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Frontend Web developer based in Sudan</h1>
            <p className='max-w-2xl mx-auto font-ovo'>I'm a front-end developer with experience in Website, Mobile and Software development, With +3 years of experience, I have honed my skills in frontend dev, creating dynamic and responsive websites.</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image className="w-4" src={assets.right_arrow_white} alt='' /></a>
                <a href="/public/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image className="w-4" src={assets.download_icon} alt='' /></a>
            </div>
        </div>
    )
}

export default Header
