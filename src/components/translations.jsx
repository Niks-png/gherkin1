import './Translations.css';

function Translations() {
  const gherkinTerms = [
    { english: 'Feature', latvian: 'Funkcionālā iezīme' },
    { english: 'Background', latvian: 'kontekts' },
    { english: 'Scenario', latvian: 'Scenārijs' },
    { english: 'Scenario Outline', latvian: 'Scenārijs pēc parauga' },
    { english: 'Examples', latvian: 'Piemēri' },
    { english: 'Given', latvian: 'Kad' },
    { english: 'When', latvian: 'Ja' },
    { english: 'Then', latvian: 'Tad' },
    { english: 'And', latvian: 'Un' },
    { english: 'But', latvian: 'Bet' }
  ];

  return (
    <div className="translations-container ">
      <h1>Gherkin Termini</h1>
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