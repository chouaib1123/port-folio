import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import Java from "../../assets/images/Java.svg";
import CSharp from "../../assets/images/Csharp.svg";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiGithub,
  SiAngular,
  SiPython,
  SiCplusplus,
  SiSpring,
  SiNodedotjs,
  SiDotnet,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiOracle,
  SiJira,
  SiTrello,
} from "react-icons/si";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
  };

  const carouselProps = {
    swipeable: true,
    draggable: true,
    showDots: false,
    responsive: responsive,
    ssr: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    className: "carousel-container",
    containerClass: "carousel-container",
    itemClass: "carousel-item-padding-40-px",
  };

  return (
    <div className="skills" id="section2">
      <div className="Heading-div-title text-color ff-primary fs-secondary-heading fw-bold">
        <span className="glow">SKILLS</span>
      </div>
      <div className="Heading-div-speech text-color ff-primary fs-text fw-regular">
        My academic, professional, and personal experiences have equipped me
        with a diverse skill set, blending technical expertise with
        problem-solving and creativity. I focus on delivering efficient,
        reliable, and scalable solutions, continuously refining my skills to
        meet modern development standards.
      </div>
      <div className="skills-container">
        <Carousel {...carouselProps}>
          <div className="skill-slide">
            <SiJavascript size={60} />
          </div>
          <div className="skill-slide">
            <SiTypescript size={60} />
          </div>
          <div className="skill-slide">
            <SiHtml5 size={60} />
          </div>
          <div className="skill-slide">
            <SiCss3 size={60} />
          </div>
          <div className="skill-slide">
            <SiReact size={60} />
          </div>
          <div className="skill-slide">
            <SiNextdotjs size={60} />
          </div>
          <div className="skill-slide">
            <SiAngular size={60} />
          </div>
        </Carousel>

        <Carousel {...carouselProps} rtl={true}>
          <div className="skill-slide">
            <img src={Java} alt="Java" width={60} />
          </div>
          <div className="skill-slide">
            <img src={CSharp} alt="CSharp" width={60} />
          </div>
          <div className="skill-slide">
            <SiPython size={60} />
          </div>

          <div className="skill-slide">
            <SiCplusplus size={60} />
          </div>

          <div className="skill-slide">
            <SiSpring size={60} />
          </div>
          <div className="skill-slide">
            <SiNodedotjs size={60} />
          </div>
          <div className="skill-slide">
            <SiDotnet size={60} />
          </div>
          <div className="skill-slide">
            <SiFlask size={60} />
          </div>
        </Carousel>
        <Carousel {...carouselProps}>
          <div className="skill-slide">
            <SiMysql size={60} />
          </div>
          <div className="skill-slide">
            <SiMongodb size={60} />
          </div>
          <div className="skill-slide">
            <SiPostgresql size={60} />
          </div>
          <div className="skill-slide">
            <SiOracle size={60} />
          </div>
          <div className="skill-slide">
            <SiGithub size={60} />
          </div>
          <div className="skill-slide">
            <SiJira size={60} />
          </div>
          <div className="skill-slide">
            <SiTrello size={60} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
