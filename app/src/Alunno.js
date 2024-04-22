import { useState } from 'react';

export default function Alunno({alunno, loadAlunni}) {
  const [contatore, setContatore] = useState(alunno.id);
  const [inCancellazione, setInCancellazione] = useState(false);
  const [inConferma, setInConferma] = useState(false);

  function incrementaNumero() {
    setContatore(contatore + 1);
  }

  async function cancellaAlunno(){
    setInCancellazione(true);
    const response = await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"});
    loadAlunni();
    setInCancellazione(false);
  }

  function richiediConferma() {
    setInConferma(true);
  }

  function annulla(){
    setInConferma(false);
  }

  return (
    <div>
      <p className="paragrafo">
         {`${alunno.nome} ${alunno.cognome} `}
        <button onClick={incrementaNumero} className="bottone">
          {contatore}
        </button>
        { inCancellazione ?
            <div className="elimina">Cancellazione in corso...</div>
        :
          <span className="conferma">
          { inConferma ?
                <div><br/><span>Sei sicuro?
                <button onClick={cancellaAlunno} className="bottone">si</button>
                <button onClick={annulla} className="bottone">no</button>
                </span></div>
              :
              <button onClick={richiediConferma} className="bottone">Cancella</button>
          }
          </span>
        }
        <hr />
      </p>
    </div>
  );
}