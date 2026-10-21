import { education } from '../data/site.js';
import FadeSection from './FadeSection.jsx';

function Education() {
  return (
    <FadeSection id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education and Certifications</h2>
        <ul className="education-list">
          {education.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </FadeSection>
  );
}

export default Education;
