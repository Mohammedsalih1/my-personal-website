// import React from 'react'
// import styles from "../style"
// import { assets, serviceData } from '@/assets/assets'
// import Image from 'next/image'
// import { motion } from "motion/react"


// const Services = () => {
//     return (
//         <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id = "#services" className='w-full px-[12%] py-10 scroll-mt-20'>
//             <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}} className='text-center mb-2 text-lg font-ovo'>What i offer</motion.h4>
//             <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}} className={`text-center text-5xl ${styles.ovo}`}>My Services</motion.h2>
//             <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.7, duration: 0.5}} className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${styles.ovo}`}
//             >Quality is the Key, i offer my services with amazing Quality and high performance that level up to my clients needs and requirements</motion.p>
//             <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.9, duration: 0.6}} className={`grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10`}>
//                 {serviceData.map(({icon, title, description, link}, index) => (
//                     <motion.div whileHover={{scale: 1.05}} key={index} className="border border-gray-400 rounded-lg px-12 py-8 
//                     hover:shadow-[4px_4px_0px_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
//                         <Image src={icon} alt='icon' className='w-10'/>
//                         <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
//                         <p className='text-sm text-gray-600 leading-5'>{description}</p>
//                         <a href={link} className='flex items-center gap-2 text-sm mt-5'>
//                             Read more <Image src={assets.right_arrow} alt="outside link" className='w-4' />
//                         </a>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </motion.div>
//     )
// }

// export default Services

import { Code2, LayoutTemplate, PanelsTopLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";


const services = [
  {
    title: "Front-End Development",
    description:
      "Fast, scalable, and maintainable user interfaces built for real-world products.",
    bullets: [
      "Reusable component architecture",
      "Performance-focused development",
      "Scalable codebases",
    ],
    icon: <Code2 className="h-5 w-5" aria-hidden="true" />,
    phrase: "A fast, scalable frontend built to support real users, real traffic, and long-term growth."
  },
  {
    title: "UI Implementation (Design → Code)",
    description:
      "Turning designs into pixel-perfect, responsive, and accessible interfaces.",
    bullets: [
      "Design-to-code workflow",
      "Responsive layouts",
      "Accessibility best practices",
    ],
    icon: <LayoutTemplate className="h-5 w-5" aria-hidden="true" />,
    phrase: "Pixel-accurate, responsive interfaces that stay faithful to the design while performing flawlessly across devices."
  },
  {
    title: "Web App Interfaces",
    description:
      "Clean, intuitive interfaces for dashboards, SaaS products, and internal tools.",
    bullets: [
      "User-focused layouts",
      "Smooth interactions",
      "Clear data presentation",
    ],
    icon: <PanelsTopLeft className="h-5 w-5" aria-hidden="true" />,
    phrase: "Clear, intuitive interfaces that make complex workflows feel simple and easy to use."
  },
  {
    title: "Landing Pages & Portfolios",
    description:
      "High-impact pages that communicate value and drive action.",
    bullets: [
      "Conversion-focused layouts",
      "Mobile-first design",
      "Performance optimization",
    ],
    icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
    phrase: "High-impact pages designed to communicate value clearly and guide users toward action."
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[hsl(224,71%,4%)]"
      aria-labelledby="services-title"
      data-testid="section-services"
    >
      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.7]"
        style={{
          backgroundImage:
            "radial-gradient(1200px 600px at 15% 10%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(900px 500px at 85% 20%, rgba(255,255,255,0.04), transparent 60%), radial-gradient(700px 380px at 50% 90%, rgba(255,255,255,0.03), transparent 60%)",
        }}
        aria-hidden="true"
        data-testid="bg-services-texture"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <header className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-[hsl(217.2,32.6%,17.5%)] bg-[rgba(255,255,255,0.02)] px-3 py-1 text-xs font-medium tracking-wide text-[hsl(215,20.2%,65.1%)]"
            data-testid="label-services"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-[hsl(213,31%,91%)]/70"
              aria-hidden="true"
              data-testid="dot-services"
            />
            Services
          </div>

          <h2
            id="services-title"
            className="mt-5 text-balance text-3xl font-semibold leading-tight text-[hsl(213,31%,91%)] md:text-4xl"
            data-testid="text-services-title"
          >
            What I Can Help You Build
          </h2>

          <p
            className="mt-4 text-pretty text-base leading-relaxed text-[hsl(215,20.2%,65.1%)] md:text-lg"
            data-testid="text-services-description"
          >
            I help startups, creators, and businesses solve real problems through thoughtful frontend development — focusing on performance, usability, and clarity, not just code.
          </p>
        </header>

        <div
          className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6"
          data-testid="grid-services"
        >
          {services.map((service, i) => (
            <motion.article
              key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-[hsl(217.2,32.6%,17.5%)] bg-[rgba(255,255,255,0.03)] p-6 transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.045)]"
              data-testid={`card-service-${service.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px 220px at 20% 0%, rgba(255,255,255,0.10), transparent 55%)",
                }}
                aria-hidden="true"
                data-testid={`bg-card-glow-${service.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              />

              <div className="relative flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[hsl(217.2,32.6%,17.5%)] bg-[rgba(255,255,255,0.02)] text-[hsl(213,31%,91%)] transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.22)]"
                  aria-hidden="true"
                  data-testid={`iconwrap-service-${service.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <span
                    className="transition-transform duration-300 group-hover:scale-[1.03]"
                    data-testid={`icon-service-${service.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {service.icon}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3
                    className="text-base font-semibold leading-snug text-[hsl(213,31%,91%)] md:text-lg"
                    data-testid={`text-service-title-${service.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed text-[hsl(215,20.2%,65.1%)] md:text-[15px]"
                    data-testid={`text-service-desc-${service.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {service.description}
                  </p>

                  <ul
                    className="mt-4 space-y-2"
                    data-testid={`list-service-bullets-${service.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm leading-relaxed text-[hsl(215,20.2%,65.1%)]"
                        data-testid={`item-service-bullet-${service.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}-${bullet
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        <span
                          className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[rgba(255,255,255,0.25)]"
                          aria-hidden="true"
                          data-testid={`dot-service-bullet-${service.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}-${bullet
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                        />
                        <span className="min-w-0">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div 
              className="mt-6 h-px w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.00),rgba(255,255,255,0.14),rgba(255,255,255,0.00))] opacity-60"
                aria-hidden="true"
                data-testid={`divider-service-${service.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              />

              <div
                className="mt-4 flex items-center justify-between"
                data-testid={`row-service-footer-${service.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <p
                  className="text-xs tracking-wide text-[hsl(215,20.2%,65.1%)]"
                  data-testid={`text-service-note-${service.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                    {service.phrase}
                </p>

                {/* <span
                  className="text-xs font-medium text-[hsl(213,31%,91%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  data-testid={`text-service-cta-${service.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  Learn more
                </span> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
