import Image from "next/image";
// import work1 from "../assets/work-1.jpg";
import { projects } from "@/assets/assets";
import { FaReact, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function WorkSection() {
//   const projects = [
//     {
//       title: "Weather Dashboard",
//       description:
//         "A clean and responsive weather dashboard built with Next.js, displaying real‑time data from the OpenWeather API.",
//       image: '/assets/work-1.jpg', // replace with your image
//       tech: ["React", "Next.js", "Tailwind"],
//       features: [
//         "Real‑time API integration",
//         "Fully responsive UI",
//         "Reusable components & clean structure",
//       ],
//       live: "#",
//       github: "#",
//     },
//     {
//       title: "E‑Commerce UI",
//       description:
//         "A modern e‑commerce front‑end with dynamic filtering, product cards, and a premium responsive layout.",
//       image: "/projects/ecommerce.png",
//       tech: ["React", "Tailwind"],
//       features: [
//         "Product filtering & search",
//         "Smooth hover animations",
//         "Optimized UI performance",
//       ],
//       live: "#",
//       github: "#",
//     },
//     {
//       title: "Task Manager App",
//       description:
//         "A task management interface with drag‑and‑drop design, local storage persistence, and clean UI components.",
//       image: "/projects/tasks.png",
//       tech: ["React", "Next.js"],
//       features: [
//         "Local storage saving",
//         "Drag & drop UI",
//         "Custom component architecture",
//       ],
//       live: "#",
//       github: "#",
//     },
//   ];

  const techIcons = {
    "React": <FaReact className="text-xl" />,
    "Next.js": <span className="text-sm font-semibold"></span>,
    // "Tailwind": <FaTailwindCss className="text-xl" />,
  };

  return (
    <section id="work" className="py-20 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">My Work</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          A selection of my best front‑end development projects, focusing on UI,
          responsiveness, clean component architecture, and real‑world use cases.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover aspect-video"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex items-center gap-3 mb-4">
                  {project.tech.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg text-gray-300"
                    >
                      {techIcons[t]}
                      <span className="text-xs">{t}</span>
                    </div>
                  ))}
                </div>

                <ul className="text-gray-400 text-sm space-y-1 mb-5">
                  {project.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                    target="_blank"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                    target="_blank"
                  >
                    <FaGithub /> Code
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
