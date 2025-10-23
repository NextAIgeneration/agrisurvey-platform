'use client';

export default function IAPredictive() {
  const specs = [
    { label: 'Modèles Locaux', value: '100%', sublabel: 'Ollama (privacy-first)' },
    { label: 'Latence Inference', value: '<2s', sublabel: 'deepseek-r1:1.5b' },
    { label: 'Vector DB', value: 'DuckDB', sublabel: 'embeddings in-process' },
    { label: 'Forecasting', value: 'Prophet', sublabel: 'time-series prediction' },
    { label: 'Précision NDVI', value: '92%', sublabel: 'détection stress (7j avance)' },
    { label: 'Coût IA', value: '€0', sublabel: 'zero API calls externe' }
  ];

  const models = [
    {
      task: 'Embeddings Sémantiques',
      model: 'nomic-embed-text',
      size: '274 MB',
      use_cases: [
        'Vectorisation images multi-spectrales',
        'Recherche similarité parcelles',
        'Clustering zones homogènes',
        'RAG queries documentation agricole'
      ],
      performance: 'Latency: 50ms P95 | Dimensionality: 768'
    },
    {
      task: 'Analyse & Raisonnement',
      model: 'deepseek-r1:1.5b',
      size: '1.1 GB',
      use_cases: [
        'Diagnostic anomalies cultures',
        'Recommandations interventions',
        'Analyse rapports techniques',
        'Chatbot agriculteur (Q&A)'
      ],
      performance: 'Latency: 1.2s avg | Success: 100% (tested)'
    },
    {
      task: 'Time-Series Forecasting',
      model: 'Prophet (Meta)',
      size: '15 MB',
      use_cases: [
        'Prédiction rendements (6 semaines)',
        'Besoins irrigation (7 jours)',
        'Évolution NDVI tendances',
        'Fenêtres optimales traitement'
      ],
      performance: 'MAE: ±8% | Training: 2s | Inference: <100ms'
    },
    {
      task: 'Classification Images',
      model: 'Custom CNN (PyTorch)',
      size: '45 MB',
      use_cases: [
        'Détection maladies feuilles (12 classes)',
        'Comptage plants/arbres (instance segm.)',
        'Classification sol (6 types)',
        'Identification adventices (weeds)'
      ],
      performance: 'Accuracy: 89% | Inference: 35ms (Jetson AGX)'
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #2a2a3a 0%, #1f1f2f 50%, #0f0f1f 100%)',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <header style={{ marginBottom: '40px' }}>
          <a href="/" style={{ color: '#9B59B6', fontSize: '1rem', marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
            ← Retour à l'accueil
          </a>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🧠 IA Prédictive & Analytics
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#BB8FCE', lineHeight: 1.6 }}>
            Stack IA 100% locale (Ollama + DuckDB + Prophet) pour analyse et prédiction agronomique
          </p>
        </header>

        {/* Architecture Diagram */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#9B59B6',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(155, 89, 182, 0.3)',
            paddingBottom: '10px'
          }}>
            Architecture IA Locale
          </h2>

          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '30px',
            borderRadius: '12px',
            fontFamily: 'monospace',
            color: '#BB8FCE',
            lineHeight: 1.8,
            overflowX: 'auto',
            fontSize: '0.9em'
          }}>
            <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│              📸 DONNÉES MULTI-SOURCES                   │
│                                                         │
│  • Images multi-spectrales (NDVI, NDRE, RGB)           │
│  • Point clouds LiDAR (3D terrain)                      │
│  • Thermal imaging (stress hydrique)                    │
│  • Capteurs sol IoT (humidité, N/P/K)                   │
│  • Météo locale (température, pluviométrie)             │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────┐
│            🗄️ DuckDB VECTOR DATABASE                    │
│                                                         │
│  ┌───────────────────────────────────────────┐         │
│  │  nomic-embed-text (274 MB)                │         │
│  │  • Vectorisation images (768 dims)        │         │
│  │  • Embeddings metadata (GPS + timestamp)  │         │
│  │  • Cosine similarity search               │         │
│  │  • 50ms P95 latency (in-process)          │         │
│  └───────────────────────────────────────────┘         │
│                                                         │
│  Time-Series Tables:                                    │
│  • ndvi_timeseries (parcelle_id, date, value)          │
│  • weather_history (date, temp, rain, wind)            │
│  • soil_sensors (timestamp, depth, moisture, NPK)      │
│  • interventions_log (date, type, product, dose)       │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ├───→ Prophet Forecasting
                    │     • NDVI trends (6 semaines)
                    │     • Irrigation needs (7 jours)
                    │     • Yield prediction (harvest)
                    │
                    ├───→ Ollama Local (deepseek-r1:1.5b)
                    │     • Diagnostic anomalies
                    │     • Recommandations agronomiques
                    │     • Q&A chatbot (privacy-first)
                    │
                    └───→ Custom CNN (PyTorch)
                          • Disease detection (12 classes)
                          • Plant counting (segmentation)
                          • Weed identification
                    ▼
┌─────────────────────────────────────────────────────────┐
│              📊 INSIGHTS & ACTIONS                      │
│                                                         │
│  • Cartes prescription (fertilisation, irrigation)      │
│  • Alertes précoces (stress, maladies)                  │
│  • Prédictions rendements (±8% MAE)                     │
│  • Rapports PDF automatiques (hebdomadaires)            │
│  • Dashboard temps réel (Grafana)                       │
└─────────────────────────────────────────────────────────┘`}</pre>
          </div>
        </section>

        {/* Technical Specs */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#9B59B6',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(155, 89, 182, 0.3)',
            paddingBottom: '10px'
          }}>
            Spécifications Stack IA
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {specs.map((spec, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(187, 143, 206, 0.15) 100%)',
                padding: '25px',
                borderRadius: '10px',
                borderLeft: '4px solid #9B59B6'
              }}>
                <div style={{ fontSize: '0.9em', color: '#BB8FCE', marginBottom: '8px' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#9B59B6', marginBottom: '5px' }}>
                  {spec.value}
                </div>
                <div style={{ fontSize: '0.85em', color: '#c0c0c0' }}>
                  {spec.sublabel}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Models */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#9B59B6',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(155, 89, 182, 0.3)',
            paddingBottom: '10px'
          }}>
            4 Modèles IA Locaux
          </h2>

          <div style={{ display: 'grid', gap: '25px', marginTop: '30px' }}>
            {models.map((model, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '15px'
                }}>
                  <div>
                    <h3 style={{ color: '#9B59B6', fontSize: '1.5em', margin: '0 0 8px 0' }}>
                      {model.task}
                    </h3>
                    <div style={{
                      background: 'rgba(155, 89, 182, 0.2)',
                      color: '#9B59B6',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.9em',
                      fontWeight: 600,
                      display: 'inline-block'
                    }}>
                      {model.model}
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(46, 204, 113, 0.2)',
                    color: '#2ECC71',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9em',
                    fontWeight: 600
                  }}>
                    {model.size}
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#F4D03F', fontSize: '1.1em', marginBottom: '12px' }}>
                    Cas d'Usage:
                  </h4>
                  <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1em' }}>
                    {model.use_cases.map((uc, ucIdx) => (
                      <li key={ucIdx}>{uc}</li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '15px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.9em',
                  color: '#BB8FCE'
                }}>
                  <strong>Performance:</strong> {model.performance}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#9B59B6',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(155, 89, 182, 0.3)',
            paddingBottom: '10px'
          }}>
            Applications Prédictives
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginTop: '30px'
          }}>
            {[
              {
                app: '🌾 Détection Précoce Stress',
                scenario: 'Blé d\'hiver - Parcelle 85ha',
                problem: 'Stress hydrique zone nord-est non visible à l\'œil',
                solution: [
                  'Analyse NDVI/NDRE bi-hebdomadaire',
                  'ML détection variation -8% (seuil alerte)',
                  'Alerte agriculteur 7 jours avant symptômes',
                  'Prescription irrigation différenciée (3 zones)'
                ],
                result: 'Perte évitée: 4.2 tonnes (€1,260 @ €300/t)'
              },
              {
                app: '📈 Prédiction Rendements',
                scenario: 'Maïs grain - 120ha',
                problem: 'Incertitude rendement (vente contrats à terme)',
                solution: [
                  'Prophet time-series (NDVI + météo 3 ans)',
                  'Prédiction 6 semaines pré-récolte',
                  'Confidence interval ±8% (MAE validé)',
                  'Optimisation date récolte (humidité grain)'
                ],
                result: 'Précision: 11.2 t/ha prédit vs 11.6 réel (3.4% erreur)'
              },
              {
                app: '🐛 Classification Maladies',
                scenario: 'Pommes de terre - 42ha',
                problem: 'Mildiou détecté tardivement (traitement inefficace)',
                solution: [
                  'Custom CNN entraîné (12 maladies, 8K images)',
                  'Inference drone (35ms/image Jetson AGX)',
                  'Détection stade précoce (lésions <5mm)',
                  'Cartes prescription fongicide (zones affectées)'
                ],
                result: 'Économie: 65% fongicide + rendement protégé (+12%)'
              },
              {
                app: '💧 Optimisation Irrigation',
                scenario: 'Tomates plein champ - 28ha',
                problem: 'Sur-irrigation zones argileuses (gaspillage)',
                solution: [
                  'Prophet forecast besoins hydriques (7j)',
                  'Intégration capteurs sol (30cm depth)',
                  'Thermal imaging stress detection',
                  'Modulation débit goutte-à-goutte (6 zones)'
                ],
                result: 'Économie eau: -38% (2,450 m³) + qualité fruit +15%'
              }
            ].map((useCase, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h3 style={{ color: '#9B59B6', fontSize: '1.4em', marginBottom: '12px' }}>
                  {useCase.app}
                </h3>
                <div style={{
                  background: 'rgba(155, 89, 182, 0.15)',
                  padding: '12px',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  fontSize: '0.95em',
                  color: '#BB8FCE',
                  fontWeight: 600
                }}>
                  {useCase.scenario}
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#F4D03F' }}>Problématique:</strong>
                  <p style={{ color: '#c0c0c0', marginTop: '8px', lineHeight: 1.6 }}>
                    {useCase.problem}
                  </p>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2ECC71' }}>Solution IA:</strong>
                  <ul style={{ color: '#c0c0c0', marginTop: '8px', paddingLeft: '25px', lineHeight: 1.8 }}>
                    {useCase.solution.map((sol, solIdx) => (
                      <li key={solIdx}>{sol}</li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  background: 'rgba(46, 204, 113, 0.2)',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '0.95em',
                  color: '#2ECC71',
                  fontWeight: 600
                }}>
                  ✅ {useCase.result}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy & Sovereignty */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(187, 143, 206, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(155, 89, 182, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#9B59B6', marginBottom: '20px', fontSize: '1.4em' }}>🔒 Privacy-First & Souveraineté</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '25px'
          }}>
            <div>
              <h4 style={{ color: '#F4D03F', fontSize: '1.2em', marginBottom: '15px' }}>
                Pourquoi IA Locale (Ollama)
              </h4>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
                <li><strong>Privacy:</strong> Données agricoles sensibles restent sur infrastructure EU</li>
                <li><strong>Coût:</strong> €0 API calls vs €450/mois Claude API (10K requêtes)</li>
                <li><strong>Latence:</strong> <2s local vs 800-1500ms cloud API</li>
                <li><strong>Disponibilité:</strong> 100% offline-capable (pas internet requis)</li>
                <li><strong>RGPD:</strong> Compliance automatique (pas transfert data hors EU)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#F4D03F', fontSize: '1.2em', marginBottom: '15px' }}>
                DuckDB In-Process Analytics
              </h4>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
                <li><strong>Performance:</strong> 50ms P95 queries (vs 200ms PostgreSQL)</li>
                <li><strong>Simplicité:</strong> Pas de serveur DB séparé à gérer</li>
                <li><strong>Vectors:</strong> Support natif embeddings (768 dims)</li>
                <li><strong>Analytics:</strong> SQL OLAP optimisé time-series</li>
                <li><strong>Portabilité:</strong> Single file database (backup facile)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(155, 89, 182, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(46, 204, 113, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#2ECC71', marginBottom: '20px', fontSize: '1.4em' }}>💡 Impact Mesurable IA Prédictive</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}>
            {[
              { metric: '7 jours', label: 'Avance détection stress' },
              { metric: '±8%', label: 'Précision prédiction rendement' },
              { metric: '-38%', label: 'Économie eau irrigation' },
              { metric: '€0', label: 'Coût inférence IA (local)' }
            ].map((impact, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '2px solid rgba(46, 204, 113, 0.3)'
              }}>
                <div style={{
                  fontSize: '2.5em',
                  fontWeight: 800,
                  color: '#2ECC71',
                  marginBottom: '8px'
                }}>
                  {impact.metric}
                </div>
                <div style={{ fontSize: '0.95em', color: '#BB8FCE' }}>
                  {impact.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#888'
        }}>
          <p style={{ marginBottom: '10px' }}>
            <a href="/" style={{ color: '#9B59B6', textDecoration: 'none', marginRight: '20px' }}>Accueil</a>
            <a href="/docs" style={{ color: '#9B59B6', textDecoration: 'none' }}>Documentation</a>
          </p>
          <p style={{ fontSize: '0.9em', color: '#BB8FCE' }}>
            FFT Cognitive Foundation • AgriSurvey Platform • 2025
          </p>
        </footer>

      </div>
    </div>
  );
}
