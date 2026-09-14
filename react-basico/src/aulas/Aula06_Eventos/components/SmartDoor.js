import { useState } from 'react';

export function SmartDoor() {
  // O Estado (State) guarda se a porta está aberta ou fechada.
  const [aberta, setAberta] = useState(false);

  // A Função de Evento que será disparada ao clicar
  function alternarPorta() {
    setAberta(!aberta);
  }

  // Estilos dinâmicos baseados no estado
  const estiloPorta = {
    width: '180px',
    height: '320px',
    backgroundColor: aberta ? '#f5deb3' : '#ba885a', // Fica mais clara quando aberta
    border: '4px solid #643f25',
    borderRadius: '4px',
    position: 'relative',
    transition: 'all 0.6s ease-in-out',
    transformOrigin: 'left center', // A "dobradiça" fica na esquerda
    transform: aberta ? 'perspective(1000px) rotateY(-70deg)' : 'perspective(1000px) rotateY(0deg)',
    boxShadow: aberta ? '20px 10px 20px rgba(0,0,0,0.2)' : '5px 5px 15px rgba(0,0,0,0.3)',
    margin: '0 auto'
  };

  const estiloMacaneta = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    width: '12px',
    height: '50px',
    backgroundColor: '#3b3a36',
    borderRadius: '6px',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.4)',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={{ padding: '40px' }}>
      <div style={estiloPorta}>
        
        {/* A maçaneta tem o evento onClick que chama a nossa função */}
        <div 
          style={estiloMacaneta} 
          onClick={alternarPorta}
          title="Clique para abrir/fechar!"
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e94560'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3b3a36'}
        ></div>
        
        {/* Mostra um texto apenas se a porta estiver aberta */}
        {aberta && (
          <div style={{ position: 'absolute', width: '100%', textAlign: 'center', top: '130px', fontWeight: 'bold', color: '#643f25', transform: 'rotateY(70deg)' }}>
            Narnia! 🦁
          </div>
        )}

      </div>
    </div>
  );
}
