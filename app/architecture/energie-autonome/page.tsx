'use client';

export default function EnergieAutonome() {
  const specs = [
    { label: 'Autonomie Vol', value: '4h', sublabel: 'continue (charge utile 3.5kg)' },
    { label: 'Sources Énergie', value: '3', sublabel: 'architecture redondante' },
    { label: 'Capacité Totale', value: '28Ah', sublabel: '@22.2V (622Wh)' },
    { label: 'Recharge Complète', value: '45min', sublabel: 'fast-charge intelligente' },
    { label: 'Cycles Vie', value: '2000+', sublabel: 'cellules LiHV premium' },
    { label: 'Monitoring', value: 'Temps réel', sublabel: 'BMS intelligent + LoRa' }
  ];

  const triSourceArchitecture = [
    {
      source: 'Source Primaire - Batteries LiHV',
      icon: '🔋',
      capacity: '18Ah @ 22.2V (400Wh)',
      details: [
        '6S4P configuration (24 cellules LiHV)',
        'Décharge 35C (max 630A burst)',
        'BMS 6S avec équilibrage actif',
        'Température régulée (-10°C à +60°C)',
        'Indicateur capacité résiduelle (SOC)'
      ]
    },
    {
      source: 'Source Secondaire - Micro-Hydrogénérateurs',
      icon: '💧',
      capacity: '6Ah @ 22.2V (133Wh)',
      details: [
        'Turbines miniatures intégrées',
        'Activation flux air (vol > 15 km/h)',
        'Rendement 18% (optimisé profil)',
        'Appoint continu (prolonge autonomie)',
        'Pas de pièces mobiles mécaniques'
      ]
    },
    {
      source: 'Source Tertiaire - Captation Environnementale',
      icon: '⚡',
      capacity: '4Ah @ 22.2V (89Wh)',
      details: [
        'Panneaux solaires flexibles (ailes)',
        'Récupération énergie freinage moteurs',
        'Condensateurs supercapacité (buffer)',
        'Gestion intelligente multi-source',
        'Priorité consommation optimisée'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #3a2a1a 0%, #2f1f0f 50%, #1f0f0a 100%)',
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
          <a href="/" style={{ color: '#F4D03F', fontSize: '1rem', marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
            ← Retour à l'accueil
          </a>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ⚡ Énergie Autonome Tri-Source
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#D4AF37', lineHeight: 1.6 }}>
            Architecture énergétique redondante pour 4h d'autonomie de vol continue
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
            color: '#F4D03F',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(244, 208, 63, 0.3)',
            paddingBottom: '10px'
          }}>
            Architecture Tri-Source Intégrée
          </h2>

          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '30px',
            borderRadius: '12px',
            fontFamily: 'monospace',
            color: '#D4AF37',
            lineHeight: 1.8,
            overflowX: 'auto',
            fontSize: '0.9em'
          }}>
            <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│              🔋 SOURCE PRIMAIRE (400Wh)                 │
│           Batteries LiHV 6S4P (18Ah @ 22.2V)            │
│   • BMS intelligent avec équilibrage actif              │
│   • Température régulée (-10°C à +60°C)                 │
│   • 2000+ cycles de vie garantis                        │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ├─→ Power Distribution Board (PDB)
                        │   • Filtrage EMI/RFI
                        │   • Monitoring consommation temps réel
                        │   • Redondance alimentation (dual rail)
                        │
┌───────────────────────┴─────────────────────────────────┐
│          💧 SOURCE SECONDAIRE (133Wh)                   │
│         Micro-Hydrogénérateurs (6Ah @ 22.2V)            │
│   • Turbines activées par flux air vol                  │
│   • Appoint continu (prolonge autonomie +25%)           │
│   • Rendement 18% optimisé                              │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ├─→ Intelligent Power Manager
                        │   • Priorisation sources
                        │   • Optimisation charge/décharge
                        │   • Failover automatique
                        │
┌───────────────────────┴─────────────────────────────────┐
│         ⚡ SOURCE TERTIAIRE (89Wh)                      │
│      Captation Environnementale (4Ah @ 22.2V)           │
│   • Panneaux solaires flexibles (ailes)                 │
│   • Récupération freinage moteurs                       │
│   • Supercondensateurs (buffer pics consommation)       │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
            ┌───────────────────────┐
            │   ⬡ HEXADRONE         │
            │   6 moteurs           │
            │   + charge utile 3.5kg│
            │   = 4h autonomie      │
            └───────────────────────┘`}</pre>
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
            color: '#F4D03F',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(244, 208, 63, 0.3)',
            paddingBottom: '10px'
          }}>
            Spécifications Système Énergétique
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {specs.map((spec, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, rgba(244, 208, 63, 0.15) 0%, rgba(212, 175, 55, 0.15) 100%)',
                padding: '25px',
                borderRadius: '10px',
                borderLeft: '4px solid #F4D03F'
              }}>
                <div style={{ fontSize: '0.9em', color: '#D4AF37', marginBottom: '8px' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#F4D03F', marginBottom: '5px' }}>
                  {spec.value}
                </div>
                <div style={{ fontSize: '0.85em', color: '#c0c0c0' }}>
                  {spec.sublabel}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tri-Source Details */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#F4D03F',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(244, 208, 63, 0.3)',
            paddingBottom: '10px'
          }}>
            Détails Architecture Tri-Source
          </h2>

          <div style={{ display: 'grid', gap: '25px', marginTop: '30px' }}>
            {triSourceArchitecture.map((source, idx) => (
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
                    {source.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#F4D03F', fontSize: '1.4em', margin: '0 0 8px 0' }}>
                      {source.source}
                    </h3>
                    <div style={{
                      background: 'rgba(244, 208, 63, 0.2)',
                      color: '#F4D03F',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.9em',
                      fontWeight: 600,
                      display: 'inline-block'
                    }}>
                      {source.capacity}
                    </div>
                  </div>
                </div>
                <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
                  {source.details.map((detail, detailIdx) => (
                    <li key={detailIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Power Management */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#F4D03F',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(244, 208, 63, 0.3)',
            paddingBottom: '10px'
          }}>
            Gestion Intelligente de l'Énergie
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginTop: '30px'
          }}>
            {[
              {
                feature: '📊 Monitoring Temps Réel',
                items: [
                  'Voltage chaque cellule (24 cellules)',
                  'Courant consommé par source',
                  'Température BMS (6 sondes)',
                  'State of Charge (SOC) précis ±2%',
                  'Télémétrie LoRa (GCS dashboard)'
                ]
              },
              {
                feature: '⚙️ Optimisation Automatique',
                items: [
                  'Priorisation source selon profil vol',
                  'Équilibrage actif cellules (100mA)',
                  'Protection surintensité/surtension',
                  'Mode économie (hover vs transit)',
                  'Alerte batterie faible (auto RTH)'
                ]
              },
              {
                feature: '🔄 Recharge Intelligente',
                items: [
                  'Fast-charge 6C (45min → 100%)',
                  'Courbe charge optimisée (CC/CV)',
                  'Dissipation thermique active',
                  'Test intégrité pré-charge',
                  'Balance finale automatique'
                ]
              },
              {
                feature: '🛡️ Sécurités Redondantes',
                items: [
                  'Failover automatique entre sources',
                  'Coupure d\'urgence (kill switch)',
                  'Protection court-circuit (500A fuse)',
                  'Isolation galvanique (dual rail)',
                  'Logging anomalies (DuckDB)'
                ]
              }
            ].map((mgmt, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h3 style={{ color: '#2ECC71', fontSize: '1.3em', marginBottom: '20px' }}>
                  {mgmt.feature}
                </h3>
                <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1em' }}>
                  {mgmt.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(244, 208, 63, 0.15) 0%, rgba(212, 175, 55, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(244, 208, 63, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#F4D03F', marginBottom: '20px', fontSize: '1.4em' }}>💡 Avantages Architecture Tri-Source</h3>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
            <li><strong style={{ color: '#F4D03F' }}>Autonomie:</strong> 4h continue vs 25min batteries standard (16x)</li>
            <li><strong style={{ color: '#F4D03F' }}>Redondance:</strong> Perte 1 source → mission continue (failover)</li>
            <li><strong style={{ color: '#F4D03F' }}>Économie:</strong> €380 opex/an vs €2,400 batteries jetables</li>
            <li><strong style={{ color: '#F4D03F' }}>Éco-responsable:</strong> 2000+ cycles vie (vs 300 LiPo standard)</li>
            <li><strong style={{ color: '#F4D03F' }}>Sécurité:</strong> BMS intelligent + protections redondantes</li>
          </ul>
        </section>

        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#888'
        }}>
          <p style={{ marginBottom: '10px' }}>
            <a href="/" style={{ color: '#F4D03F', textDecoration: 'none', marginRight: '20px' }}>Accueil</a>
            <a href="/docs" style={{ color: '#F4D03F', textDecoration: 'none' }}>Documentation</a>
          </p>
          <p style={{ fontSize: '0.9em', color: '#D4AF37' }}>
            FFT Cognitive Foundation • AgriSurvey Platform • 2025
          </p>
        </footer>

      </div>
    </div>
  );
}
