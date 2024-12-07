import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Test from "./components/Test.jsx";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Test/>
          <Footer/>
      </div>
  )
}

export default App
