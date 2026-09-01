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
              Welcome to my web development journey! I'm a JavaScript Developer with two years of
              frontend experience, now focusing on backend development.
            </p>
            <p>
              My journey in web development started with frontend technologies - HTML, CSS, JavaScript,
              and React. Over the past two years, I've built numerous frontend projects that showcase
              my skills in creating beautiful, functional, and user-friendly web applications.
            </p>
            <p>
              While I've enjoyed working on the frontend, I'm now shifting my focus toward backend
              development. I'm passionate about building robust server-side applications, APIs, and
              understanding the full stack of web development.
            </p>
            <div className="about-stats">
              {stats.map((stat) => (
                <StatItem key={stat.label} target={stat.target} label={stat.label} />
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={profileSrc} alt={site.name} className="profile-image" />
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

export default About;
