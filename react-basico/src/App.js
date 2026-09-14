import { useState } from 'react';
import { ArmarioPage as Aula01 } from './aulas/Aula01_Componentes/pages/ArmarioPage';
import { ExplicacaoPage as Aula02 } from './aulas/Aula02_ImportExport/pages/ExplicacaoPage';
import { Aula03Page as Aula03 } from './aulas/Aula03_JSX/pages/Aula03Page';
import { Aula04Page as Aula04 } from './aulas/Aula04_Chaves/pages/Aula04Page';
import { Aula05Page as Aula05 } from './aulas/Aula05_Props/pages/Aula05Page';
import './App.css';

function App() {
  const [aula, setAula] = useState(5); // Mudando o padrao para 5 para ja abrir na aula atual

  return (
    <div className="app-container">
      <nav className="sidebar">
        <h3>🚀 Estudos React</h3>
        <ul className="menu-list">
          <li><button className={`menu-btn ${aula === 1 ? 'active' : ''}`} onClick={() => setAula(1)}>Aula 01 - Componentes</button></li>
          <li><button className={`menu-btn ${aula === 2 ? 'active' : ''}`} onClick={() => setAula(2)}>Aula 02 - Import/Export</button></li>
          <li><button className={`menu-btn ${aula === 3 ? 'active' : ''}`} onClick={() => setAula(3)}>Aula 03 - Regras do JSX</button></li>
          <li><button className={`menu-btn ${aula === 4 ? 'active' : ''}`} onClick={() => setAula(4)}>Aula 04 - JS entre chaves</button></li>
          <li><button className={`menu-btn ${aula === 5 ? 'active' : ''}`} onClick={() => setAula(5)}>Aula 05 - Props</button></li>
        </ul>
      </nav>
      <main className="main-content">
        {aula === 1 && <Aula01 />}
        {aula === 2 && <Aula02 />}
        {aula === 3 && <Aula03 />}
        {aula === 4 && <Aula04 />}
        {aula === 5 && <Aula05 />}
      </main>
    </div>
  );
}

export default App;
