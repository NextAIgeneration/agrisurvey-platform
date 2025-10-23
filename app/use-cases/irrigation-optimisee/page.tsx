'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function IrrigationOptimisee() {
  const metrics = [
    { label: 'Économie Eau', value: '-35%', desc: 'vs irrigation uniforme' },
    { label: 'Précision', value: '2cm', desc: 'RTK GPS positionnement' },
    { label: 'Réactivité', value: '12h', desc: 'détection → action' },
    { label: 'ROI', value: '8 mois', desc: 'amortissement système' }
  ];

  const capabilities = [
    {
      title: 'Cartographie Hydrique',
      icon: '💧',
      features: [
        'Infrarouge thermique (température canopée)',
        'NDWI (Normalized Difference Water Index)',
        'Modélisation 3D terrain (LiDAR)',
        'Corrélation données météo locales'
      ]
    },
    {
      title: 'Prédiction Besoins',
      icon: '📈',
      features: [
        'Prophet forecasting (évapotranspiration)',
        'Historique DuckDB (3 ans données)',
        'Modèles sol (rétention hydrique)',
        'Intégration capteurs sol (LoRa)'
      ]
    },
    {
      title: 'Pilotage Automatisé',
      icon: '🎯',
      features: [
        'Cartes prescription irrigation',
        'API intégration pivots/rampes',
        'Zone management (modulation débit)',
        'Alertes temps réel (stress détecté)'
      ]
    },
    {
      title: 'Monitoring Continu',
      icon: '📊',
      features: [
        'Dashboard temps réel (volumes)',
        'Analyse coûts (eau + énergie)',
        'Rapports conformité (EU directives)',
        'Optimisation multi-parcelles'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a3a3a 0%, #0f2f2f 50%, #0a2f2f 100%)',
      color: '#e0e0e0'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

        .swiper {
          width: 100%;
          height: 100vh;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #2ECC71 !important;
          background: rgba(46, 204, 113, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          background: #2ECC71;
          box-shadow: 0 0 15px rgba(46, 204, 113, 0.6);
        }

        .swiper-pagination {
          bottom: 30px !important;
          left: 50% !important;
          transform: translateX(-50%);
          width: auto !important;
          display: flex;
          flex-direction: row;
          gap: 10px;
        }
      `}</style>

      <Swiper
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {/* Slide 1: Hero */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <a href="/" style={{
              color: '#2ECC71',
              fontSize: '1rem',
              marginBottom: '40px',
              display: 'inline-block',
              textDecoration: 'none'
            }}>
              ← Retour à l'accueil
            </a>
            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '30px',
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(52, 152, 219, 0.15), 0 8px 40px rgba(52, 152, 219, 0.1)'
            }}>
              💧 Irrigation Optimisée
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#A8E6CF',
              lineHeight: 1.8,
              maxWidth: '800px',
              marginBottom: '40px'
            }}>
              Cartographie thermique et prédiction des besoins hydriques pour irrigation de précision
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginTop: '50px'
            }}>
              {metrics.map((metric, idx) => (
                <div key={idx} style={{
                  background: 'rgba(52, 152, 219, 0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(52, 152, 219, 0.3)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#3498DB', marginBottom: '5px' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.95em', color: '#A8E6CF', fontWeight: 600, marginBottom: '5px' }}>
                    {metric.label}
                  </div>
                  <div style={{ fontSize: '0.8em', color: '#888' }}>
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Pipeline */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(52, 152, 219, 0.3)',
              paddingBottom: '15px'
            }}>
              🔄 Pipeline Irrigation Intelligence
            </h2>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '50px',
              borderRadius: '20px',
              fontFamily: 'monospace',
              color: '#A8E6CF',
              lineHeight: 2,
              fontSize: '1.1em',
              border: '2px solid rgba(52, 152, 219, 0.2)'
            }}>
              <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│        ⬡ Surveillance Multi-Capteurs (2x/semaine)      │
│   Drone IR thermique + Capteurs sol LoRa (temps réel)  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  🌡️ Données Thermiques │
        │  • Température canopée │
        │  • NDWI (water index)  │
        │  • Évapotranspiration  │
        │  • Capteurs sol (30cm) │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  📈 Modèles Prédictifs │
        │  • Prophet (besoins)   │
        │  • Météo (7j forecast) │
        │  • Historique 3 ans    │
        │  • Modèles sol locaux  │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  🎯 Prescription Zones │
        │  • Cartes modulation   │
        │  • Volumes optimisés   │
        │  • Timing irrigation   │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  💧 Pilotage Automatisé│
        │  • API pivots/rampes   │
        │  • Monitoring temps réel│
        │  • Alertes anomalies   │
        └────────────────────────┘`}</pre>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Capabilities */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(52, 152, 219, 0.3)',
              paddingBottom: '15px'
            }}>
              🚀 Capacités Techniques
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {capabilities.map((capability, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{
                    fontSize: '3em',
                    marginBottom: '15px'
                  }}>
                    {capability.icon}
                  </div>
                  <h3 style={{
                    color: '#3498DB',
                    fontSize: '1.5em',
                    marginBottom: '20px',
                    fontWeight: 700
                  }}>
                    {capability.title}
                  </h3>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1em' }}>
                    {capability.features.map((feature, featureIdx) => (
                      <li key={featureIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4: Use Case Example */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(52, 152, 219, 0.3)',
              paddingBottom: '15px'
            }}>
              📋 Cas d'Usage : Exploitation Maraîchère
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(52, 152, 219, 0.3)'
            }}>
              <h3 style={{ color: '#3498DB', fontSize: '2em', marginBottom: '25px' }}>
                🥕 Cultures Légumières - 45ha (tomates, poivrons)
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '30px',
                marginBottom: '30px'
              }}>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '25px',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ color: '#F4D03F', fontSize: '1.3em', marginBottom: '15px' }}>
                    ⚠️ Problématique
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Irrigation uniforme (gaspillage zones humides)</li>
                    <li>Stress hydrique non détecté (pertes 15%)</li>
                    <li>Consommation eau : 6500 m³/ha/saison</li>
                    <li>Coût eau + énergie : €1200/ha</li>
                  </ul>
                </div>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '25px',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ color: '#3498DB', fontSize: '1.3em', marginBottom: '15px' }}>
                    ✅ Solution AgriSurvey
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Cartographie IR 2x/semaine + capteurs sol</li>
                    <li>Modulation irrigation (6 zones différenciées)</li>
                    <li>Consommation optimisée : 4200 m³/ha (-35%)</li>
                    <li>Coût total : €780/ha (économie €420/ha)</li>
                  </ul>
                </div>
              </div>
              <div style={{
                background: 'rgba(52, 152, 219, 0.2)',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid rgba(52, 152, 219, 0.4)'
              }}>
                <h4 style={{ color: '#F4D03F', fontSize: '1.4em', marginBottom: '15px' }}>
                  📈 Résultats Mesurés (Saison 2024)
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '20px',
                  marginTop: '20px'
                }}>
                  {[
                    { metric: '-35%', label: 'Consommation eau' },
                    { metric: '+18%', label: 'Rendement qualité A' },
                    { metric: '€18,900', label: 'Économie annuelle' },
                    { metric: '8 mois', label: 'ROI système' }
                  ].map((result, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '2.2em',
                        fontWeight: 800,
                        color: '#F4D03F',
                        marginBottom: '5px'
                      }}>
                        {result.metric}
                      </div>
                      <div style={{ fontSize: '0.9em', color: '#A8E6CF' }}>
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5: Technical Integration */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(52, 152, 219, 0.3)',
              paddingBottom: '15px'
            }}>
              🔌 Intégrations Système
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  title: 'Capteurs IoT (LoRa)',
                  items: ['Sondes sol (humidité 10/30/60cm)', 'Stations météo locales', 'Débitmètres (consommation réelle)', 'Mesh network 15km range']
                },
                {
                  title: 'Équipements Irrigation',
                  items: ['API Pivot Valley (standard)', 'Rampes Lindsay (modulation)', 'Goutte-à-goutte Netafim', 'Électrovannes pilotage automatique']
                },
                {
                  title: 'Plateforme Analytics',
                  items: ['DuckDB (historique 3 ans)', 'Prophet (prédictions 7j)', 'Dashboard temps réel (Grafana)', 'Alertes SMS/email (anomalies)']
                },
                {
                  title: 'Conformité & Reporting',
                  items: ['EU Water Framework Directive', 'Rapports consommation (PAC)', 'Traçabilité auditée (DuckDB)', 'Export CSV/PDF automatique']
                }
              ].map((integration, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '30px',
                  borderRadius: '15px',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{
                    color: '#F4D03F',
                    fontSize: '1.3em',
                    marginBottom: '15px',
                    fontWeight: 700
                  }}>
                    {integration.title}
                  </h3>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '0.95em' }}>
                    {integration.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6: Mission Accomplie */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <h2 style={{
              color: '#3498DB',
              fontSize: '3em',
              marginBottom: '40px'
            }}>
              🎯 Solution Production-Ready
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#A8E6CF',
              lineHeight: 1.8,
              maxWidth: '700px',
              margin: '0 auto 50px'
            }}>
              Système intégré validé sur 45ha avec -35% consommation eau et +18% rendement qualité
            </p>
            <div style={{
              background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(52, 152, 219, 0.3)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{ color: '#3498DB', marginBottom: '25px', fontSize: '1.5em' }}>💡 Avantages Clés</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2.2, paddingLeft: '25px', fontSize: '1.1em', textAlign: 'left' }}>
                <li><strong style={{ color: '#3498DB' }}>Économies:</strong> -35% eau, -28% énergie pompage</li>
                <li><strong style={{ color: '#3498DB' }}>Qualité:</strong> +18% rendement qualité A (calibre uniforme)</li>
                <li><strong style={{ color: '#3498DB' }}>Conformité:</strong> Rapports automatiques EU Water Directive</li>
                <li><strong style={{ color: '#3498DB' }}>ROI:</strong> 8 mois amortissement (€18,900 économies/an)</li>
              </ul>
            </div>
            <div style={{ marginTop: '50px' }}>
              <a
                href="/"
                style={{
                  background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
                  color: '#fff',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1em',
                  fontWeight: 700,
                  display: 'inline-block',
                  boxShadow: '0 5px 20px rgba(52, 152, 219, 0.4)'
                }}
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
