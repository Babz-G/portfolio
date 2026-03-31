import projects from "../projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
