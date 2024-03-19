import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import UseStateExample from './components/UseStateExample'
// import { useState } from 'react'
import UseEffectExample from './components/UseEffectExample'

function App() {
  // const [selected, setSelected] = useState(null)

  return (
    <div className="App">
      {/* <UseStateExample selected={selected} setSelected={setSelected} /> */}
      {/* in caso di elevazione di stato, è sufficiente fornire come prop al componente figlio la "setter" function */}
      {/* il componente figlio la troverà tra le props e potrà direttamente invocarla per cambiare lo stato del padre */}
      <UseEffectExample />
    </div>
  )
}

export default App
