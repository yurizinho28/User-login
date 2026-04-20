import Input from './Components/Input.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <form action="">
          <Input
            name="Nome Completo:"
            type="text"
            placeholder="Digite seu nome completo"
          />

          <Input name="Email:" type="email" placeholder="Digite seu email" />

          <Input name="Senha:" type="password" placeholder="Digite sua senha" />

          <Input name="Idade:" type="number" placeholder="Digite sua idade" />

          <Input name="Apelido:" type="text" placeholder="Digite seu apelido" />

          <button type="submit">Logar</button>
        </form>

        <p>
          Não tem conta? <a href="#">Cadastre-se</a>
        </p>
      </div>
    </>
  );
}

export default App;
