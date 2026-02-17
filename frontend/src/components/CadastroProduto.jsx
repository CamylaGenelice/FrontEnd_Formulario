import React, { useState, useEffect } from 'react';
import '../Produto.css' // IMPORTANTE: Importar o novo CSS

const CadastroProduto = () => {
  const [produto, setProduto] = useState({ code: '', name: '', size: '' });
  const [listaProdutos, setListaProdutos] = useState([]);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    buscarProdutos();
  }, []);

  const buscarProdutos = async () => {
    try {
      const response = await fetch('http://localhost:8000/prod/produtos');
      const data = await response.json();
      if (response.ok) setListaProdutos(data);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
    }
  };

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/prod/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
      });
      if (response.ok) {
        setMensagem("Produto cadastrado!");
        buscarProdutos(); 
        setProduto({ code: '', name: '', size: '' });
      }
    } catch (err) {
      setMensagem("Erro ao conectar com servidor");
    }
  };

  return (
    <div className="produto-page-container">
      <div className="produto-card-container">
        <div className="produto-header">
          <h2>Gestão de Produtos</h2>
          <form onSubmit={handleSubmit}>
            <input name="code" placeholder="Código" value={produto.code} onChange={handleChange} required />
            <input name="name" placeholder="Nome" value={produto.name} onChange={handleChange} required />
            <input name="size" placeholder="Tamanho" value={produto.size} onChange={handleChange} required />
            <button type="submit">Cadastrar</button>
          </form>
          {mensagem && <p style={{color: '#2ecc71', marginTop: '10px'}}>{mensagem}</p>}
          <hr />
          <h3>📦 Histórico do Banco</h3>
        </div>

        {/* ÁREA COM ROLAGEM */}
        <div className="produto-scroll-area">
          {listaProdutos.map((item, index) => (
            <div key={item.id || index} className="produto-item">
              <p>{item.name} ({item.size})</p>
              <span>Código: {item.code}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CadastroProduto;