import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(0)
var a = 1;


  return (
    <>
       <button onClick={()=>{
        setcounter(counter+1)
       }}>counter: {counter}</button>
    </>
  )
}

export default App
