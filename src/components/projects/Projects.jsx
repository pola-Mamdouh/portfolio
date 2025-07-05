import { useState } from "react";
import "./projects.css";
import { motion } from "framer-motion";

import { v4 as uuidv4 } from 'uuid';

import { projects } from "./ProjectsData";
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
  const [myProjects, setMyProjects] = useState(projects);
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
                        <img 
                          src={imgSRC} 
                          alt={`Screenshot of ${title} project`} 
                          loading="lazy" 
                          width="350" 
                          height="200" 
                        />
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
                              rel="noopener noreferrer"
                              aria-label={`View ${title} creator's LinkedIn profile`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                            </a>
                            <a
                              href={github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${title} source code on GitHub`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="fa-brands fa-github" aria-hidden="true"></i>
                            </a>
                          </div>
                          <a
                            href={goProject}
                            className="card-link flex-center"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo for ${title}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Show Project
                            <i className="fa-solid fa-right-long" aria-hidden="true"></i>
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
