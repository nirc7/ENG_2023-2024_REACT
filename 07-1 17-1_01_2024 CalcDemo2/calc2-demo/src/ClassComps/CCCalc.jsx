import { Component } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default class CCCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnAdd = () => {
    this.setState({ res: this.state.num1 + this.state.num2 });
  }

  chgNum1 = (e) => {
    this.setState({ num1: Number(e.target.value) });
  }

  chgNum2 = (e) => {
    this.setState({ num2: Number(e.target.value) });
  }

  render() {
    console.log(this.state.res);
    return (
      <>
        <Stack direction="column" spacing={2}>
          name={this.props.name} <br /> 
          <Stack direction="row" spacing={3}>
            <span> Num1:</span> <input type="text" onChange={this.chgNum1}
              placeholder="enter..." />
          </Stack>
          <Stack direction="row" spacing={3}>
            <span> Num2:</span> <input type="number" onChange={this.chgNum2}
              placeholder="enter..." />
          </Stack>
          <IconButton aria-label="plus" color="success" onClick={this.btnAdd} >
            <AddCircleOutlineIcon />
          </IconButton>
          {this.state.res && "=" + this.state.res}
        </Stack>
      </>
    );
  }
} 
