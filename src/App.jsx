import GenesisPortfolio from "../src/assets/bar-website.jpg";
import BarWebsite from "../src/assets/genesis-portfolio.jpg";
import InvitationCard from "../src/assets/invitation-card.jpg";

import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <ProjectCard
        name="Genesis portfolio design"
        image={GenesisPortfolio}
        github="https://github.com/Yiting-zh/genesis-portfolio-design"
        tech="html, css, scss"
        description="Recreate the Figma file for Genesis portfolio.  "
        learnings=" In this project, I learned how to structure a project properly, organize styles using Sass, create syntactically correct forms with basic validation, and improved my understanding of responsive and accessible design. "
        role="Solo Project"
        challenges="The main challenge I faced in this project was ensuring proper project structure and attention to detail in HTML, CSS, and form validation to meet development best practices." />

      <ProjectCard
        name="Bar website design"
        image={BarWebsite}
        github="https://github.com/Yiting-zh/landing-page.git"
        tech="html, css"
        description="Recreate the Figma file for Genesis portfolio.  "
        learnings=" In this project, I learned how to structure a project properly, organize styles using Sass, create syntactically correct forms with basic validation, and improved my understanding of responsive and accessible design. "
        role="Solo Project"
        challenges="The main challenge I faced in this project was ensuring proper project structure and attention to detail in HTML, CSS, and form validation to meet development best practices."/>
      
      <ProjectCard
        name="Invitation Card"
        image={InvitationCard}
        github="https://github.com/Yiting-zh/invitation-card.git"
        tech="html, css"
        description="Recreate the Figma file for Genesis portfolio.  "
        learnings=" In this project, I learned how to structure a project properly, organize styles using Sass, create syntactically correct forms with basic validation, and improved my understanding of responsive and accessible design. "
        role="Solo Project"
        challenges="The main challenge I faced in this project was ensuring proper project structure and attention to detail in HTML, CSS, and form validation to meet development best practices."/>
      

    </>


  );
}

export default App;
