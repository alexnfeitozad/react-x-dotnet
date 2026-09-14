let contadorImpuro = 0;

export function CopoImpuro() {
  // ISSO É UM ERRO NO REACT! (Side Effect durante a renderização)
  // Modificar uma variável que existe fora do componente.
  // Devido ao StrictMode do React (que renderiza duas vezes no modo de desenvolvimento), 
  // os números vão aparecer como 2, 4, 6 em vez de 1, 2, 3!
  contadorImpuro = contadorImpuro + 1;
  
  return (
    <div className="modern-card" style={{ padding: '20px', margin: '10px', textAlign: 'center', backgroundColor: '#ffebee' }}>
      <h4 style={{ color: '#c62828', margin: 0 }}>Copo de Chá (Impuro) #{contadorImpuro}</h4>
    </div>
  );
}

export function CopoPuro({ convidado }) {
  // CORRETO! O componente apenas recebe a Prop e desenha a tela.
  // Se você passar a mesma prop, ele SEMPRE vai desenhar a mesma coisa (Puro).
  return (
    <div className="modern-card" style={{ padding: '20px', margin: '10px', textAlign: 'center', backgroundColor: '#e0f7fa' }}>
      <h4 style={{ color: '#00796b', margin: 0 }}>Copo de Chá (Puro) #{convidado}</h4>
    </div>
  );
}
