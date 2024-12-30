import React, { useState, useEffect } from "react";
import ricardoImg from "../../assets/images/ricarddo.png";
import mansionsImg from "../../assets/images/project 2 1.png";
import gamingImg from "../../assets/images/z.png";
import pigeonImg from "../../assets/images/project 3 1.png";
import detective from "../../assets/images/Detective.jpg";
import Space from "../../assets/images/space.JPG";
import Expense from "../../assets/images/Expense.png";
import weater from "../../assets/images/weather.jpg";
import rentcar from "../../assets/images/rentcar.jpg";
import mistral from "../../assets/images/mistral.jpg";
import TayssirArt from "../../assets/images/TayssirArt.jpg";
import Shosify from "../../assets/images/Shosify.jpg";
import elearning from "../../assets/images/e-learning.jpg";
import fgaffiliate from "../../assets/images/fgaffiliate.jpg";
import dialoguemapper from "../../assets/images/dialoguemapper.jpg";
import presence from "../../assets/images/presence.jpg";
import slideswipe from "../../assets/images/slideswipe.jpg";
import webscrap from "../../assets/images/webscrap.jpg";
import "./Projects.css";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("webDev");
  const [currentPage, setCurrentPage] = useState(1);

  // Projects per page for different screen sizes
  const getProjectsPerPage = () => {
    if (window.innerWidth >= 1280) return 6;
    if (window.innerWidth >= 768) return 4;
    return 2;
  };

  const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage());

  // Update projects per page on window resize
  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(getProjectsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get current projects
  const getCurrentProjects = () => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return projects[activeCategory].slice(
      indexOfFirstProject,
      indexOfLastProject
    );
  };

  // Navigation handlers
  const nextPage = () => {
    if (
      currentPage < Math.ceil(projects[activeCategory].length / projectsPerPage)
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const categories = [
    { id: "webDev", label: "Web Development" },
    { id: "mobileApp", label: "Mobile Development" },
    { id: "games", label: "Game Development" },
    { id: "ai", label: "AI Projects" },
  ];

  const projects = {
    webDev: [
      {
        id: 1,
        techStack: ["SpringBoot", "Java", "React", "MongoDB", "CSS"],
        link: "https://github.com/chouaib1123/Desktop",
        img: TayssirArt,
        style: "cover",
      },
      {
        id: 2,
        techStack: ["NextJs", "Mongodb", "CSS"],
        link: "https://github.com/chouaib1123/Gaming",
        img: Shosify,
        style: "cover",
      },
      {
        id: 3,
        techStack: ["Laravel", "PHP", "Bootstrap", "CSS", "MySql"],
        link: "https://github.com/chouaib1123/projectpfe",
        img: elearning,
        style: "cover",
      },
      {
        id: 4,
        techStack: ["React", "Css", "GoogleExcel", "Api Integration"],
        link: "https://github.com/chouaib1123/FGAffiliate",
        img: fgaffiliate,
        style: "cover",
      },
      {
        id: 5,
        techStack: ["Angular", "CSS", "C#", "ASP.NET CORE"],
        link: "https://github.com/chouaib1123/ExpenseTracker",
        img: Expense,
        style: "cover",
      },
      {
        id: 6,
        techStack: ["NextJs", "MistralModelApi", "Api Integration"],
        link: "https://github.com/chouaib1123/MistralTestChatBot",
        img: mistral,
        style: "contain",
      },
      {
        id: 7,
        techStack: ["React", "CSS"],
        link: "https://github.com/chouaib1123/ricardo",
        img: ricardoImg,
        style: "cover",
      },
      {
        id: 8,
        techStack: ["Html", "CSS", "JavaScript"],
        link: "https://github.com/chouaib1123/Gaming",
        img: gamingImg,
        style: "cover",
      },

      {
        id: 9,
        techStack: ["Html", "CSS", "JavaScript"],
        link: "https://github.com/chouaib1123/Mansions",
        img: mansionsImg,
        style: "cover",
      },
      {
        id: 10,
        techStack: ["Html", "CSS", "JavaScript"],
        link: "https://github.com/chouaib1123/Pigeon",
        img: pigeonImg,
        style: "cover",
      },
      {
        id: 11,
        techStack: ["React", "CSS"],
        link: "https://github.com/chouaib1123/Dialoguemaper",
        img: dialoguemapper,
        style: "cover",
      },

      // Add more projects
    ],
    mobileApp: [
      {
        id: 1,
        techStack: ["Java", "AndroidStudio", "API Integration", "Firebase"],
        link: "https://github.com/chouaib1123/WeatherApp-Android-master",
        img: weater,
        style: "contain",
      },
      {
        id: 2,
        techStack: ["Java", "AndroidStudio", "Firebase"],
        link: "https://github.com/chouaib1123/Androindapplication",
        img: rentcar,
        style: "contain",
      },
    ],
    games: [
      {
        id: 1,
        techStack: ["Unity", "C#", "2D Graphics / 3D Graphics"],
        link: "https://vexeo.itch.io/detective-ghoul",
        img: detective,
        style: "cover",
      },
      {
        id: 2,
        techStack: ["Unity", "C#", "2D Graphics "],
        link: "https://vexeo.itch.io/detective-ghoul",
        img: Space,
        style: "cover",
      },
    ],
    ai: [
      {
        id: 1,
        techStack: ["React", "MistralModelApi", "Api Integration"],
        link: "https://github.com/chouaib1123/MistralTestChatBot",
        img: mistral,
        style: "contain",
      },
      {
        id: 2,
        techStack: [
          "Flask",
          "React",
          "Api Integration",
          "Face Recognition",
          "Python",
        ],
        link: "https://github.com/chouaib1123/ComputerVision",
        img: presence,
        style: "cover",
      },
      {
        id: 3,
        techStack: ["Mediapipe", "Python", "PyAutoGUI"],
        link: "https://github.com/chouaib1123/SlideSwipe",
        img: slideswipe,
        style: "contain",
      },
      {
        id: 4,
        techStack: ["Python", "Spark", "Hadoop", "Docker", "Google Cloud"],
        link: "https://github.com/yuguerten/Big_data_project",
        img: webscrap,
        style: "contain",
      },
    ],
  };

  return (
    <div className="projects-section Section " id="section3">
      <div className="Heading-div-title text-color ff-primary fs-secondary-heading fw-bold">
        <span className="glow">Projects</span>
      </div>

      <div className="category-tabs" data-active={activeCategory}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {getCurrentProjects().map((project) => (
          <div className="project-card" key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="project-info">
                <img
                  src={project.img}
                  alt="Project"
                  className={`project-image ${project.style}`}
                />
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="show-more">Show more details</div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {projects[activeCategory].length > projectsPerPage && (
        <div className="pagination-controls">
          <button
            onClick={prevPage}
            className={`nav-btn ${currentPage === 1 ? "hidden" : ""}`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className={`nav-btn ${
              currentPage >=
              Math.ceil(projects[activeCategory].length / projectsPerPage)
                ? "hidden"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
