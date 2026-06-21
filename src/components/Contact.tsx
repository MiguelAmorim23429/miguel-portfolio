import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { Linkedin, Github } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Geral',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for the form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Geral', message: '' });
      
      // Auto reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Entrar em <span className="gradient-text">Contacto</span></h2>
          <p>
            Tem uma proposta de projeto, quer modernizar o site da sua junta/empresa ou simplesmente 
            quer conversar sobre tecnologia? Envie-me uma mensagem.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info fade-in">
            <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem' }}>Canais Diretos</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-detail-title">E-mail</div>
                  <a href="mailto:miguelgamorim@outlook.com" className="contact-detail-val" style={{ color: '#fff', textDecoration: 'none' }}>
                    miguelgamorim@outlook.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-detail-title">Localização</div>
                  <div className="contact-detail-val">Portugal (Remoto / Presencial)</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-detail-title">Telefone / WhatsApp</div>
                  <a href="tel:+351916803808" className="contact-detail-val" style={{ color: '#fff', textDecoration: 'none' }}>
                    +351 916 803 808
                  </a>
                </div>
              </div>

              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  Redes Profissionais
                </h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a 
                    href="https://github.com/miguelamorim1250540" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-icon" 
                    style={{ width: '2.5rem', height: '2.5rem', borderRadius: '8px' }}
                    title="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-icon" 
                    style={{ width: '2.5rem', height: '2.5rem', borderRadius: '8px' }}
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form fade-in">
            <form onSubmit={handleSubmit} className="glass-card">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input" 
                  placeholder="Seu nome" 
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-label">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input" 
                  placeholder="exemplo@email.com" 
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-label">Assunto</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact-input"
                  style={{ background: '#090d1a' }}
                >
                  <option value="Geral">Assunto Geral</option>
                  <option value="Junta de Freguesia">Modernização de Junta de Freguesia</option>
                  <option value="Website Empresa">Website para Empresa</option>
                  <option value="Software customizado">Software / ERP Customizado</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-label">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-textarea" 
                  placeholder="Descreva brevemente o seu projeto..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={loading || submitted}
              >
                {loading ? 'A enviar...' : submitted ? 'Mensagem Enviada!' : (
                  <>
                    Enviar Mensagem <Send size={16} />
                  </>
                )}
              </button>

              {submitted && (
                <div style={{ 
                  marginTop: '1.5rem', 
                  padding: '0.8rem', 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  border: '1px solid #10b981', 
                  color: '#10b981', 
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}>
                  Obrigado pelo contacto, Miguel! Responderei o mais brevemente possível.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
