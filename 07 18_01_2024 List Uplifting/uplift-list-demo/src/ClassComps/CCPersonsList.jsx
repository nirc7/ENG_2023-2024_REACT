import React, { Component } from 'react'

export default class CCPersonsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 1, name: 'avi' },
        { id: 2, name: 'benny' }
      ]
    };
  }

  chgId = (e) => {
    this.setState({ id: e.target.value });
  }

  btnAdd = () => {
    //console.log(this.state.id + ", " + this.state.name);
    console.log('before:', this.state.persons);
    let newPersons = [
      ...this.state.persons,
      { id: this.state.id, name: this.state.name }
    ];
    console.log(newPersons);
    this.setState({ persons: newPersons });
    console.log('after ', this.state.persons);
  }

  render() {
    console.log('render ', this.state.persons);


    let personsStr = this.state.persons.map(per=> per.id + ", " + per.name + " <br />");

    return (
      <div>
        id: <input type="text" onChange={this.chgId} /> <br />
        name: <input type="text"
          onChange={(e) => this.setState({ name: e.target.value })} /> <br /> <br />
        <button onClick={this.btnAdd}>Add</button> <br />
        Perons List: <br />
        {personsStr}
      </div>
    )
  }
}


