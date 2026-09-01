import { useEffect, useState } from 'react';
import { site } from '../data/site.js';
import { scrollToSection } from '../utils/scrollToSection.js';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx';

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        setOffset(scrolled * 0.5);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="home" className="hero" style={{ transform: `translateY(${offset}px)` }}>
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm a</p>
          <h1 className="hero-title">
            <span className="gradient-text">{site.role}</span>
          </h1>
          <p className="hero-subtitle">
            {site.focus} - Building modern, responsive, and user-friendly web experiences
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(event) => handleScrollClick(event, 'projects')}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(event) => handleScrollClick(event, 'contact')}>
              Get In Touch
            </a>
          </div>
          <div className="hero-social">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${site.email}`} className="social-link" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-snippet">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">developer</span> = {'{\n'}
                  {'  '}
                  <span className="code-property">name</span>:{' '}
                  <span className="code-string">'{site.name}'</span>,{'\n'}
                  {'  '}
                  <span className="code-property">role</span>:{' '}
                  <span className="code-string">'{site.role}'</span>,{'\n'}
                  {'  '}
                  <span className="code-property">focus</span>:{' '}
                  <span className="code-string">'{site.focus}'</span>,{'\n'}
                  {'  '}
                  <span className="code-property">skills</span>: [
                  <span className="code-string">'HTML'</span>,{' '}
                  <span className="code-string">'CSS'</span>,{' '}
                  <span className="code-string">'JavaScript'</span>,{' '}
                  <span className="code-string">'React'</span>]{'\n'}
                  {'};'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
