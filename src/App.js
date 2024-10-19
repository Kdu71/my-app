import './App.css';
import HelloWord from './components/HelloWord';
import Pessoa from './components/Pessoa';
import Pessoa2 from './components/Pessoa2';
import SayMyName from './components/SayMyName';
import Lista from './components/Lista';
import Evento from './components/Evento';
import Form from './components/Form';
import FormUseStates from './components/FormUseStates';

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

      <Evento numero={1}/>
      <Evento numero={2}/>

      <Form/>
      <FormUseStates/>
    </div>

    
  );
}

export default App;
