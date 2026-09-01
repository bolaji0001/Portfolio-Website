import { useEffect, useState } from 'react';
import { skillCategories } from '../data/site.js';
import { useInView } from '../hooks/useInView.js';
import FadeSection from './FadeSection.jsx';

function SkillItem({ name, width }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeoutId = setTimeout(() => setProgress(width), 100);
    return () => clearTimeout(timeoutId);
  }, [inView, width]);

  return (
    <div className="skill-item" ref={ref}>
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div className={`skill-progress ${inView ? 'animated' : ''}`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

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
              <div className="skill-items">
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} width={skill.width} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

export default Skills;
