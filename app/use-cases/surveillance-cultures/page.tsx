'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SurveillanceCultures() {
  const metrics = [
    { label: 'Couverture', value: '500ha', desc: 'par vol autonome' },
    { label: 'Précision NDVI', value: '5cm', desc: 'résolution multi-spectrale' },
    { label: 'Autonomie', value: '4h', desc: 'tri-source énergie' },
    { label: 'Coût/ha', value: '€0.12', desc: 'vs €2.50 traditionnel' }
  ];

  const capabilities = [
    {
      title: 'Imagerie Multi-Spectrale',
      icon: '📸',
      features: [
        'NDVI (Normalized Difference Vegetation Index)',
        'NDRE (Red Edge - stress précoce)',
        'RGB haute résolution (5cm/pixel)',
        'Infrarouge thermique (irrigation)'
      ]
    },
    {
      title: 'Analyse Prédictive',
      icon: '🧠',
      features: [
        'DuckDB embeddings pour historique',
        'Prophet forecasting (rendements)',
        'Détection anomalies (maladies, stress)',
        'Ollama local (privacy-first)'
      ]
    },
    {
      title: 'Couverture Autonome',
      icon: '⬡',
      features: [
        'Flight planning AI-optimisé',
        'Évitement obstacles (LiDAR)',
        'Coordination flotte (LoRa mesh)',
        'RTK GPS (précision 2cm)'
      ]
    },
    {
      title: 'Stockage Décentralisé',
      icon: '📡',
      features: [
        'IPFS pour images haute résolution',
        'LoRa pour télémétrie temps réel',
        'Edge computing (traitement local)',
        'Synchronisation différée (4G/5G)'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a3a1a 0%, #0f2f0f 50%, #0a1f0a 100%)',
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
              background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '30px',
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(244, 208, 63, 0.15), 0 8px 40px rgba(244, 208, 63, 0.1)'
            }}>
              🌾 Surveillance Cultures
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#A8E6CF',
              lineHeight: 1.8,
              maxWidth: '800px',
              marginBottom: '40px'
            }}>
              Imagerie multi-spectrale autonome pour optimisation rendements et détection précoce du stress végétal
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginTop: '50px'
            }}>
              {metrics.map((metric, idx) => (
                <div key={idx} style={{
                  background: 'rgba(46, 204, 113, 0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(46, 204, 113, 0.3)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#2ECC71', marginBottom: '5px' }}>
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
              color: '#2ECC71',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(46, 204, 113, 0.3)',
              paddingBottom: '15px'
            }}>
              🔄 Pipeline de Surveillance
            </h2>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '50px',
              borderRadius: '20px',
              fontFamily: 'monospace',
              color: '#A8E6CF',
              lineHeight: 2,
              fontSize: '1.1em',
              border: '2px solid rgba(46, 204, 113, 0.2)'
            }}>
              <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│           ⬡ Flotte Hexadrones Autonomes                │
│      (4 drones, vol coordonné, 500ha en 2h30)          │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  📸 Capture Images     │
        │  • Multi-spectral      │
        │  • RGB 5cm résolution  │
        │  • IR thermique        │
        │  • LiDAR 3D            │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  📡 Transmission       │
        │  • LoRa (télémétrie)   │
        │  • IPFS (images)       │
        │  • Edge computing      │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  🧠 Analyse IA Locale  │
        │  • DuckDB embeddings   │
        │  • Ollama (privacy)    │
        │  • Prophet forecast    │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  📊 Rapports Actionables│
        │  • Cartes NDVI         │
        │  • Zones stress        │
        │  • Prédictions rendement│
        └────────────────────────┘`}</pre>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Capabilities */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 style={{
              color: '#2ECC71',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(46, 204, 113, 0.3)',
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
                    color: '#2ECC71',
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
              color: '#2ECC71',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(46, 204, 113, 0.3)',
              paddingBottom: '15px'
            }}>
              📋 Cas d'Usage : Ferme Pilote
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(46, 204, 113, 0.3)'
            }}>
              <h3 style={{ color: '#2ECC71', fontSize: '2em', marginBottom: '25px' }}>
                🌾 Grande Culture - Blé d'hiver 320ha
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
                    <li>Stress hydrique hétérogène (sols variables)</li>
                    <li>Détection tardive maladies fongiques</li>
                    <li>Sur-fertilisation zones performantes</li>
                    <li>Coût inspection manuelle : €800/semaine</li>
                  </ul>
                </div>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '25px',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ color: '#2ECC71', fontSize: '1.3em', marginBottom: '15px' }}>
                    ✅ Solution AgriSurvey
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Survol bi-hebdomadaire (2x/semaine)</li>
                    <li>NDVI + NDRE détection précoce (7j avance)</li>
                    <li>Cartes modulation fertilisation</li>
                    <li>Coût total : €38/semaine (95% économie)</li>
                  </ul>
                </div>
              </div>
              <div style={{
                background: 'rgba(46, 204, 113, 0.2)',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid rgba(46, 204, 113, 0.4)'
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
                    { metric: '+12%', label: 'Rendement moyen' },
                    { metric: '-18%', label: 'Intrants azotés' },
                    { metric: '7 jours', label: 'Avance détection' },
                    { metric: '€28/ha', label: 'Gain net' }
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

        {/* Slide 5: Technical Stack */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#2ECC71',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(46, 204, 113, 0.3)',
              paddingBottom: '15px'
            }}>
              🛠️ Stack Technique
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '25px'
            }}>
              {[
                {
                  category: '⬡ Drone Hardware',
                  items: ['Hexadrone custom frame', 'Multi-spectral MicaSense', 'LiDAR Velodyne Puck', 'RTK GPS (2cm precision)']
                },
                {
                  category: '⚡ Énergie Autonome',
                  items: ['Tri-source architecture', 'Autonomie 4h continue', 'Recharge intelligente', 'Monitoring temps réel']
                },
                {
                  category: '📡 Communication',
                  items: ['LoRa mesh (15km range)', 'IPFS storage', '4G/5G fallback', 'Edge computing']
                },
                {
                  category: '🧠 IA & Analytics',
                  items: ['DuckDB embeddings', 'Ollama local (privacy)', 'Prophet forecasting', 'NDVI/NDRE processing']
                },
                {
                  category: '💾 Data Platform',
                  items: ['IPFS decentralized', 'DuckDB vector DB', 'Time-series analytics', 'Zero cloud dependency']
                },
                {
                  category: '🔒 Sécurité',
                  items: ['100% local processing', 'EU data sovereignty', 'Encrypted LoRa', 'No external API calls']
                }
              ].map((stack, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{
                    color: '#F4D03F',
                    fontSize: '1.2em',
                    marginBottom: '15px',
                    fontWeight: 700
                  }}>
                    {stack.category}
                  </h3>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '20px', fontSize: '0.9em' }}>
                    {stack.items.map((item, itemIdx) => (
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
              color: '#2ECC71',
              fontSize: '3em',
              marginBottom: '40px'
            }}>
              🎯 Prêt pour Production
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#A8E6CF',
              lineHeight: 1.8,
              maxWidth: '700px',
              margin: '0 auto 50px'
            }}>
              Solution autonome, souveraine et rentable validée en conditions réelles sur 320ha
            </p>
            <div style={{
              background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(46, 204, 113, 0.3)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{ color: '#2ECC71', marginBottom: '25px', fontSize: '1.5em' }}>💡 Avantages Clés</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2.2, paddingLeft: '25px', fontSize: '1.1em', textAlign: 'left' }}>
                <li><strong style={{ color: '#2ECC71' }}>Autonomie:</strong> 95% réduction coûts opérationnels</li>
                <li><strong style={{ color: '#2ECC71' }}>Précision:</strong> Détection 7 jours avant symptômes visibles</li>
                <li><strong style={{ color: '#2ECC71' }}>Souveraineté:</strong> 100% données locales (EU compliance)</li>
                <li><strong style={{ color: '#2ECC71' }}>ROI:</strong> Amortissement en 1.2 saisons</li>
              </ul>
            </div>
            <div style={{ marginTop: '50px' }}>
              <a
                href="/"
                style={{
                  background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
                  color: '#fff',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1em',
                  fontWeight: 700,
                  display: 'inline-block',
                  boxShadow: '0 5px 20px rgba(46, 204, 113, 0.4)'
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
