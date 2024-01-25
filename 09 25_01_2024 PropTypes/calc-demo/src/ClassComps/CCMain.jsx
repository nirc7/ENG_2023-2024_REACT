
import React, { Component } from 'react';
import FCResults from '../FuncComps/FCResults';
import CCinputs from './CCinputs';

export default class CCMain extends Component {

  get2Nums = (num1, num2) => {
    this.setState({
      values: [
        num1 + num2,
        num1 - num2,
        num1 * num2,
        num1 / num2,
      ]
    });
  }

  render() {
    return (
      <div>
        <CCinputs send2Nums={this.get2Nums} />
        <FCResults values={this.state ? this.state.values :[]}/>
      </div>
    )
  }
}
