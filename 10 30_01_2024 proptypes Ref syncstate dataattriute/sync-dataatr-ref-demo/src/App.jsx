import './App.css'
import CCDemo from './Class Comps/CCDemo'
import CCStudent from './Class Comps/CCStudent'
import FCDemo from './FComps/FCDemo'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <FCDemo />
        <CCStudent name="avi" grade={100} /> <br />
        <CCDemo /> <br />

      </div>
    </>
  )
}

export default App
