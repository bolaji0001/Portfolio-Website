import { useEffect, useState } from 'react';
import { navLinks, site } from '../data/site.js';
import { scrollToSection } from '../utils/scrollToSection.js';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);

      let current = 'home';
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) current = id;
      });
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(event) => handleNavClick(event, 'home')}>
            {site.name}'s Portfolio
          </a>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navLinks.map(({ id, label }) => (
            <li className="nav-item" key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeId === id ? 'active' : ''}`}
                onClick={(event) => handleNavClick(event, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
