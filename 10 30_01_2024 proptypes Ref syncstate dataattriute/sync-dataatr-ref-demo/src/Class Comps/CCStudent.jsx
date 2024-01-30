import { Component } from 'react';

import PropTypes from 'prop-types';

export default class CCStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

  }

  chgNums = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  btnCounter = () => {
    // this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 });

    let newCounter = this.state.counter + 1;
    console.log(newCounter);
    this.setState({ counter: newCounter, num1: 7 },
      () => {
        console.log('after counter changed ', this.state.counter);
        console.log(this.state.num1);//7
        //insert into db counter
      });

    console.log(this.state.num1);//not 7

    // this.setState((prev) => ({ counter: prev.counter + 1 }));
    // this.setState((prev) => ({ counter: prev.counter + 1 }));
    console.log('btn ', this.state.counter);
  }

  render() {
    console.log('render ', this.state.counter);

    return (
      <div>CCStudent <br />
        name={this.props.name} <br />
        grade={this.props.grade} <br />

        num1: <input type="text" name="num1" onChange={this.chgNums} />
        {this.state.num1 ? this.state.num1 : "..."} <br />
        num2: <input type="text" name="num2" onChange={this.chgNums} />
        {this.state.num2}<br />

        counter={this.state.counter}
        <button onClick={this.btnCounter}>counter++</button>
      </div>
    )
  }
}

CCStudent.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired
};
