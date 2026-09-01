import { useEffect, useRef } from 'react';

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isTouchDevice =
      window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches;

    if (!isTouchDevice) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-viewport');
          } else if (entry.intersectionRatio < 0.1) {
            entry.target.classList.remove('in-viewport');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: [0.1, 0.2, 0.3, 0.5],
      }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-card" ref={cardRef}>
      <div className="project-image">
        <div className="project-overlay">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
          {project.codeUrl && project.codeUrl !== '#' && (
            <a
              href={project.codeUrl}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}
        </div>
        {project.image ? (
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className="project-placeholder">
            <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden="true">
              <rect width="100" height="100" fill="currentColor" opacity="0.1" />
              <path d="M30 30h40v40H30z" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
