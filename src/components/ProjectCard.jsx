function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className="text">
        <h3>{project.title}</h3>
        <h3>{project.subtitle}</h3>
        <p>{project.description}</p>
        <p>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank">
              Github Repository
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank">
              {" "}
              | Live Site
            </a>
          )}
        </p>
        <ul>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <img src={project.image} alt={project.title} />
    </article>
  );
}

export default ProjectCard;
