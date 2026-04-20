# Arquivos na branch Master

# 📋 Cadastro de Usuários

Projeto desenvolvido com fins de estudo sobre desenvolvimento **front-end** e **back-end**, explorando a comunicação entre cliente e servidor, boas práticas de programação e segurança no tratamento de dados.

---

## 🚀 Tecnologias Utilizadas

### Front-end
- **React** — Biblioteca JavaScript para construção de interfaces de usuário.

### Back-end
- **Node.js** — Ambiente de execução JavaScript no lado do servidor.
- **Express** — Framework minimalista para criação de APIs e rotas HTTP.
- **MongoDB** — Banco de dados NoSQL orientado a documentos.
- **Mongoose** — ODM (Object Data Modeling) para modelagem de dados com MongoDB.
- **Bcrypt** — Biblioteca para criptografia de dados sensíveis.

---

## 🔒 Segurança

A segurança foi uma preocupação central no desenvolvimento deste projeto. Para garantir a proteção dos dados, foram adotadas as seguintes práticas:

- **Variáveis de ambiente (`.env`)** — Dados sensíveis, como credenciais e chaves de acesso, são armazenados em um arquivo `.env`, mantendo-os fora do controle de versão e protegidos de exposição indevida.
- **Criptografia com Bcrypt** — As senhas dos usuários são criptografadas utilizando a biblioteca Bcrypt antes de serem armazenadas no banco de dados, garantindo que informações críticas nunca sejam salvas em texto puro.

---

## 🎯 Objetivo

Este projeto tem como principal objetivo consolidar conhecimentos sobre:

- Criação e consumo de APIs RESTful;
- Integração entre front-end e back-end;
- Modelagem e persistência de dados com MongoDB;
- Implementação de boas práticas de segurança em aplicações web.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado;
- [MongoDB](https://www.mongodb.com/) configurado e em execução;
- Gerenciador de pacotes **npm** ou **yarn**.

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/yurizinho28/User-login.git
   cd cadastro-de-usuarios
   ```

2. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   PORT=5000
   MONGO_URI=sua_string_de_conexao_mongodb
   ```

3. **Instale as dependências e inicie o back-end:**
   ```bash
   cd api
   npm install
   npm run dev
   ```

4. **Instale as dependências e inicie o front-end:**
   ```bash
   cd interface
   npm install
   npm run dev
   ```

5. Acesse a aplicação em `http://localhost:3000`.

---

> Projeto desenvolvido para fins educacionais. 🚀
