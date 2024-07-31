import { useState } from 'react'
import { CountContext } from './context'
import './App.css'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CountContext.Provider value={{count,setCount}} >
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}


function Count({ count }) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer({ count }) {
  count = useContext(CountContext)
  return <div>Count: {count}</div>
}

function Buttons({ count, setCount }) {
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={() => { setCount(count - 1) }}> ➖ </button>
    <button onClick={() => { setCount(count + 1) }}> ➕ </button>
  </div>
}

export default App
