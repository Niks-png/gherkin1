import { useState } from 'react';

function ProfilePictureFeature() {
  const [activeScenario, setActiveScenario] = useState(null);

  const featureContent = {
    title: "Pievienot profila attēlu",
    description: "Kā reģistrēts lietotājs, es vēlos pievienot profila attēlu, lai personalizētu savu kontu un būtu atpazīstams citiem lietotājiem.",
    
    scenarios: [
      {
        id: 'happy-path',
        name: 'Veiksmīga profila attēla pievienošana',
        type: 'Happy Path',
        steps: [
          { keyword: 'Given', text: 'lietotājs ir ielogojies sistēmā' },
          { keyword: 'And', text: 'lietotājs atrodas profila iestatījumu lapā' },
          { keyword: 'When', text: 'lietotājs noklikšķina uz "Pievienot attēlu"' },
          { keyword: 'And', text: 'lietotājs izvēlas JPG attēlu ar izmēru 2MB' },
          { keyword: 'And', text: 'lietotājs apstiprina augšupielādi' },
          { keyword: 'Then', text: 'sistēma veiksmīgi augšupielādē attēlu' },
          { keyword: 'And', text: 'profila attēls tiek parādīts lietotāja profilā' },
          { keyword: 'And', text: 'lietotājs redz paziņojumu "Profila attēls veiksmīgi pievienots"' }
        ]
      },
      {
        id: 'wrong-format',
        name: 'Nekorekta faila formāta pievienošana',
        type: 'Error Path',
        steps: [
          { keyword: 'Given', text: 'lietotājs ir ielogojies sistēmā' },
          { keyword: 'And', text: 'lietotājs atrodas profila iestatījumu lapā' },
          { keyword: 'When', text: 'lietotājs noklikšķina uz "Pievienot attēlu"' },
          { keyword: 'And', text: 'lietotājs izvēlas PDF failu' },
          { keyword: 'Then', text: 'sistēma parāda kļūdas paziņojumu "Nederīgs faila formāts"' },
          { keyword: 'And', text: 'sistēma parāda atļautos formātus: JPG, PNG, GIF' },
          { keyword: 'And', text: 'profila attēls netiek pievienots' }
        ]
      },
      {
        id: 'file-too-large',
        name: 'Pārāk liela faila pievienošana',
        type: 'Error Path',
        steps: [
          { keyword: 'Given', text: 'lietotājs ir ielogojies sistēmā' },
          { keyword: 'And', text: 'lietotājs atrodas profila iestatījumu lapā' },
          { keyword: 'When', text: 'lietotājs noklikšķina uz "Pievienot attēlu"' },
          { keyword: 'And', text: 'lietotājs izvēlas JPG attēlu ar izmēru 15MB' },
          { keyword: 'Then', text: 'sistēma parāda kļūdas paziņojumu "Fails pārāk liels"' },
          { keyword: 'And', text: 'sistēma norāda maksimālo izmēru: 5MB' },
          { keyword: 'And', text: 'profila attēls netiek pievienots' }
        ]
      },
      {
        id: 'replace-existing',
        name: 'Esošā profila attēla nomaiņa',
        type: 'Alternative Path',
        steps: [
          { keyword: 'Given', text: 'lietotājs ir ielogojies sistēmā' },
          { keyword: 'And', text: 'lietotājam jau ir profila attēls' },
          { keyword: 'When', text: 'lietotājs noklikšķina uz "Mainīt attēlu"' },
          { keyword: 'And', text: 'lietotājs izvēlas jaunu PNG attēlu' },
          { keyword: 'And', text: 'lietotājs apstiprina nomaiņu' },
          { keyword: 'Then', text: 'vecais attēls tiek aizvietots ar jauno' },
          { keyword: 'And', text: 'jaunais attēls tiek parādīts profilā' },
          { keyword: 'And', text: 'lietotājs redz paziņojumu "Profila attēls atjaunināts"' }
        ]
      },
      {
        id: 'remove-picture',
        name: 'Profila attēla noņemšana',
        type: 'Alternative Path',
        steps: [
          { keyword: 'Given', text: 'lietotājs ir ielogojies sistēmā' },
          { keyword: 'And', text: 'lietotājam ir profila attēls' },
          { keyword: 'When', text: 'lietotājs noklikšķina uz "Noņemt attēlu"' },
          { keyword: 'And', text: 'lietotājs apstiprina noņemšanu' },
          { keyword: 'Then', text: 'profila attēls tiek noņemts' },
          { keyword: 'And', text: 'sistēma parāda noklusējuma avataru' },
          { keyword: 'And', text: 'lietotājs redz paziņojumu "Profila attēls noņemts"' }
        ]
      }
    ]
  };

  const getScenarioColor = (type) => {
    switch(type) {
      case 'Happy Path': return '#10b981';
      case 'Error Path': return '#ef4444';
      case 'Alternative Path': return '#f59e0b';
      default: return '#667eea';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Feature Header */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            display: 'inline-block',
            background: '#667eea',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            FUNKCIONĀLĀ IEZĪME
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            color: '#1a202c',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            {featureContent.title}
          </h1>
          
          <div style={{
            background: '#f7fafc',
            borderLeft: '4px solid #667eea',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '1.1rem',
            color: '#2d3748',
            lineHeight: '1.8'
          }}>
            <strong>Lietotājstāsts:</strong><br/>
            {featureContent.description}
          </div>
        </div>

        {/* Scenarios */}
        <h2 style={{
          color: 'white',
          fontSize: '2rem',
          marginBottom: '25px',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Scenāriji ({featureContent.scenarios.length})
        </h2>

        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {featureContent.scenarios.map((scenario) => (
            <div
              key={scenario.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                transition: 'all 0.3s',
                cursor: 'pointer',
                border: activeScenario === scenario.id ? `3px solid ${getScenarioColor(scenario.type)}` : '3px solid transparent'
              }}
              onClick={() => setActiveScenario(activeScenario === scenario.id ? null : scenario.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
              }}
            >
              {/* Scenario Header */}
              <div style={{
                padding: '20px 25px',
                background: activeScenario === scenario.id ? getScenarioColor(scenario.type) : '#f7fafc',
                color: activeScenario === scenario.id ? 'white' : '#2d3748',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '8px',
                    opacity: 0.9
                  }}>
                    {scenario.type}
                  </div>
                  <h3 style={{
                    margin: 0,
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    Scenārijs: {scenario.name}
                  </h3>
                </div>
                <span style={{
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s',
                  transform: activeScenario === scenario.id ? 'rotate(180deg)' : 'rotate(0)',
                  display: 'inline-block'
                }}>
                  ▼
                </span>
              </div>

              {/* Scenario Steps */}
              {activeScenario === scenario.id && (
                <div style={{
                  padding: '30px',
                  animation: 'fadeIn 0.3s ease-in'
                }}>
                  {scenario.steps.map((step, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        marginBottom: '15px',
                        alignItems: 'flex-start'
                      }}
                    >
                      <span style={{
                        background: getScenarioColor(scenario.type),
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        minWidth: '70px',
                        textAlign: 'center',
                        marginRight: '15px'
                      }}>
                        {step.keyword}
                      </span>
                      <span style={{
                        color: '#2d3748',
                        fontSize: '1.05rem',
                        lineHeight: '1.6',
                        paddingTop: '6px'
                      }}>
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{
          marginTop: '40px',
          padding: '30px',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
        }}>
          <h3 style={{
            color: '#667eea',
            fontSize: '1.5rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            📋 Scenāriju kopsavilkums
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '20px',
              background: '#f0fdf4',
              borderRadius: '8px',
              border: '2px solid #10b981'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✓</div>
              <div style={{ fontWeight: '600', color: '#10b981' }}>Happy Path</div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>1 scenārijs</div>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '20px',
              background: '#fef2f2',
              borderRadius: '8px',
              border: '2px solid #ef4444'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✗</div>
              <div style={{ fontWeight: '600', color: '#ef4444' }}>Error Paths</div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>2 scenāriji</div>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '20px',
              background: '#fffbeb',
              borderRadius: '8px',
              border: '2px solid #f59e0b'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>↻</div>
              <div style={{ fontWeight: '600', color: '#f59e0b' }}>Alternative Paths</div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>2 scenāriji</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default ProfilePictureFeature;