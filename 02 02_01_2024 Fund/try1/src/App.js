import logo from './logo.svg';
import './App.css';
import Header from './Elements/EHeader';
import FCStudent from './Functioanl Comps/FCStudent';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Header}
        <img src={logo} className="App-logo" alt="logo" />
        nir chen2
        <FCStudent name="avi" grade={100*2}/>
        <FCStudent name="benny" />
      </header>
    </div>
  );
}

export default App;
