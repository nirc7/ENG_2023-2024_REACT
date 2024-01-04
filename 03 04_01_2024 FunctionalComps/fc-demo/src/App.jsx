import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EHeader from './Elements/EHeader';
import FCCar from './Functional Comps/FCCar';
import CCStudent from './Class Comps/CCStudent';

function App() {

  return (
    <div>
      {EHeader}
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CCStudent />
        <FCCar id={7} color="red" size={3000} />
        <FCCar id={8} color="red"  />
        <FCCar id={17} color="green" />
      </div>
    </div>
  )
}

export default App
