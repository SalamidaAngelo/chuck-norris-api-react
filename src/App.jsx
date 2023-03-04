import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)
 const[joke, setjoke]=useState(null)
  return (
    <div className="App">
      <h1></h1>
    <Title>ciao</Title>
    <h1>Benvenuto nel sito di chuck norris</h1>
    <div className="card">
     <button onClick={( )=> setCount((count)=>count +1)}>
       count is{count}
     </button>
     <Button text="carica il joke"></Button>
     <Button text="copia"></Button>
    </div>
    </div>
  )
}

export default App
