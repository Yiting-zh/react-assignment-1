
function ProjectCard(props) {

  return (
    <div className="project">
      <img src={props.image} alt="project screenshot" className="project-pic" />
      <h2 className="project-name">{props.name}</h2>
      <p className="project-tech">
        <strong>Tech Used:</strong> {props.tech}
      </p>
      <p className="project-description">
        <strong>Description:</strong> {props.description}
      </p>
      <p className="project-learnings">
        <strong>What I Learned:</strong> {props.learnings}
      </p>
      <p className="project-role">
        <strong>Role:</strong> {props.role}
      </p>
      <p className="project-challenges">
        <strong>Challenges:</strong> {props.challenges}
      </p>
      <a
        href={props.github} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        View on GitHub
      </a>
    </div>
  );
}


export default ProjectCard;