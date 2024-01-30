import './App.css'
import CCDemo from './Class Comps/CCDemo'
import CCStudent from './Class Comps/CCStudent'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
      <CCStudent name="avi" grade={"100"} /> <br />
      <CCDemo /> <br />
        
      </div>
    </>
  )
}

export default App
