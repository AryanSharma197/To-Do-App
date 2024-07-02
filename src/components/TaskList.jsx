import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';
import { List, ListItem, ListItemText, IconButton, Checkbox, Box } from '@mui/material';
import { Delete } from '@mui/icons-material';

// TaskList component displays the list of tasks and handles task actions.
const TaskList = () => {
    const tasks = useSelector(state => state.tasks); // Select tasks from Redux store
    const dispatch = useDispatch(); // useDispatch hook to dispatch actions

    return (
        <List>
            {tasks.map(task => (
                <ListItem key={task.id} secondaryAction={
                    <Box display="flex" alignItems="center">
                        <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTask(task.id))}>
                            <Delete />
                        </IconButton>
                    </Box>
                }>
                    <Checkbox
                        checked={task.completed}
                        onClick={() => dispatch(toggleTask(task.id))}
                    />
                    <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;
