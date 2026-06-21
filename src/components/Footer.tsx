import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <a href="#home" className="footer-logo logo-text" onClick={handleScrollTop} style={{ display: 'inline-block' }}>
          MIGUELAMORIM<span className="logo-dot">.</span>
        </a>
        <p className="footer-text" style={{ marginBottom: '0.8rem' }}>
          © {currentYear} Miguel Amorim. Todos os direitos reservados.
        </p>
        <p className="footer-text" style={{ fontSize: '0.8rem' }}>
          Construído com <span style={{ color: 'var(--accent)' }}>React</span>, <span style={{ color: 'var(--secondary)' }}>TypeScript</span> & <span style={{ color: '#fff' }}>Vanilla CSS</span>.
        </p>
      </div>
    </footer>
  );
}
