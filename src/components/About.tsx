import { Award, Briefcase, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Porque Trabalhar <span className="gradient-text">Comigo</span></h2>
          <p>
            Compreendo tanto a componente técnica como a realidade das empresas. O meu objetivo não é apenas 
            desenvolver software, mas criar soluções que resolvam problemas reais, poupem tempo e ajudem os negócios a crescer.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', marginTop: '2rem' }} className="about-grid">
          {/* Why me column */}
          <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={20} color="var(--primary)" /> Percurso & Diferencial
              </h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <CheckCircle size={18} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong>Engenheiro Informático Licenciado:</strong> Formação teórica sólida e estruturada em engenharia de software, segurança de dados e bases de dados.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <CheckCircle size={18} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong>Experiência Corporativa (Salesforce):</strong> Vivência profissional em sistemas empresariais complexos, modelação de processos de negócio e integrações robustas.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <CheckCircle size={18} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong>Ligação ao Negócio Familiar:</strong> Crescer num negócio de família deu-me uma compreensão profunda das dores diárias de uma PME (falta de tempo, processos manuais repetitivos, necessidade de credibilidade online).
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Experience column */}
          <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={20} color="var(--primary)" /> Experiência Recente
              </h3>
              
              <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '1.5rem', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  left: '-6px',
                  top: '6px'
                }}></div>
                <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.2rem' }}>Frontend Developer (Freelancer)</h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--secondary)', marginBottom: '0.8rem', fontWeight: 600 }}>Aceler</div>
                
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary)' }}>•</span> Desenvolvimento Frontend utilizando React e TypeScript
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary)' }}>•</span> Implementação de interfaces modernas, responsivas e fluidas
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary)' }}>•</span> Colaboração direta com equipas de design de produto
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary)' }}>•</span> Criação de componentes dinâmicos e customizados
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments CSS */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
