import React, { useState } from 'react';

const CadastroUsuario = () => {
  // 1. Estados para os campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  // 2. Atualiza o estado conforme o usuário digita
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Função para enviar os dados ao FastAPI
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    setMensagem('');

    // Validação local (tamanho da senha)
    if (formData.senha.length < 8) {
      setErro('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/auth/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        // Captura o erro vindo do seu Service (ValueError -> HTTPException)
        throw new Error(data.detail || 'Erro ao cadastrar');
      }

      setMensagem(`Sucesso! ID do usuário: ${data.id}`);
      setFormData({ nome: '', email: '', senha: '' }); // Limpa o formulário
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <div className='card' style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h2>Cadastro de Usuário</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          name="nome"
          placeholder="Nome Completo"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="senha"
          type="password"
          placeholder="Senha (mín. 8 caracteres)"
          value={formData.senha}
          onChange={handleChange}
          required
        />
        
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
          Cadastrar
        </button>
      </form>

      {erro && <p style={{ color: 'red', marginTop: '10px' }}>{erro}</p>}
      {mensagem && <p style={{ color: 'green', marginTop: '10px' }}>{mensagem}</p>}
    </div>
  );
};

export default CadastroUsuario;