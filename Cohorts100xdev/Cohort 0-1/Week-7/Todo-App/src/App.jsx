import { useContext, useEffect, useMemo, useState } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector} from "./store/atom/count.jsx";

import './App.css'
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
      
    </div>
  )
}
function Count() {
  console.log("Count Re-renderd")
  return <div>
    <Input/>
    <Buttons/>
    <TodoRenderer/>
    <FindTodo/>
  </div>
}

function Input(){
  const [setTitle, setDescription] = useState("")
  return <div className="input-area">
    <h2>Todo-App⚛️</h2>
    <input  placeholder="Title" type="text" onChange={(e)=>{
      setInputValue(e.target.value)
    }} />
    <textarea placeholder="Description" type="text" onChange={(e)=>{
      setInputValue(e.target.value)
    }}/>
  </div>
}


function TodoRenderer() {
  useEffect(()=>{

  },[])
  // const count = useRecoilValue(countAtom)

  // return <div>Count: {count}</div>
}



function Buttons() {
  console.log("Button")
  // const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => { setCount(count => count + 1) }}> ➕ </button>
  </div>
}


function FindTodo(){
  return <div>
    <h4>Find-Todos 👇🏼</h4>
    <input autoFocus placeholder="Keyword                          🔍" type="text" onChange={(e)=>{
      setInputValue(e.target.value)
    }} />
  </div>
} 

export default App


