import React from 'react';

import Button from '@mui/material/Button';
import PersonRemove from '@mui/icons-material/PersonRemove';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FCStudentsList(props) {

  let studentsListStr = props.students.map(stu =>

    <ListItem
      key={stu.id}
      secondaryAction={
        <IconButton aria-label="delete" color="error">
          <PersonRemove />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°`}
            src={`avatar1.jpg`}
          />
        </ListItemAvatar>
        <ListItemText primary={`Line item `} />
      </ListItemButton>
    </ListItem>


  );

  return (
    <div>FCPersonsList
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {studentsListStr}
      </List>
    </div>
  )
}
