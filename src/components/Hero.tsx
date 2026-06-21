import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onProjectsClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  return (
    <section id="home" style={{ paddingTop: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container hero-content">
        <div className="hero-text fade-in">
          <div className="hero-avatar-container">
            <div style={{ 
              width: '220px', 
              height: '220px', 
              borderRadius: '24px', 
              background: 'var(--accent-gradient)',
              padding: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(99, 102, 241, 0.25)'
            }}>
            <img 
              src="/miguel.jpg" 
              alt="Miguel Amorim" 
              className="profile-img-styled"
              style={{
                width: '100%', 
                height: '100%',
                borderRadius: '21px',
                objectFit: 'cover',
                filter: 'none' // Força a imagem a ficar sempre a cores
              }}
            />
            </div>
            <div>
              <span className="project-tag" style={{ background: 'var(--primary-glow)', color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 600, padding: '0.4rem 0.8rem', borderRadius: '6px' }}>
                🟢 Disponível para Trabalho Remoto
              </span>
            </div>
          </div>
          <h1 style={{ fontSize: '3.2rem', lineHeight: '1.2' }}>
            Modernize a sua <span className="gradient-text">presença digital</span> e automatize processos
          </h1>
          <p className="hero-subtitle">
            Desenvolvimento de websites profissionais, applications de gestão e soluções 
            personalizadas focadas em aumentar a eficiência e melhorar a experiência dos seus clientes.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={onProjectsClick}>
              Ver Projetos <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={onContactClick}>
              Falar Comigo
            </a>
          </div>
        </div>
        
        <div className="hero-visual fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-glow-blob"></div>
          <div className="code-window glass-card">
            <div className="window-header">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
            </div>
            
            <div className="code-line">
              <span className="comment">// Miguel Amorim - Engenheiro Informático</span>
            </div>
            <div className="code-line">
              <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
            </div>
            <div className="code-line">
              &nbsp;&nbsp;name: <span className="string">"Miguel Amorim"</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;role: <span className="string">"Full-Stack Developer"</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;age: <span className="variable">26</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;degree: <span className="string">"Engenharia Informática"</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;skills: [
            </div>
            <div className="code-line">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"React"</span>, <span className="string">"Next.js"</span>, <span className="string">"TypeScript"</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Node.js"</span>, <span className="string">"SQL"</span>, <span className="string">"REST APIs"</span>
            </div>
            <div className="code-line">
              &nbsp;&nbsp;],
            </div>
            <div className="code-line">
              &nbsp;&nbsp;goals: [
            </div>
            <div className="code-line">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Build_Scalable_Software"</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Modernize_Public_Services"</span>
            </div>
            <div className="code-line">
              &nbsp;&nbsp;]
            </div>
            <div className="code-line">
              {'};'}
            </div>
            <div className="code-line">
              <span className="comment">// Pronto para construir o seu próximo produto digital...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
