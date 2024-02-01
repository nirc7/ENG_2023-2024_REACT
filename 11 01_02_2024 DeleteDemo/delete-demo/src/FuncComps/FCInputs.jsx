import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PersonAdd from '@mui/icons-material/PersonAdd';


export default function FCInputs(props) {

  let name;
  let grade;

  const chgName = (e) => {
    name = e.target.value;
  }

  const chgGrade = (e) => {
    grade = e.target.value;
  }

  const btnAddStudent = () => {
    let student = { name, grade };
    console.log(student);
    props.sendStudent(student);
  }

  return (
    <div>
      <TextField id="standard-basic" label="Name"
        color='secondary' margin="normal" variant="standard" onChange={chgName} /> <br />
      <TextField id="standard-basic" label="Grade"
        type="number" color='success' margin="normal"
        variant="standard" onChange={chgGrade} /> <br />
      <Button variant="outlined" onClick={btnAddStudent}
        color='warning' style={{ margin: 20 }} startIcon={<PersonAdd />} >
        Add Student
      </Button>
    </div >
  )
}
