import ProfilePictureFeature from './components/ProfilePictureFeature.jsx';
import { useState } from 'react';
import './App.css';
import Translations from './components/Translations.jsx';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'intro',
      title: 'Kas un kāpēc ir funkcionālā iezīme?',
      content: `Funkcionālā iezīme (Feature) ir sistēmas funkcionalitāte, kas sniedz vērtību lietotājam.

Kāpēc svarīgi:
- Palīdz strukturēt prasības
- Nodrošina skaidru komunikāciju starp komandu
- Koncentrējas uz biznesa vērtību
- Ļauj testēt sistēmu no lietotāja perspektīvas

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
- Loma (kas?)
- Darbība (ko dara?)
- Vērtība (kāpēc?)

Lietotājstāsts ir īss, vienkāršs apraksts no lietotāja perspektīvas.`
    },
    {
      id: 'scenarios',
      title: 'Kā veidot scenārijus?',
      content: `Scenāriji tiek veidoti Gherkin sintaksē:

Given (kad) - sākuma nosacījumi
When (ja) - darbība
Then (Tad) - sagaidāmais rezultāts

Piemērs:
kad lietotājs ir ielogojies sistēmā
ja lietotājs noklikšķina uz "Pievienot grozam"
tad prece tiek pievienota grozam

Cik daudz scenāriju?
- Nav stingra limita
- Parasti 3-7 scenāriji vienai iezīmei
- Aptver dažādus ceļus: veiksmīgus, kļūdu gadījumus, robežgadījumus
- Katrs scenārijs testē vienu konkrētu aspektu`
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
- Redzēt pilnu ainu
- Sabalansēt dažādas intereses
- Pieņemt labākus lēmumus`
    },
    {
      id: 'happy-path',
      title: 'Veiksmīgā iznākuma scenārijs (Happy Path)',
      content: `Happy Path Scenario - scenārijs, kurā viss notiek ideāli, bez kļūdām.

Galvenās īpašības:
- Apraksta optimālo lietotāja ceļu
- Nav izņēmumu vai kļūdu
- Parāda pamata funkcionalitāti
- Pirmais scenārijs, kas tiek testēts

Piemērs (e-veikals):
Given lietotājs ir izvēlējies preci
And prece ir pieejama noliktavā
When lietotājs veic pasūtījumu
And ievada derīgus maksājuma datus
Then pasūtījums tiek veiksmīgi apstrādāts
And lietotājs saņem apstiprinājuma e-pastu

Kāpēc svarīgs?
- Definē pamata gaidas
- Pamats citiem scenārijiem
- Palīdz saprast galveno plūsmu`
    }
  ];

  return (
    <>
      <ProfilePictureFeature />

      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px 20px'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Translations />

          <div style={{ marginTop: '60px' }}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
              Funkcionālās Iezīmes - Konspekts
            </h1>

            <div style={{ display: 'grid', gap: '20px' }}>
              {sections.map((section) => (
                <div
                  key={section.id}
                  onClick={() =>
                    setActiveSection(
                      activeSection === section.id ? null : section.id
                    )
                  }
                >
                  {section.title}

                  {activeSection === section.id && (
                    <div style={{ whiteSpace: 'pre-line' }}>
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;