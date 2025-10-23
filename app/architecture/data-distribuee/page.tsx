'use client';

export default function DataDistribuee() {
  const specs = [
    { label: 'Stockage IPFS', value: '∞', sublabel: 'décentralisé sans limite' },
    { label: 'LoRa Range', value: '15km', sublabel: 'mesh network' },
    { label: 'Edge Computing', value: '<50ms', sublabel: 'latence traitement' },
    { label: 'Throughput', value: '250KB/s', sublabel: 'télémétrie LoRa' },
    { label: 'Redondance', value: '3 nœuds', sublabel: 'IPFS replication' },
    { label: 'Souveraineté', value: '100%', sublabel: 'EU data compliance' }
  ];

  const dataFlow = [
    {
      layer: 'Capture (Drone)',
      icon: '⬡',
      components: [
        'Capteurs multi-spectraux (5 bandes)',
        'LiDAR (300K points/s)',
        'Caméra RGB 61MP',
        'IR thermique 640x512',
        'GPS RTK (2cm precision)'
      ]
    },
    {
      layer: 'Transmission (LoRa Mesh)',
      icon: '📡',
      components: [
        'LoRa 868MHz (15km range)',
        'Mesh network auto-routing',
        'Télémétrie temps réel (1Hz)',
        'Failover 4G/5G (backup)',
        'Encryption AES-256'
      ]
    },
    {
      layer: 'Edge Processing',
      icon: '🖥️',
      components: [
        'Nvidia Jetson AGX Orin (275 TOPS)',
        'NDVI/NDRE calcul temps réel',
        'Point cloud processing (LiDAR)',
        'Compression images (lossless)',
        'Metadata enrichissement (GPS + timestamp)'
      ]
    },
    {
      layer: 'Stockage IPFS',
      icon: '🌐',
      components: [
        'Content-addressable (CID hash)',
        'Deduplication automatique',
        'Replication 3 nœuds (redundancy)',
        'Pinning services (Pinata, Filebase)',
        'Garbage collection automatique'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #1a3a3a 0%, #0f2f2f 50%, #0a2f2f 100%)',
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
          <a href="/" style={{ color: '#3498DB', fontSize: '1rem', marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
            ← Retour à l'accueil
          </a>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            📡 Data Distribuée & Edge Computing
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#A8E6CF', lineHeight: 1.6 }}>
            Architecture décentralisée IPFS + LoRa mesh pour souveraineté et résilience des données
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
            color: '#3498DB',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(52, 152, 219, 0.3)',
            paddingBottom: '10px'
          }}>
            Architecture Distribuée 3-Tiers
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
│                ⬡ DRONE FLEET (Tier 1)                  │
│           6 hexadrones avec capteurs multi-sources      │
│                                                         │
│  [Drone 1] ←→ [Drone 2] ←→ [Drone 3] (LoRa Mesh)      │
│      ↓            ↓            ↓                        │
│  [Drone 4] ←→ [Drone 5] ←→ [Drone 6]                   │
│                                                         │
│  • Télémétrie temps réel (1Hz via LoRa)                │
│  • Métadonnées GPS RTK (2cm)                            │
│  • Compression images embarquée                         │
└───────────────────┬─────────────────────────────────────┘
                    │
                    │ LoRa 868MHz (15km range)
                    │ Failover 4G/5G (backup)
                    ▼
┌─────────────────────────────────────────────────────────┐
│           🖥️ EDGE PROCESSING (Tier 2)                   │
│        Nvidia Jetson AGX Orin (Ground Station)         │
│                                                         │
│  ┌─────────────────────────────────────────┐           │
│  │  Real-time Processing Pipeline          │           │
│  │  • NDVI/NDRE computation (<50ms)        │           │
│  │  • LiDAR point cloud filtering          │           │
│  │  • Thermal analysis (stress detection)  │           │
│  │  • Metadata enrichment (timestamps)     │           │
│  └─────────────────────────────────────────┘           │
│                                                         │
│  ┌─────────────────────────────────────────┐           │
│  │  DuckDB Local (Analytics)               │           │
│  │  • Vector embeddings (nomic-embed-text) │           │
│  │  • Time-series indexing                 │           │
│  │  • Query cache (50ms P95)               │           │
│  └─────────────────────────────────────────┘           │
└───────────────────┬─────────────────────────────────────┘
                    │
                    │ IPFS Upload (Content-addressed)
                    │ Bandwidth throttling (adaptive)
                    ▼
┌─────────────────────────────────────────────────────────┐
│              🌐 IPFS NETWORK (Tier 3)                   │
│          Stockage Décentralisé & Souverain              │
│                                                         │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐           │
│  │  Node 1  │   │  Node 2  │   │  Node 3  │           │
│  │  (EU-FR) │←→ │  (EU-BE) │←→ │  (EU-NL) │           │
│  └──────────┘   └──────────┘   └──────────┘           │
│                                                         │
│  • Content-addressable (CID hash)                       │
│  • Automatic deduplication                              │
│  • 3-node replication (redundancy)                      │
│  • Garbage collection (retention policy)                │
│  • EU GDPR compliant (data sovereignty)                 │
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
            color: '#3498DB',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(52, 152, 219, 0.3)',
            paddingBottom: '10px'
          }}>
            Spécifications Infrastructure Data
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {specs.map((spec, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
                padding: '25px',
                borderRadius: '10px',
                borderLeft: '4px solid #3498DB'
              }}>
                <div style={{ fontSize: '0.9em', color: '#A8E6CF', marginBottom: '8px' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#3498DB', marginBottom: '5px' }}>
                  {spec.value}
                </div>
                <div style={{ fontSize: '0.85em', color: '#c0c0c0' }}>
                  {spec.sublabel}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Flow Layers */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#3498DB',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(52, 152, 219, 0.3)',
            paddingBottom: '10px'
          }}>
            Pipeline Data End-to-End
          </h2>

          <div style={{ display: 'grid', gap: '25px', marginTop: '30px' }}>
            {dataFlow.map((flow, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '3em'
                  }}>
                    {flow.icon}
                  </div>
                  <h3 style={{ color: '#3498DB', fontSize: '1.5em', margin: 0 }}>
                    {flow.layer}
                  </h3>
                </div>
                <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
                  {flow.components.map((comp, compIdx) => (
                    <li key={compIdx}>{comp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* LoRa Mesh Network */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#3498DB',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(52, 152, 219, 0.3)',
            paddingBottom: '10px'
          }}>
            LoRa Mesh Network
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginTop: '30px'
          }}>
            {[
              {
                feature: '📶 Caractéristiques Radio',
                items: [
                  'Fréquence 868MHz EU (ISM band)',
                  'Portée 15km line-of-sight',
                  'Spreading Factor 7-12 (adaptive)',
                  'Bandwidth 125kHz (optimal range)',
                  'Output power +20dBm (100mW)'
                ]
              },
              {
                feature: '🔀 Topologie Mesh',
                items: [
                  'Auto-routing entre drones (6 nœuds)',
                  'Multi-hop relaying (3 max)',
                  'Self-healing network (failover)',
                  'Load balancing automatique',
                  'Latency <500ms (P95)'
                ]
              },
              {
                feature: '📊 Données Transmises',
                items: [
                  'Télémétrie position (GPS RTK 1Hz)',
                  'État batterie tri-source (5s)',
                  'Alertes anomalies (temps réel)',
                  'Metadata images (hash SHA-256)',
                  'Commandes GCS (bi-directionnel)'
                ]
              },
              {
                feature: '🔒 Sécurité & Fiabilité',
                items: [
                  'Encryption AES-256 end-to-end',
                  'Authentication pré-shared keys',
                  'CRC error detection (Hamming)',
                  'ACK/NACK acknowledgments',
                  'Retry logic (max 3 attempts)'
                ]
              }
            ].map((mesh, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h3 style={{ color: '#F4D03F', fontSize: '1.3em', marginBottom: '20px' }}>
                  {mesh.feature}
                </h3>
                <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1em' }}>
                  {mesh.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* IPFS Benefits */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#3498DB',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(52, 152, 219, 0.3)',
            paddingBottom: '10px'
          }}>
            Pourquoi IPFS pour AgriSurvey
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '25px',
            marginTop: '30px'
          }}>
            {[
              {
                benefit: '🔒 Souveraineté EU',
                desc: 'Données agricoles sensibles restent en Europe (GDPR compliant). Aucune dépendance cloud US/CN.'
              },
              {
                benefit: '💰 Coût Optimisé',
                desc: 'Stockage décentralisé €0.02/GB/mois vs €0.15/GB AWS S3. Économie 87% sur 10TB.'
              },
              {
                benefit: '🌐 Content-Addressable',
                desc: 'CID hash (SHA-256) garantit intégrité données. Impossible modifier historique sans détection.'
              },
              {
                benefit: '♻️ Deduplication',
                desc: 'Images identiques stockées 1x seulement. Gain 40% espace pour captures répétitives.'
              },
              {
                benefit: '⚡ Performance',
                desc: 'Récupération depuis nœud le plus proche. Latency P95 <200ms vs 800ms cloud centralisé.'
              },
              {
                benefit: '🛡️ Résilience',
                desc: '3-node replication. Perte 2 nœuds → data accessible. Uptime 99.99% validé.'
              }
            ].map((ipfs, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5em',
                  marginBottom: '15px'
                }}>
                  {ipfs.benefit.split(' ')[0]}
                </div>
                <h3 style={{ color: '#3498DB', fontSize: '1.2em', marginBottom: '15px' }}>
                  {ipfs.benefit.substring(ipfs.benefit.indexOf(' ') + 1)}
                </h3>
                <p style={{ color: '#c0c0c0', fontSize: '0.95em', lineHeight: 1.6 }}>
                  {ipfs.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(168, 230, 207, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(52, 152, 219, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#3498DB', marginBottom: '20px', fontSize: '1.4em' }}>💡 Avantages Architecture Distribuée</h3>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
            <li><strong style={{ color: '#3498DB' }}>Souveraineté:</strong> 100% données EU, aucune dépendance cloud US</li>
            <li><strong style={{ color: '#3498DB' }}>Résilience:</strong> Mesh network auto-healing, 3-node IPFS replication</li>
            <li><strong style={{ color: '#3498DB' }}>Performance:</strong> Edge computing &lt;50ms, IPFS P95 &lt;200ms</li>
            <li><strong style={{ color: '#3498DB' }}>Coût:</strong> 87% économie stockage vs cloud centralisé</li>
            <li><strong style={{ color: '#3498DB' }}>Sécurité:</strong> AES-256 encryption, content-addressable integrity</li>
          </ul>
        </section>

        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#888'
        }}>
          <p style={{ marginBottom: '10px' }}>
            <a href="/" style={{ color: '#3498DB', textDecoration: 'none', marginRight: '20px' }}>Accueil</a>
            <a href="/docs" style={{ color: '#3498DB', textDecoration: 'none' }}>Documentation</a>
          </p>
          <p style={{ fontSize: '0.9em', color: '#A8E6CF' }}>
            FFT Cognitive Foundation • AgriSurvey Platform • 2025
          </p>
        </footer>

      </div>
    </div>
  );
}
