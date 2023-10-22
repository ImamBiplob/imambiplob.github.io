import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SocialBar from "./components/SocialBar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => (
  <div className="bg-black-gradient min-h-screen overflow-hidden">
    <NavBar />
    <SocialBar />
    <Hero />
    <Skills />
    <Education />
    <Experience />
    <Projects />
    <Footer />
  </div>
);

export default App;
