'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DigitalTwinCity() {
  const metrics = [
    { label: 'Surface Couverte', value: '25km²', desc: 'ville moyenne complète' },
    { label: 'Précision 3D', value: '5cm', desc: 'LiDAR + photogrammétrie' },
    { label: 'Mise à Jour', value: 'Mensuelle', desc: 'monitoring continu' },
    { label: 'Cas d\'Usage', value: '15+', desc: 'services municipaux' }
  ];

  const capabilities = [
    {
      title: 'Cartographie 3D Ville',
      icon: '🏙️',
      features: [
        'LiDAR haute densité (200 pts/m²)',
        'Photogrammétrie RGB (2cm résolution)',
        'Modèles 3D bâtiments navigables',
        'Orthophotos géoréférencées RTK'
      ]
    },
    {
      title: 'Monitoring Infrastructure',
      icon: '🔍',
      features: [
        'Suivi évolution chantiers (time-lapse)',
        'Détection anomalies (toitures, routes)',
        'Végétation urbaine (canopée, santé)',
        'Réseaux aériens (électricité, télécoms)'
      ]
    },
    {
      title: 'Planification Urbaine',
      icon: '📐',
      features: [
        'Simulations aménagement (3D)',
        'Études d\'impact visuel',
        'Optimisation mobilité (flux)',
        'Zones inondables (modèle terrain)'
      ]
    },
    {
      title: 'Services Citoyens',
      icon: '🌐',
      features: [
        'Plateforme participative (web)',
        'Permis de construire (visualisation)',
        'Tourisme virtuel (POI)',
        'Accessibilité PMR (itinéraires)'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #2a2a3a 0%, #1f1f2f 50%, #0f0f1f 100%)',
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
          color: #9B59B6 !important;
          background: rgba(155, 89, 182, 0.2);
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
          background: #9B59B6;
          box-shadow: 0 0 15px rgba(155, 89, 182, 0.6);
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
              color: '#9B59B6',
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
              background: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '30px',
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(155, 89, 182, 0.15), 0 8px 40px rgba(155, 89, 182, 0.1)'
            }}>
              🏙️ Digital Twin City
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#BB8FCE',
              lineHeight: 1.8,
              maxWidth: '800px',
              marginBottom: '40px'
            }}>
              Jumeau numérique 3D complet de la ville pour planification urbaine et services citoyens
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginTop: '50px'
            }}>
              {metrics.map((metric, idx) => (
                <div key={idx} style={{
                  background: 'rgba(155, 89, 182, 0.1)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(155, 89, 182, 0.3)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#9B59B6', marginBottom: '5px' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.95em', color: '#BB8FCE', fontWeight: 600, marginBottom: '5px' }}>
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
              color: '#9B59B6',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(155, 89, 182, 0.3)',
              paddingBottom: '15px'
            }}>
              🔄 Pipeline Digital Twin
            </h2>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '50px',
              borderRadius: '20px',
              fontFamily: 'monospace',
              color: '#BB8FCE',
              lineHeight: 2,
              fontSize: '1.1em',
              border: '2px solid rgba(155, 89, 182, 0.2)'
            }}>
              <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│        ⬡ Flotte Cartographie (5 drones, 4 jours)       │
│      LiDAR + RGB couvrant 25km² ville moyenne          │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  🗺️ Reconstruction 3D  │
        │  • Nuage points LiDAR  │
        │  • Photogrammétrie RGB │
        │  • Maillage 3D (LOD)   │
        │  • Géoréférencement    │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  🧠 IA Classification  │
        │  • Segmentation auto   │
        │  • Bâtiments/routes/...│
        │  • Végétation/eau      │
        │  • Réseaux aériens     │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  📊 Plateforme Web     │
        │  • Visualisation 3D    │
        │  • Mesures/annotations │
        │  • Time-series (évol.) │
        │  • API services        │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  🔄 Mise à Jour Continue│
        │  • Survol mensuel      │
        │  • Détection changements│
        │  • Versionning IPFS    │
        └────────────────────────┘`}</pre>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Capabilities */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
            <h2 style={{
              color: '#9B59B6',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(155, 89, 182, 0.3)',
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
                    color: '#9B59B6',
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

        {/* Slide 4: Use Cases */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#9B59B6',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(155, 89, 182, 0.3)',
              paddingBottom: '15px'
            }}>
              📋 15+ Cas d'Usage Municipaux
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '25px'
            }}>
              {[
                {
                  category: '🏗️ Urbanisme',
                  icon: '📐',
                  cases: ['Permis de construire (visualisation)', 'Études d\'impact visuel', 'Plans d\'aménagement 3D', 'Simulations projets']
                },
                {
                  category: '🚧 Travaux Publics',
                  icon: '🔧',
                  cases: ['Suivi chantiers (time-lapse)', 'Cubatures (terrassement)', 'État routes (détection nids-poule)', 'Réseaux aériens (maintenance)']
                },
                {
                  category: '🌳 Environnement',
                  icon: '🌱',
                  cases: ['Inventaire arbre (canopée)', 'Îlots chaleur urbains', 'Zones inondables', 'Pollution lumineuse']
                },
                {
                  category: '🚨 Sécurité',
                  icon: '👮',
                  cases: ['Simulations évacuation', 'Plans intervention pompiers', 'Zones risques (glissements)', 'Accessibilité PMR']
                },
                {
                  category: '🏛️ Patrimoine',
                  icon: '🎨',
                  cases: ['Conservation monuments', 'Visites virtuelles', 'Tourisme numérique', 'Archives historiques']
                },
                {
                  category: '📊 Analytics',
                  icon: '📈',
                  cases: ['Évolution démographique', 'Densification urbaine', 'Flux mobilité', 'Consommation énergie (toitures)']
                }
              ].map((useCase, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    fontSize: '2.5em',
                    marginBottom: '10px',
                    textAlign: 'center'
                  }}>
                    {useCase.icon}
                  </div>
                  <h3 style={{
                    color: '#9B59B6',
                    fontSize: '1.2em',
                    marginBottom: '15px',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}>
                    {useCase.category}
                  </h3>
                  <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px', fontSize: '0.9em' }}>
                    {useCase.cases.map((c, cIdx) => (
                      <li key={cIdx}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5: Real Example */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#9B59B6',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(155, 89, 182, 0.3)',
              paddingBottom: '15px'
            }}>
              📋 Cas d'Usage : Ville de Namur
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(187, 143, 206, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(155, 89, 182, 0.3)'
            }}>
              <h3 style={{ color: '#9B59B6', fontSize: '2em', marginBottom: '25px' }}>
                🏙️ Ville Moyenne 50K habitants - 25km²
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
                    ⚠️ Besoin
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Manque outils planification urbaine</li>
                    <li>Instruction permis construire lente (12 sem)</li>
                    <li>Suivi chantiers manuel (inefficace)</li>
                    <li>Pas d\'inventaire patrimoine arboré</li>
                  </ul>
                </div>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '25px',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ color: '#9B59B6', fontSize: '1.3em', marginBottom: '15px' }}>
                    ✅ Solution AgriSurvey
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
                    <li>Digital Twin complet (4 jours capture)</li>
                    <li>Plateforme web 15 services intégrés</li>
                    <li>Mise à jour mensuelle automatique</li>
                    <li>Données souveraines (EU, IPFS)</li>
                  </ul>
                </div>
              </div>
              <div style={{
                background: 'rgba(155, 89, 182, 0.2)',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid rgba(155, 89, 182, 0.4)'
              }}>
                <h4 style={{ color: '#F4D03F', fontSize: '1.4em', marginBottom: '15px' }}>
                  📈 Résultats Année 1 (2024)
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '20px',
                  marginTop: '20px'
                }}>
                  {[
                    { metric: '-40%', label: 'Délai permis construire' },
                    { metric: '€180K', label: 'Économies services (an)' },
                    { metric: '15', label: 'Services déployés' },
                    { metric: '4.6/5', label: 'Satisfaction services' }
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
                      <div style={{ fontSize: '0.9em', color: '#BB8FCE' }}>
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6: Mission Accomplie */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <h2 style={{
              color: '#9B59B6',
              fontSize: '3em',
              marginBottom: '40px'
            }}>
              🎯 Smart City Ready
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#BB8FCE',
              lineHeight: 1.8,
              maxWidth: '700px',
              margin: '0 auto 50px'
            }}>
              Jumeau numérique 25km² complet avec 15 services municipaux opérationnels
            </p>
            <div style={{
              background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(187, 143, 206, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(155, 89, 182, 0.3)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{ color: '#9B59B6', marginBottom: '25px', fontSize: '1.5em' }}>💡 Avantages Clés</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2.2, paddingLeft: '25px', fontSize: '1.1em', textAlign: 'left' }}>
                <li><strong style={{ color: '#9B59B6' }}>Efficacité:</strong> -40% délais administratifs (permis)</li>
                <li><strong style={{ color: '#9B59B6' }}>Économies:</strong> €180K/an services mutualisés</li>
                <li><strong style={{ color: '#9B59B6' }}>Souveraineté:</strong> Données EU, IPFS décentralisé</li>
                <li><strong style={{ color: '#9B59B6' }}>ROI:</strong> 14 mois (€85K investissement initial)</li>
              </ul>
            </div>
            <div style={{ marginTop: '50px' }}>
              <a
                href="/"
                style={{
                  background: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)',
                  color: '#fff',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1em',
                  fontWeight: 700,
                  display: 'inline-block',
                  boxShadow: '0 5px 20px rgba(155, 89, 182, 0.4)'
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
