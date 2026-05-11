import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      if (scroll) scroll.destroy();
    }
  }, []);

  return (
    <main className="bg-black min-h-screen text-[#DEDBC8] selection:bg-[#DEDBC8] selection:text-black">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
