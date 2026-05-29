'use client';

import HeroSection from "./components/HeroSection"
import Mywork from "./components/Mywork";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import A from "./components/A";


export default function Home() {

  return (
    <>
      <Navbar  />
      <HeroSection />
      <About />
      {/* <Header /> */}
      {/* <A /> */}
      {/* <Mywork /> */}
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
