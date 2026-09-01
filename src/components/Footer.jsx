import { site } from '../data/site.js';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} My Portfolio. Built with passion and code.</p>
        <div className="footer-social">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
