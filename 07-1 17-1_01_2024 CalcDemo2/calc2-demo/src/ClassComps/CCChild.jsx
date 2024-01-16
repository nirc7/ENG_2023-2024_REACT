import { Component } from "react";


export default class CCChild extends Component {
  constructor(props) {
    super(props);

  }

  btnSend2Parent = () => {
    this.props.sendData(7);
  }

  render() {
    return (
      <>
        id={this.props.id} <br />
        <button onClick={this.btnSend2Parent}>send2parent</button>
      </>
    );
  }
}