import { useState } from "react"

function App() {
  const [title, setTitle] = useState("My name is");

  function Random(){
    setTitle("my name is "+ Math.random());
  }

  return (
    <>
      <div>
      <button onClick={Random}>Update the title.....\</button>
        <Header title={title}></Header>
        <Header title="Har2"></Header>
        
      </div>
    </>
  )
}
function Header({title}){
  return <div>
    {title}
  </div>
}


export default App
