import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'intro',
      title: 'Kas un kāpēc ir funkcionālā iezīme?',
      content: `Funkcionālā iezīme (Feature) ir sistēmas funkcionalitāte, kas sniedz vērtību lietotājam.

Kāpēc svarīgi:
• Palīdz strukturēt prasības
• Nodrošina skaidru komunikāciju starp komandu
• Koncentrējas uz biznesa vērtību
• Ļauj testēt sistēmu no lietotāja perspektīvas

Funkcionālā iezīme apraksta "ko" sistēma dara, nevis "kā" tā to dara.`
    },
    {
      id: 'user-story',
      title: 'Kādā formātā veidot lietotājstāstus?',
      content: `Lietotājstāsts (User Story) tiek veidots šādā formātā:

"Kā [lietotāja tips],
es vēlos [mērķis/darbība],
lai [iemesls/vērtība]"

Piemērs:
"Kā interneta veikala klients,
es vēlos pievienot preces grozam,
lai varētu veikt pasūtījumu vēlāk"

Galvenās sastāvdaļas:
• Loma (kas?)
• Darbība (ko dara?)
• Vērtība (kāpēc?)

Lietotājstāsts ir īss, vienkāršs apraksts no lietotāja perspektīvas.`
    },
    {
      id: 'scenarios',
      title: 'Kā veidot scenārijus?',
      content: `Scenāriji tiek veidoti Gherkin sintaksē:

Given (Dotais) - sākuma nosacījumi
When (Kad) - darbība
Then (Tad) - sagaidāmais rezultāts

Piemērs:
Given lietotājs ir ielogojies sistēmā
When lietotājs noklikšķina uz "Pievienot grozam"
Then prece tiek pievienota grozam

Cik daudz scenāriju?
• Nav stingra limita
• Parasti 3-7 scenāriji vienai iezīmei
• Aptver dažādus ceļus: veiksmīgus, kļūdu gadījumus, robežgadījumus
• Katrs scenārijs testē vienu konkrētu aspektu`
    },
    {
      id: 'rubiks-cube',
      title: 'Rubika kubs un funkcionālās iezīmes',
      content: `Rubika kuba pieeja palīdz skatīties uz funkcionālajām iezīmēm no dažādiem leņķiem:

📦 Trīs dimensijas:

1. Biznesa vērtība
   - Ko sistēma sniedz biznesam?
   - Kāda ir ROI (ieguldījumu atdeve)?

2. Tehniskā implementācija
   - Kā to realizēt?
   - Kādas tehnoloģijas izmantot?

3. Lietotāja pieredze
   - Kā lietotājs to izmanto?
   - Vai tas ir intuitīvi?

Šī pieeja palīdz:
• Redzēt pilnu ainu
• Sabalansēt dažādas intereses
• Pieņemt labākus lēmumus`
    },
    {
      id: 'happy-path',
      title: 'Veiksmīgā iznākuma scenārijs (Happy Path)',
      content: `Happy Path Scenario - scenārijs, kurā viss notiek ideāli, bez kļūdām.

Galvenās īpašības:
• Apraksta optimālo lietotāja ceļu
• Nav izņēmumu vai kļūdu
• Parāda pamata funkcionalitāti
• Pirmais scenārijs, kas tiek testēts

Piemērs (e-veikals):
Given lietotājs ir izvēlējies preci
And prece ir pieejama noliktavā
When lietotājs veic pasūtījumu
And ievada derīgus maksājuma datus
Then pasūtījums tiek veiksmīgi apstrādāts
And lietotājs saņem apstiprinājuma e-pastu

Kāpēc svarīgs?
• Definē pamata gaidas
• Pamats citiem scenārijiem
• Palīdz saprast galveno plūsmu`
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '2.5rem',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Funkcionālās Iezīmes - Konspekts
        </h1>
        
        <p style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.9)',
          fontSize: '1.1rem',
          marginBottom: '40px'
        }}>
          Noklikšķini uz jautājuma, lai redzētu atbildi
        </p>

        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {sections.map((section) => (
            <div
              key={section.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                padding: '20px',
                background: activeSection === section.id ? '#667eea' : '#f7fafc',
                color: activeSection === section.id ? 'white' : '#2d3748',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '1.3rem',
                  fontWeight: '600'
                }}>
                  {section.title}
                </h2>
                <span style={{
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s',
                  transform: activeSection === section.id ? 'rotate(180deg)' : 'rotate(0)',
                  display: 'inline-block'
                }}>
                  ▼
                </span>
              </div>
              
              {activeSection === section.id && (
                <div style={{
                  padding: '25px',
                  color: '#2d3748',
                  lineHeight: '1.8',
                  whiteSpace: 'pre-line',
                  fontSize: '1.05rem',
                  animation: 'fadeIn 0.3s ease-in'
                }}>
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '40px',
          padding: '25px',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            color: '#667eea',
            marginBottom: '15px',
            fontSize: '1.5rem'
          }}>
            Galvenie secinājumi
          </h3>
          <ul style={{
            textAlign: 'left',
            color: '#2d3748',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.05rem'
          }}>
            <li>Funkcionālās iezīmes fokusējas uz lietotāja vērtību</li>
            <li>Lietotājstāsti seko "Kā-es vēlos-lai" formātam</li>
            <li>Scenāriji izmanto Given-When-Then struktūru</li>
            <li>Rubika kubs palīdz skatīties no dažādām perspektīvām</li>
            <li>Happy Path parāda ideālo ceļu bez kļūdām</li>
          </ul>
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

export default App;