"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-[10%] py-20 bg-gradient-to-b from-black to-gray-950 text-white"
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h4 className="text-purple-400 tracking-widest text-sm">INTRODUCTION</h4>
        <h2 className="text-5xl font-bold mt-2">About Me</h2>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <p className="text-lg leading-relaxed text-gray-300 max-w-2xl">
            I am an experienced Frontend Developer with over 3 years of
            professional expertise. Throughout my career, I’ve collaborated
            with prestigious organizations—building fast, modern, and scalable
            web applications that deliver real value and growth.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-xl">
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:-translate-y-1 transition-all duration-300 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <p className="text-gray-300 mt-2">Self-taught</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:-translate-y-1 transition-all duration-300 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">Projects</h3>
              <p className="text-gray-300 mt-2">Built more than 20 projects</p>
            </div>

          </div>
        </motion.div>

        {/* STACK SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">

            {/* HTML */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center hover:bg-white/10 transition-all">
              <svg width="40" viewBox="0 0 128 128">
                <path fill="#E44D26" d="M19 3l9 104 36 10 36-10 9-104z"/>
                <path fill="#F16529" d="M64 116.1l29.2-8.1 7.7-86.5H64z"/>
                <path fill="#EBEBEB" d="M64 66.6H45.3l-1.4-15.8H64V35.2H29.8l.4 5.1 3.7 41.6H64z"/>
                <path fill="#FFF" d="M64 66.6v15.7h17.3l-1.6 18.1L64 116V97.3H47l-.3-3.7-.7-7.8z"/>
              </svg>
              <span className="text-sm mt-2">HTML</span>
            </div>

            {/* CSS */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center hover:bg-white/10 transition-all">
              <svg width="40" viewBox="0 0 128 128">
                <path fill="#1572B6" d="M19 3l9 104 36 10 36-10 9-104z"/>
                <path fill="#33A9DC" d="M64 116.1l29.2-8.1 7.7-86.5H64z"/>
              </svg>
              <span className="text-sm mt-2">CSS</span>
            </div>

            {/* JS */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center hover:bg-white/10 transition-all">
              <svg width="40" viewBox="0 0 128 128">
                <path fill="#F7DF1E" d="M1.5 1.5h125v125h-125z"/>
              </svg>
              <span className="text-sm mt-2">JavaScript</span>
            </div>

            {/* TAILWIND */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center hover:bg-white/10 transition-all">
              <svg width="40" viewBox="0 0 128 128">
                <path fill="#38BDF8" d="M64 24c-16 0-26.7 8-32 24 6.7-8 14.7-11.3 24-10 4 .7 7 3.3 10 6.7 6.7 7.3 14.7 11.3 24 10 16-2 26.7-10 32-24-6.7 8-14.7 11.3-24 10-4-.7-7-3.3-10-6.7C81.3 26.7 73.3 23.3 64 24z"/>
              </svg>
              <span className="text-sm mt-2">Tailwind</span>
            </div>

            {/* REACT */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center hover:bg-white/10 transition-all">
              <svg width="40" viewBox="0 0 128 128">
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11"/>
                  <path d="M64 25c20 0 38 5 38 11s-18 11-38 11-38-5-38-11 18-11 38-11z"/>
                </g>
              </svg>
              <span className="text-sm mt-2">React</span>
            </div>

            {/* NEXT.JS */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center hover:bg-white/10 transition-all">
              <svg width="40" viewBox="0 0 128 128">
                <path fill="white" d="M64 20a44 44 0 1044 44A44 44 0 0064 20zm8 62L56 54v28h-4V44h4l16 24V44h4z"/>
              </svg>
              <span className="text-sm mt-2">Next.js</span>
            </div>

            {/* TYPESCRIPT */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center hover:bg-white/10 transition-all">
              <svg width="40" viewBox="0 0 128 128">
                <rect width="128" height="128" rx="10" fill="#3178C6"/>
              </svg>
              <span className="text-sm mt-2">TypeScript</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
