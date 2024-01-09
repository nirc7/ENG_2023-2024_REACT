import logo from './logo.svg';
import './App.css';
import FCStudent from './Functional Comps/FCStudent';
import CCStudent from './Class Comps/CCStudent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCStudent id={1} name="charlie" grade={90}  /> <br /> 
        <CCStudent id={2} name="dora" grade={97}/> <br />    
        <FCStudent id="1" name="avi" grade={100}/>
        <FCStudent id="1" name={"benny"} grade={99}/>
      </header>
    </div>
  );
}

export default App;
