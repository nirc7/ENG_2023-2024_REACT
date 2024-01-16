import { Component } from "react";
import CCChild from "./CCChild";


export default class CCParent extends Component {
  constructor(props) {
    super(props);
    this.numbers = [1, 2, 3, 4, 5];
    this.listNumbers = this.numbers.map((number) =>
      <a href="#" className="list-group-item" key={number}>{number * 2}</a>
    );
  }

  getData = (data) => {
    console.log('in parent ', data);
  }

  componentDidMount = () => {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div>
        <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
        <div className="list-group" style={{ width: "50%" }}>{this.listNumbers}</div>

        <CCChild sendData={this.getData} id="1" />
      </div>
    );
  }
}