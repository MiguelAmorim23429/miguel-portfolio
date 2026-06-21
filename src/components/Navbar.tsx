import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'simulator', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar" style={{ 
      background: scrolled ? 'rgba(7, 9, 19, 0.85)' : 'rgba(7, 9, 19, 0.5)',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
    }}>
      <div className="nav-container">
        <a href="#home" className="logo-text" onClick={(e) => handleLinkClick(e, 'home')}>
          MIGUELAMORIM<span className="logo-dot">.</span>
        </a>

        {/* Mobile menu button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Início
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'services')}
            >
              Serviços
            </a>
          </li>
          <li>
            <a 
              href="#simulator" 
              className={`nav-link ${activeSection === 'simulator' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'simulator')}
            >
              Modernizador
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projetos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
