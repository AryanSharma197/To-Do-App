import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button, Box } from '@mui/material';

// TaskInput component allows the user to input and add a new task.
const TaskInput = () => {
    const [task, setTask] = useState(''); // State to hold the task input
    const dispatch = useDispatch(); // useDispatch hook to dispatch actions

    // Function to handle adding a new task
    const handleAddTask = () => {
        if (task.trim() !== '') { // Check if task is not empty
            dispatch(addTask({ id: Date.now(), text: task, completed: false })); // Dispatch addTask action
            setTask(''); // Reset the task input
        }
    };

    return (
        <Box display="flex" alignItems="center" mb={2}>
            <TextField
                label="New Task"
                value={task}
                onChange={(e) => setTask(e.target.value)} // Update task state on input change
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()} // Add task on Enter key press
                fullWidth
            />
            <Button onClick={handleAddTask} variant="contained" color="primary" sx={{ ml: 2 }}>
                Add Task
            </Button>
        </Box>
    );
};

export default TaskInput;
