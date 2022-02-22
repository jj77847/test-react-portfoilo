import { ProjectCard } from "../ProjectCard";
import "./Projects.css";

export const Projects = ({ projects }) => {
  return (
    <section>
      <h3 className="title">My Projects</h3>

      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
};
