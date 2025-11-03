import React from 'react'
import styles from "../style"
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"


const Services = () => {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id = "#services" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}} className='text-center mb-2 text-lg font-ovo'>What i offer</motion.h4>
            <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}} className={`text-center text-5xl ${styles.ovo}`}>My Services</motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.7, duration: 0.5}} className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${styles.ovo}`}
            >Quality is the Key, i offer my services with amazing Quality and high performance that level up to my clients needs and requirements</motion.p>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.9, duration: 0.6}} className={`grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10`}>
                {serviceData.map(({icon, title, description, link}, index) => (
                    <motion.div whileHover={{scale: 1.05}} key={index} className="border border-gray-400 rounded-lg px-12 py-8 
                    hover:shadow-[4px_4px_0px_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
                        <Image src={icon} alt='icon' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image src={assets.right_arrow} alt="outside link" className='w-4' />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
