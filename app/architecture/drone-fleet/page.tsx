'use client';

export default function DroneFleet() {
  const specs = [
    { label: 'Configuration', value: 'Hexadrone', sublabel: 'stabilité + redondance' },
    { label: 'Autonomie', value: '4h', sublabel: 'tri-source énergie' },
    { label: 'Charge Utile', value: '3.5kg', sublabel: 'multi-capteurs' },
    { label: 'Portée LoRa', value: '15km', sublabel: 'mesh network' },
    { label: 'Précision GPS', value: '2cm', sublabel: 'RTK positioning' },
    { label: 'Flotte Type', value: '4-6', sublabel: 'drones coordonnés' }
  ];

  const sensors = [
    {
      title: 'Imagerie Multi-Spectrale',
      model: 'MicaSense RedEdge-MX',
      capabilities: [
        '5 bandes spectrales (RGB + NIR + Red Edge)',
        'Résolution 8cm @ 120m altitude',
        'NDVI, NDRE calcul temps réel',
        'Calibration radiométrique automatique'
      ]
    },
    {
      title: 'LiDAR 3D',
      model: 'Velodyne Puck LITE',
      capabilities: [
        '300,000 points/seconde',
        'Portée 100m, précision ±3cm',
        '16 canaux laser, 360° horizontal',
        'Nuages de points géoréférencés RTK'
      ]
    },
    {
      title: 'Caméra RGB',
      model: 'Sony A7R IV (61MP)',
      capabilities: [
        'Photogrammétrie 2cm résolution',
        'Obturateur global (pas distorsion)',
        'Capture 10 FPS, stockage RAW',
        'Géotags RTK intégrés'
      ]
    },
    {
      title: 'Infrarouge Thermique',
      model: 'FLIR Vue TZ20-R',
      capabilities: [
        'Résolution 640x512 pixels',
        'Sensibilité 0.05°C',
        'Détection stress hydrique',
        'Radiométrie absolue (température)'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #1a3a1a 0%, #0f2f0f 50%, #0a1f0a 100%)',
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
          <a href="/" style={{ color: '#2ECC71', fontSize: '1rem', marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
            ← Retour à l'accueil
          </a>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ⬡ Drone Fleet Management
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#A8E6CF', lineHeight: 1.6 }}>
            Flotte hexadrones autonomes avec coordination LoRa et énergie tri-source
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
            color: '#2ECC71',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(46, 204, 113, 0.3)',
            paddingBottom: '10px'
          }}>
            Architecture Flotte Coordonnée
          </h2>

          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '30px',
            borderRadius: '12px',
            fontFamily: 'monospace',
            color: '#A8E6CF',
            lineHeight: 1.8,
            overflowX: 'auto',
            fontSize: '0.9em'
          }}>
            <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│            🎮 Ground Control Station (GCS)              │
│      Mission Planning + Real-time Monitoring           │
│      • Mission planner (QGroundControl custom)          │
│      • Fleet orchestration (4-6 drones)                 │
│      • Failsafe management (auto RTH)                   │
└───────────────────────┬─────────────────────────────────┘
                        │
                        │ 4G/5G (fallback)
                        │ LoRa Mesh (primary)
                        ▼
        ┌───────────────────────────────────┐
        │   ⬡  ⬡  ⬡  ⬡  (Hexadrone Fleet)  │
        │                                   │
        │  Drone 1 ←→ Drone 2 ←→ Drone 3   │
        │     ↓           ↓           ↓     │
        │  Drone 4 ←→ Drone 5 ←→ Drone 6   │
        │                                   │
        │  • LoRa mesh (15km range)         │
        │  • Position sync (RTK)            │
        │  • Collision avoidance            │
        │  • Load balancing (battery)       │
        └───────────────┬───────────────────┘
                        │
                        │ Captured Data
                        │
                        ▼
        ┌───────────────────────────────────┐
        │    📡 Edge Processing Unit        │
        │    (Nvidia Jetson AGX Orin)       │
        │                                   │
        │  • Real-time NDVI computation     │
        │  • LiDAR point cloud processing   │
        │  • Thermal analysis               │
        │  • IPFS upload (images)           │
        └───────────────────────────────────┘`}</pre>
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
            color: '#2ECC71',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(46, 204, 113, 0.3)',
            paddingBottom: '10px'
          }}>
            Spécifications Techniques Hexadrone
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {specs.map((spec, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
                padding: '25px',
                borderRadius: '10px',
                borderLeft: '4px solid #2ECC71'
              }}>
                <div style={{ fontSize: '0.9em', color: '#A8E6CF', marginBottom: '8px' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#2ECC71', marginBottom: '5px' }}>
                  {spec.value}
                </div>
                <div style={{ fontSize: '0.85em', color: '#c0c0c0' }}>
                  {spec.sublabel}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sensors Payload */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#2ECC71',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(46, 204, 113, 0.3)',
            paddingBottom: '10px'
          }}>
            Charge Utile Multi-Capteurs (3.5kg)
          </h2>

          <div style={{ display: 'grid', gap: '25px', marginTop: '30px' }}>
            {sensors.map((sensor, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <h3 style={{ color: '#2ECC71', fontSize: '1.4em', margin: 0 }}>
                    {sensor.title}
                  </h3>
                  <span style={{
                    background: 'rgba(46, 204, 113, 0.2)',
                    color: '#2ECC71',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85em',
                    fontWeight: 600
                  }}>
                    {sensor.model}
                  </span>
                </div>
                <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
                  {sensor.capabilities.map((cap, capIdx) => (
                    <li key={capIdx}>{cap}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Flight Operations */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#2ECC71',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(46, 204, 113, 0.3)',
            paddingBottom: '10px'
          }}>
            Opérations de Vol Automatisées
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginTop: '30px'
          }}>
            {[
              {
                phase: '🚀 Pré-Vol',
                tasks: [
                  'Check batterie tri-source (>80%)',
                  'Calibration IMU + compas magnétique',
                  'Test communication LoRa mesh',
                  'Vérification géofencing zones'
                ]
              },
              {
                phase: '📍 Mission Planning',
                tasks: [
                  'Upload waypoints RTK (précision 2cm)',
                  'Calcul trajectoire optimale (énerg.)',
                  'Altitude adaptive terrain-following',
                  'Overlap 80% (photogrammétrie)'
                ]
              },
              {
                phase: '✈️ Vol Autonome',
                tasks: [
                  'Takeoff coordonné (séquence sûre)',
                  'Position hold précis (RTK)',
                  'Collision avoidance (LiDAR)',
                  'Capture automatique (triggers GPS)'
                ]
              },
              {
                phase: '🏁 Post-Vol',
                tasks: [
                  'Auto RTH (Return To Home)',
                  'Landing precision (vision + RTK)',
                  'Data offload (USB-C 3.2)',
                  'Log analysis + maintenance alerts'
                ]
              }
            ].map((operation, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h3 style={{ color: '#F4D03F', fontSize: '1.4em', marginBottom: '20px' }}>
                  {operation.phase}
                </h3>
                <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1em' }}>
                  {operation.tasks.map((task, taskIdx) => (
                    <li key={taskIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(46, 204, 113, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#2ECC71', marginBottom: '20px', fontSize: '1.4em' }}>💡 Avantages Hexadrone</h3>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
            <li><strong style={{ color: '#2ECC71' }}>Redondance:</strong> Perte 1 moteur → vol stable (5 restants)</li>
            <li><strong style={{ color: '#2ECC71' }}>Stabilité:</strong> Meilleure que quadcoptère (vent 35 km/h)</li>
            <li><strong style={{ color: '#2ECC71' }}>Charge utile:</strong> 3.5kg multi-capteurs simultanés</li>
            <li><strong style={{ color: '#2ECC71' }}>Autonomie:</strong> 4h continue (vs 25min batterie standard)</li>
            <li><strong style={{ color: '#2ECC71' }}>Précision:</strong> RTK 2cm positioning (repeatable)</li>
          </ul>
        </section>

        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#888'
        }}>
          <p style={{ marginBottom: '10px' }}>
            <a href="/" style={{ color: '#2ECC71', textDecoration: 'none', marginRight: '20px' }}>Accueil</a>
            <a href="/docs" style={{ color: '#2ECC71', textDecoration: 'none' }}>Documentation</a>
          </p>
          <p style={{ fontSize: '0.9em', color: '#A8E6CF' }}>
            FFT Cognitive Foundation • AgriSurvey Platform • 2025
          </p>
        </footer>

      </div>
    </div>
  );
}
