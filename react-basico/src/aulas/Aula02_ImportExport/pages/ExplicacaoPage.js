export function ExplicacaoPage() {
  return (
    <div className="modern-card" style={{ maxWidth: '600px', width: '100%' }}>
      <h2 style={{ color: '#0f3460', borderBottom: '2px solid #f4f7f6', paddingBottom: '15px', marginBottom: '20px' }}>
        Aula 02: Importando e Exportando
      </h2>
      <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px' }}>
        Esta aula foi focada apenas na <strong>organização de arquivos</strong> (como um arquivo enxerga o outro usando <code style={{ backgroundColor: '#f4f7f6', padding: '2px 6px', borderRadius: '4px', color: '#e94560' }}>import</code> e <code style={{ backgroundColor: '#f4f7f6', padding: '2px 6px', borderRadius: '4px', color: '#e94560' }}>export</code>).
      </p>
      <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px' }}>
        Não criamos uma tela nova para essa aula porque nós aplicamos esse conceito <strong>dentro da Aula 01</strong>, 
        quando fizemos o <code>Cabinet.js</code> importar a <code>Door.js</code> e a <code>Shelf.js</code>!
      </p>
    </div>
  );
}
