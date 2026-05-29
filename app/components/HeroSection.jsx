import Button from "../Reuse/Button";
import { motion } from "framer-motion";


// export default function Hero() {
//   return (
//     <section className="w-full py-28 bg-[#020617] text-white px-6 md:px-12">
//       <div className="max-w-5xl mx-auto flex flex-col gap-6">

//         <motion.span initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}
//         className="font-semibold uppercase leading-[0.12em] text-[0.75rem] md:text-[0.9rem] text-slate-400 mb-4">
//           MOHAMMED SALIH · FRONTEND DEVELOPER
//         </motion.span>
//         {/* <span className="text-sm uppercase tracking-widest text-blue-400">
//           MOHAMMED SALIH · FRONTEND DEVELOPER
//         </span> */}

//         {/* <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           Hi, I'm{" "}
//           <span className="text-blue-500">Mohammed Salih</span><br />
//           A Frontend Developer Based in Sudan
//         </h1> */}
//         <motion.h1 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.7, delay: 0.6}}
//         className="font-bold text-[2.4rem] md:text-[clamp(2.8rem, 5vw, 3.8rem)] leading-tight text-[#F8FAFC]">
//           I build <span 
//             className="text-[#22D3EE] 
//               bg-left-bottom
//               bg-no-repeat
//               bg-gradient-to-r from-indigo-500 to-cyan-400
//               bg-[length:0%_4px]
//               animate-underline-load
//             "
//           > modern</span>{" "}
//           {/* <span className="text-blue-500">Mohammed Salih</span><br /> */}
//           web interfaces that help ideas grow into real products
//         </motion.h1>
//         <p className="font-normal text-[0.95rem] md:text-[1.05rem] leading-7 text-slate-300">
//             I turn ideas into modern web experiences using clean code and thoughtful design.
//             Curious by nature, consistent by habit.
//         </p>

//         <div className="flex gap-4 mt-4">
//           <Button label="Let's talk" href="#contact"/>
//           <Button label="My Work" href="#work"/>
//         </div>

//       </div>

      
//     </section>
//   );
// }


// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-grid">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* ================= LEFT: TEXT ================= */}

      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        <motion.span initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}
        className="font-semibold uppercase leading-[0.12em] text-[0.75rem] md:text-[0.9rem] text-slate-400 mb-4 ">
          MOHAMMED SALIH · FRONTEND DEVELOPER
        </motion.span>
        <motion.h1 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.7, delay: 0.6}}
        className="font-bold text-[2.4rem] md:text-[clamp(2.8rem, 5vw, 3.8rem)] leading-tight md:leading-[1.1] text-[#F8FAFC]">
          I build <span 
            className="text-[#22D3EE] 
              bg-left-bottom
              bg-no-repeat
              bg-gradient-to-r from-indigo-500 to-cyan-400
              bg-[length:0%_4px]
              animate-underline-load
            "
          > modern</span>{" "}
          {/* <span className="text-blue-500">Mohammed Salih</span><br /> */}
          web interfaces that help ideas grow into real products
        </motion.h1>
        <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.7, delay: 1}}
        className="font-normal text-[0.95rem] md:text-[1.05rem] leading-7 text-slate-300">
            I turn ideas into modern web experiences using clean code and thoughtful design.
            Curious by nature, consistent by habit.
        </motion.p>

        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.7, delay: 1.2}}
        className="flex gap-4 mt-4">
          <a href="#work" className="px-6 py-3 rounded-full font-medium text-black
          bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300
          hover:opacity-90 transition">
            View Projects
          </a>
          {/* <Button label="View Projects" href="#contact"/> */}
          {/* <Button label="Get in Touch" href="#work"/> */}
        </motion.div>

      </div>


          {/* ================= RIGHT: VISUAL SYSTEM ================= */}
          <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.7, delay: 1.4}}
          className="relative hidden md:block">
            {/* Glow */}
            <div className="absolute inset-0 -z-20 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 z-10">
              <Image
                src="/react.svg"
                alt="React"
                width={40}
                height={40}
                className="absolute left-4 top-8 opacity-25 animate-float-slow"
              />
              <Image
                src="/cb.svg"
                alt="Next.js"
                width={40}
                height={40}
                className="absolute right-6 top-12 opacity-40 animate-float-medium"
              />
              <Image
                src="/code.svg"
                alt="Tailwind CSS"
                width={40}
                height={40}
                className="absolute bottom-10 right-10 opacity-40 animate-float-fast"
              />
            </div>

            {/* Illustration */}
            <div className="relative z-10 flex justify-center">
              <Image
                src="/illustration.svg"
                alt="Developer Illustration"
                width={420}
                height={420}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div class="absolute inset-0 pointer-events-none hero-glow"></div>

    </section>
  );
}

