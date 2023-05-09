import './App.css';
import Botao1 from './components/Botao1';
import Botao2 from './components/Botao2';
import Botao3 from './components/Botao3';
import { useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState(null);

  return (
    <div className="App">
      <h2>Say my name...</h2>
      <Botao1 setMensagem={setMensagem} />
      <Botao2 setMensagem={setMensagem} />
      <Botao3 setMensagem={setMensagem} />
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App;
