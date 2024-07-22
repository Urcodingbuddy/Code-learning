import './App.css';
function App() {
  return <CardWrapper innerComponent={<TextComponent/>}/>
}
function CardWrapper({innerComponent}) {
  return <div style={{ border: "2px solid white" }}>
  {innerComponent}
  </div>
}

function TextComponent() {
  return <div>
    hello world
    </div>
}
export default App