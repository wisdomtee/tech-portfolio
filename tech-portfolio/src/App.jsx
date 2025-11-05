import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
