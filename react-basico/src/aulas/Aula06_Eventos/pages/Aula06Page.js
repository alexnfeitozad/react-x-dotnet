import { SmartDoor } from '../components/SmartDoor';

export function Aula06Page() {
  return (
    <div className="modern-card" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
      <h2 style={{ color: '#0f3460', marginBottom: '15px' }}>Aula 06: Eventos e Estado (State)</h2>
      
      <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
        No React, usamos <strong>onClick</strong> para escutar o clique do mouse e o <strong>useState</strong> para avisar a tela de que ela precisa ser redesenhada quando a variável muda!
        <br/><br/>
        <strong>Desafio:</strong> Clique na maçaneta abaixo para abrir a porta!
      </p>

      <SmartDoor />

    </div>
  );
}
