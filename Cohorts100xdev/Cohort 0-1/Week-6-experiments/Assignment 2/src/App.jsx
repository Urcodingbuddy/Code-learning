

/*

import axios  from 'axios'
import './App.css';
import { useEffect, useState } from "react";
function App() {
 return <div>
  <Todo id={1}/>
 </div>
}
function Todo({id}){
  const [todo, setTodo] = useState([])
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=1`)
  })
    return(
      <div style={{margin: '70px'}}>
        <h1>
          {todo.title}
        </h1>
        <h4>
          {todo.description}
        </h4>
      </div>
    )
}
export default App

*/ 