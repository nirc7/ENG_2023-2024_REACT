import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCCalc from './ClassComps/CCCalc'

function App(){return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Calc Demo</h1>
      <div className="card">
        <CCCalc />
      </div>
    </>
  )
}

export default App
