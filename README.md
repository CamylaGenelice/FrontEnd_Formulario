# 💻 Cadastro de Usuários - Interface React

Este é o front-end do sistema de gestão de usuários, desenvolvido com **React.js**. A aplicação oferece uma interface moderna para o cadastro de novos usuários, comunicando-se de forma assíncrona com o back-end em FastAPI.

## 📋 Arquitetura do Front-end

O projeto foi estruturado para manter o código limpo e organizado:

* **Components (`src/`)**: Contém o componente principal `App.js` e o formulário de cadastro `CadastroUsuario.js`.
* **Styles (`src/App.css`)**: Centraliza a identidade visual, utilizando uma paleta de cores baseada no tema escuro (`#282c34`).
* **Public (`public/`)**: Contém o arquivo `index.html`, que serve como o "hospedeiro" onde o React injeta a aplicação através da `div#root`.



---

## 🛠️ Tecnologias Utilizadas

* **React.js**: Biblioteca principal para a interface.
* **JavaScript (ES6+)**: Lógica de estado e chamadas de API.
* **CSS3**: Estilização com Flexbox e animações de transição.
* **Node.js & npm**: Gerenciamento de pacotes e scripts de execução.

---

## ✨ Funcionalidades

1.  **Formulário de Cadastro**:
    * Campos validados para Nome, E-mail e Senha.
    * Verificação visual do tamanho da senha (mínimo de 8 caracteres).
2.  **Integração com API**:
    * Consumo do endpoint `POST /auth/usuarios`.
    * Tratamento de respostas de erro (ex: e-mail já cadastrado) e sucesso.
3.  **Experiência do Usuário (UX)**:
    * Design responsivo e centralizado.
    * Feedback visual imediato após a submissão do formulário.

---

## ⚙️ Configuração e Execução

### Pré-requisitos
* **Node.js** instalado na máquina.
* **Back-end** (FastAPI) rodando na porta `8000`.

### Passos para Rodar o Projeto

1.  **Instale as dependências** (na primeira vez):
    ```bash
    npm install
    ```
2.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm start
    ```
    *A aplicação será aberta em `http://localhost:3000`.*

---

## 📡 Comunicação com o Back-end

A interface está configurada para enviar requisições para:
`http://localhost:8000/auth/usuarios`

> **Nota:** Certifique-se de que o middleware de **CORS** está ativo no seu `main.py` do FastAPI para permitir que o navegador autorize a troca de dados entre as portas 3000 e 8000.



---

## 🛡️ Validações Síncronas

Antes de enviar os dados para o `Service` no back-end, o front-end garante que:
* Todos os campos estão preenchidos.
* A senha atende aos critérios mínimos de segurança definidos pela regra de negócio.
