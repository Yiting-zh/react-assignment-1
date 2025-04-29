import "../ProjectCard.css"

function ProjectCard(props) {

  return (
    <div className="project" onClick={props.onClick}>
      <img src={props.image} alt="project screenshot" className="project-pic" />
      <h2 className="project-name">{props.name}</h2>
      <p className="project-tech">
        <strong>Tech Used:</strong> {props.tech}
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