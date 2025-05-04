import ProjectCard from "../components/ProjectCard";
import GenesisPortfolio from "../assets/bar-website.jpg";
import BarWebsite from "../assets/genesis-portfolio.jpg";
import InvitationCard from "../assets/invitation-card.jpg";
import { useState } from "react";
import PopupWindow from "../components/PopupWindow";




function Projects(){
  const [showProjects, setShowProjects] = useState(false); 
  const [popupInfo, setPopupInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const closePopup = () => {  setIsOpen(false);};
  const openPopup = (info) => {
    setPopupInfo(info);
    setIsOpen(true);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      name: "Genesis portfolio design",
      image: GenesisPortfolio,
      github: "https://github.com/Yiting-zh/genesis-portfolio-design",
      tech: "html, css, scss",
      description: "Recreate the Figma file for Genesis portfolio.",
      learnings:
        "Learned how to structure a project, use Sass, basic validation, and responsive design.",
      role: "Solo Project",
      challenges:
        "Attention to detail in HTML/CSS structure and form validation.",
    },
    {
      name: "Bar website design",
      image: BarWebsite,
      github: "https://github.com/Yiting-zh/landing-page.git",
      tech: "html, css",
      description: "A bar website design from Figma.",
      learnings: "Practiced flexbox, layout, and responsive design.",
      role: "Responsible for landing page",
      challenges: "Responsive layout and pixel-perfect styling.",
    },
    {
      name: "Invitation Card",
      image: InvitationCard,
      github: "https://github.com/Yiting-zh/invitation-card.git",
      tech: "html, css",
      description: "Designed a digital invitation card.",
      learnings: "CSS styling and font hierarchy.",
      role: "Solo Project",
      challenges: "Precise visual layout matching the Figma design.",
    },
  ];

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.toLowerCase().includes(searchQuery.toLowerCase())
  );





  return (
    <div>
      <button 
        className="projects-btn" 
        onClick={() => setShowProjects(prev => !prev)}
        >
        {showProjects ? "Hide Projects" : "View Projects"}
      </button>

      {showProjects && (
         <>
         <input 
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
         />

          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                image={project.image}
                github={project.github}
                tech={project.tech}
                onClick={() =>
                  openPopup({
                    description: "Description: " + project.description,
                    learnings: "Learnings: " + project.learnings,
                    role: "Role: " + project.role,
                    challenges: "Challenges: " + project.challenges,
                  })
                }
              />
            ))}
          </div>
        </>
      )}

      {isOpen && (
        <PopupWindow
          description={popupInfo.description}
          learnings={popupInfo.learnings}
          role={popupInfo.role}
          challenges={popupInfo.challenges}
          onClose={closePopup}
        />
      )}
    </div>
  );
}

export default Projects;