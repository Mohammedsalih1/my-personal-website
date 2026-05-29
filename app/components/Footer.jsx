// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Footer = () => {
//     const Year = new Date();
//     return (
//         <div className='mt-20'>
//             <div className='text-center '>
//                 <Image src={assets.my_logo} alt='logo' className='w-36 mx-auto mb-2' />

//                 <div className='flex items-center gap-2 mx-auto w-max'>
//                     <Image src={assets.mail_icon} alt='logo' className='w-6' />
//                     mohammedsalih2203@gmail.com
//                 </div>
//             </div>
//             <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
//                 <p>&#169; {Year.getFullYear()} Mohammed. All rights reserved.</p>
//                 <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
//                     <li><a href="https://github.com/Mohammedsalih1" target='_blank'>Github</a></li>
//                     <li><a href="https://www.linkedin.com/in/mohammed-salih03" target='_blank'>LinkedIn</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Footer

export default function Footer() {
    return (
      <footer className="bg-[#0F0F1A] border-t border-[rgba(255,255,255,0.05)] py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2959DF] to-[#EDEDED]">
              Mohammed.
            </span>
            <p className="text-[#B5B5B5] text-sm mt-2">
              Crafting digital experiences with precision and passion.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <nav className="flex items-center gap-6 text-[#B5B5B5]">
              <a href="#" className="hover:text-[#2959DF] transition-colors">Home</a>
              <a href="#projects" className="hover:text-[#2959DF] transition-colors">Projects</a>
              <a href="#about" className="hover:text-[#2959DF] transition-colors">About</a>
              <a href="#contact" className="hover:text-[#2959DF] transition-colors">Contact</a>
            </nav>
            <div className="h-4 w-px bg-[rgba(255,255,255,0.1)] hidden md:block"></div>
            
            <p className="text-[rgba(255,255,255,0.3)]">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
