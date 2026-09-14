export function ListaTarefas() {
  // Uma array comum do JavaScript com objetos
  const tarefas = [
    { id: 1, texto: 'Estudar React', concluida: true },
    { id: 2, texto: 'Estudar Blazor', concluida: false },
    { id: 3, texto: 'Criar um repositório no GitHub', concluida: true },
    { id: 4, texto: 'Dominar o mundo', concluida: false }
  ];

  return (
    <div className="modern-card"
      style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
      <h3
        style={{ color: '#0f3460', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Minhas Tarefas</h3>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {/* No React, usamos a função .map() do JS para transformar dados em HTML */}
        {tarefas.map(tarefa => (
          <li
            key={tarefa.id} // Obrigatório no React: A prop 'key' ajuda o React a não se perder ao atualizar a lista
            style={{
              padding: '12px 10px',
              borderBottom: '1px solid #f4f7f6',
              color: tarefa.concluida ? '#aaa' : '#333',
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
              transition: 'all 0.3s'
            }}
          >
            {tarefa.concluida ? '✅' : '⏳'} {tarefa.texto}
          </li>
        ))}
      </ul>

    </div>
  );
}
