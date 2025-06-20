import { useState } from "react";
import "./projects.css";
import { motion } from "framer-motion";

import { v4 as uuidv4 } from 'uuid';


const Projects = () => {
  const mylinkedin = "https://www.linkedin.com/in/paula-mamdoh-15382125a";
  const filters = [
    "All Projects",
    "Prime",
    // "HTML & CSS",
    // "HTML & CSS & JS",
    // "HTML & CSS & BOOTSTRAP",
    // "REACT & BOOTSTRAP",
  ];

  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [myProjects, setMyProjects] = useState([
    {
      id: uuidv4(),
      imgSRC: "/images/movies-project.png",
      title: "Movies-Project",
      description:
        "A modern movie discovery platform built with React and Bootstrap. Features include browsing popular movies, searching for specific titles, and creating a personalized favorites list. The app uses the TMDB API to fetch movie data and provides a smooth, responsive user experience.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/movies_TMDB",
      goProject: "https://movies-tmdb-zeta.vercel.app/",
      technologies: ["REACT", "BOOTSTRAP"],
      isPrime: false,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/count-down-landing.png",
      title: "Countdown Landing Page",
      description:
        "An elegant landing page featuring a dynamic countdown timer. Built with HTML, CSS, and JavaScript, this project showcases clean design principles and smooth animations. The page is fully responsive and works across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/count-down-landing",
      goProject: "https://count-down-landing.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP", "JS"],
      isPrime: false,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/lookscout.png",
      title: "Lookscout",
      description:
        "A modern landing page design built with HTML, CSS, and Bootstrap. Features a clean, professional layout with smooth animations and responsive design. Perfect for showcasing products or services with a focus on user experience.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/Lookscout",
      goProject: "https://lookscout-opal.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP"],
      isPrime: true,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/e-commerce.png",
      title: "E-commerce",
      description:
        "A responsive e-commerce website featuring product listings, shopping cart functionality, and a clean user interface. Built with HTML, CSS, JavaScript, and Bootstrap, this project demonstrates modern e-commerce design patterns and user interactions.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/e-commerce",
      goProject: "https://e-commerce-ashy-nu.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP", "JS"],
      isPrime: true,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/toDoList.png",
      title: "To Do List",
      description:
        "A modern task management application built with React and Bootstrap. Features include adding, editing, and deleting tasks, with a clean and intuitive user interface. The app demonstrates state management and CRUD operations in a React application.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/To-Do-List-MUI",
      goProject: "https://to-do-list-mui-ten.vercel.app/",
      technologies: ["REACT", "BOOTSTRAP"],
      isPrime: true,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/template-three.png",
      title: "Landing Page",
      description:
        "A minimalist landing page built with pure HTML and CSS. Features a clean design with smooth transitions and responsive layout. This project showcases fundamental web development skills and attention to detail in design.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/template-three",
      goProject: "https://template-three-nine.vercel.app/",
      technologies: ["HTML", "CSS"],
      isPrime: false,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/template-two.png",
      title: "Landing Page",
      description:
        "A modern landing page template built with HTML and CSS. Features a responsive design with clean typography and layout. This project demonstrates strong fundamentals in web design and development.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/template-two",
      goProject: "https://template-two-ten.vercel.app/",
      technologies: ["HTML", "CSS"],
      isPrime: true,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/template-one.png",
      title: "Landing Page",
      description:
        "A responsive landing page template built with HTML and CSS. Features a modern design with smooth animations and a focus on user experience. This project showcases clean code practices and responsive design principles.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/template-one",
      goProject: "https://template-one-kappa-nine.vercel.app/",
      technologies: ["HTML", "CSS"],
      isPrime: false,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/phone-app.png",
      title: "Phone app",
      description:
        "A mobile-first web application built with HTML, CSS, and Bootstrap. Features a modern interface designed specifically for mobile devices, with responsive elements and smooth interactions. Perfect for showcasing mobile app concepts.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/phone-app",
      goProject: "https://phone-app-ten.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP"],
      isPrime: false,
    },
    {
      id: uuidv4(),
      imgSRC: "/images/company.png",
      title: "Company",
      description:
        "A professional company website built with HTML, CSS, and Bootstrap. Features a modern design with sections for company information, services, and contact details. The project demonstrates professional web development practices and responsive design.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/company",
      goProject: "https://company-kappa-nine.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP"],
      isPrime: false,
    },
  ]);
  const [filteredProjects, setFilteredProjects] = useState(myProjects);

  const filterProjectsHandler = (filter) => {
    setActiveFilter(filter);
    if (filter === "All Projects") {
      setFilteredProjects(myProjects);
    } else {
      // const filterKeywords = filter.split(" & ");

      // const filtered = myProjects.filter((project) =>
      //   filterKeywords.every((tech) => project.technologies.includes(tech))
      //);
      const filtered = myProjects.filter((el) => el.isPrime);

      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="content">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sidebar"
          >
            <ul>
              {filters.map((filter) => (
                <li key={filter}>
                  <button
                    className={`${activeFilter === filter ? "active" : ""}`}
                    onClick={() => filterProjectsHandler(filter)}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="projects"
          >
            <div className="cards row">
              {filteredProjects.map(
                ({
                  imgSRC,
                  title,
                  description,
                  id,
                  linkedin,
                  github,
                  goProject,
                  isPrime,
                }) => (
                  <div
                    className={`card col-lg-4 col-md-6 col-sm-12 ${
                      isPrime ? "prime" : null
                    }`}
                    key={id}
                  >
                    <div
                      className="card-link-wrapper"
                      onClick={() => window.open(goProject, "_blank")}
                    >
                      <div className="card-img">
                        <img src={imgSRC} alt={title} loading="lazy" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                          {description.split(" ").slice(0, 20).join(" ")}...
                        </p>
                        <div className="links">
                          <div className="icons">
                            <a
                              href={linkedin}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a
                              href={github}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="fa-brands fa-github"></i>
                            </a>
                          </div>
                          <a
                            href={goProject}
                            className="card-link flex-center"
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Show Project
                            <i className="fa-solid fa-right-long"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
