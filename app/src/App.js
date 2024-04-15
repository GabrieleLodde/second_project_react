import './App.css';
import Bottone from './Bottone.js';

const alunni = [
  {id: 1, nome: "Luca", cognome: "Bracci"},
  {id: 2, nome: "Mario", cognome: "Pioddi"},
  {id: 3, nome: "Alice", cognome: "Manni"},
];

function App() {
  return (
    <div className="App">
      {
        alunni.map((alunno) => (
          <Bottone
            testo = {`${alunno.nome} ${alunno.cognome}`}
            numero = {alunno.id}
          />
        ))
      }
    </div>
  );
}

export default App;