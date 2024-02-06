import React from 'react';

import List from '@mui/material/List';

import FCStudentData from './FCStudentData';
//const logo = require("../assets/avatar1.jpg");

export default function FCStudentsList(props) {

  // const getIdFromSD = (id2Del) => {
  //   props.sendStu2Del(id2Del);
  // }

  let studentsListStr = props.students.map(stu =>
    <FCStudentData key={stu.id} student={stu} sendStu2Del={props.sendStu2Del} />);

  return (
    <div>FCPersonsList
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {studentsListStr}
      </List>
    </div>
  )
}
