import { Component } from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Button from 'react-bootstrap/Button';

export default class CCCalc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      sum: null
    };
  }

  chgNum1 = (e) => {
    this.setState({num1:  Number(e.target.value)});
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">num1</InputGroup.Text>
          <Form.Control
            placeholder="enter a num1"
            aria-label="num1"
            aria-describedby="basic-addon1"
            onChange={this.chgNum1}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">num2</InputGroup.Text>
          <Form.Control
            placeholder="enter a num2"
            aria-label="num2"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg></Button> <br />
        = { }
      </div>
    );
  }
}