export function Formulario() {
  return (
    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#333' }}>Aula 03: Regras do JSX</h2>
      <p>Este formulário segue as 3 regras de ouro:</p>
      
      {/* 1. Um único elemento pai (a div acima) */}
      <form className="modern-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* 2. Atributos em camelCase (className, tabIndex) */}
        <div className="grupo-input">
          <label style={{ display: 'block', marginBottom: '5px' }}>Nome:</label>
          {/* 3. Tags fechadas obrigatórias (<input />) */}
          <input type="text" placeholder="Seu nome" style={{ padding: '8px', width: '100%' }} />
        </div>

        <button type="button" style={{ padding: '10px', backgroundColor: '#ba885a', color: 'white', border: 'none', cursor: 'pointer' }}>
          Enviar
        </button>
      </form>
    </div>
  );
}
