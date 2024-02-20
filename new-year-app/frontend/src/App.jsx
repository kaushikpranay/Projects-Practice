import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './CreateTodo'
import { Todo } from './Todos'

function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost3002/todos")

  return (
    <>
      <div>
        <CreateTodo />
        <Todo/>
      </div>
    </>
  )
}

export default App
