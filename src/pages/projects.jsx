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

  return (
    <div>
      <button 
        className="projects-btn" 
        onClick={() => setShowProjects(prev => !prev)}
        >
        {showProjects ? "Hide Projects" : "View Projects"}
      </button>

      {showProjects && (
        <div>
          <ProjectCard
            name="Genesis portfolio design"
            image={GenesisPortfolio}
            github="https://github.com/Yiting-zh/genesis-portfolio-design"
            tech="html, css, scss"
            onClick={() =>
              openPopup({
                description: "Description: Recreate the Figma file for Genesis portfolio.",
                learnings:
                  "Learnings: Learned how to structure a project, use Sass, basic validation, and responsive design.",
                role: "Role: Solo Project",
                challenges:
                  "Challenges: Attention to detail in HTML/CSS structure and form validation.",
              })
            }
          />

          <ProjectCard
            name="Bar website design"
            image={BarWebsite}
            github="https://github.com/Yiting-zh/landing-page.git"
            tech="html, css"
            onClick={() =>
              openPopup({
                description: "Description: A bar website design from Figma.",
                learnings: "Learnings: Practiced flexbox, layout, and responsive design.",
                role: "Role: Responsible for landing page",
                challenges: "Challenges: Responsive layout and pixel-perfect styling.",
              })
            }
          />

          <ProjectCard
            name="Invitation Card"
            image={InvitationCard}
            github="https://github.com/Yiting-zh/invitation-card.git"
            tech="html, css"
            onClick={() =>
              openPopup({
                description: "Description: Designed a digital invitation card.",
                learnings: "Learnings: CSS styling and font hierarchy.",
                role: "Role: Solo Project",
                challenges: "Challenges: Precise visual layout matching the Figma design.",
              })
            }
          />
        </div>
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