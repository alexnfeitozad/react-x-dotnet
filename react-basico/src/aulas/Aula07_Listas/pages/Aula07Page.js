import { ListaTarefas } from '../components/ListaTarefas';

export function Aula07Page() {
  return (
    <div className="modern-card" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
      <h2 style={{ color: '#0f3460', marginBottom: '15px' }}>Aula 07: Renderizando Listas</h2>
      
      <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
        No React, como o JSX é só JavaScript, nós não temos "loops" HTML nativos. Nós usamos a função <strong><code>.map()</code></strong> nativa do Javascript para transformar uma Array de Dados em uma Array de Tags HTML! E não se esqueça da prop <code>key</code>!
      </p>

      <ListaTarefas />

    </div>
  );
}
