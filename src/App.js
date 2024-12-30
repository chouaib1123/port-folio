import React, { useEffect } from "react";
import Header from "./Sections/Hero/Header";
import AboutMe from "./Sections/AboutMe/AboutMe";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";
import Skills from "./Sections/MySkills/Skills";

import Union from "./assets/images/Union (3).png";
import Navbar from "./Components/Navbar/Navbar";
import Electo1 from "./Components/Electros/Electro1";
import Electo2 from "./Components/Electros/Electro2";

import Switch from "./Components/Switch/Switch";
import "./assets/styles/App.css";
import "./assets/styles/Responsive.css";
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const animatedElements = document.querySelectorAll(".hidden");
    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="topic-container">
      <div className="electro">
        <img src={Union} alt="" />
      </div>
      <div className="electro electroo">
        <img src={Union} alt="" />
      </div>
      <div className="main-container bg-primary"></div>
      <div className="inner-container">
        <Navbar />
        <Header />
        <Electo1 />
        <AboutMe />
        <Electo2 />
        <Skills />
        <Electo1 />
        <Projects />
        <Electo2 />
        <Contact />
      </div>
    </div>
  );
}

export default App;
