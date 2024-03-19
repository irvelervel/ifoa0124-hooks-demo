import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

// Gli hooks in React sono dei costrutti che permettono di utilizzare nei componenti a funzione
// i "superpoteri" che fino ad adesso potevamo scrivere solo nei componenti a classe: state + metodi di lifecycle
// In questo componente vediamo come rimpiazzare i metodi componentDidMount e componentDidUpdate con l'hook useEffect()

// 2 REGOLE DEGLI HOOKS
// 1) i React Hooks si possono utilizzare SOLAMENTE nei COMPONENTI A FUNZIONE
// 2) è necessario utilizzare i React Hooks in cima al componente, prima del "return" e fuori da qualsivoglia
// ciclo, funzione, if/else etc. (gli hooks devono SEMPRE venire invocati nello stesso ordine)

const UseEffectExample = function () {
  const [counter, setCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect è un rimpiazzo per i due metodi di lifecycle che conosciamo: componentDidMount e componentDidUpdate
  useEffect(() => {
    // qui dentro ci mettiamo il nostro contenuto del componentDidMount o componentDidUpdate
    console.log('Sono come componentDidMount!')
  }, [])
  // dentro il secondo parametro ci dovete mettere TUTTE le variabili di cui volete rimanere "in ascolto"
  // ogni volta che una di queste variabili cambierà valore, la callback verrà RI-ESEGUITA.

  useEffect(() => {
    console.log(
      'questa è una callback che viene re-invocata AD OGNI CAMBIO DI STATE O PROPS'
    )
    // poco utile! simile ad un componentDidUpdate ma senza if dentro :(
    // se qua settate uno stato --> ciclo infinito!
  })

  useEffect(() => {
    console.log(
      'questa è una callback che viene invocata solo quando cambia counter'
    )
  }, [counter])

  return (
    <div>
      <h2>Dimostriamo l'hook useEffect()</h2>
      <Button onClick={() => setCounter(counter + 1)}>
        INCREMENTA COUNTER
      </Button>
      <Button onClick={() => setIsLoading(!isLoading)}>TOGGLA ISLOADING</Button>
    </div>
  )
}

export default UseEffectExample
