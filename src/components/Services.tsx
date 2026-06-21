import { Globe, RefreshCw, Cpu, Link, Wrench } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Globe size={28} />,
      title: "Websites Institucionais",
      description: "Desenvolvimento de websites profissionais, rápidos e adaptados a telemóveis. Ideal para empresas, restaurantes, clínicas, advogados ou contabilistas transmitirem confiança e captarem novos clientes."
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Modernização de Websites Antigos",
      description: "Reconstrução de plataformas antigas e obsoletas (Juntas de Freguesia, associações e PMEs) para cumprir a lei de acessibilidade (WCAG), otimizar a velocidade e modernizar o visual."
    },
    {
      icon: <Cpu size={28} />,
      title: "Software Interno à Medida",
      description: "Aplicações web personalizadas para gerir clientes (CRM), stocks, reservas de serviços ou emitir relatórios automáticos. Organização completa ajustada às necessidades do seu negócio."
    },
    {
      icon: <Link size={28} />,
      title: "Integrações e Automação de Processos",
      description: "Automatização de tarefas diárias repetitivas e ligação entre sistemas através de APIs. Reduza o trabalho administrativo manual e aumente a eficiência da sua equipa."
    },
    {
      icon: <Wrench size={28} />,
      title: "Manutenção e Suporte Técnico",
      description: "Apoio contínuo para garantir que as suas plataformas se mantêm seguras, atualizadas e rápidas, com correções céleres e implementação de melhorias sempre que necessário."
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Serviços Focados em <span className="gradient-text">Resultados</span></h2>
          <p>
            O seu negócio não precisa apenas de código; precisa de mais credibilidade, de poupar tempo, 
            de reduzir trabalho manual e de atrair novos clientes.
          </p>
        </div>
        
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="glass-card fade-in" 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description" style={{ flexGrow: 1 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
