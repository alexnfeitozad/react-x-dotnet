export function Perfil() {
  const usuario = {
    nome: "Alex Feitoza",
    avatar: "https://github.com/alexnfeitozad.png",
    cargo: "Desenvolvedor"
  };

  const dataAtual = new Date().toLocaleDateString();

  return (
    <div className="modern-card" style={{ maxWidth: '320px', width: '100%', textAlign: 'center' }}>
      <h2 style={{ color: '#0f3460', fontSize: '18px', marginBottom: '20px' }}>Aula 04: Chaves no JSX</h2>

      {/* Injetando atributos com {} */}
      <img src={usuario.avatar}
        alt="Avatar" style={{
          width: '120px', height: '120px', borderRadius: '50%',
          border: '4px solid #f4f7f6', boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          marginBottom: '15px'
        }} />

      {/* Injetando texto com {} */}
      <h3 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '22px' }}>
        {usuario.nome}</h3>
      <p style={{ margin: '0', color: '#e94560', fontWeight: '600' }}>{usuario.cargo}</p>

      <div style={{
        marginTop: '25px', fontSize: '12px', color: '#999',
        borderTop: '1px solid #eee', paddingTop: '15px'
      }}>
        Acessado em: {dataAtual}
      </div>
    </div>
  );
}
