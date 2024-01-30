import  { Component } from 'react'

export default class CCDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "insert your name"
    };
  }

  onTextChanged = (event) => {
    this.setState({ userName: event.target.value.toUpperCase() });
  }

  render() {
    return (
      <div>
        connected to state input WO onchange
        <input type="text" name="userName" value={this.state.userName} /><br />
        connected to state input With onchange
        <input type="text" name="userName" placeholder='insert your stam...'
          onChange={this.onTextChanged} />
      </div>
    )
  }
}
