'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TourismeAerien() {
  const metrics = [
    { label: 'Sites Patrimoniaux', value: '50+', desc: 'monuments documentés' },
    { label: 'Résolution', value: '2cm', desc: 'modèles 3D photogrammétrie' },
    { label: 'Visites Virtuelles', value: '12K', desc: 'visiteurs/mois (moyenne)' },
    { label: 'Revenus/Site', value: '€850', desc: 'par mois (licences)' }
  ];

  const capabilities = [
    {
      title: 'Capture Patrimoniale',
      icon: '🏛️',
      features: [
        'Photogrammétrie haute résolution (2cm)',
        'Modèles 3D navigables (WebGL)',
        'Orthophotos géoréférencées',
        'Captures 4K/8K (promo vidéo)'
      ]
    },
    {
      title: 'Valorisation Numérique',
      icon: '🌐',
      features: [
        'Visites virtuelles immersives (VR)',
        'Annotations historiques (IA)',
        'Multi-langues (8 langues)',
        'Accessibilité PMR (100%)'
      ]
    },
    {
      title: 'Monétisation',
      icon: '💰',
      features: [
        'Licences musées/offices tourisme',
        'API intégration sites web',
        'Applications mobiles (iOS/Android)',
        'Contenus éducatifs (écoles)'
      ]
    },
    {
      title: 'Mise à Jour Continue',
      icon: '🔄',
      features: [
        'Captures saisonnières (4x/an)',
        'Suivi évolution (conservation)',
        'IPFS stockage pérenne',
        'Versionning complet (DuckDB)'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #3a2a1a 0%, #2f1f0f 50%, #1f0f0a 100%)',
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
          color: #F4D03F !important;
          background: rgba(244, 208, 63, 0.2);
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
          background: #F4D03F;
          box-shadow: 0 0 15px rgba(244, 208, 63, 0.6);
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
              color: '#F4D03F',
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
              background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '30px',
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(244, 208, 63, 0.2), 0 8px 40px rgba(244, 208, 63, 0.15)'
            }}>
              🏛️ Tourisme Aérien
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#D4AF37',
              lineHeight: 1.8,
              maxWidth: '800px',
              marginBottom: '40px'
            }}>
              Numérisation 3D du patrimoine culturel pour visites virtuelles immersives et monétisation
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginTop: '50px'
            }}>
              {metrics.map((metric, idx) => (
                <div key={idx} style={{
                  background: 'rgba(244, 208, 63, 0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 208, 63, 0.3)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#F4D03F', marginBottom: '5px' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.95em', color: '#D4AF37', fontWeight: 600, marginBottom: '5px' }}>
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
              color: '#F4D03F',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(244, 208, 63, 0.3)',
              paddingBottom: '15px'
            }}>
              🔄 Pipeline Capture → Valorisation
            </h2>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '50px',
              borderRadius: '20px',
              fontFamily: 'monospace',
              color: '#D4AF37',
              lineHeight: 2,
              fontSize: '1.1em',
              border: '2px solid rgba(244, 208, 63, 0.2)'
            }}>
              <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│         ⬡ Mission Capture Patrimoniale (1 jour)        │
│     Photogrammétrie 360° (800-1200 photos/site)        │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  📸 Post-Production    │
        │  • Photogrammétrie 3D  │
        │  • Modèles WebGL       │
        │  • Textures 4K/8K      │
        │  • Géoréférencement    │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  🧠 Enrichissement IA  │
        │  • OCR inscriptions    │
        │  • Annotations auto    │
        │  • Traduction (8 lg)   │
        │  • Recherche sémantique│
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  🌐 Publication        │
        │  • Visites VR          │
        │  • API intégration     │
        │  • Apps mobiles        │
        │  • IPFS (pérennité)    │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  💰 Monétisation       │
        │  • Licences B2B        │
        │  • Contenus éducatifs  │
        │  • Événements virtuels │
        └────────────────────────┘`}</pre>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Capabilities */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 style={{
              color: '#F4D03F',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(244, 208, 63, 0.3)',
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
                    color: '#F4D03F',
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
              color: '#F4D03F',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(244, 208, 63, 0.3)',
              paddingBottom: '15px'
            }}>
              📋 Cas d'Usage : Abbaye Médiévale
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, rgba(244, 208, 63, 0.15) 0%, rgba(212, 175, 55, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(244, 208, 63, 0.3)'
            }}>
              <h3 style={{ color: '#F4D03F', fontSize: '2em', marginBottom: '25px' }}>
                🏰 Abbaye de Villers-la-Ville (UNESCO)
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
                  <h4 style={{ color: '#2ECC71', fontSize: '1.3em', marginBottom: '15px' }}>
                    ⚠️ Besoin
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Site 12ha difficile d'accès (PMR)</li>
                    <li>Fréquentation limitée (45K visiteurs/an)</li>
                    <li>Budget conservation limité (€120K/an)</li>
                    <li>Rayonnement international faible</li>
                  </ul>
                </div>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '25px',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ color: '#F4D03F', fontSize: '1.3em', marginBottom: '15px' }}>
                    ✅ Solution AgriSurvey
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Capture drone 3D complète (2 jours)</li>
                    <li>Visite VR accessible 24/7 mondial</li>
                    <li>8 langues + audio-descriptions</li>
                    <li>Licences B2B (musées, écoles)</li>
                  </ul>
                </div>
              </div>
              <div style={{
                background: 'rgba(244, 208, 63, 0.2)',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid rgba(244, 208, 63, 0.4)'
              }}>
                <h4 style={{ color: '#2ECC71', fontSize: '1.4em', marginBottom: '15px' }}>
                  📈 Résultats Année 1 (2024)
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '20px',
                  marginTop: '20px'
                }}>
                  {[
                    { metric: '145K', label: 'Visiteurs virtuels' },
                    { metric: '€42K', label: 'Revenus licences' },
                    { metric: '85 pays', label: 'Rayonnement mondial' },
                    { metric: '4.8/5', label: 'Satisfaction (12K avis)' }
                  ].map((result, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: '2.2em',
                        fontWeight: 800,
                        color: '#2ECC71',
                        marginBottom: '5px'
                      }}>
                        {result.metric}
                      </div>
                      <div style={{ fontSize: '0.9em', color: '#D4AF37' }}>
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5: Business Model */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#F4D03F',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(244, 208, 63, 0.3)',
              paddingBottom: '15px'
            }}>
              💰 Modèle Économique
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {[
                {
                  title: '🏛️ Patrimoine Public',
                  revenue: '€850/mois/site',
                  items: ['Office de Tourisme (€300/mois)', 'Musées partenaires (€250/mois)', 'Écoles & universités (€200/mois)', 'Licences API (€100/mois)']
                },
                {
                  title: '🏰 Sites Privés',
                  revenue: '€1,200/mois/site',
                  items: ['Château hôtels (€500/mois)', 'Événements VR (€400/mois)', 'Contenus marketing (€200/mois)', 'Visites guidées virtuelles (€100/mois)']
                },
                {
                  title: '🎓 Contenus Éducatifs',
                  revenue: '€3,500/contenu',
                  items: ['Modules pédagogiques interactifs', 'Quiz & gamification', 'Ressources enseignants', 'Vente unique (pas abonnement)']
                },
                {
                  title: '🌍 Événements Virtuels',
                  revenue: '€2,000/événement',
                  items: ['Concerts immersifs (streaming)', 'Conférences patrimoine', 'Visites guidées expert', 'Capacité 500 participants simultanés']
                }
              ].map((model, idx) => (
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
                    marginBottom: '10px',
                    fontWeight: 700
                  }}>
                    {model.title}
                  </h3>
                  <div style={{
                    fontSize: '2em',
                    fontWeight: 800,
                    color: '#2ECC71',
                    marginBottom: '20px'
                  }}>
                    {model.revenue}
                  </div>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '20px', fontSize: '0.95em' }}>
                    {model.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '30px',
              background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.2) 0%, rgba(244, 208, 63, 0.2) 100%)',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid rgba(46, 204, 113, 0.4)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2em', color: '#D4AF37', marginBottom: '10px' }}>
                Revenus moyens / site / an
              </div>
              <div style={{ fontSize: '3em', fontWeight: 800, color: '#2ECC71' }}>
                €15,800
              </div>
              <div style={{ fontSize: '0.95em', color: '#c0c0c0', marginTop: '10px' }}>
                Coût capture initial : €4,500 • ROI : 3.4 mois
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6: Mission Accomplie */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <h2 style={{
              color: '#F4D03F',
              fontSize: '3em',
              marginBottom: '40px'
            }}>
              🎯 Modèle Validé & Rentable
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#D4AF37',
              lineHeight: 1.8,
              maxWidth: '700px',
              margin: '0 auto 50px'
            }}>
              50+ sites documentés, 145K visiteurs virtuels, €42K revenus annuels par site
            </p>
            <div style={{
              background: 'linear-gradient(135deg, rgba(244, 208, 63, 0.15) 0%, rgba(212, 175, 55, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(244, 208, 63, 0.3)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{ color: '#F4D03F', marginBottom: '25px', fontSize: '1.5em' }}>💡 Avantages Clés</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2.2, paddingLeft: '25px', fontSize: '1.1em', textAlign: 'left' }}>
                <li><strong style={{ color: '#F4D03F' }}>Accessibilité:</strong> 100% PMR, 24/7, 85 pays</li>
                <li><strong style={{ color: '#F4D03F' }}>Conservation:</strong> Archivage 3D pérenne (IPFS)</li>
                <li><strong style={{ color: '#F4D03F' }}>Revenus:</strong> €15,800/site/an (licences récurrentes)</li>
                <li><strong style={{ color: '#F4D03F' }}>ROI:</strong> 3.4 mois (capture + post-production)</li>
              </ul>
            </div>
            <div style={{ marginTop: '50px' }}>
              <a
                href="/"
                style={{
                  background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%)',
                  color: '#1a1a1a',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1em',
                  fontWeight: 700,
                  display: 'inline-block',
                  boxShadow: '0 5px 20px rgba(244, 208, 63, 0.4)'
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
