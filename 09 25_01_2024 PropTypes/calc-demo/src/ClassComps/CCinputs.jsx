import React, { Component } from 'react';

export default class CCinputs extends Component {

  btnCalc = () => {
    if (this.state != null) {
      if (this.state.num1 != null && this.state.num2 != null) {
        this.props.send2Nums(Number(this.state.num1), Number(this.state.num2));
      }
    }
  }

  render() {
    return (
      <div>
        NUM1: <input type="number"
          onChange={(e) => this.setState({ num1: e.target.value })}
          placeholder="enter a num1" /> <br />
        NUM2: <input type="number"
          onChange={(e) => this.setState({ num2: e.target.value })} /> <br />
        <button onClick={this.btnCalc}>Claculate</button>
      </div>
    )
  }
}
