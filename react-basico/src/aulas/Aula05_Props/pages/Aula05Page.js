import { CardProduto } from '../components/CardProduto';

export function Aula05Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#4a3b32' }}>Aula 05: Passando Props</h2>
      
      <p style={{ marginBottom: '30px', textAlign: 'center', maxWidth: '400px' }}>
        O mesmo componente (Fábrica) criando 3 produtos totalmente diferentes baseado nas informações (Props) que foram passadas para ele!
      </p>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Passando Props estáticas e numéricas/booleanas */}
        <CardProduto nome="Cadeira de Madeira" preco={150.00} emDestaque={false} />
        
        <CardProduto nome="Mesa de Jantar" preco={890.50} emDestaque={true} />
        
        <CardProduto nome="Prateleira Simples" preco={45.90} emDestaque={false} />
      </div>
    </div>
  );
}
