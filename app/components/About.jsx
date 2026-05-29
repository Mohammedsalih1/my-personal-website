// import Image from "next/image";
// // // bg-[#0b1220]
// // // bg-gradient-to-br from-[#0b0f14] via-[#0e131a] to-black || 
// // export default function AboutSection() {
// //   return (
// //     <section
// //       className="
// //         relative min-h-screen overflow-hidden
// //         text-white
// //       "
// //     >

// //       <div className="relative mx-auto max-w-6xl px-6 md:px-20 py-32">
// //         {/* ABOUT ME TEXT */}
// //         <div className="text-center space-y-10">
// //           <p className="text-sm tracking-widest text-gray-400">
// //             ABOUT ME
// //           </p>

// //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">

// //             I&apos;m a front-end developer <br /> 
// //             with a strong focus on <br />
// //             developing bug-free <br />
// //             smooth user experiences.
// //           </h1>
// //         </div>

// //         {/* SKILLS */}
// //         <div className="mt-24 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-12">
// //           <div className="space-y-6">
// //             <p className="text-sm leading-relaxed text-neutral-400">
// //               Here is a little bit about <br />
// //               languages and technologies, <br />
// //               that I am currently using.
// //             </p>
// //           </div>
// //           <Skill label="Nailing" name="Javascript" />
// //           <Skill label="Using" name="Typescript" />
// //           <Skill label="Crushing" name="React.js" />
// //           <Skill label="Slaying" name="Next.js" />
// //           {/* <Skill label="Loving" name="Vue.js" /> */}
// //           <Skill label="Mastering" name="Tailwind" />
// //           {/* <Skill label="Killing" name="GraphQL" /> */}

// //           {/* GitHub Button */}
// //           <div className="flex items-center">
// //             <a
// //               href="https://github.com/yourusername"
// //               target="_blank"
// //               className=" text-sm
// //                 inline-block rounded-full px-5 py-3 font-medium text-black
// //                 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400
// //                 transition-transform hover:-translate-y-1
// //               "
// //             >
// //               Check out my GitHub
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function Skill({
// //   label,
// //   name,
// // }
// // ) {
// //   return (
// //     <div className="space-y-1">
// //       <p className="text-sm text-gray-400">{label}</p>
// //       <h3 className="text-3xl font-semibold">{name}</h3>
// //     </div>
// //   );
// // }

// import { motion } from "framer-motion";

// const skills = [
//   {
//     name: "JavaScript",
//     label: "Expertise",
//     description: "ES6+, Async/Await, DOM Manipulation",
//     color: "text-yellow-400",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
//       // <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
//       //   <path d="M3 3h18v18H3z" />
//       // </svg>
//     )
//   },
//   {
//     name: "TypeScript",
//     label: "Proficient",
//     description: "Strict typing, Interfaces, Generics",
//     color: "text-blue-400",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
//       // <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
//       //   <circle cx="12" cy="12" r="10" />
//       // </svg>
//     )
//   },
//   {
//     name: "React.js",
//     label: "Specialist",
//     description: "Hooks, Context, Performance",
//     color: "text-cyan-400",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
//       // <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
//       //   <path d="M12 2l4 8-4 12-4-12z" />
//       // </svg>
//     )
//   },
//   {
//     name: "Next.js",
//     label: "Advanced",
//     description: "SSR, ISR, App Router",
//     color: "text-white",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
//       // <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
//       //   <rect x="4" y="4" width="16" height="16" />
//       // </svg>
//     )
//   },
//   {
//     name: "Tailwind CSS",
//     label: "Mastery",
//     description: "Responsive Design, Animations",
//     color: "text-teal-400",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><circle cx="13.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="18" cy="11" r=".5" fill="currentColor"/><circle cx="7.5" cy="8.5" r=".5" fill="currentColor"/><circle cx="7.5" cy="14.5" r=".5" fill="currentColor"/><path d="M15.6 3a9 9 0 1 0 3.6 12c.5 0 1-.4 1-1v-2.1c0-1.1-.9-1.9-2-1.9h-1.4c-.6 0-1.1-.5-1.1-1.1V5.2c0-1.1-.8-2-1.9-2.1l-.2-.1z"/></svg>
//       // <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
//       //   <path d="M2 12c2-4 6-4 10 0s8 4 10 0" />
//       // </svg>
//     )
//   }
// ];

// export default function AboutSection() {
//   return (
//     // <section className="relative min-h-screen overflow-hidden">

//     //   {/* Background */}
//     //   <div className="absolute inset-0">
//     //     <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
//     //     <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />
//     //   </div>

//     //   <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
//     //     <div className="grid lg:grid-cols-2 gap-16 items-start">

//     //       {/* LEFT */}
//     //       <motion.div
//     //         initial={{ opacity: 0, y: 20 }}
//     //         animate={{ opacity: 1, y: 0 }}
//     //         transition={{ duration: 0.6 }}
//     //         className="space-y-8 sticky top-32"
//     //       >
//     //         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[#F8FAFC] text-xs font-mono uppercase tracking-widest">
//     //           <span className="relative flex h-2 w-2">
//     //             <span className="animate-ping absolute inline-flex h-full w-full rounded-full text-[#F8FAFC] opacity-75"></span>
//     //             <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8FAFC]"></span>
//     //           </span>
//     //           About Me
//     //         </div>

//     //         <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//     //           I'm a front-end <br />
//     //           <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//     //             developer
//     //           </span>
//     //         </h1>

//     //         <p className="text-xl text-muted-foreground max-w-xl">
//     //           Crafting <span className="text-primary">high-performance</span>,
//     //           bug-free interfaces with smooth user experiences.
//     //         </p>

//     //         <a
//     //           href="https://github.com/yourusername"
//     //           target="_blank"
//     //           className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]"
//     //         >
//     //           <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
//     //             <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 .1a10.5 10.5 0 0 1 5.5 0c2.1-.4 3-.1 3-.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.3-5.1 5.6.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
//     //           </svg>
//     //           GitHub
//     //         </a>
//     //       </motion.div>

//     //       {/* RIGHT */}
//     //       <div className="grid md:grid-cols-2 gap-4">
//     //         <div className="md:col-span-2 mb-6 text-muted-foreground font-mono border-l-2 border-primary/40 pl-4">
//     //           // Tech Stack
//     //         </div>

//     //         {skills.map((skill, i) => (
//     //           <motion.div
//     //             key={skill.name}
//     //             initial={{ opacity: 0, y: 20 }}
//     //             animate={{ opacity: 1, y: 0 }}
//     //             transition={{ delay: i * 0.1 }}
//     //             className={`${i === 0 || i === 3 ? "md:col-span-2" : ""}`}
//     //           >
//     //             <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition group">
//     //               <div className="flex justify-between mb-4">
//     //                 <div className={`p-3 rounded-xl bg-white/5 ${skill.color}`}>
//     //                   {skill.icon}
//     //                 </div>
//     //                 <span className="text-xs font-mono text-muted-foreground">
//     //                   {skill.label}
//     //                 </span>
//     //               </div>

//     //               <h3 className="text-xl font-semibold mb-1">
//     //                 {skill.name}
//     //               </h3>
//     //               <p className="text-sm text-muted-foreground">
//     //                 {skill.description}
//     //               </p>
//     //             </div>
//     //           </motion.div>
//     //         ))}
//     //       </div>

//     //     </div>
//     //   </div>
//     // </section>

//   <section className="relative min-h-screen overflow-hidden bg-[hsl(224,71%,4%)]">

//   {/* Background */}
//   <div className="absolute inset-0">
//     <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,71%,4%)] via-transparent to-[hsl(224,71%,4%)]" />
//     <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />
//   </div>

//   <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
//     <div className="grid lg:grid-cols-2 gap-16 items-start">

//       {/* LEFT */}
//       <div
//         className="space-y-8 sticky top-32"
//       >
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
//         className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[hsl(217.2,32.6%,17.5%)] text-[hsl(213,31%,91%)] text-xs font-mono uppercase tracking-widest">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
//           </span>
//           About Me
//         </motion.div>

//         <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
//         className="text-5xl md:text-7xl font-bold leading-tight text-[hsl(213,31%,91%)]">
//           I'm a front-end <br />
//           <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
//             developer
//           </span>
//         </motion.h1>

//         <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
//         className="text-xl text-[hsl(215,20.2%,65.1%)] max-w-xl">
//           Crafting <span className="text-[hsl(213,31%,91%)]">high-performance</span>,
//           bug-free interfaces with smooth user experiences.
//         </motion.p>

//         <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}
//           href="https://github.com/yourusername"
//           target="_blank"
//           className="px-6 py-3 rounded-full font-medium text-black
//           bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300
//           hover:-translate-y-20"
//         >
//           Check out my GitHub
//         </motion.a>
//       </div>

//       {/* RIGHT */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="md:col-span-2 mb-6 text-[hsl(215,20.2%,65.1%)] font-mono border-l-2 border-[hsl(217.2,32.6%,17.5%)] pl-4">
//           // Tech Stack
//         </div>

//         {skills.map((skill, i) => (
//           <motion.div
//             key={skill.name}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className={`${i === 0 || i === 3 ? "md:col-span-2" : ""}`}
//           >
//             <div className="h-full p-6 rounded-2xl bg-white/5 border border-[hsl(217.2,32.6%,17.5%)] backdrop-blur hover:bg-white/10 transition group">
//               <div className="flex justify-between mb-4">
//                 <div className={`p-3 rounded-xl bg-white/5 ${skill.color}`}>
//                   {skill.icon}
//                 </div>
//                 <span className="text-xs font-mono text-[hsl(215,20.2%,65.1%)]">
//                   {skill.label}
//                 </span>
//               </div>

//               <h3 className="text-xl font-semibold mb-1 text-[hsl(213,31%,91%)]">
//                 {skill.name}
//               </h3>
//               <p className="text-sm text-[hsl(215,20.2%,65.1%)]">
//                 {skill.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//     </div>
//   </div>
// </section>

//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Happy Clients" },
];

const skills = [
  { name: "JavaScript", desc: "ES6+, Async/Await, DOM APIs" },
  { name: "TypeScript", desc: "Strict typing, scalable code" },
  { name: "React.js", desc: "Hooks, State, Performance" },
  { name: "Next.js", desc: "App Router, SSR, Optimization" },
  { name: "Tailwind CSS", desc: "Responsive UI systems" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[hsl(224,71%,4%)]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,71%,4%)] via-transparent to-[hsl(224,71%,4%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* label */}
            <span className="text-xs tracking-widest text-gray-400 uppercase">
              About Me
            </span>

            {/* heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-[hsl(213,31%,91%)] leading-tight">
              Frontend Developer building
              <span className="block bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                modern web experiences
              </span>
            </h2>

            {/* description */}
            <p className="text-lg text-[hsl(215,20.2%,65.1%)] leading-relaxed max-w-xl">
              I’m a frontend developer focused on building fast, responsive,
              and user-friendly interfaces. I specialize in React, Next.js,
              and modern UI development, turning ideas into polished digital
              products that deliver great user experiences.
            </p>

            <p className="text-lg text-[hsl(215,20.2%,65.1%)] leading-relaxed max-w-xl">
              I’ve worked with clients on freelance projects and collaborated
              on building web applications that solve real-world problems.
              My goal is to write clean, scalable code while creating
              interfaces that feel smooth and intuitive.
            </p>

            {/* STATS */}
            <div className="flex gap-10 pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://github.com/Mohammedsalih1"
              target="_blank"
              className="
              inline-block mt-6 px-6 py-3 rounded-full font-medium text-black
              bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300
              hover:opacity-90 transition
              "
            >
              View My GitHub
            </a>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            {/* PHOTO / ILLUSTRATION */}
            <div className="
            relative h-[420px] rounded-3xl
            border border-white/10
            bg-gradient-to-br from-white/5 to-white/0
            backdrop-blur
            overflow-hidden
            ">

              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                <Image src="/hero.jpg" width={1024} height={1024} />
              </div>

            </div>

            {/* SKILLS */}
            <div className="grid grid-cols-2 gap-4">

              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                  p-5 rounded-xl
                  border border-white/10
                  bg-white/5
                  hover:bg-white/10
                  transition
                  "
                >
                  <h4 className="text-white font-semibold">
                    {skill.name}
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">
                    {skill.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}