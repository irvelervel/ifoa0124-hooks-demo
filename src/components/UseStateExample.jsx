import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

// Gli hooks in React sono dei costrutti che permettono di utilizzare nei componenti a funzione
// i "superpoteri" che fino ad adesso potevamo scrivere solo nei componenti a classe: state + metodi di lifecycle
// In questo componente vediamo come rimpiazzare un oggetto di stato con l'hook useState()

// 2 REGOLE DEGLI HOOKS
// 1) i React Hooks si possono utilizzare SOLAMENTE nei COMPONENTI A FUNZIONE
// 2) è necessario utilizzare i React Hooks in cima al componente, prima del "return" e fuori da qualsivoglia
// ciclo, funzione, if/else etc. (gli hooks devono SEMPRE venire invocati nello stesso ordine)

const UseStateExample = function (props) {
  // questo è il componente a funzione UseStateExample
  // normalmente, voi non potreste avere uno STATO qui
  // però, con useState() è possibile creare una "variabile" di stato anche qui!

  // useState() ritorna un array con due elementi
  // il primo elemento dell'array è la variabile di stato
  // il secondo elemento dell'array è la funzione in grado di cambiarne il valore (praticamente un this.setState()
  // che però funziona SOLAMENTE per la variabile con cui nasce)
  // in un componente a classe sarebbe questo
  //   state = {
  //       counter: 0
  //       numberOfPeople: '1'
  //       isLoading: true
  //   }
  //

  const [counter, setCounter] = useState(0) // lo 0 tra parentesi è il valore iniziale di counter
  const [isLoading, setIsLoading] = useState(true) // il true tra parentesi è il valore iniziale di isLoading

  return (
    <div>
      <h2>Dimostriamo l'hook useState()</h2>
      <p>IL VALORE DEL CONTATORE È {counter}</p>
      <Button
        onClick={() => {
          setCounter(counter + 1)
          // notare come setCounter ad es. non faccia una FUSIONE dello stato come faceva setState
          // setCounter richiede immediatamente il nuovo valore
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          props.setSelected('123kjsdhkjdsfh')
        }}
      >
        CAMBIA STATO DEL PADRE
      </Button>
      {isLoading && <Spinner animation="border" />}
      <Button onClick={() => setIsLoading(!isLoading)}>TOGGLE SPINNER</Button>
    </div>
  )
}

export default UseStateExample
