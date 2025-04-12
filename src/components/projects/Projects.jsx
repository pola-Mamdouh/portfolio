import { useState } from "react";
import "./projects.css";

const Projects = () => {
  const mylinkedin = "https://www.linkedin.com/in/paula-mamdoh-15382125a";
  const filters = [
    "All Projects",
    "HTML & CSS",
    "HTML & CSS & JS",
    "HTML & CSS & BOOTSTRAP",
    "REACT & BOOTSTRAP",
  ];

  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [myProjects, setMyProjects] = useState([
    {
      id: 1,
      imgSRC: "/images/movies-project.png",
      title: "Movies-Project",
      description:
        "Movies-Project is a responsive web application that displays a collection of movies fetched from the IDBM API. Users can browse through movie cards with details such as titles, descriptions, and images. Additionally, they can add their favorite movies to a personalized favorites list for easy access. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/movies_TMDB",
      goProject: "https://movies-tmdb-zeta.vercel.app/",
      technologies: ["REACT", "BOOTSTRAP"],
    },
    {
      id: 2,
      imgSRC: "/images/count-down-landing.png",
      title: "Countdown Landing Page",
      description:
        "Countdown Landing Page is a responsive web application that displays a countdown timer. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/count-down-landing",
      goProject: "https://count-down-landing.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP", "JS"],
    },
    {
      id: 3,
      imgSRC: "/images/lookscout.png",
      title: "Lookscout",
      description:
        "Lookscout is a responsive web application that displays a collection of movies fetched from the IDBM API. Users can browse through movie cards with details such as titles, descriptions, and images. Additionally, they can add their favorite movies to a personalized favorites list for easy access. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/Lookscout",
      goProject: "https://lookscout-opal.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP"],
    },
    {
      id: 4,
      imgSRC: "/images/e-commerce.png",
      title: "E-commerce",
      description:
        "E-commerce is a responsive web application that displays a collection of movies fetched from the IDBM API. Users can browse through movie cards with details such as titles, descriptions, and images. Additionally, they can add their favorite movies to a personalized favorites list for easy access. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/e-commerce",
      goProject: "https://e-commerce-ashy-nu.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP", "JS"],
    },
    {
      id: 5,
      imgSRC: "/images/to-do-list.png",
      title: "To Do List",
      description:
          "To Do List is a responsive web application that displays a collection of movies fetched from the IDBM API. Users can browse through movie cards with details such as titles, descriptions, and images. Additionally, they can add their favorite movies to a personalized favorites list for easy access. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/To-Do-List",
      goProject: "https://to-do-list-gilt-pi.vercel.app/",
      technologies: [ "REACT", "BOOTSTRAP"],
    },
    {
      id: 6,
      imgSRC: "/images/template-three.png",
      title: "Landing Page",
      description:
          "Landing Page is a responsive web application that displays a collection of movies fetched from the IDBM API. Users can browse through movie cards with details such as titles, descriptions, and images. Additionally, they can add their favorite movies to a personalized favorites list for easy access. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/template-three",
      goProject: "https://template-three-nine.vercel.app/",
      technologies: ["HTML", "CSS"],
    },
    {
      id: 7,
      imgSRC: "/images/template-two.png",
      title: "Landing Page",
      description:
          "Landing Page is a responsive web application that displays a collection of movies fetched from the IDBM API. Users can browse through movie cards with details such as titles, descriptions, and images. Additionally, they can add their favorite movies to a personalized favorites list for easy access. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/template-two",
      goProject: "https://template-two-ten.vercel.app/",
      technologies: ["HTML", "CSS"],
    },
    {
      id: 8,
      imgSRC: "/images/template-one.png",
      title: "Landing Page",
      description:
          "Landing Page is a responsive web application that displays a collection of movies fetched from the IDBM API. Users can browse through movie cards with details such as titles, descriptions, and images. Additionally, they can add their favorite movies to a personalized favorites list for easy access. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/template-one",
      goProject: "https://template-one-kappa-nine.vercel.app/",
      technologies: ["HTML", "CSS"],
    },
    {
      id: 9,
      imgSRC: "/images/phone-app.png",
      title: "Phone app",
      description:
          "Phone app is a responsive web application that displays a collection of movies fetched from the IDBM API. Users can browse through movie cards with details such as titles, descriptions, and images. Additionally, they can add their favorite movies to a personalized favorites list for easy access. The project is designed with a sleek and modern UI, ensuring a seamless experience across all devices.",
      linkedin: mylinkedin,
      github: "https://github.com/pola-Mamdouh/phone-app",
      goProject: "https://phone-app-ten.vercel.app/",
      technologies: ["HTML", "CSS", "BOOTSTRAP"],
    },
  ]);
  const [filteredProjects, setFilteredProjects] = useState(myProjects);

  const filterProjectsHandler = (filter) => {
    setActiveFilter(filter);
    if (filter === "All Projects") {
      setFilteredProjects(myProjects);
    } else {
      const filterKeywords = filter.split(" & ");
  
      const filtered = myProjects.filter((project) =>
        filterKeywords.every((tech) => project.technologies.includes(tech))
      );
  
      setFilteredProjects(filtered);
    }
  };
  

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="content">
          <div className="sidebar">
            <ul>
              {filters.map((filter) => (
                <li key={filter}>
                  <button
                    className={activeFilter === filter ? "active" : ""}
                    onClick={() => filterProjectsHandler(filter)}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="projects">
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
                }) => (
                  <div className="card col-lg-4 col-md-6 col-sm-12" key={id}>
                  
                    <a href={goProject} className="card-link-wrapper" target="_blank" rel="noopener noreferrer">
                      <div className="card-img">
                        <img src={imgSRC} alt={title} />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                          {description.split(" ").slice(0, 20).join(" ")}...
                        </p>
                        <div className="links">
                          <div className="icons">
                            <a href={linkedin} onClick={(e) => e.stopPropagation()}>
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href={github} onClick={(e) => e.stopPropagation()}>
                              <i className="fa-brands fa-github"></i>
                            </a>
                          </div>
                          <a href={goProject} className="card-link flex-center">
                            Show Project
                            <i className="fa-solid fa-right-long"></i>
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
