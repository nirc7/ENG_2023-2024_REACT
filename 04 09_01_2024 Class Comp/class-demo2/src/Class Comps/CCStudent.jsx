import { Component } from "react";

export default class CCStudent extends Component {
  constructor(props) {
    super(props);

    //let num = 7; //local
    this.number = 8;

    this.state = {
      num: 17,
      age: 48,
    };
  }

  btnLearn = () => {
    //this.state.num +=18; //ERROR!
    //opt1 - not relATION BWETWEEN THE NEXT STATE AND THE PERVIOUS STATE!
    //this.setState({ num: 18, age:50 });
    //opt2 - when there is a relation between the next state and the previous one!
    this.setState((prevS) => ({
      num: prevS.num + 1,
      age: prevS.age + 2
    }));
  }

  chgTxt = (e) => {
    console.log(e.target.value);
  }

  render() {

    console.log('render()');

    return (
      <div style={{
        borderRadius: 15,
        border: 'solid yellow 2px', margin: 20,
        padding: 15
      }}>
        CCStudent <br />
        id={this.props.id} <br />
        name = {this.props.name} <br />
        grade={this.props.grade} <br />
        <button className="btn btn-danger" onClick={this.btnLearn}>Learn</button> <br />
        number= {this.number} <br />
        state.num = {this.state.num} <br />
        age = {this.state.age} <br />
        <input type="text"
          onChange={this.chgTxt}
          className="form-control form-control-sm" 
          placeholder="enter a num" />
      </div>
    );
  }
}