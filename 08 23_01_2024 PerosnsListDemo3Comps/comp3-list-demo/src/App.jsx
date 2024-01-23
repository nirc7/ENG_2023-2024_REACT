import { Component } from 'react';

import './App.css'
import FCInputs from './FuncComps/FCInputs'
import FCPersonsList from './FuncComps/FCPersonsList';
//import Avi, { Stam, Stam2 } from './FuncComps/FCPersonsList'
//const Benyy = Stam;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ id: 1, name: 'avi' }]
    };
  }

  getPerson = (person) => {
    console.log(person);
    let newPersons = [...this.state.persons, person];
    console.log(newPersons);
    this.setState({ persons: newPersons });
  }

  render() {
    return (
      <>
        <h1>Vite + React</h1>
        <div className="card">
          <FCInputs sendPerson={this.getPerson} />
          <FCPersonsList persons={this.state.persons} />
          {/* <Benyy/>
          <Stam2/> */}
        </div>
      </>
    )
  }
}

export default App
