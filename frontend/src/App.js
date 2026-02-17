import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
// Importamos o componente (ajusta o caminho se o criaste noutra pasta)
import FormCadastro from './components/FormCadastro'; 
import CadastroProduto from './components/CadastroProduto';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Usuários</Link>
          <Link to="/produtos" style={{ color: 'white', textDecoration: 'none' }}>Produtos</Link>
        </nav>
      <div className="App-container">
        {/* Menu de Navegação Simples */}
        

        <Routes>
          {/* Quando a URL for http://localhost:3000/ */}
          <Route path="/" element={<FormCadastro />} />
          
          {/* Quando a URL for http://localhost:3000/produtos */}
          <Route path="/produtos" element={<CadastroProduto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
