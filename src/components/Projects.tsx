import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';

interface Project {
  title: string;
  category: 'production' | 'prototype' | 'academic';
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'production' | 'prototype' | 'academic'>('all');

  const projectsList: Project[] = [
    {
      title: "Aceler - Plataforma Digital",
      category: "production",
      description: "Desenvolvimento frontend com React e TypeScript. Implementação de interfaces de utilizador modernas, responsivas e fluidas, cooperando diretamente com a equipa de design de produto.",
      tags: ["React", "TypeScript", "Vite", "Responsive UI"],
      imageUrl: "/Aceler.png",
      demoUrl: "https://aceler.pt/"
    },
    {
      title: "MilNúmeros - Portal de Contabilidade",
      category: "production",
      description: "Desenvolvimento e modernização do portal institucional para a MilNúmeros, uma empresa de contabilidade e consultoria. Focado em credibilidade de marca e conversão rápida de contactos.",
      tags: ["Web Design", "SEO Otimizado", "Foco Conversão", "Contacto Rápido"],
      imageUrl: "/MilNumeros.png",
      demoUrl: "https://www.milnumeros.pt/"
    },
    {
      title: "BioCantinas - Sistema de Aprovisionamento",
      category: "academic",
      description: "Projeto Académico de Engenharia. Desenvolvido para gerir ementas, encomendas a fornecedores e controlo de stock de cantinas escolares, com o objetivo de reduzir o desperdício alimentar.",
      tags: ["React", "TypeScript", "Node.js", "SQL Server"],
      githubUrl: "https://github.com/miguelamorim1250540"
    },
    {
      title: "Dashboard de Gestão Comercial (Demo)",
      category: "prototype",
      description: "Protótipo funcional de painel de controlo interativo para visualização de faturação, vendas diárias e controlo simplificado de inventário. Desenvolvido para poupar tempo de gestão em PMEs.",
      tags: ["React", "TypeScript", "Charts API", "Local Storage"],
      githubUrl: "https://github.com/miguelamorim1250540"
    },
    {
      title: "Portal de Reservas e Marcações (Demo)",
      category: "prototype",
      description: "Protótipo funcional de agendamento online de serviços ou consultas. Permite ao cliente final marcar de forma autónoma e ao administrador gerir a agenda diária do negócio.",
      tags: ["React", "TypeScript", "Calendar Grid", "Validações"],
      githubUrl: "https://github.com/miguelamorim1250540"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Portefólio de <span className="gradient-text">Projetos</span></h2>
          <p>
            Trabalhos reais desenvolvidos para clientes empresariais, protótipos de demonstração comercial 
            e projetos académicos de Engenharia Informática.
          </p>
        </div>

        {/* Categories filters */}
        <div className="portfolio-filter fade-in">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos os Projetos
          </button>
          <button 
            className={`filter-btn ${filter === 'production' ? 'active' : ''}`}
            onClick={() => setFilter('production')}
          >
            Clientes Reais
          </button>
          <button 
            className={`filter-btn ${filter === 'prototype' ? 'active' : ''}`}
            onClick={() => setFilter('prototype')}
          >
            Protótipos & Demos
          </button>
          <button 
            className={`filter-btn ${filter === 'academic' ? 'active' : ''}`}
            onClick={() => setFilter('academic')}
          >
            Projetos Académicos
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card project-card fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-container">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-image-placeholder">
                    {project.category === 'academic' ? 'Projeto Engenharia' : 'Protótipo Interativo'}
                  </div>
                )}
              </div>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} /> Ver no GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: 'var(--secondary)' }}>
                    <ExternalLink size={16} /> Aceder ao Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
