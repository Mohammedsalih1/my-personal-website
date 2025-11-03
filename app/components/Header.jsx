import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
                <Image className="rounded-full w-32" src={assets.profile_img} alt='' />
            </motion.div>
            <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}
            className='flex items-end gap-2 text-xl md:text-2xl md-3 font-ovo'>Hi! i'm Mohammed Salih <Image className="w-6" src={assets.hand_icon} alt='' /></motion.h3>
            <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}} 
            className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Frontend Web developer based in Sudan</motion.h1>
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}}
            className='max-w-2xl mx-auto font-ovo'>I'm a front-end developer with experience in Website, Mobile and Software development, With +3 years of experience, I have honed my skills in frontend dev, creating dynamic and responsive websites.</motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1}}
                href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image className="w-4" src={assets.right_arrow_white} alt='' /></motion.a>
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}}
                href="/public/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image className="w-4" src={assets.download_icon} alt='' /></motion.a>
            </div>
        </div>
    )
}

export default Header
