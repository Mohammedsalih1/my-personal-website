"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Btn2 from "../Reuse/Btn2";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-neutral-950/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="#home"
          className="text-white font-semibold text-lg tracking-tight"
        >
          Mohamed
          <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            .dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <Link
                href={link.href}
                className="group text-sm font-medium text-neutral-300 hover:text-white transition"
              >
                {link.name}

                {/* underline animation */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <div className="hidden md:block">
            <a
                href="#contact"
                className="px-6 py-3 rounded-full font-medium text-black
                bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300
                hover:-translate-y-20"
              >
                Get in Touch
            </a>
            {/* <Btn2 /> */}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-6 mb-6 rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl"
          >
            <ul className="flex flex-col divide-y divide-white/10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-neutral-200 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li className="p-4">
              <a
                  href="#contact"
                  className="px-6 py-3 rounded-full font-medium text-black
                  bg-gradient-to-r from-orange-300 via-pink-300 to-blue-300
                  hover:-translate-y-20"
                >
                  Get in Touch
              </a>
                {/* <Btn2 /> */}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}