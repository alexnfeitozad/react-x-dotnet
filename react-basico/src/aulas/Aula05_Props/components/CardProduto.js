export function CardProduto({ nome, preco, emDestaque }) {
  // A borda muda de acordo com a Prop 'emDestaque'
  const borda = emDestaque ? '3px solid gold' : '1px solid #ccc';

  return (
    <div style={{
      border: borda,
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: 'white',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{nome}</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2a5a2a', margin: 0 }}>
        R$ {preco}
      </p>
      
      {emDestaque && (
        <span style={{ display: 'block', marginTop: '10px', fontSize: '12px', color: '#e94560', fontWeight: 'bold' }}>
          ⭐ MAIS VENDIDO
        </span>
      )}
    </div>
  );
}
