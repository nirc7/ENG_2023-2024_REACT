
import React from 'react';

import PersonRemove from '@mui/icons-material/PersonRemove';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

export default function FCStudentData(props) {
  return (
    <div>
      <ListItem
        key={props.student.id}
        secondaryAction={
          <IconButton aria-label="delete" color="error"
            onClick={() => props.sendStu2Del(props.student.id)}>
            <PersonRemove />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°`}
              src={"cp.jpg"}
            />
          </ListItemAvatar>
          <ListItemText primary={`${props.student.id} -- ${props.student.name} -- ${props.student.grade} `} />
        </ListItemButton>
      </ListItem>

    </div>
  )
}
