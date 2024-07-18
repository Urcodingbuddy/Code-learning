import './App.css'
import { useState } from 'react'
function App() {
  const [todos, setTodos] = useState([{
    title: "Go to Gym ",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA ",
    description: "Study DSA from 9-10",
    completed: true
  },
  {
    title: "Sleep 6H",
    description: "sleep 11.30 - 7.10",
    completed: false
  }]);

  function addtodo(){
    setTodos([...todos,{
      title: "New Todo",
      description: "Add new todo",
      completed: false
    }])
  }

  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo> */}
      {/* <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
      <button onClick={addtodo}>Add a random todo</button>
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <Custombutton count={count} setCount={setCount} ></Custombutton>
//       <Custombutton count={count+1} setCount={setCount} ></Custombutton>
//       <Custombutton count={count+100} setCount={setCount} ></Custombutton>
//       <Custombutton count={count*100} setCount={setCount} ></Custombutton>
//     </div>
//   )
// }
// function Custombutton(props){
//   function onlclcikhand(){
//     props.setCount(props.count+1);
//   }
//   return <button onClick={onlclcikhand} >
//     Counter {props.count}
//   </button>
// }