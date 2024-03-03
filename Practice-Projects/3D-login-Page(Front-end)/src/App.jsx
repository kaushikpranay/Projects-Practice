import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <div class="container">
        <div class="video-background">
          <video autoPlay muted loop playsinline>
            <source src="img/anime.webm" type="video/webm" />
          </video>
        </div>
        <div class="forms-wrapper">
        <form class="signin-form">
          <a href=".signup-form" class="signup-btn">Sign Up</a>
          <h2>Sign In</h2>
          <div class="inputs-wrapper">
            <input type="text" placeholder="Your Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Sign In" />
          </div>
        </form>
        <form class="signup-form">
          <a href="#" class="signin-btn">Sign In</a>
          <h2>Sign Up</h2>
          <div class="inputs-wrapper">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
      </div>
      <script src='script.js'></script>

    </div>
  )
}

export default App
