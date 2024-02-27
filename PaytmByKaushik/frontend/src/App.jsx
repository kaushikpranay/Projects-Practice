
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Signup} from "../pages/Signup"
import './App.css'

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
