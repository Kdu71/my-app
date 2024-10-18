import './App.css';
import HelloWord from './components/HelloWord';
import Pessoa from './components/Pessoa';
import Pessoa2 from './components/Pessoa2';
import SayMyName from './components/SayMyName';
import Lista from './components/Lista';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
      <HelloWord/>
      <SayMyName nome = 'Matheus'/>
      <SayMyName nome = 'João'/>
      <SayMyName nome = {nome}/>
      <Pessoa 
        nome="Carlos Eduardo"
        idade="53"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
        />
      <Pessoa2
        nome="José"
        idade="25"
        profissao="Digitador"
        foto="https://via.placeholder.com/150"
      />

      <Lista/>
    </div>

    
  );
}

export default App;
