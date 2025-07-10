import React from "react";
import "./Projects.css";
import projectData from "../../data/projectData";

const Projects = () => {
  return (
    <div className="project" id="projects">
      <h2 className="text-center mt-3 mb-1 text-uppercase">TOP RECENT PROJECTS</h2>
      <hr />
      <p className="text-center mb-4">
        These are some of the major projects I’ve worked on using technologies like MERN stack, Java, and more.
      </p>

      <div className="row px-4">
        {projectData.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 p-2 d-flex flex-column justify-content-between">
              <div>
                <div className="card-notify-badge">{project.category}</div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-uppercase">{project.title}</h5>
                  <p className="text-muted small mb-2">{project.date}</p>
                  <div className="card-tech mb-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="badge bg-secondary m-1">{tech}</span>
                    ))}
                  </div>
                  <ul className="text-start small">
                    {project.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center mb-3 mt-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark mx-2"
                >
                  View Code
                </a>
                {project.deploy ? (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-success"
                  >
                    View Live
                  </a>
                ) : (
                  <button className="btn btn-outline-secondary" disabled>
                    Live Unavailable
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
