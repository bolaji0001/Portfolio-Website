import { useEffect, useState } from 'react';
import { site, stats } from '../data/site.js';
import { useInView } from '../hooks/useInView.js';
import FadeSection from './FadeSection.jsx';

function StatItem({ target, label }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    let frameId;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        setValue(Math.floor(current));
        frameId = requestAnimationFrame(updateCounter);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [inView, target]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function About() {
  const profileSrc = `${import.meta.env.BASE_URL}images/profile.jpeg`;

  return (
    <FadeSection id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a full-stack software developer with over two years of professional experience
              building and maintaining web applications in production, and four years in IT supporting
              200+ users.
            </p>
            <p>
              I build end to end with React, Next.js, TypeScript and JavaScript on the front end,
              Node.js, Express and Python (FastAPI) on the back end, and PostgreSQL databases.
            </p>
            <p>
              I care about correctness and security: validating input, keeping user data safe, and
              treating external and AI services as untrusted. I'm based in Calgary and open to
              relocation.
            </p>
            <p className="about-now">
              <span className="about-now-label">What I'm doing now:</span> preparing for the AWS
              Certified Cloud Practitioner exam, and building an e-commerce app.
            </p>
            <div className="about-stats">
              {stats.map((stat) => (
                <StatItem key={stat.label} target={stat.target} label={stat.label} />
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={profileSrc} alt={`Portrait of ${site.name}`} className="profile-image" />
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

export default About;
