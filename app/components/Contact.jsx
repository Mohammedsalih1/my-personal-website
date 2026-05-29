// import React, { useState } from 'react'
// import styles from '../style'
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "motion/react"

// const Contact = () => {

//     const [result, setResult] = useState("");

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);

//         formData.append("access_key", "959e2c16-2674-47a8-acf8-cde8ac597c7b");

//         const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//         });

//         const data = await response.json();

//         if (data.success) {
//         setResult("Thank you for contacting me. I will get back to you soon.");
//         event.target.reset();
//         } else {
//         console.log("Error", data);
//         setResult(data.message);
//         }
//     };
    

//     return (
//         <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
//         id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
//             <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}} 
//             className='text-center mb-2 text-lg font-ovo'>Connect with me</motion.h4>
//             <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} 
//             className={`text-center text-5xl ${styles.ovo}`}>Get in touch</motion.h2>
//             <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}
//             className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${styles.ovo}`}>
//             I'd love to hear from you! if yo have any questions, comments, or feedback, please use the form below.</motion.p>
//             <motion.form initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.9}}
//             onSubmit={onSubmit} className='max-w-2xl mx-auto'>
//                 <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8'>
//                     <motion.input initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 1.1, duration: 0.6}}
//                     className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
//                     bg-white' type="text" name='name' placeholder='Enter your name' required/>
//                     <motion.input initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 1.2, duration: 0.6}}
//                     className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="email" name='email' placeholder='Enter your email' required/>
//                 </div>
//                     <motion.textarea initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 1.3, duration: 0.6}} 
//                     className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md
//                     bg-white mg-6' rows="6" name='message' placeholder='Enter your message' required></motion.textarea>
//                     <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.3}}
//                     className='cursor-pointer py-3 px-8 w-max flex items-center justify-between gap-2
//                     bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>
//                     Submit now <Image src={assets.right_arrow_white} alt='arrow' className='w-4' /> </motion.button>
//                     <p className='mt'>{result}</p>
//             </motion.form>
//         </motion.div>
//     )
// }

// export default Contact;

import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Facebook } from "lucide-react";
export default function ContactSection() {

   const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "959e2c16-2674-47a8-acf8-cde8ac597c7b");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Thank you for contacting me. I will get back to you soon.");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[radial-gradient(circle_at_center_bottom,rgba(41,89,223,0.3),transparent_60%)] overflow-hidden" id="contact">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2959DF] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#241274] rounded-full blur-[150px] opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED] tracking-tight mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2959DF] to-[#a3bbfb]">Connect</span>
          </h2>
          <p className="text-[#B5B5B5] text-lg max-w-2xl">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or visions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="rounded-[2rem] backdrop-blur-md bg-[rgba(255,255,255,0.05)] border border-[rgba(41,89,223,0.25)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-8 md:p-12 h-full flex flex-col transition-transform duration-500 hover:-translate-y-1.5 hover:border-[rgba(41,89,223,0.6)]">
            <h3 className="text-2xl font-semibold text-[#EDEDED] mb-8">Contact Information</h3>
            
            <div className="space-y-8 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(41,89,223,0.1)] border border-[rgba(41,89,223,0.3)] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#2959DF]" />
                </div>
                <div>
                  <p className="text-[#B5B5B5] text-sm mb-1">Email</p>
                  <a href="mailto:mohammedsalih2203@gmail.com" className="text-[#EDEDED] text-lg hover:text-[#2959DF] transition-colors">mohammedsalih2203@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(41,89,223,0.1)] border border-[rgba(41,89,223,0.3)] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#2959DF]" />
                </div>
                <div>
                  <p className="text-[#B5B5B5] text-sm mb-1">Location</p>
                  <p className="text-[#EDEDED] text-lg">Khartoum, Sudan</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[#B5B5B5] text-sm mb-4">Follow Me</p>
              <div className="flex gap-4">
                {[
                  { icon: Github, url: "https://github.com/Mohammedsalih1", label: "GitHub" },
                  { icon: Linkedin, url: "https://www.linkedin.com/in/mohammed-salih03/", label: "LinkedIn" },
                  // { icon: Twitter, label: "Twitter" }
                  // { icon: Facebook, url:"", label: "Facebook" }
                ].map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" aria-label={social.label} className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(41,89,223,0.2)] hover:border-[rgba(41,89,223,0.5)] transition-all duration-300 group">
                    <social.icon className="w-5 h-5 text-[#B5B5B5] group-hover:text-[#EDEDED] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="rounded-[2rem] backdrop-blur-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-8 md:p-12 transition-transform duration-500 hover:-translate-y-1.5 hover:border-[rgba(255,255,255,0.15)]">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#B5B5B5] text-sm ml-1" htmlFor="name">Name</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="your name"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3.5 text-[#EDEDED] placeholder:text-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#2959DF] focus:bg-[rgba(41,89,223,0.05)] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#B5B5B5] text-sm ml-1" htmlFor="email">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3.5 text-[#EDEDED] placeholder:text-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#2959DF] focus:bg-[rgba(41,89,223,0.05)] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[#B5B5B5] text-sm ml-1" htmlFor="subject">Subject</label>
                <input 
                  id="subject"
                  type="text" 
                  placeholder="your idea"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3.5 text-[#EDEDED] placeholder:text-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#2959DF] focus:bg-[rgba(41,89,223,0.05)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#B5B5B5] text-sm ml-1" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Tell me about your idea..."
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3.5 text-[#EDEDED] placeholder:text-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[#2959DF] focus:bg-[rgba(41,89,223,0.05)] transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                // className="w-full bg-gradient-to-r from-[#2959DF] to-[#1E41A5] hover:from-[#3A6BFF] hover:to-[#2959DF] text-white font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(41,89,223,0.3)] hover:shadow-[0_0_30px_rgba(41,89,223,0.5)] active:scale-[0.98]"
                className="w-full cursor-pointer text-black
                bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 hover:from-[#3A6BFF] hover:to-[#2959DF] font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(41,89,223,0.3)] hover:shadow-[0_0_30px_rgba(41,89,223,0.5)] active:scale-[0.98]"
              >
                <span>Message Me</span>
                <Send className="w-4 h-4" />
              </button>
              <p className='mt text-transparent bg-clip-text bg-gradient-to-r from-[#2959DF] to-[#EDEDED]'>{result}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// client/src/components/Footer.tsx


// client/src/pages/home.tsx (To wire them together)
// import ProjectsSection from "@/components/ProjectsSection";
// import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";
// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#0F0F1A] text-[#EDEDED]">
//       <ProjectsSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );

// }