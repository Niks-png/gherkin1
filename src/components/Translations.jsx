import './Translations.css';

function Translations() {
  const gherkinTerms = [
    { english: 'Feature', latvian: 'Funkcionalitāte' },
    { english: 'Background', latvian: 'Konteksts' },
    { english: 'Scenario', latvian: 'Scenārijs' },
    { english: 'Scenario Outline', latvian: 'Scenārija struktūra' },
    { english: 'Examples', latvian: 'Piemēri' },
    { english: 'Given', latvian: 'Kad' },
    { english: 'When', latvian: 'Ja' },
    { english: 'Then', latvian: 'Tad' },
    { english: 'And', latvian: 'Un' },
    { english: 'But', latvian: 'Bet' }
  ];

  return (
    <div className="translations-container">
      <h1 style={{
        textAlign: 'center',
        color: 'white',
        fontSize: '2.5rem',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
      }}>
        Gherkin Termini
      </h1>
      <table className="translations-table">
        <thead>
          <tr>
            <th>Angļu valodā</th>
            <th>Latviešu valodā</th>
          </tr>
        </thead>
        <tbody>
          {gherkinTerms.map((term, index) => (
            <tr key={index}>
              <td>{term.english}</td>
              <td>{term.latvian}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Translations;