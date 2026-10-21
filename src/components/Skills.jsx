import { skillCategories } from '../data/site.js';
import FadeSection from './FadeSection.jsx';

function Skills() {
  return (
    <FadeSection id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">The tools and technologies I work with</p>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-items">
                {category.skills.map((skill) => (
                  <li className="skill-name" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

export default Skills;
