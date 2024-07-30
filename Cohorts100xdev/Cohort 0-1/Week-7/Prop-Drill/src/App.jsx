import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}


function Count({ count }) {
  return <div>
    <CounRenderer count={count}/>
  </div>
}

function CounRenderer({count}){
  return <div>Count: {count}</div>
}

function Buttons({count, setCount}) {
  return <div>
    <button onClick={() => {setCount(count-1)}}> ➖ </button>
    <button onClick={() => {setCount(count+1)}}> ➕ </button>
  </div>
}

export default App
