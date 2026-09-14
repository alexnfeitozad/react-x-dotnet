import { CopoImpuro, CopoPuro } from '../components/Copo';

export function Aula08Page() {
  return (
    <div className="modern-card" style={{ maxWidth: '800px', width: '100%', textAlign: 'center', margin: '0 auto' }}>
      <h2 style={{ color: '#0f3460', marginBottom: '15px' }}>Aula 08: Mantendo Componentes Puros</h2>
      
      <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
        No React, a renderização deve ser <strong>Pura</strong> (como uma fórmula matemática: para a mesma entrada, sempre a mesma saída). 
        Se um componente modificar variáveis externas antes de devolver o HTML, você terá bugs terríveis.<br/>
        <em>Nota: No modo de desenvolvimento, o React chama o componente 2 vezes propositalmente para expor esses erros!</em>
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3 style={{ color: '#c62828' }}>Forma Impura ❌</h3>
          <CopoImpuro />
          <CopoImpuro />
          <CopoImpuro />
        </div>

        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3 style={{ color: '#00796b' }}>Forma Pura ✅</h3>
          <CopoPuro convidado={1} />
          <CopoPuro convidado={2} />
          <CopoPuro convidado={3} />
        </div>
      </div>
    </div>
  );
}
