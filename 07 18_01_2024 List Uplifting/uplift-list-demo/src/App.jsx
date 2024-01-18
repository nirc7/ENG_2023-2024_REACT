
import viteLogo from '/vite.svg'
import './App.css'
import CCPersonsList from './ClassComps/CCPersonsList'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Persons List </h1>
      <div className="card">
        <CCPersonsList />
      </div>

    </>
  )
}

export default App
