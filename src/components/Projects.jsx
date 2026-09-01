import { projectsData } from '../data/projects.js';
import FadeSection from './FadeSection.jsx';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <FadeSection id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my frontend work</p>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

export default Projects;
