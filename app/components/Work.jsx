// import React from 'react'
// import styles from '../style'
// import { assets, workData } from '@/assets/assets'
// import Image from 'next/image'
// import { motion } from "motion/react"


// const Work = () => {
//     return (
//         <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
//         id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
//             <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}}
//             className='text-center mb-2 text-lg font-ovo'>My latest work</motion.h4>

//             <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} 
//             className={`text-center text-5xl ${styles.ovo}`}>My portfolio</motion.h2>

//             <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}
//             className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${styles.ovo}`}>
//                 Welcome to my web development portfolio, here you find real world projects showcasing my expertise in what i do</motion.p>
//             <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.9}}
//             className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5'>
//                 {workData.map((project, index) => (
//                     <motion.div whileHover={{scale: 1.05}} transition={{duration: 0.3}}
//                     className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
//                     key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
//                         <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5
//                         flex items-center justify-between duration-500 group-hover:bottom-7">
//                             <div>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                             </div>
//                             <div>
//                                 <a className='flex items-center justify-between gap-2 text-sm mt-5' href={project.gitHubUrl} target='_blank'> Github
//                                     <Image src={assets.github_icon} alt='send icon' className='w-5' />
//                                 </a>
//                                 <a className='flex items-center gap-2 text-sm mt-5' href={project.projectUrl} target='_blank'> Visit Site
//                                     <Image src={assets.send_icon} alt='send icon' className='w-5' />
//                                 </a>
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </motion.div>
//     )
// }

// export default Work

import { ArrowUpRight } from "lucide-react";


const projects = [
  {
    id: 1,
    role: "Developer",
    year: "2024",
    title: "Hoobank",
    description:
    "A modern, responsive fintech landing page showcasing secure payment methods and expert guidance.",
    stack: ["React", "JavaScript", "TailwindCSS",],
    link: "https://project01-hoobank.netlify.app/",
  },
  {
    id: 2,
    role: "Developer",
    year: "2024",
    title: "Brainwave",
    description:
    "A sleek AI-powered chat interface designed to boost productivity through fast, intelligent conversations. This project showcases an intuitive UI, smooth interactions, and a modern design inspired by next-generation AI tools..",
    stack: ["React", "TailwindCSS"],
    link: "https://project02-brainwave.netlify.app/",
  },
  {
    id: 3,
    role: "Founder & Developer",
    year: "2026",
    title: "UM UNLOCKER",
    description:
    "A modern online store offering fast and secure phone-unlocking services. The site features a simple, user-friendly interface that guides customers through selecting their device and unlock method",
    stack: ["Next.js", "TailwindCSS"],
    link: "https://um-unlocker.vercel.app/",
  },
//   {
//     id: 4,
//     role: "Product Designer",
//     year: "2023",
//     title: "Echo Workspace",
//     description:
//       "Real-time collaboration tool designed for remote engineering teams. Includes integrated whiteboard, code pair programming, and async voice messaging.",
//     stack: ["Vue.js", "Firebase", "WebRTC", "Tailwind"],
//     link: "#",
//   },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-[hsl(224,71%,4%)]">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none bg-[radial-gradient(circle_at_center_bottom,rgba(41,89,223,0.3),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2959DF] to-[#a3bbfb]">
            Selected Projects
          </h2>
          <p className="text-[#B5B5B5] text-lg font-medium tracking-wide">
            A collection of projects I’ve designed and developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-[2rem] p-8 border border-[rgba(41,89,223,0.25)] bg-[rgba(255,255,255,0.05)] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 backdrop-blur-md"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] border border-transparent transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:border-[rgba(41,89,223,0.6)] group-hover:shadow-[0_0_30px_rgba(41,89,223,0.35)] pointer-events-none" />

              {/* Card Content Container */}
              <div className="relative z-10 flex flex-col h-full transition-transform duration-300 group-hover:-translate-y-1.5">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[#2959DF] font-semibold tracking-wide text-sm uppercase">
                    {project.role}
                  </span>
                  <span className="text-[#B5B5B5] text-sm font-mono bg-[rgba(255,255,255,0.05)] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)]">
                    {project.year}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-3xl font-bold text-[#EDEDED] mb-4">
                  {project.title}
                </h3>
                <p className="text-[#B5B5B5] leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Footer: Tech Stack & Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-[#EDEDED] font-medium px-2.5 py-1 rounded-md bg-[rgba(41,89,223,0.1)] border border-[rgba(41,89,223,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#2959DF] text-[#2959DF] transition-all duration-300 hover:bg-[#2959DF] hover:text-white hover:scale-105"
                  >
                    <span className="font-semibold text-sm">View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
