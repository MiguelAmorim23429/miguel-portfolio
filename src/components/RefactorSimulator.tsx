import { useState } from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export default function RefactorSimulator() {
  const [percentage, setPercentage] = useState(50);

  // Compute metrics based on slider percentage
  const loadTime = (7.5 - (6.9 * (percentage / 100))).toFixed(1);
  const mobileScore = Math.round(30 + (70 * (percentage / 100)));
  const accessibilityScore = Math.round(40 + (60 * (percentage / 100)));
  const performanceScore = Math.round(25 + (75 * (percentage / 100)));
  const seoScore = Math.round(45 + (55 * (percentage / 100)));

  const getScoreColor = (score: number) => {
    if (score < 50) return '#ef4444'; // Red
    if (score < 90) return '#f59e0b'; // Orange
    return '#10b981'; // Green
  };

  return (
    <section id="simulator">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Simulador de <span className="gradient-text">Modernização Web</span></h2>
          <p>
            Muitos portais públicos e sites de empresas locais ainda sofrem com lentidão, problemas em telemóveis e barreiras de acessibilidade. Veja o impacto real de uma modernização.
          </p>
        </div>

        <div className="simulator-container glass-card fade-in">
          <div className="comparison-box">
            {/* Outdated site stats */}
            <div className="comparison-card">
              <div className="comparison-header">
                <div className="comparison-title text-muted">
                  <X size={18} color="#ef4444" /> Site Atual / Obsoleto
                </div>
                <span className="comparison-status status-bad">Não Conforme</span>
              </div>
              
              <div className="metric-row">
                <span className="metric-name">Tempo de Carregamento</span>
                <span className="metric-val bad">7.5s (Lento)</span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Compatibilidade Mobile</span>
                <span className="metric-val bad">Pobre (Quebra em telemóveis)</span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Acessibilidade Legal (Decreto-Lei 83/2018)</span>
                <span className="metric-val bad">Não Conforme (Multas potenciais)</span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Tecnologias de Construção</span>
                <span className="metric-val">Outdated PHP/Templates HTML Estáticos</span>
              </div>
            </div>

            {/* Refactored site stats */}
            <div className="comparison-card" style={{ 
              borderColor: percentage > 80 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(99, 102, 241, 0.2)',
              boxShadow: percentage > 80 ? '0 0 20px rgba(16, 185, 129, 0.1)' : 'none'
            }}>
              <div className="comparison-header">
                <div className="comparison-title" style={{ color: percentage > 50 ? '#fff' : 'var(--text-secondary)' }}>
                  <Check size={18} color={percentage > 50 ? '#10b981' : '#6b7280'} /> Versão Refatorada (Miguel Amorim)
                </div>
                <span className={`comparison-status ${percentage > 85 ? 'status-good' : 'status-bad'}`} style={{
                  background: percentage > 85 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  color: percentage > 85 ? '#10b981' : '#f59e0b'
                }}>
                  {percentage > 85 ? '100% Conforme' : 'Em Otimização'}
                </span>
              </div>
              
              <div className="metric-row">
                <span className="metric-name">Tempo de Carregamento</span>
                <span className={`metric-val ${parseFloat(loadTime) < 1.5 ? 'good' : 'bad'}`}>
                  {loadTime}s ({parseFloat(loadTime) < 1.5 ? 'Instantâneo' : 'A melhorar'})
                </span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Compatibilidade Mobile</span>
                <span className={`metric-val ${mobileScore > 85 ? 'good' : ''}`}>
                  {mobileScore}% (Adaptável a qualquer ecrã)
                </span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Acessibilidade Legal</span>
                <span className={`metric-val ${accessibilityScore > 90 ? 'good' : ''}`}>
                  {accessibilityScore}% (Cumpre regras europeias)
                </span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Stack Moderna</span>
                <span className="metric-val" style={{ color: 'var(--secondary)' }}>React + Next.js / TypeScript / Jamstack</span>
              </div>
            </div>
          </div>

          {/* Interactive controls */}
          <div className="slider-wrapper">
            <h3 className="slider-title">Ajuste o Nível de Modernização</h3>
            
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={percentage} 
              onChange={(e) => setPercentage(parseInt(e.target.value))}
              className="slider-control"
              aria-label="Progresso da Modernização"
            />
            
            <div style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {percentage === 0 ? 'Fase Zero: Site Atual' : 
               percentage < 40 ? 'Limpeza inicial e ajustes mobile básicos' : 
               percentage < 80 ? 'Migração de Stack, Melhoria de Layout & Speed Optimization' : 
               'Polimento Final: Acessibilidade Completa, SEO A+ & CDN Setup'}
            </div>

            <div className="score-display">
              <div>
                <div className="score-num" style={{ color: getScoreColor(performanceScore) }}>
                  {performanceScore}
                </div>
                <div className="score-label">Desempenho</div>
              </div>
              <div>
                <div className="score-num" style={{ color: getScoreColor(accessibilityScore) }}>
                  {accessibilityScore}
                </div>
                <div className="score-label">Acessibilidade</div>
              </div>
              <div>
                <div className="score-num" style={{ color: getScoreColor(seoScore) }}>
                  {seoScore}
                </div>
                <div className="score-label">SEO</div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} color="var(--secondary)" /> O Impacto para Juntas de Freguesia
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Em Portugal, a lei exige que sites públicos garantam acessibilidade a pessoas com incapacidades. Um site moderno não só atrai mais público e facilita a emissão de documentos online, como também evita coimas e cumpre a legislação europeia em vigor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
