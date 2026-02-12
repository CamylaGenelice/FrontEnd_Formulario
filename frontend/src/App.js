import React from 'react';
import './App.css'; 
// Importamos o componente (ajusta o caminho se o criaste noutra pasta)
import FormCadastro from './components/FormCadastro'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top Fórmulario</h1>
      </header>
      
      <main>
        {/* Aqui chamamos o formulário que criámos antes */}
        <FormCadastro />
      </main>
    </div>
  );
}

export default App;
