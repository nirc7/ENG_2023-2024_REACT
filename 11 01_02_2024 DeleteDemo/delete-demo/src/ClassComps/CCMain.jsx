import { Newspaper } from '@mui/icons-material';
import React, { Component } from 'react'
import FCInputs from '../FuncComps/FCInputs';
import FCStudentsList from '../FuncComps/FCStudentsList';

const studentsInit = [
  { id: 1, name: 'avi', grade: 100 },
  { id: 2, name: 'benny', grade: 99 }
];

export default class CCMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: studentsInit,
      counter: studentsInit.length
    };
  }

  getStudent = (stu) => {
    let newCounter = this.state.counter + 1;
    stu.id = newCounter;
    let newStudents = [...this.state.students, stu];
    console.log(newStudents);

    this.setState({
      students: newStudents,
      counter: newCounter
    });
  }

  getStudent2Del = (id2Del) => {
    console.log(id2Del);
    let newStudents = this.state.students.filter(stu => stu.id !== id2Del);
    this.setState({ students: newStudents });
  }


  render() {
    return (
      <div>
        <FCInputs sendStudent={this.getStudent} /> <br />
        <FCStudentsList students={this.state.students} sendStu2Del={this.getStudent2Del} />
      </div>
    )
  }
}
