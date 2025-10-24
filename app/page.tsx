'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #1e4d2b 0%, #134e4a 50%, #0f4c3a 100%)',
      color: '#e0e0e0',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; overflow-x: hidden; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Header */}
        <header style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          marginBottom: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h1 style={{
            fontSize: '3.5em',
            background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontWeight: 800,
            textShadow: '0 4px 20px rgba(224, 46, 113, 0.25), 0 8px 40px rgba(224, 46, 113, 0.15), 0 0 60px rgba(255, 215, 0, 0.35)',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.12)',
            filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.4))'
          }}>
            ⬡ AgriSurvey Platform
          </h1>
          <p style={{
            fontSize: '1.3em',
            color: '#A8E6CF',
            marginBottom: '30px'
          }}>
            Surveillance Drone Autonome • Agriculture • Tourisme • Digital Twin City
          </p>
          <p style={{
            fontSize: '1em',
            color: '#888',
            marginBottom: '30px'
          }}>
            Économie Circulaire Locale • Énergie Tri-Source (Eau/Terre/Ciel) • Data IPFS/LoRa Distribuée
          </p>

          {/* Badges */}
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '30px'
          }}>
            {[
              '✅ 100% Autonome',
              '🌱 Éco-Durable',
              '📡 Décentralisé',
              '🔒 Souverain',
              '♻️ Circulaire'
            ].map((badge, idx) => (
              <span
                key={idx}
                style={{
                  padding: '8px 16px',
                  background: 'rgba(46, 204, 113, 0.2)',
                  border: '1px solid rgba(46, 204, 113, 0.4)',
                  borderRadius: '20px',
                  fontSize: '0.9em',
                  color: '#2ECC71',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(46, 204, 113, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(46, 204, 113, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(46, 204, 113, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <a
              href="/docs"
              style={{
                padding: '15px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1em',
                background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(46, 204, 113, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(46, 204, 113, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(46, 204, 113, 0.3)';
              }}
            >
              📖 Documentation Complète
            </a>
            <a
              href="https://github.com/FFT-Foundation"
              style={{
                padding: '15px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1em',
                background: 'transparent',
                color: '#2ECC71',
                border: '2px solid #2ECC71',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(46, 204, 113, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              💻 Code Source GitHub
            </a>
          </div>
        </header>

        {/* Vue d'Ensemble */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#2ECC71',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(46, 204, 113, 0.3)',
            paddingBottom: '10px'
          }}>
            🎯 Vue d'Ensemble
          </h2>
          <p style={{
            color: '#c0c0c0',
            fontSize: '1.05em',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            AgriSurvey est une plateforme d'économie circulaire locale combinant drones autonomes,
            énergie tri-source (Schauberger/Tesla), et data distribuée (IPFS/LoRa) pour une autonomie
            territoriale complète dans l'agriculture, le tourisme et l'urbanisme intelligent.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {[
              {
                icon: '⬡',
                title: 'Drone Fleet',
                desc: 'Hexadrones autonomes avec Lidar, caméras multi-spectrales, et rechargement hybride (solaire + stations énergie).'
              },
              {
                icon: '⚡',
                title: 'Énergie Autonome',
                desc: 'Tri-source: vortex Schauberger (eau), tellurique Tesla (terre), atmosphérique Tesla (ciel). Zéro dépendance réseau.'
              },
              {
                icon: '📡',
                title: 'Data Distribuée',
                desc: 'IPFS (stockage décentralisé), LoRa (communication low-power), capteurs autonomes. Souveraineté numérique totale.'
              },
              {
                icon: '🧠',
                title: 'IA Prédictive',
                desc: 'Analyse patterns multi-sources, prédictions récoltes/météo, optimisation irrigation. RAG neurosymbolique local.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'transform 0.3s, border-color 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(46, 204, 113, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <h4 style={{
                  color: '#2ECC71',
                  fontSize: '1.2em',
                  marginBottom: '15px'
                }}>
                  {feature.icon} {feature.title}
                </h4>
                <p style={{
                  color: '#c0c0c0',
                  fontSize: '1em',
                  lineHeight: 1.6
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Métriques Pilote */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#2ECC71',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(46, 204, 113, 0.3)',
            paddingBottom: '10px'
          }}>
            📈 Métriques Site Pilote
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {[
              { value: '3', label: 'Drones Actifs' },
              { value: '450 ha', label: 'Surface Couverte' },
              { value: '24/7', label: 'Surveillance' },
              { value: '100%', label: 'Énergie Locale' },
              { value: '156', label: 'Capteurs Sol' },
              { value: '0€', label: 'Coût Cloud' }
            ].map((metric, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
                  padding: '20px',
                  borderRadius: '10px',
                  borderLeft: '4px solid #2ECC71',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  fontSize: '2em',
                  fontWeight: 800,
                  color: '#2ECC71',
                  marginBottom: '5px'
                }}>
                  {metric.value}
                </div>
                <div style={{
                  color: '#A8E6CF',
                  fontSize: '0.95em'
                }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#2ECC71',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(46, 204, 113, 0.3)',
            paddingBottom: '10px'
          }}>
            🎯 Use Cases
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {[
              {
                title: 'Surveillance Cultures',
                desc: 'Monitoring autonome 24/7, détection précoce maladies/stress hydrique, cartographie multi-spectrale NDVI.',
                slug: 'surveillance-cultures',
                icon: '🌾'
              },
              {
                title: 'Irrigation Optimisée',
                desc: 'Vortex Schauberger, capteurs humidité sol temps réel, prédictions météo IA, réduction 40% consommation eau.',
                slug: 'irrigation-optimisee',
                icon: '💧'
              },
              {
                title: 'Tourisme Aérien',
                desc: 'Visites virtuelles 360°, cartographie sites patrimoniaux, reconstructions 3D, expériences immersives.',
                slug: 'tourisme-aerien',
                icon: '🏛️'
              },
              {
                title: 'Digital Twin City',
                desc: 'Jumeaux numériques urbains temps réel, monitoring infrastructure, gestion trafic, planification urbanisme.',
                slug: 'digital-twin-city',
                icon: '🏙️'
              }
            ].map((useCase, idx) => (
              <a
                key={idx}
                href={`/use-cases/${useCase.slug}`}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'block',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(46, 204, 113, 0.8)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(46, 204, 113, 0.3)';
                  e.currentTarget.style.background = 'rgba(46, 204, 113, 0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div style={{ fontSize: '2.5em', marginBottom: '15px' }}>
                  {useCase.icon}
                </div>
                <h4 style={{
                  color: '#2ECC71',
                  fontSize: '1.2em',
                  marginBottom: '15px',
                  fontWeight: 600
                }}>
                  {useCase.title}
                </h4>
                <p style={{
                  color: '#c0c0c0',
                  fontSize: '1em',
                  lineHeight: 1.6,
                  marginBottom: '15px'
                }}>
                  {useCase.desc}
                </p>
                <div style={{
                  color: '#2ECC71',
                  fontSize: '0.9em',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  En savoir plus →
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#2ECC71',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(46, 204, 113, 0.3)',
            paddingBottom: '10px'
          }}>
            🏗️ Architecture Technique
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {[
              {
                title: 'Drone Fleet',
                icon: '⬡',
                desc: 'Hexadrones autonomes + stations rechargement',
                slug: 'drone-fleet',
                tech: ['Lidar', 'Multi-spectral', 'Autonomie 4h']
              },
              {
                title: 'Énergie Autonome',
                icon: '⚡',
                desc: 'Tri-source Schauberger + Tesla',
                slug: 'energie-autonome',
                tech: ['Vortex Eau', 'Tellurique', 'Atmosphérique']
              },
              {
                title: 'Data Distribuée',
                icon: '📡',
                desc: 'IPFS + LoRa + capteurs autonomes',
                slug: 'data-distribuee',
                tech: ['IPFS', 'LoRa', 'Edge Computing']
              },
              {
                title: 'IA Prédictive',
                icon: '🧠',
                desc: 'RAG neurosymbolique + Prophet',
                slug: 'ia-predictive',
                tech: ['DuckDB', 'Prophet', 'Ollama Local']
              }
            ].map((component, idx) => (
              <a
                key={idx}
                href={`/architecture/${component.slug}`}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'block',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(46, 204, 113, 0.8)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(46, 204, 113, 0.3)';
                  e.currentTarget.style.background = 'rgba(46, 204, 113, 0.08)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <div style={{ fontSize: '2.5em', marginBottom: '15px' }}>
                  {component.icon}
                </div>
                <h4 style={{
                  color: '#2ECC71',
                  fontSize: '1.2em',
                  marginBottom: '12px',
                  fontWeight: 600
                }}>
                  {component.title}
                </h4>
                <p style={{
                  color: '#c0c0c0',
                  fontSize: '0.95em',
                  lineHeight: 1.6,
                  marginBottom: '15px'
                }}>
                  {component.desc}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  {component.tech.map((tech, techIdx) => (
                    <span key={techIdx} style={{
                      background: 'rgba(46, 204, 113, 0.15)',
                      color: '#2ECC71',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '0.75em',
                      fontWeight: 600
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{
                  color: '#2ECC71',
                  fontSize: '0.9em',
                  fontWeight: 600,
                  marginTop: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  Explorer le process →
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#666',
          marginTop: '60px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{ marginBottom: '10px', fontSize: '1em', color: '#A8E6CF' }}>
            100% Autonome • Éco-Durable • Souverain EU
          </p>
          <p style={{ fontSize: '0.9em', color: '#F4D03F', marginTop: '10px' }}>
            FFT Cognitive Foundation • AgriSurvey Platform • 2025
          </p>
          <p style={{ marginTop: '15px' }}>
            <a href="https://github.com/FFT-Foundation" style={{ color: '#2ECC71', textDecoration: 'none', marginRight: '20px' }}>GitHub</a>
            <a href="/docs" style={{ color: '#2ECC71', textDecoration: 'none' }}>Documentation</a>
          </p>
        </footer>

      </div>
    </div>
  );
}
